import type { Meta, StoryObj } from "@storybook/react-vite";

import { HugeiconsIcon, Plant02Icon } from "@/components/icons";
import { Toggle } from "@/components/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    children: "Italic",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    defaultPressed: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <HugeiconsIcon icon={Plant02Icon} size={16} />
      Italic
    </Toggle>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <HugeiconsIcon icon={Plant02Icon} size={16} />
      Italic
    </Toggle>
  ),
};

export const IconOnly: Story = {
  args: {
    children: undefined,
  },
  render: (args) => (
    <Toggle {...args} aria-label="Toggle plant">
      <HugeiconsIcon icon={Plant02Icon} size={16} />
    </Toggle>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <HugeiconsIcon icon={Plant02Icon} size={16} />
      Italic
    </Toggle>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">With text</p>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle size="sm" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle size="default" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle size="lg" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle variant="outline" size="sm" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle variant="outline" size="default" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle variant="outline" size="lg" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Icon only</p>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle size="sm" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
          <Toggle size="default" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
          <Toggle variant="outline" size="sm" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
          <Toggle variant="outline" size="default" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
          <Toggle variant="outline" size="lg" aria-label="Toggle plant">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
          </Toggle>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Disabled</p>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle disabled size="sm" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle disabled size="default" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle disabled size="lg" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle disabled variant="outline" size="sm" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle disabled variant="outline" size="default" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
          <Toggle disabled variant="outline" size="lg" aria-label="Toggle italic">
            <HugeiconsIcon icon={Plant02Icon} size={16} />
            Italic
          </Toggle>
        </div>
      </div>
    </div>
  ),
};
