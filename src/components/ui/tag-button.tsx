import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagButtonVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer select-none whitespace-nowrap",
  {
    variants: {
      selected: {
        false:
          "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        true:
          "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
)

interface TagButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof tagButtonVariants> {
  /** Whether the tag is selected */
  selected?: boolean
}

function TagButton({
  className,
  selected = false,
  children,
  ...props
}: TagButtonProps) {
  return (
    <button
      data-slot="tag-button"
      data-selected={selected}
      className={cn(tagButtonVariants({ selected, className }))}
      {...props}
    >
      {selected && (
        <svg
          className="size-4 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3337 4L6.00033 11.3333L2.66699 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

export { TagButton, tagButtonVariants }
export type { TagButtonProps }
