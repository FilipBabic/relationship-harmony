import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // any callbacks you need
  },
  pages: {
    error: "/auth/error", // Custom error page
  },
  // This ensures the correct URL is used in production
  url: process.env.NEXTAUTH_URL, // This tells NextAuth to use the correct URL
};

export default nextConfig;
