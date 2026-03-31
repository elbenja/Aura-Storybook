import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { HeroPanel } from "@/components/composites/hero-panel";
import { OnboardingHeader } from "@/components/composites/onboarding-header";
import { TagButton } from "@/components/ui/tag-button";
import { AuraLogo } from "@/components/composites/nature-agent-sidebar";
import { Button } from "@/components/ui/button";
import {
  HugeiconsIcon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
} from "@/components/icons";

const USE_CASES = [
  "Sustainability reporting",
  "Hive health & biodiversity",
  "Tenant & community engagement",
  "Frameworks & certifications",
  "Site-level insights",
  "Portfolio overview",
  "Nature Agent's choice",
];

const meta: Meta = {
  title: "Screens/Nature Agent/UseCaseScreen",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const InteractiveScreen = () => {
      const [selected, setSelected] = useState<Set<string>>(new Set());

      const toggleTag = (tag: string) => {
        setSelected((prev) => {
          const next = new Set(prev);
          if (next.has(tag)) next.delete(tag);
          else next.add(tag);
          return next;
        });
      };

      return (
        <div className="flex min-h-screen w-full bg-[#f9f8f6]">
          {/* Left — Hero Panel (desktop only) */}
          <div className="hidden lg:block shrink-0 p-4">
            <HeroPanel className="h-full w-[400px]" />
          </div>

          {/* Right — Content Panel */}
          <div className="flex flex-1 flex-col bg-[#f9f8f6] min-w-0 overflow-hidden">
            <OnboardingHeader showBack showSkip />

            <div className="flex flex-1 items-start justify-center px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16">
              <div className="flex w-full max-w-[600px] flex-col gap-8">
                {/* Aura logo */}
                <AuraLogo size={55} className="text-foreground" />

                {/* Question */}
                <h2 className="text-2xl">
                  How are you planning to use Nature Agent?
                </h2>

                {/* Tag grid */}
                <div className="flex flex-wrap gap-3">
                  {USE_CASES.map((tag) => (
                    <TagButton
                      key={tag}
                      selected={selected.has(tag)}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </TagButton>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="rounded-full h-11 text-base">
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
                    Back
                  </Button>
                  <Button size="lg" className="rounded-full px-6 h-11 text-base">
                    Continue <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return <InteractiveScreen />;
  },
};
