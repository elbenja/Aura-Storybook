import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HugeiconsIcon,
  ArrowRight01Icon,
  GlobeIcon,
  Leaf01Icon,
  Building01Icon,
  SchoolReportCardIcon,
  Plant01Icon,
} from "@/components/icons";

import reportsData from "../__mocks__/reports.json";

const meta: Meta = {
  title: "Composites/Card",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const ReportCard: Story = {
  render: () => (
    <Card className="w-[420px]">
      <CardHeader>
        <CardDescription>Smart Reports</CardDescription>
        <CardTitle>Stay on top of you news</CardTitle>
        <CardAction>
          <Button size="sm">
            Subscribe <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {reportsData.certifications.slice(0, 4).map((cert) => (
            <div key={cert.id} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <HugeiconsIcon icon={Plant01Icon} size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.fullName}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
};

export const PortfolioCard: Story = {
  render: () => (
    <Card className="w-[420px] overflow-hidden">
      <CardContent className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg" />
        <div className="relative z-10">
          <p className="text-sm font-medium text-muted-foreground">Portfolio Report</p>
          <p className="text-5xl font-bold mt-2">
            {reportsData.portfolioSummary.properties}
          </p>
          <p className="text-sm text-muted-foreground mt-1">Properties</p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const CertificationCard: Story = {
  render: () => (
    <Card className="w-[240px] bg-primary text-primary-foreground">
      <CardHeader>
        <CardDescription className="text-primary-foreground/70">
          Building certification
        </CardDescription>
        <CardTitle className="text-xl">BREEAM In-Use v6</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <span className="text-5xl font-bold">12</span>
          <Badge variant="secondary" className="text-xs">credits</Badge>
        </div>
        <p className="text-sm mt-2 text-primary-foreground/70">Excellent</p>
      </CardContent>
    </Card>
  ),
};

export const ChatTopicCard: Story = {
  render: () => {
    const topics = [
      { icon: Leaf01Icon, label: "Nature & Biodiversity Insights" },
      { icon: Plant01Icon, label: "Frameworks & Certifications" },
      { icon: GlobeIcon, label: "Commercial Real Estate Relevance" },
      { icon: Building01Icon, label: "Commercial Real Estate Relevance" },
    ];

    return (
      <div className="grid grid-cols-2 gap-3 max-w-md">
        {topics.map(({ icon, label }, i) => (
          <Card
            key={i}
            className="cursor-pointer hover:bg-muted/50 transition-colors py-4"
          >
            <CardContent className="flex items-start gap-3 px-4">
              <HugeiconsIcon icon={icon} size={20} className="shrink-0 text-muted-foreground mt-0.5" />
              <span className="text-sm font-medium">{label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  },
};

export const ReportRequestCard: Story = {
  render: () => {
    const reportTypes = [
      { name: "TNFD", fullName: "Taskforce on Nature-related Financial Disclosures", icon: SchoolReportCardIcon },
      { name: "GRESB", fullName: "Benchmarking ESG performance", icon: GlobeIcon },
      { name: "CSRD", fullName: "Corporate Sustainability Reporting Directive", icon: Plant01Icon },
    ];

    return (
      <div className="flex gap-4">
        {reportTypes.map((report) => (
          <Card key={report.name} className="w-[200px]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <HugeiconsIcon icon={report.icon} size={16} />
                </div>
                <CardTitle className="text-sm">{report.name}</CardTitle>
              </div>
              <CardDescription className="text-xs">{report.fullName}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size="sm" className="w-full">
                Request <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Card className="w-[140px] flex items-center justify-center border-dashed">
          <CardContent className="text-center">
            <span className="text-sm text-muted-foreground">+ Others</span>
          </CardContent>
        </Card>
      </div>
    );
  },
};
