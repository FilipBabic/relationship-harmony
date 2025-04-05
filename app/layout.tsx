import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import { auth } from "@/auth";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/toaster";

const poppins = localFont({
  src: "./fonts/PoppinsVF.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
});

const playfair = localFont({
  src: "./fonts/PlayfairDisplayVF.ttf",
  variable: "--font-playfair",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Relationship Harmony - Personality Test for Couples",
  description:
    "Strengthen your relationship with Relationship Harmony! Take personality tests with your partner to receive customized relationship advice based on MBTI, Love Languages, and Big 5 traits. Create an account, track your results, and discover insights tailored for your unique connection.",
  icons: {
    icon: "/images/logo-3.png",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playfair.variable} antialiased`}>
        <SessionProvider session={session}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
