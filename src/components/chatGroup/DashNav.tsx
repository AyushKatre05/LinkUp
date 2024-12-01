"use client";
import React from "react";
import LogoutButton from "../auth/Logout";
import { ModeToggle } from "../base/modeToggle";

export default function DashNav() {
  return (
    <nav className="py-4 px-8 flex justify-between items-center bg-white dark:bg-black shadow-md">
      <h1 className="text-2xl font-extrabold text-black dark:text-white">LinkUp</h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <LogoutButton />
      </div>
    </nav>
  );
}
