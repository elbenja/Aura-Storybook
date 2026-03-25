import type { Meta, StoryObj } from "@storybook/react-vite";
import { NatureAgentSidebar } from "@/components/composites/nature-agent-sidebar";

const meta: Meta<typeof NatureAgentSidebar> = {
  title: "Composites/NatureAgentSidebar",
  component: NatureAgentSidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[600px]">
      <NatureAgentSidebar className="h-full" />
    </div>
  ),
};
