// types
import { ReactNode } from "react";

// utils
import { cn } from "@/lib/utils/cn";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto flex flex-col p-4 lg:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
