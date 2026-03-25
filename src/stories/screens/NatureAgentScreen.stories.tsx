import type { Meta, StoryObj } from "@storybook/react-vite";
import { NatureAgentSidebar, AuraLogo } from "@/components/composites/nature-agent-sidebar";
import { TopicCard } from "@/components/ui/topic-card";
import { ChatInput } from "@/components/ui/chat-input";
import { ReportOrbit } from "@/components/composites/report-orbit";
import { DataCard } from "@/components/ui/data-card";
import {
  FlashIcon,
  Apple01Icon,
  Leaf02Icon,
  Building01Icon,
  Leaf01Icon,
  Plant02Icon,
  Tree03Icon,
  WorkoutRunIcon,
  Search01Icon,
  HugeiconsIcon,
} from "@/components/icons";

const reports = [
  { icon: Leaf01Icon, name: "GRESB", subtitle: "Real estate ESG" },
  {
    icon: WorkoutRunIcon,
    name: "BREEAM",
    subtitle: "Assessing building performance",
  },
  { icon: Plant02Icon, name: "CSRD", subtitle: "Corporate sustainability" },
  {
    icon: Tree03Icon,
    name: "TNFD",
    subtitle: "Nature-related Risk Reporting",
  },
];

const meta: Meta = {
  title: "Screens/Nature Agent/NatureAgentScreen",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex h-[938px] w-[1400px] bg-background">
      {/* Sidebar */}
      <NatureAgentSidebar className="h-full" />

      {/* Left — Chat panel */}
      <div className="flex w-[624px] flex-col items-center justify-center px-5">
        {/* Agent greeting */}
        <div className="flex flex-col items-center gap-5 mb-10">
          <AuraLogo size={72} className="text-foreground" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Hey, I'm your Nature Agent</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Ask me anything about biodiversity,
              <br />
              or how to help your properties thrive.
            </p>
          </div>
        </div>

        {/* Topic cards grid */}
        <div className="grid grid-cols-2 gap-2 w-[346px] mb-8">
          <TopicCard
            icon={FlashIcon}
            label="My nature & biodiversity insights"
          />
          <TopicCard
            icon={Apple01Icon}
            label="Frameworks & certifications"
          />
          <TopicCard icon={Leaf02Icon} label="TBD" />
          <TopicCard icon={Building01Icon} label="TBD" />
        </div>

        {/* Chat Input */}
        <div className="w-[468px]">
          <ChatInput />
        </div>
      </div>

      {/* Right — Dashboard panel */}
      <div className="flex flex-1 flex-col gap-4 p-2">
        <div className="flex flex-1 flex-col gap-4 rounded-2xl border bg-card p-3 overflow-y-auto">
          {/* Dashboard header */}
          <div className="flex flex-col gap-4 px-3 pt-3">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Property</span>
              <div className="flex flex-1 items-center rounded-lg border bg-background px-3 py-2 text-sm">
                <span className="flex-1 text-muted-foreground">
                  Search for an asset
                </span>
                <HugeiconsIcon icon={Search01Icon} size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Reports section */}
          <div className="px-3">
            <p className="text-sm font-medium mb-2">Reports</p>
            <ReportOrbit reports={reports} className="h-[282px]" />
          </div>

          {/* Explore your data */}
          <div className="px-3">
            <p className="text-sm font-medium mb-2">Explore your data</p>
            <div className="flex flex-col gap-3">
              <DataCard title="Portfolio insights" stat="730" statLabel="Properties" className="h-[200px]" />
              <DataCard title="Asset-level results" showSearch className="h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
