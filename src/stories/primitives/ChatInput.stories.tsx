import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatInput } from "@/components/ui/chat-input";

const meta: Meta<typeof ChatInput> = {
  title: "Primitives/ChatInput",
  component: ChatInput,
  args: {
    placeholder: "what is 'Covering Natural Habitat' and why it matters?",
    submitLabel: "Ask Nature Agent",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => (
    <div className="max-w-lg">
      <ChatInput />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="max-w-lg">
      <ChatInput placeholder="Type your question here…" />
    </div>
  ),
};
