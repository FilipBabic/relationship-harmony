import React from "react";

import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  console.log("SESSION", session);
  if (!session?.user) {
    return (
      <div className="pt-44 text-center text-xl text-red-500">
        You must be signed in to view this page.
      </div>
    );
  }
  return (
    <div className="mx-auto min-h-screen max-w-5xl space-y-6 px-6 py-24 text-center text-dark-silver sm:px-10 md:px-20">
      <p className="inline-block items-center rounded-md bg-warm-pink px-4 py-1 text-sm text-white">
        Dashboard
      </p>
      <h1 className="text-center text-2xl font-bold text-dark-silver sm:text-4xl">
        Welcome to your Dashboard, Filip Babic {session?.user?.name}!
      </h1>
      <p className="mt-4 text-center text-base text-dark-silver sm:text-lg">
        Here you can manage your tests and profile, link with your partner and view your results.
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
        {/* Card 1: User Profile */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Your Profile</h2>
          <p className="text-gray-600">View and update your account information.</p>
        </div>

        {/* Card 2: Test Assignments */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Test Assignments</h2>
          <p className="text-gray-600">Complete or review your relationship tests.</p>
        </div>

        {/* Card 3: Generate Partner Code */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Generate Partner Code</h2>
          <p className="text-gray-600">Generate a unique code to link with your partner.</p>
        </div>

        {/* Card 4: Invite Your Partner */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Invite Your Partner</h2>
          <p className="text-gray-600">Send an invitation to your partner to join your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
