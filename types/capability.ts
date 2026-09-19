export type CapabilityGroup =
  | "IT Support"
  | "Systems"
  | "Software"
  | "Infrastructure";

export interface Capability {
  title: string;
  description: string;
  icon: "Wrench" | "Database" | "Globe" | "ShieldCheck";
  group: CapabilityGroup;
}
