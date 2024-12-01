"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createChatSchema, createChatSchemaType } from "@/validations/chatSchema";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function CreateChat({ user }: { user: CustomUser }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async (data: createChatSchemaType) => {
    try {
      setLoading(true);
      const { data: response } = await axios.post(CHAT_GROUP, data, {
        headers: { Authorization: user.token },
      });

      if (response?.message) {
        clearCache("dashboard");
        setOpen(false);
        toast.success(response?.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const errorMessage = error instanceof AxiosError ? error.message : "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className=" dark:text-black transition-colors duration-200">
          Create Your Community
        </Button>
      </DialogTrigger>
      <DialogContent className="p-8 bg-white dark:bg-black rounded-lg shadow-lg max-w-md">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white text-center font-semibold text-xl">
            Create Chat
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            placeholder="Chat title"
            {...register("title")}
            className="w-full bg-gray-100 dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 text-black dark:text-white focus:ring-black dark:focus:ring-white rounded-md"
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}

          <Input
            placeholder="Passcode"
            type="password"
            {...register("passcode")}
            className="w-full bg-gray-100 dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 text-black dark:text-white focus:ring-black dark:focus:ring-white rounded-md"
          />
          {errors.passcode && <span className="text-red-500 text-sm">{errors.passcode.message}</span>}

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Processing..." : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
