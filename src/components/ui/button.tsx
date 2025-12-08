import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-airpulse-400 focus-visible:ring-offset-2 focus-visible:ring-offset-airpulse-950 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-airpulse-500 text-zinc-50 shadow-lg shadow-airpulse-500/40 hover:bg-airpulse-400 hover:shadow-airpulse-400/50 hover:scale-105",
        secondary:
          "bg-zinc-900/80 text-zinc-100 border border-zinc-700/60 hover:bg-zinc-800/90 hover:border-zinc-600/80 hover:scale-105",
        ghost:
          "bg-transparent text-zinc-300 hover:bg-zinc-800/60 border border-transparent",
        outline:
          "border border-zinc-700/60 bg-airpulse-950/40 text-zinc-100 hover:bg-zinc-900/80 hover:border-zinc-600/80",
      },
      size: {
        default: "h-11 px-5 gap-2",
        lg: "h-12 px-6 gap-2 text-base",
        sm: "h-9 px-4 gap-2 text-xs",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

