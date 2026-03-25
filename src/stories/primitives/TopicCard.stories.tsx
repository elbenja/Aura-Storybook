import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopicCard } from "@/components/ui/topic-card";
import {
  FlashIcon,
  Apple01Icon,
  Leaf02Icon,
  Building01Icon,
} from "@/components/icons";

const meta: Meta<typeof TopicCard> = {
  title: "Primitives/TopicCard",
  component: TopicCard,
  args: {
    icon: FlashIcon,
    label: "My nature & biodiversity insights",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 max-w-md">
      <TopicCard icon={FlashIcon} label="My nature & biodiversity insights" />
      <TopicCard icon={Apple01Icon} label="Frameworks & certifications" />
      <TopicCard icon={Leaf02Icon} label="TBD" />
      <TopicCard icon={Building01Icon} label="TBD" />
    </div>
  ),
};
