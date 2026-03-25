import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReportBubble } from "@/components/ui/report-bubble";
import {
  Leaf01Icon,
  Plant02Icon,
  Tree03Icon,
  WorkoutRunIcon,
} from "@/components/icons";

const meta: Meta<typeof ReportBubble> = {
  title: "Primitives/ReportBubble",
  component: ReportBubble,
  args: {
    icon: Leaf01Icon,
    name: "GRESB",
    subtitle: "Real estate ESG",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllReports: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ReportBubble
        icon={Leaf01Icon}
        name="GRESB"
        subtitle="Real estate ESG"
      />
      <ReportBubble
        icon={WorkoutRunIcon}
        name="BREEAM"
        subtitle="Assessing building performance"
      />
      <ReportBubble
        icon={Plant02Icon}
        name="CSRD"
        subtitle="Corporate sustainability"
      />
      <ReportBubble
        icon={Tree03Icon}
        name="TNFD"
        subtitle="Nature-related Risk Reporting"
      />
    </div>
  ),
};
