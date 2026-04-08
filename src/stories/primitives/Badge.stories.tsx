import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  HugeiconsIcon,
} from "@/components/icons";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  args: {
    children: "Badge",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Destructive: Story = {
  args: { variant: "destructive" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Badge>
      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={12} />
      Certified
    </Badge>
  ),
};

export const WithLeftIcon: Story = {
  render: () => (
    <Badge>
      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={12} />
      Certified
    </Badge>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <Badge variant="outline">
      View report
      <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
    </Badge>
  ),
};

export const IconPositions: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={12} />
          Certified
        </Badge>
        <Badge variant="secondary">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={12} />
          Verified
        </Badge>
        <Badge variant="outline">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={12} />
          Left Icon
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          Explore
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
        </Badge>
        <Badge variant="secondary">
          Next step
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
        </Badge>
        <Badge variant="outline">
          Right Icon
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
        </Badge>
      </div>
    </div>
  ),
};

export const Certification: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline">GRESB</Badge>
      <Badge variant="outline">CSRD</Badge>
      <Badge variant="outline">LEED</Badge>
      <Badge variant="outline">TNFD</Badge>
      <Badge variant="outline">BREEAM</Badge>
    </div>
  ),
};
