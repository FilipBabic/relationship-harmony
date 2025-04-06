import { LogIn, ClipboardCheck, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
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
        <Button asChild className="bg-dark-silver hover:bg-[#5A6A7A]">
          <Link href="/quiz">
            <ClipboardCheck />
            Take test
          </Link>
        </Button>
        {session?.user?.id ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <form
              action={async () => {
                "use server";

                await signOut({ redirectTo: "/" });
              }}
            >
              <Button type="submit" className="base-medium w-fit bg-warm-pink px-4 py-3">
                <LogOut className="size-5  text-white" />
                <span className="text-dark300_light900 max-lg:hidden">Logout</span>
              </Button>
            </form>
            <UserAvatar
              id={session.user.id}
              name={session.user.name!}
              imageUrl={session.user?.image}
            />
          </div>
        ) : (
          <Button asChild className="bg-warm-pink hover:bg-[#5A6A7A]">
            <Link href="/sign-in">
              <LogIn />
              <span className="hidden md:block">Login</span>
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
