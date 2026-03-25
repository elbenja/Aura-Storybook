import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataCard } from "@/components/ui/data-card";

const meta: Meta<typeof DataCard> = {
  title: "Primitives/DataCard",
  component: DataCard,
  args: {
    title: "Portfolio insights",
    stat: "730",
    statLabel: "Properties",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PortfolioInsights: Story = {
  render: () => (
    <div className="max-w-xl">
      <DataCard
        title="Portfolio insights"
        stat="730"
        statLabel="Properties"
        className="h-[200px]"
      />
    </div>
  ),
};

export const AssetLevelResults: Story = {
  render: () => (
    <div className="max-w-xl">
      <DataCard
        title="Asset-level results"
        showSearch
        className="h-[200px]"
      />
    </div>
  ),
};
