/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] border border-transparent",
    "font-medium outline-none transition-[background-color,border-color,color,box-shadow] duration-150",
    "focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "data-[state=on]:shadow-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-transparent text-foreground",
          "hover:bg-secondary hover:text-muted-foreground",
          "data-[state=on]:bg-secondary data-[state=on]:text-foreground",
        ].join(" "),
        outline: [
          "border-border bg-transparent text-foreground shadow-none",
          "hover:bg-secondary hover:text-muted-foreground",
          "data-[state=on]:border-foreground data-[state=on]:bg-secondary data-[state=on]:text-foreground",
        ].join(" "),
      },
      size: {
        sm: "h-10 min-w-10 gap-2 px-3 text-sm leading-5",
        default: "h-11 min-w-11 gap-2 px-3 text-base leading-6",
        lg: "h-12 min-w-12 gap-2 px-5 text-lg leading-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
