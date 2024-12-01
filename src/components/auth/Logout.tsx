"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

const LogoutModal = dynamic(() => import("../auth/LogoutModal"));

export default function LogoutButton() {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      {logoutOpen && <LogoutModal open={logoutOpen} setOpen={setLogoutOpen} />}
      <Button
        onClick={() => setLogoutOpen(true)}
        className="text-sm text-white dark:text-black"
      >
        Logout
      </Button>
    </>
  );
}
