import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReportOrbit } from "@/components/composites/report-orbit";
import {
  Leaf01Icon,
  Plant02Icon,
  Tree03Icon,
  WorkoutRunIcon,
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

const meta: Meta<typeof ReportOrbit> = {
  title: "Composites/ReportOrbit",
  component: ReportOrbit,
  args: {
    reports,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-xl">
      <ReportOrbit reports={reports} className="h-[310px]" />
    </div>
  ),
};
