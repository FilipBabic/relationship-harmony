import { LogIn, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import UserAvatar from "@/components/user-avatar/UserAvatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between gap-5 bg-white p-4 font-bold shadow-md sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/logo-3.png" height={33} width={33} alt="Relationship Harmony Logo" />
        <p className="font-playfair text-2xl font-extrabold text-dark-silver max-sm:hidden">
          Relationship<span className="text-xl font-bold text-warm-pink">harmony</span>
        </p>
      </Link>
      <Link href="/about-tests" className="font-bold text-dark-silver hover:text-warm-pink">
        How it Work&apos;s?
      </Link>

      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button asChild className="bg-dark-silver hover:bg-[#5A6A7A]">
                <Link href="/">
                  <ClipboardCheck />
                  Take test
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>To take test, you need to Sign In to our platform</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {session?.user?.id ? (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            email={session.user.email!}
            imageUrl={session.user?.image}
            className="transition-all duration-300 hover:scale-105"
          />
        ) : (
          <Button asChild className="bg-warm-pink hover:bg-[#e47c94]">
            <Link href="/sign-in">
              <LogIn />
              <span className="hidden md:block">Sign In</span>
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
