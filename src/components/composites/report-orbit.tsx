import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@/components/icons"
import { ReportBubble } from "@/components/ui/report-bubble"
import { cn } from "@/lib/utils"
import type { ReportBubbleProps } from "@/components/ui/report-bubble"

interface ReportOrbitProps extends React.ComponentProps<"div"> {
  /** Array of report items to render */
  reports?: Pick<ReportBubbleProps, "icon" | "name" | "subtitle">[]
}

function ReportOrbit({
  className,
  reports = [],
  ...props
}: ReportOrbitProps) {
  return (
    <div
      data-slot="report-orbit"
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border bg-card",
        className
      )}
      {...props}
    >
      {/* Concentric circle backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-border/30"
            style={{
              width: `${68 + i * 32}px`,
              height: `${68 + i * 32}px`,
            }}
          />
        ))}
      </div>

      {/* Report bubbles laid out */}
      <div className="relative z-10 flex flex-wrap items-start justify-center gap-6 px-8 py-6 pt-10">
        {reports.map((report) => (
          <ReportBubble
            key={report.name}
            icon={report.icon}
            name={report.name}
            subtitle={report.subtitle}
          />
        ))}
      </div>

      {/* CTA footer */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 mt-auto">
        <div>
          <p className="text-sm font-semibold">Nature data</p>
          <p className="text-sm text-muted-foreground">
            Reports at your fingertips
          </p>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Discover
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </button>
      </div>
    </div>
  )
}

export { ReportOrbit }
export type { ReportOrbitProps }
