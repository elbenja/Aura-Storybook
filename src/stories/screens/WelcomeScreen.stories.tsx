import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroPanel } from "@/components/composites/hero-panel";
import { OnboardingHeader } from "@/components/composites/onboarding-header";
import { FeatureItem } from "@/components/ui/feature-item";
import { AuraLogo } from "@/components/composites/nature-agent-sidebar";
import { Button } from "@/components/ui/button";
import {
  HugeiconsIcon,
  ArrowRight01Icon,
  Leaf01Icon,
  Navigation03Icon,
  Tree03Icon,
} from "@/components/icons";

const meta: Meta = {
  title: "Screens/Nature Agent/WelcomeScreen",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex min-h-screen w-full bg-[#f9f8f6]">
      {/* Left — Hero Panel (desktop only) */}
      <div className="hidden lg:block shrink-0 p-4">
        <HeroPanel className="h-full w-[400px]" />
      </div>

      {/* Right — Content Panel */}
      <div className="flex flex-1 flex-col bg-[#f9f8f6] min-w-0 overflow-hidden">
        <OnboardingHeader showSkip />

        <div className="flex flex-1 items-start justify-center px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16">
          <div className="flex w-full max-w-[600px] flex-col gap-8">
            {/* Aura logo */}
            <AuraLogo size={55} className="text-foreground" />

            {/* Greeting */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-baseline text-2xl">
                <span>Hey Bradley, I'm your</span>
                <span className="font-semibold tracking-tight">Nature Agent.</span>
              </div>

              <p className="text-base text-foreground">
                I'm here to help you understand your portfolio's impact on nature
                and biodiversity and bring your sustainability goals to life.
                <br /><br />
                Here's a few things you should know about me:
              </p>

              {/* Feature items */}
              <div className="flex flex-col gap-6">
                <FeatureItem
                  icon={Leaf01Icon}
                  title="Curious? Just ask."
                  description="Chat with me about your biodiversity data, certifications, or even your hive's health - I'll help you explore insights and next steps."
                />
                <FeatureItem
                  icon={Navigation03Icon}
                  title="Built to guide, never overwhelm."
                  description="I turn complex frameworks like TNFD, GRESB, or CSRD into digestible insights you can act on. Always clear, never confusing."
                />
                <FeatureItem
                  icon={Tree03Icon}
                  title="We grow better together."
                  description="Every conversation helps me learn what matters to you, from biodiversity to tenant engagement, so I can serve you and your goals better."
                />
              </div>
            </div>

            {/* Continue button */}
            <div>
              <Button size="lg" className="rounded-full px-6 h-11 text-base">
                Continue <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
