import React from "react";

import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  console.log("SESSION", session);
  return <div>Dashboard</div>;
};

export default Dashboard;
