import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

interface Props {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
}

const UserAvatar = ({ id, name, imageUrl, className = "h-32 w-32" }: Props) => {
  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            className="rounded-full object-cover"
            width={36}
            height={36}
            quality={100}
          />
        ) : (
          <AvatarFallback className="border-2 border-dark-silver p-1 font-bold text-dark-silver">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
