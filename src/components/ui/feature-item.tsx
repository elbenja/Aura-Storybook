import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

interface FeatureItemProps extends React.ComponentProps<"div"> {
  /** HugeIcons icon component */
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
  /** Bold title text */
  title: string
  /** Description text below the title */
  description: string
  /** Icon size in px */
  iconSize?: number
}

function FeatureItem({
  className,
  icon,
  title,
  description,
  iconSize = 48,
  ...props
}: FeatureItemProps) {
  return (
    <div
      data-slot="feature-item"
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <div className="flex shrink-0 items-center justify-center size-12">
        <HugeiconsIcon icon={icon} size={iconSize} />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <p className="font-semibold">{title}</p>
        <p className="text-foreground">{description}</p>
      </div>
    </div>
  )
}

export { FeatureItem }
export type { FeatureItemProps }
