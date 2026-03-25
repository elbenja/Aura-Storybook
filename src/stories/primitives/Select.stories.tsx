import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select";

const meta: Meta<typeof Select> = {
  title: "Primitives/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a report type..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="csrd">CSRD</SelectItem>
        <SelectItem value="gresb">GRESB</SelectItem>
        <SelectItem value="breeam">BREEAM</SelectItem>
        <SelectItem value="leed">LEED</SelectItem>
        <SelectItem value="tnfd">TNFD</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a report type..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>ESG Frameworks</SelectLabel>
          <SelectItem value="csrd">CSRD</SelectItem>
          <SelectItem value="gresb">GRESB</SelectItem>
          <SelectItem value="tnfd">TNFD</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Certifications</SelectLabel>
          <SelectItem value="breeam">BREEAM</SelectItem>
          <SelectItem value="leed">LEED</SelectItem>
          <SelectItem value="well">WELL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a report type..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="csrd">CSRD</SelectItem>
        <SelectItem value="gresb">GRESB</SelectItem>
        <SelectItem value="breeam">BREEAM</SelectItem>
        <SelectItem value="leed">LEED</SelectItem>
        <SelectItem value="tnfd">TNFD</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a report type..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="csrd">CSRD</SelectItem>
        <SelectItem value="gresb">GRESB</SelectItem>
        <SelectItem value="breeam">BREEAM</SelectItem>
        <SelectItem value="leed">LEED</SelectItem>
        <SelectItem value="tnfd">TNFD</SelectItem>
      </SelectContent>
    </Select>
  ),
};
