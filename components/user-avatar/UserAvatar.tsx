"use client";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

interface Props {
  id: string;
  name: string;
  email: string;
  imageUrl?: string | null;
  className?: string;
}

const UserAvatar = ({ id, name, email, imageUrl, className = "" }: Props) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = async () => {
    toast({
      title: "Logged out",
      description: "You have successfully logged out.",
    });

    await signOut({ redirectTo: "/" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={`${className} cursor-pointer`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          ) : (
            <AvatarFallback
              className="flex size-10 items-center justify-center rounded-full border
             border-dark-silver bg-green-400 font-bold text-white shadow-lg 
             transition-all duration-300 hover:scale-105"
            >
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        <DropdownMenuLabel className="flex flex-row items-center gap-2 pt-4">
          <Avatar className={`${className} cursor-pointer`}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <AvatarFallback
                className="flex size-10 items-center justify-center rounded-full border
             border-dark-silver bg-green-400 font-bold text-white shadow-lg 
             transition-all duration-300 hover:scale-105"
              >
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          {name}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="font-light">{email}</DropdownMenuLabel>
        <DropdownMenuSeparator className="h-px bg-dark-silver" />
        <DropdownMenuItem asChild>
          <Link href={`/profile/${id}`} className="flex items-center gap-2 hover:cursor-pointer">
            <User className="size-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2 hover:cursor-pointer">
            <Settings className="size-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-destructive">
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
