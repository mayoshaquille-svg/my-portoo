export type SkillDomain =
  | "IT Support"
  | "Systems"
  | "Infrastructure"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillDomain;
}
