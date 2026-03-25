import * as React from "react"
import { cn } from "@/lib/utils"

interface HeroPanelProps extends React.ComponentProps<"div"> {
  /** Image source */
  imageSrc?: string
  /** Tagline text */
  tagline?: string
}

function HeroPanel({
  className,
  imageSrc = "/hero-nature.png",
  tagline = "Explore. Understand.\nAct confidently.",
  ...props
}: HeroPanelProps) {
  return (
    <div
      data-slot="hero-panel"
      className={cn(
        "relative flex items-end overflow-hidden rounded-3xl p-4",
        className
      )}
      {...props}
    >
      <img
        src={imageSrc}
        alt="Nature background"
        className="absolute inset-0 size-full object-cover"
      />
      {/* Gradient overlay to help tagline readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Tagline */}
      <p className="relative z-10 text-[30px] font-semibold leading-[36px] tracking-tight text-white/90 whitespace-pre-line px-7 pb-10">
        {tagline}
      </p>
    </div>
  )
}

export { HeroPanel }
export type { HeroPanelProps }
