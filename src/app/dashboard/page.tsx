import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(session?.user?.token!);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <DashNav />
      <div className="text-center py-12 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to LinkUp!</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Connect with people easily through secure Communities. Start a conversation or explore your existing groups below.
        </p>
        <CreateChat user={session?.user!} />
      </div>
      <div className="container px-4 py-12 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Your Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 ? (
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">
              No Communities available. Create a new one to get started!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
