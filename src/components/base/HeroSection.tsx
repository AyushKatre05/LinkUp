import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gray-100 dark:bg-black text-gray-800 dark:text-neutral-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Your Gateway to Instant Connections
      </h1>
      <p className="text-md md:text-xl mb-8 font-light">
        Transform how you connect. Create secure, instant communities and bridge the gap between ideas and action.
      </p>
      <p className="mt-8 text-lg md:text-xl font-medium text-gray-900 dark:text-white">
        Ready to start? Connect now.
      </p>
    </section>
  );
}
