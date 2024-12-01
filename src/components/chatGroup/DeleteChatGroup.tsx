"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function DeleteChatGroup({
  open,
  setOpen,
  groupId,
  token,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  groupId: string;
  token: string;
}) {
  const [loading, setLoading] = useState(false);

  const deleteChatGroup = async () => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${CHAT_GROUP}/${groupId}`, {
        headers: {
          Authorization: token,
        },
      });

      if (data?.message) {
        clearCache("dashboard");
        toast.success(data?.message);
        setOpen(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-lg font-semibold text-black dark:text-white">
            Confirm Deletion
          </AlertDialogTitle>
        </AlertDialogHeader>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
          This action will permanently delete your chat group and its conversations.
        </p>
        <AlertDialogFooter className="space-x-4">
          <AlertDialogCancel className="bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-md px-4 py-2">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteChatGroup}
            className="bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2"
            disabled={loading}
          >
            {loading ? "Processing..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
