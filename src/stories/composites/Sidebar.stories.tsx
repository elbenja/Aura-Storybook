import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HugeiconsIcon,
  DashboardBrowsingIcon,
  SchoolReportCardIcon,
  Building01Icon,
  Setting07Icon,
  MapsGlobal01Icon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const meta: Meta = {
  title: "Composites/Sidebar",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const navItems = [
  { label: "Dashboard", icon: DashboardBrowsingIcon, active: true },
  { label: "Reports", icon: SchoolReportCardIcon, active: false },
  { label: "Assets", icon: Building01Icon, active: false },
  { label: "Map", icon: MapsGlobal01Icon, active: false },
];

const bottomItems = [
  { label: "Settings", icon: Setting07Icon, active: false },
];

export const IconRail: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex h-[600px] w-14 flex-col items-center border-l bg-sidebar py-4 gap-2">
        <div className="flex flex-col items-center gap-1 flex-1">
          {navItems.map(({ label, icon, active }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <HugeiconsIcon icon={icon} size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          {bottomItems.map(({ label, icon, active }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <HugeiconsIcon icon={icon} size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  ),
};

export const MainSidebar: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex h-[600px] w-16 flex-col items-center bg-primary text-primary-foreground py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 mb-6">
          <span className="text-lg font-bold">a</span>
        </div>

        <nav className="flex flex-col items-center gap-1 flex-1">
          {navItems.map(({ label, icon, active }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    active
                      ? "bg-primary-foreground/20"
                      : "hover:bg-primary-foreground/10 opacity-60 hover:opacity-100"
                  )}
                >
                  <HugeiconsIcon icon={icon} size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>

        <div className="writing-mode-vertical text-xs font-medium tracking-widest opacity-40 select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          alveole
        </div>
      </div>
    </TooltipProvider>
  ),
};

export const CollapsedVsExpanded: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-6">
        {/* Collapsed (icon rail) */}
        <div className="flex h-[400px] w-16 flex-col items-center bg-primary text-primary-foreground py-4 rounded-lg">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 mb-6">
            <span className="text-lg font-bold">a</span>
          </div>
          <nav className="flex flex-col items-center gap-1">
            {navItems.map(({ label, icon, active }) => (
              <button
                key={label}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                  active
                    ? "bg-primary-foreground/20"
                    : "hover:bg-primary-foreground/10 opacity-60"
                )}
              >
                <HugeiconsIcon icon={icon} size={20} />
              </button>
            ))}
          </nav>
        </div>

        {/* Expanded */}
        <div className="flex h-[400px] w-56 flex-col bg-primary text-primary-foreground py-4 rounded-lg">
          <div className="flex items-center gap-3 px-4 mb-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
              <span className="text-lg font-bold">a</span>
            </div>
            <span className="text-sm font-semibold">Alveole</span>
          </div>
          <nav className="flex flex-col gap-0.5 px-2">
            {navItems.map(({ label, icon, active }) => (
              <button
                key={label}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary-foreground/20 font-medium"
                    : "hover:bg-primary-foreground/10 opacity-60 hover:opacity-100"
                )}
              >
                <HugeiconsIcon icon={icon} size={20} />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </TooltipProvider>
  ),
};
