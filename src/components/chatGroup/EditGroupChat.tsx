"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/chatSchema";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function EditGroupChat({
  user,
  group,
  open,
  setOpen,
}: {
  user: CustomUser;
  group: GroupChatType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  useEffect(() => {
    setValue("title", group.title);
    setValue("passcode", group.passcode);
  }, [group]);

  const onSubmit = async (payload: createChatSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`${CHAT_GROUP}/${group.id}`, payload, {
        headers: {
          Authorization: user.token,
        },
      });

      if (data?.message) {
        setOpen(false);
        toast.success(data?.message);
        clearCache("dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <DialogHeader className="text-center mb-4">
          <DialogTitle className="text-lg font-semibold text-black dark:text-white">
            Update Group Chat
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Enter chat title"
              {...register("title")}
              className="border-gray-300 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-500 focus:border-gray-500 dark:focus:border-gray-500"
            />
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
          </div>
          <div>
            <Input
              placeholder="Enter passcode"
              {...register("passcode")}
              className="border-gray-300 dark:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-500 focus:border-gray-500 dark:focus:border-gray-500"
            />
            {errors.passcode && <span className="text-red-500 text-sm">{errors.passcode.message}</span>}
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-yellow-500 text-white hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500"
              disabled={loading}
            >
              {loading ? "Processing..." : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
