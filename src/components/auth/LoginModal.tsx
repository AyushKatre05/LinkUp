import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription } from "@radix-ui/react-dialog";

const handleGoogleLogin = async () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/",
  });
};

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-2xl p-8 rounded-lg shadow-xl bg-white">
        <DialogHeader className="mb-6 text-center">
          <DialogTitle className="text-4xl font-extrabold text-gray-900">
            Welcome to LinkUp
          </DialogTitle>
          <DialogDescription className="mt-4 text-lg text-gray-700">
            Your ultimate tool for seamless and secure conversations. Connect with others effortlessly and share ideas instantly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              Why Choose LinkUp?
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>🔒 **Secure and encrypted conversations.**</li>
              <li>⚡ **Instant connections with unique chat links.**</li>
              <li>🌍 **Connect with anyone, anywhere.**</li>
              <li>💬 **No account required for guests.**</li>
            </ul>
          </div>
          <div className="flex-1">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center space-x-2"
              onClick={handleGoogleLogin}
            >
              <Image
                src="/google.png"
                className="mr-2"
                width={30}
                height={30}
                alt="Google logo"
              />
              <span>Continue with Google</span>
            </Button>
            <p className="mt-4 text-sm text-gray-500 text-center">
              By signing in, you agree to our{" "}
              <a href="/" className="underline text-indigo-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/" className="underline text-indigo-600">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
