import { Headset, MonitorCog, Network, Wrench } from "lucide-react";

import { skills } from "@/lib/data/skills";
import type { SkillDomain } from "@/types/skill";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

const domains: { name: SkillDomain; Icon: typeof Wrench }[] = [
  { name: "IT Support", Icon: Headset },
  { name: "Systems", Icon: MonitorCog },
  { name: "Infrastructure", Icon: Network },
  { name: "Tools", Icon: Wrench },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 bg-muted py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="skills-heading"
          eyebrow="04 / Skills"
          title="Skills"
          description="Grouped by support domain. No ratings, only areas of working experience."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {domains.map(({ name, Icon }) => (
            <div
              key={name}
              className="rounded-md border border-border bg-background p-5"
            >
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-subtle">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {name}
              </h3>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {skills
                  .filter((skill) => skill.category === name)
                  .map((skill) => (
                    <li key={skill.name}>
                      <Badge>{skill.name}</Badge>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
