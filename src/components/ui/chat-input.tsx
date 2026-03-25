import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUp02Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

interface ChatInputProps extends React.ComponentProps<"div"> {
  /** Placeholder text */
  placeholder?: string
  /** Submit button label */
  submitLabel?: string
  /** Called when submit is clicked or Enter is pressed */
  onSubmit?: (value: string) => void
}

function ChatInput({
  className,
  placeholder = "what is 'Covering Natural Habitat' and why it matters?",
  submitLabel = "Ask Nature Agent",
  onSubmit,
  ...props
}: ChatInputProps) {
  const [value, setValue] = React.useState("")

  const handleSubmit = () => {
    onSubmit?.(value)
    setValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      handleSubmit()
    }
  }

  return (
    <div
      data-slot="chat-input"
      className={cn("flex flex-col gap-0 rounded-2xl border bg-card", className)}
      {...props}
    >
      <div className="px-4 py-3">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center justify-end px-3 py-2 border-t">
        <button
          onClick={handleSubmit}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {submitLabel}
          <HugeiconsIcon icon={ArrowUp02Icon} size={16} />
        </button>
      </div>
    </div>
  )
}

export { ChatInput }
export type { ChatInputProps }
