import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagButton } from "@/components/ui/tag-button";
import { useState } from "react";

const meta: Meta<typeof TagButton> = {
  title: "Primitives/TagButton",
  component: TagButton,
  args: {
    children: "Sustainability reporting",
    selected: false,
  },
  argTypes: {
    selected: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const AllTags: Story = {
  render: () => {
    const tags = [
      "Sustainability reporting",
      "Hive health & biodiversity",
      "Tenant & community engagement",
      "Frameworks & certifications",
      "Site-level insights",
      "Portfolio overview",
      "Nature Agent's choice",
    ];

    const InteractiveTags = () => {
      const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

      const toggleTag = (tag: string) => {
        setSelectedTags((prev) => {
          const next = new Set(prev);
          if (next.has(tag)) next.delete(tag);
          else next.add(tag);
          return next;
        });
      };

      return (
        <div className="flex flex-wrap gap-3 max-w-xl">
          {tags.map((tag) => (
            <TagButton
              key={tag}
              selected={selectedTags.has(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </div>
      );
    };

    return <InteractiveTags />;
  },
};
