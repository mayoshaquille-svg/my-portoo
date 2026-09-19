export type SkillDomain =
  | "IT Support"
  | "Systems"
  | "Software"
  | "Infrastructure";

export interface Skill {
  name: string;
  category: SkillDomain;
}
