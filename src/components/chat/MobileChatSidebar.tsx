"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MobileChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuIcon className="text-black dark:text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white dark:bg-black text-black dark:text-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Users</SheetTitle>
        </SheetHeader>
        <div>
          {users.length > 0 ? (
            users.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-md p-3 mt-2"
              >
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">
                  Joined: <span>{new Date(item.created_at).toDateString()}</span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No users available
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
