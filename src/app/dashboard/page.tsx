import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashNav/>
      <div className="text-center py-12 bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to LinkUp!</h1>
        <p className="text-xl mb-6">
          Connect with people through secure, instant chat groups. Start a conversation, share ideas, and collaborate seamlessly.
        </p>
        <div className="text-center mb-8">
          <CreateChat user={session?.user!} />
        </div>
        <p className="text-lg text-white/80">
          Already have a group? Explore your existing chat groups below!
        </p>
      </div>
      <div className="container px-4 py-12 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Chat Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 ? (
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No chat groups available. Start a new conversation now!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
