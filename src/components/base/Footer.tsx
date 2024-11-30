import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div>
          <div className="text-lg font-semibold">© 2024 LinkUp. All rights reserved.</div>
          <div className="mt-2 space-x-6">
            <Link href="/" className="hover:text-gray-200">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-gray-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
