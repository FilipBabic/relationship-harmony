"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.DASHBOARD,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sing In Failed!",
        description: error instanceof Error ? error.message : "An error occured during sign in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 text-center">
      <Button
        className="min-h-12 max-w-xs flex-1 items-center rounded bg-dark-silver px-4 py-3.5 text-white hover:bg-[#5A6A7A]"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
