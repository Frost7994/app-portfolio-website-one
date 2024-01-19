"use client";

// state
import * as React from "react";

// components
import { Slot } from "@radix-ui/react-slot";

// utils
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-tertiary-900 text-tertiary-50 hover:bg-tertiary-900/90 dark:bg-tertiary-50 dark:text-tertiary-900 dark:hover:bg-tertiary-50/90",
        destructive:
          "bg-red-500 text-tertiary-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-tertiary-50 dark:hover:bg-red-900/90",
        outline:
          "border border-tertiary-200 bg-white hover:bg-tertiary-100 hover:text-tertiary-900 dark:border-tertiary-800 dark:bg-tertiary-950 dark:hover:bg-tertiary-800 dark:hover:text-tertiary-50",
        secondary:
          "bg-tertiary-100 text-tertiary-900 hover:bg-tertiary-100/80 dark:bg-tertiary-800 dark:text-tertiary-50 dark:hover:bg-tertiary-800/80",
        ghost:
          "hover:bg-tertiary-100 hover:text-tertiary-900 dark:hover:bg-tertiary-800 dark:hover:text-tertiary-50",
        link: "text-tertiary-900 underline-offset-4 hover:underline dark:text-tertiary-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
