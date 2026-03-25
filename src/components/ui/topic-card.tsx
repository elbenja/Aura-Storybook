import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

interface TopicCardProps extends React.ComponentProps<"button"> {
  /** HugeIcons icon component */
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
  /** Card label text */
  label: string
}

function TopicCard({ className, icon, label, ...props }: TopicCardProps) {
  return (
    <button
      data-slot="topic-card"
      className={cn(
        "flex flex-col gap-3 items-start rounded-xl border bg-card p-4 text-left text-card-foreground transition-colors hover:bg-accent cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        <HugeiconsIcon icon={icon} size={20} className="text-muted-foreground" />
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={16}
          className="text-muted-foreground -rotate-90"
        />
      </div>
      <span className="text-sm font-medium leading-tight">{label}</span>
    </button>
  )
}

export { TopicCard }
export type { TopicCardProps }
