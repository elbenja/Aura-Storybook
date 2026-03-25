import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Primitives/Sonner",
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Event has been created")}>Show Toast</Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Report Generated", {
          description: "CSRD report for 388 Greenwich St.",
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Report submitted successfully")}>
      Show Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button onClick={() => toast.error("Failed to generate report")}>
      Show Toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => {},
          },
        })
      }
    >
      Show Toast
    </Button>
  ),
};
