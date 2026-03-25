import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const meta = {
  title: "Primitives/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="biodiversity">
        <AccordionTrigger>Biodiversity Reporting</AccordionTrigger>
        <AccordionContent>
          Biodiversity reporting covers the assessment of ecological impacts,
          habitat preservation efforts, and species diversity metrics within your
          operational footprint.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="certifications">
        <AccordionTrigger>Building Certifications</AccordionTrigger>
        <AccordionContent>
          Building certifications such as BREEAM, LEED, and WELL evaluate
          environmental performance, sustainability credentials, and occupant
          well-being across your real estate portfolio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="compliance">
        <AccordionTrigger>Regulatory Compliance</AccordionTrigger>
        <AccordionContent>
          Regulatory compliance ensures alignment with frameworks like CSRD,
          SFDR, and the EU Taxonomy, helping organisations meet mandatory
          disclosure requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="biodiversity">
        <AccordionTrigger>Biodiversity Reporting</AccordionTrigger>
        <AccordionContent>
          Biodiversity reporting covers the assessment of ecological impacts,
          habitat preservation efforts, and species diversity metrics within your
          operational footprint.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="certifications">
        <AccordionTrigger>Building Certifications</AccordionTrigger>
        <AccordionContent>
          Building certifications such as BREEAM, LEED, and WELL evaluate
          environmental performance, sustainability credentials, and occupant
          well-being across your real estate portfolio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="compliance">
        <AccordionTrigger>Regulatory Compliance</AccordionTrigger>
        <AccordionContent>
          Regulatory compliance ensures alignment with frameworks like CSRD,
          SFDR, and the EU Taxonomy, helping organisations meet mandatory
          disclosure requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="biodiversity"
      className="w-full max-w-md"
    >
      <AccordionItem value="biodiversity">
        <AccordionTrigger>Biodiversity Reporting</AccordionTrigger>
        <AccordionContent>
          Biodiversity reporting covers the assessment of ecological impacts,
          habitat preservation efforts, and species diversity metrics within your
          operational footprint.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="certifications">
        <AccordionTrigger>Building Certifications</AccordionTrigger>
        <AccordionContent>
          Building certifications such as BREEAM, LEED, and WELL evaluate
          environmental performance, sustainability credentials, and occupant
          well-being across your real estate portfolio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="compliance">
        <AccordionTrigger>Regulatory Compliance</AccordionTrigger>
        <AccordionContent>
          Regulatory compliance ensures alignment with frameworks like CSRD,
          SFDR, and the EU Taxonomy, helping organisations meet mandatory
          disclosure requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="biodiversity">
        <AccordionTrigger>Biodiversity Reporting</AccordionTrigger>
        <AccordionContent>
          Biodiversity reporting covers the assessment of ecological impacts,
          habitat preservation efforts, and species diversity metrics within your
          operational footprint.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="certifications" disabled>
        <AccordionTrigger>Building Certifications (Disabled)</AccordionTrigger>
        <AccordionContent>
          This item is disabled and cannot be toggled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="compliance">
        <AccordionTrigger>Regulatory Compliance</AccordionTrigger>
        <AccordionContent>
          Regulatory compliance ensures alignment with frameworks like CSRD,
          SFDR, and the EU Taxonomy, helping organisations meet mandatory
          disclosure requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
