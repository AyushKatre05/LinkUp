"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const LogoutModal = dynamic(() => import("../auth/LogoutModal"));

export default function LogoutButton() {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      {logoutOpen && <LogoutModal open={logoutOpen} setOpen={setLogoutOpen} />}
      <button
        onClick={() => setLogoutOpen(true)}
        className="text-sm text-gray-700 hover:text-red-500"
      >
        Logout
      </button>
    </>
  );
}
