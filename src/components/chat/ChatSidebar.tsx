import React from "react";

export default function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <div className="hidden md:block h-screen overflow-y-auto w-1/5 bg-white dark:bg-black px-4 py-6">
      <h1 className="text-2xl font-extrabold text-black dark:text-white mb-4">
        Users
      </h1>
      <div className="bg-white dark:bg-black px-4 py-6">
      {users.length > 0 ? (
        users.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 mt-4 shadow-sm dark:shadow-none"
          >
            <p className="font-semibold text-black dark:text-white">
              {item.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Joined: <span>{new Date(item.created_at).toDateString()}</span>
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No users found.</p>
      )}
      </div>
    </div>
  );
}
