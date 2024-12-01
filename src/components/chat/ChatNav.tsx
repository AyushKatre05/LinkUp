import React from "react";
import MobileChatSidebar from "./MobileChatSidebar";
import { ModeToggle } from "../base/modeToggle";

export default function ChatNav({
  chatGroup,
  users,
  user,
}: {
  chatGroup: GroupChatType;
  users: Array<GroupChatUserType> | [];
  user?: GroupChatUserType;
}) {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-2 border-b bg-gray-100 dark:bg-black">
      <div className="flex space-x-4 md:space-x-0 items-center">
        <div className="md:hidden">
          <MobileChatSidebar users={users} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
          {chatGroup.title}
        </h1>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <ModeToggle/>
      <p className="text-black dark:text-neutral-400">{user?.name}</p>
      </div>
    </nav>
  );
}
