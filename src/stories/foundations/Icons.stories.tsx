import type { Meta, StoryObj } from "@storybook/react-vite";
import { type IconSvgElement } from "@hugeicons/react";
import {
  HugeiconsIcon,
  Home01Icon,
  Search01Icon,
  Setting07Icon,
  Menu02Icon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  Cancel01Icon,
  FilterHorizontalIcon,
  GridViewIcon,
  SidebarLeft01Icon,
  SidebarRight01Icon,
  MoreVerticalIcon,
  MoreHorizontalIcon,
  Building01Icon,
  Building05Icon,
  DashboardBrowsingIcon,
  GlobeIcon,
  Plant01Icon,
  Tree03Icon,
  Leaf01Icon,
  FlowerIcon,
  MapsGlobal01Icon,
  File01Icon,
  SchoolReportCardIcon,
  Invoice01Icon,
  BookEditIcon,
  Copy01Icon,
  Notification01Icon,
  Download03Icon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  PlusSignIcon,
  LockIcon,
  Calendar01Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  SentIcon,
  Mail01Icon,
  User03Icon,
  UserMultipleIcon,
} from "@/components/icons";

const meta: Meta = {
  title: "Foundations/Icons",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const iconEntries: Array<{ name: string; icon: IconSvgElement; category: string }> = [
  // Navigation & Layout
  { name: "Home01", icon: Home01Icon, category: "Navigation" },
  { name: "Search01", icon: Search01Icon, category: "Navigation" },
  { name: "Setting07", icon: Setting07Icon, category: "Navigation" },
  { name: "Menu02", icon: Menu02Icon, category: "Navigation" },
  { name: "ArrowRight01", icon: ArrowRight01Icon, category: "Navigation" },
  { name: "ArrowLeft01", icon: ArrowLeft01Icon, category: "Navigation" },
  { name: "ArrowDown01", icon: ArrowDown01Icon, category: "Navigation" },
  { name: "ArrowUp01", icon: ArrowUp01Icon, category: "Navigation" },
  { name: "Cancel01", icon: Cancel01Icon, category: "Navigation" },
  { name: "FilterHorizontal", icon: FilterHorizontalIcon, category: "Navigation" },
  { name: "GridView", icon: GridViewIcon, category: "Navigation" },
  { name: "SidebarLeft01", icon: SidebarLeft01Icon, category: "Navigation" },
  { name: "SidebarRight01", icon: SidebarRight01Icon, category: "Navigation" },
  { name: "MoreVertical", icon: MoreVerticalIcon, category: "Navigation" },
  { name: "MoreHorizontal", icon: MoreHorizontalIcon, category: "Navigation" },

  // Domain — Real Estate & ESG
  { name: "Building01", icon: Building01Icon, category: "Domain" },
  { name: "Building05", icon: Building05Icon, category: "Domain" },
  { name: "Dashboard", icon: DashboardBrowsingIcon, category: "Domain" },
  { name: "Globe", icon: GlobeIcon, category: "Domain" },
  { name: "Plant01", icon: Plant01Icon, category: "Domain" },
  { name: "Tree03", icon: Tree03Icon, category: "Domain" },
  { name: "Leaf01", icon: Leaf01Icon, category: "Domain" },
  { name: "Flower", icon: FlowerIcon, category: "Domain" },
  { name: "MapsGlobal01", icon: MapsGlobal01Icon, category: "Domain" },

  // Documents & Reports
  { name: "File01", icon: File01Icon, category: "Documents" },
  { name: "ReportCard", icon: SchoolReportCardIcon, category: "Documents" },
  { name: "Invoice01", icon: Invoice01Icon, category: "Documents" },
  { name: "BookEdit", icon: BookEditIcon, category: "Documents" },

  // Actions
  { name: "Copy01", icon: Copy01Icon, category: "Actions" },
  { name: "Notification01", icon: Notification01Icon, category: "Actions" },
  { name: "Download03", icon: Download03Icon, category: "Actions" },
  { name: "ThumbsUp", icon: ThumbsUpIcon, category: "Actions" },
  { name: "ThumbsDown", icon: ThumbsDownIcon, category: "Actions" },
  { name: "PlusSign", icon: PlusSignIcon, category: "Actions" },
  { name: "Lock", icon: LockIcon, category: "Actions" },
  { name: "Calendar01", icon: Calendar01Icon, category: "Actions" },
  { name: "CheckmarkCircle02", icon: CheckmarkCircle02Icon, category: "Actions" },
  { name: "InformationCircle", icon: InformationCircleIcon, category: "Actions" },
  { name: "Send", icon: SentIcon, category: "Actions" },

  // Communication
  { name: "Mail01", icon: Mail01Icon, category: "Communication" },
  { name: "User03", icon: User03Icon, category: "Communication" },
  { name: "UserMultiple", icon: UserMultipleIcon, category: "Communication" },
];

const categories = [...new Set(iconEntries.map((e) => e.category))];

export const IconGallery: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Icon Gallery — HugeIcons</h2>
      <p className="text-sm text-muted-foreground">
        Curated set of {iconEntries.length} icons from the Aura Figma design system.
      </p>
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">{category}</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {iconEntries
              .filter((e) => e.category === category)
              .map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <HugeiconsIcon icon={icon} size={24} />
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">
                    {name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => {
    const sizes = [16, 20, 24, 32, 40, 48];
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Icon Sizes</h2>
        <div className="flex items-end gap-8">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <HugeiconsIcon icon={Home01Icon} size={size} />
              <span className="text-xs font-mono text-muted-foreground">{size}px</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const IconWithText: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Icons with Text</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={DashboardBrowsingIcon} size={20} />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={SchoolReportCardIcon} size={20} />
          <span className="text-sm font-medium">Reports</span>
        </div>
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Building01Icon} size={20} />
          <span className="text-sm font-medium">Assets</span>
        </div>
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={MapsGlobal01Icon} size={20} />
          <span className="text-sm font-medium">Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Setting07Icon} size={20} />
          <span className="text-sm font-medium">Settings</span>
        </div>
      </div>
    </div>
  ),
};
