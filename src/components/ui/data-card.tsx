import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Search01Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

interface DataCardProps extends React.ComponentProps<"div"> {
  /** Card title */
  title: string
  /** Optional stat number */
  stat?: string
  /** Optional stat label */
  statLabel?: string
  /** Optional subtitle text */
  subtitle?: string
  /** Optional background image url */
  backgroundImage?: string
  /** Whether to show search row instead of stat */
  showSearch?: boolean
}

function DataCard({
  className,
  title,
  stat,
  statLabel,
  subtitle,
  backgroundImage,
  showSearch = false,
  ...props
}: DataCardProps) {
  return (
    <div
      data-slot="data-card"
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border bg-card",
        className
      )}
      {...props}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30 pointer-events-none"
        />
      )}
      <div className="relative z-10 flex flex-col gap-3 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <button className="flex size-8 items-center justify-center rounded-full border bg-background/80">
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </button>
        </div>

        {/* Stat */}
        {stat && (
          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold leading-none">{stat}</span>
            {statLabel && (
              <span className="text-sm text-muted-foreground pb-1">
                {statLabel}
              </span>
            )}
          </div>
        )}

        {/* Search */}
        {showSearch && (
          <div className="flex items-center gap-2 rounded-full border bg-background/80 px-3 py-2 text-sm text-muted-foreground">
            <span className="flex-1">Search</span>
            <HugeiconsIcon icon={Search01Icon} size={16} />
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export { DataCard }
export type { DataCardProps }
