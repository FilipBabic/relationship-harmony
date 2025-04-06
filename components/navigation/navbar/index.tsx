import { LogIn, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Navbar = () => {
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
        <Button asChild className="bg-warm-pink hover:bg-[#5A6A7A]">
          <Link href="/sign-in">
            <LogIn />
            <span className="hidden md:block">Login</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
