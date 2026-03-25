import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Aura "a" logo SVG used in the onboarding and sidebar.
 */
function AuraLogo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 55 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.32 0C12.23 0 0 12.23 0 27.32c0 15.09 12.23 27.32 27.32 27.32 7.55 0 14.38-3.07 19.33-8.02l-6.83-6.83c-3.17 3.17-7.55 5.13-12.5 5.13-9.77 0-17.68-7.91-17.68-17.68 0-9.77 7.91-17.68 17.68-17.68 4.87 0 9.28 1.97 12.47 5.15l6.83-6.83C41.67 3.08 34.86 0 27.32 0Z"
        fill="currentColor"
      />
      <circle cx="27.32" cy="27.32" r="8" fill="currentColor" />
    </svg>
  )
}

/**
 * Vertical sidebar with Alveole branding used on the main chat screen.
 */
interface NatureAgentSidebarProps extends React.ComponentProps<"nav"> {}

function NatureAgentSidebar({
  className,
  ...props
}: NatureAgentSidebarProps) {
  return (
    <nav
      data-slot="nature-agent-sidebar"
      className={cn(
        "flex w-[60px] shrink-0 flex-col items-center gap-4 border-r bg-background py-4",
        className
      )}
      {...props}
    >
      {/* Top icon area */}
      <div className="flex flex-col items-center gap-3">
        <AuraLogo size={28} className="text-foreground" />
        <div className="h-px w-6 bg-border" />
      </div>

      {/* Nav items (shown as small dots/icons) */}
      <div className="flex flex-1 flex-col items-center gap-3 pt-2">
        <button className="flex size-8 items-center justify-center rounded-lg bg-muted text-xs font-medium text-muted-foreground hover:bg-accent">
          e
        </button>
        <button className="flex size-8 items-center justify-center rounded-lg text-xs font-medium text-muted-foreground hover:bg-accent">
          ✎
        </button>
      </div>

      {/* Bottom branding */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          alveole
        </span>
        <div className="size-6 rounded-full bg-primary" />
      </div>
    </nav>
  )
}

export { NatureAgentSidebar, AuraLogo }
export type { NatureAgentSidebarProps }
