import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";
import Link from "next/link";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center ">
        <Link href={`/chat/${group.id}`}><CardTitle className="text-2xl">{group.title}</CardTitle></Link>
        <GroupChatCardMenu user={user} group={group} />
      </CardHeader>
      <CardContent>
        <p>
          Passcode :-<strong>{group.passcode}</strong>
        </p>
        <p>Created At :-{new Date(group.created_at).toDateString()}</p>
      </CardContent>
    </Card>
  );
}