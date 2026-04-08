import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Aura logo icon used in the onboarding and sidebar.
 */
function AuraLogo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Aura logo"
      role="img"
    >
      <path
        d="M35.8543 53.9396C34.3052 53.9396 32.9299 53.6814 31.7285 53.165C30.5376 52.6381 29.5944 51.8477 28.8989 50.7939C28.2139 49.7295 27.8714 48.3964 27.8714 46.7945C27.8714 45.4456 28.1085 44.3074 28.5828 43.38C29.057 42.4527 29.7104 41.6991 30.5429 41.1195C31.3755 40.5399 32.3345 40.1026 33.4199 39.8075C34.5054 39.5019 35.6646 39.2964 36.8976 39.191C38.2782 39.0645 39.39 38.9328 40.2331 38.7958C41.0761 38.6483 41.6874 38.4427 42.0668 38.1793C42.4567 37.9053 42.6517 37.5206 42.6517 37.0253V36.9463C42.6517 36.1348 42.3724 35.5078 41.8138 35.0652C41.2553 34.6225 40.5018 34.4012 39.5533 34.4012C38.5311 34.4012 37.7091 34.6225 37.0873 35.0652C36.4656 35.5078 36.0704 36.119 35.9017 36.8989L28.7724 36.6459C28.9832 35.1705 29.5259 33.8532 30.4006 32.694C31.2859 31.5242 32.4978 30.6074 34.0364 29.9435C35.5856 29.269 37.4456 28.9318 39.6166 28.9318C41.1657 28.9318 42.5937 29.1162 43.9005 29.485C45.2072 29.8433 46.3454 30.3703 47.3149 31.0658C48.2845 31.7508 49.0327 32.5939 49.5596 33.595C50.0971 34.5962 50.3658 35.7396 50.3658 37.0253V53.5286H43.0943V50.1458H42.9046C42.4725 50.9678 41.9192 51.6633 41.2448 52.2324C40.5808 52.8015 39.7957 53.2283 38.8894 53.5128C37.9936 53.7974 36.9819 53.9396 35.8543 53.9396ZM38.2413 48.8811C39.0738 48.8811 39.8221 48.7125 40.486 48.3753C41.1605 48.0381 41.6979 47.5744 42.0984 46.9842C42.4988 46.3835 42.6991 45.688 42.6991 44.8976V42.5897C42.4778 42.7056 42.209 42.811 41.8929 42.9058C41.5873 43.0007 41.25 43.0902 40.8812 43.1745C40.5123 43.2589 40.133 43.3326 39.743 43.3958C39.3531 43.4591 38.979 43.517 38.6207 43.5697C37.8935 43.6857 37.2717 43.8648 36.7554 44.1072C36.2495 44.3496 35.8596 44.6657 35.5856 45.0557C35.3221 45.4351 35.1904 45.8882 35.1904 46.4151C35.1904 47.2161 35.4749 47.8273 36.044 48.2488C36.6236 48.6704 37.3561 48.8811 38.2413 48.8811Z"
        fill="currentColor"
      />
      <path
        d="M65.6564 28.001C65.6564 26.3747 64.7886 24.8717 63.3801 24.0585L42.5968 12.0591C41.1883 11.2459 39.4529 11.2459 38.0444 12.0591L17.2615 24.0585C15.853 24.8717 14.9853 26.3746 14.9853 28.001V51.999C14.9853 53.6254 15.853 55.1283 17.2615 55.9415L38.0444 67.9409C39.4529 68.7541 41.1883 68.7541 42.5968 67.9409L63.3801 55.9415C64.7886 55.1283 65.6564 53.6253 65.6564 51.999V28.001ZM73.1058 51.999C73.1058 56.2868 70.8182 60.2491 67.1049 62.3931L46.3215 74.3921C42.6082 76.536 38.0331 76.536 34.3197 74.3921L13.5368 62.3931C9.82342 60.2492 7.53589 56.2868 7.53589 51.999V28.001C7.53589 23.7132 9.82342 19.7508 13.5368 17.6069L34.3197 5.60794C38.0331 3.46402 42.6082 3.46402 46.3215 5.60794L67.1049 17.6069C70.8182 19.7509 73.1058 23.7132 73.1058 28.001V51.999Z"
        fill="currentColor"
      />
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
