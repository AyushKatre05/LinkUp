"use client";
import React from "react";
import Link from "next/link";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "../ui/button";
import LoginModal from "../auth/LoginModal";
import { ModeToggle } from "./modeToggle";

export default function Navbar({ user }: { user: CustomUser | null }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-200 dark:bg-black shadow-sm">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
        LinkUp
      </h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard">
            <Button className="bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600">
              Dashboard
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
