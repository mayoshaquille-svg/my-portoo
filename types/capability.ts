export type CapabilityGroup =
  | "IT Support"
  | "Systems"
  | "Network"
  | "Support Docs";

export type CapabilityIcon =
  | "Wrench"
  | "Headset"
  | "MonitorCog"
  | "Database"
  | "Network"
  | "Wifi"
  | "FileText"
  | "ClipboardCheck";

export interface Capability {
  title: string;
  description: string;
  icon: CapabilityIcon;
  group: CapabilityGroup;
}
