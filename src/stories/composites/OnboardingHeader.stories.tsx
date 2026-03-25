import type { Meta, StoryObj } from "@storybook/react-vite";
import { OnboardingHeader } from "@/components/composites/onboarding-header";

const meta: Meta<typeof OnboardingHeader> = {
  title: "Composites/OnboardingHeader",
  component: OnboardingHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SkipOnly: Story = {
  args: { showSkip: true },
};

export const BackAndSkip: Story = {
  args: { showBack: true, showSkip: true },
};

export const BackAndContinue: Story = {
  args: { showBack: true, showContinue: true },
};
