import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroPanel } from "@/components/composites/hero-panel";

const meta: Meta<typeof HeroPanel> = {
  title: "Composites/HeroPanel",
  component: HeroPanel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[900px] w-[432px]">
      <HeroPanel className="h-full w-full" />
    </div>
  ),
};
