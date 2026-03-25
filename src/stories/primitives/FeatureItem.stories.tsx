import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureItem } from "@/components/ui/feature-item";
import { Leaf01Icon, Navigation03Icon, Tree03Icon } from "@/components/icons";

const meta: Meta<typeof FeatureItem> = {
  title: "Primitives/FeatureItem",
  component: FeatureItem,
  args: {
    icon: Leaf01Icon,
    title: "Curious? Just ask.",
    description:
      "Chat with me about your biodiversity data, certifications, or even your hive's health - I'll help you explore insights and next steps.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDifferentIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-xl">
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
  ),
};
