import { Headset, MonitorCog, Network, Wrench } from "lucide-react";

import { skills } from "@/lib/data/skills";
import type { SkillDomain } from "@/types/skill";
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
      className="scroll-mt-24 bg-muted py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="skills-heading"
          eyebrow="04 · Skills"
          title="Skills"
          description="Grouped by support domain. No ratings, only areas of working experience."
        />

        {/* Ledger-style single card */}
        <div className="mt-8 rounded-md border border-border bg-background p-6">
          {domains.map(({ name, Icon }, groupIdx) => {
            const domainSkills = skills.filter(
              (skill) => skill.category === name,
            );

            return (
              <div key={name}>
                {groupIdx > 0 && (
                  <div className="my-4 border-t border-border" />
                )}
                <div className="flex items-center gap-2 mb-3">
                  <Icon
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-subtle">
                    {name}
                  </h3>
                  <span className="ml-auto font-mono text-xs text-subtle">
                    {domainSkills.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {domainSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-subtle" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
