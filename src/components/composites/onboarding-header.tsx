import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRightDoubleIcon, ArrowRight01Icon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OnboardingHeaderProps extends React.ComponentProps<"header"> {
  /** Show back button */
  showBack?: boolean
  /** Back button click handler */
  onBack?: () => void
  /** Show skip button */
  showSkip?: boolean
  /** Skip button click handler */
  onSkip?: () => void
  /** Show continue button */
  showContinue?: boolean
  /** Continue button click handler */
  onContinue?: () => void
}

function OnboardingHeader({
  className,
  showBack = false,
  onBack,
  showSkip = false,
  onSkip,
  showContinue = false,
  onContinue,
  ...props
}: OnboardingHeaderProps) {
  return (
    <header
      data-slot="onboarding-header"
      className={cn(
        "flex items-center justify-between px-6 py-4 w-full",
        className
      )}
      {...props}
    >
      {/* Left side */}
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-muted-foreground/40">
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            </span>
            Back
          </button>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {showContinue && (
          <Button onClick={onContinue}>
            Continue <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </Button>
        )}
        {showSkip && (
          <Button onClick={onSkip}>
            Skip <HugeiconsIcon icon={ArrowRightDoubleIcon} size={16} />
          </Button>
        )}
      </div>
    </header>
  )
}

export { OnboardingHeader }
export type { OnboardingHeaderProps }
