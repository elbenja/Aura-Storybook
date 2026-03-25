import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

interface ReportBubbleProps extends React.ComponentProps<"div"> {
  /** HugeIcons icon component */
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
  /** Framework acronym (e.g. "GRESB") */
  name: string
  /** Description subtitle (e.g. "Real estate ESG") */
  subtitle: string
}

function ReportBubble({
  className,
  icon,
  name,
  subtitle,
  ...props
}: ReportBubbleProps) {
  return (
    <div
      data-slot="report-bubble"
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted">
        <HugeiconsIcon icon={icon} size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold leading-tight">{name}</span>
        <span className="text-xs text-muted-foreground leading-snug">
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export { ReportBubble }
export type { ReportBubbleProps }
