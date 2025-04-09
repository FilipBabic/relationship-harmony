import { ReactNode } from "react";

import { Card as ShadCard, CardContent } from "@/components/ui/card";

interface CardProps {
  children: ReactNode;
  textColor?: string; // Optional text color
  bgColor?: string; // Optional background color
  className?: string; // Extra classes if needed
}

const CustomCard = ({
  children,
  textColor = "text-black",
  bgColor = "bg-white",
  className = "",
}: CardProps) => {
  return (
    <ShadCard
      className={`${bgColor} ${textColor} mx-1 my-2 max-w-5xl rounded-xl border px-4 py-8
      font-medium shadow-xl  ${className}`}
    >
      <CardContent>{children}</CardContent>
    </ShadCard>
  );
};
export default CustomCard;
