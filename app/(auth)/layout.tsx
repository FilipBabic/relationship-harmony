import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
      <section
        className="light-border min-w-full rounded-[10px] border
       px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 sm:py-2"
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Image
            src="/images/logo-1.png"
            alt="Relationship Harmony Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="space-y-2.5">
            <h1 className="text-2xl font-bold text-dark-silver">Start your relationship journey</h1>
            <p className="paragraph-regular text-dark-silver">
              Create an account to save your test results
            </p>
          </div>
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
