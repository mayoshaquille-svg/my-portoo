import { site } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const facts = [
  {
    key: "Focus",
    value: "Troubleshooting, user support, and system maintenance",
  },
  {
    key: "Systems",
    value: "Office systems, Laravel/MySQL business apps, local network",
  },
  { key: "Base", value: "Riau, Indonesia" },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="about-heading"
          eyebrow="01 / About"
          title="About"
          description="IT Support specialist focused on troubleshooting, user support, system maintenance, and application support. Familiarity with Laravel/MySQL systems helps me diagnose issues faster — supporting the system is the job, not showcasing builds."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {facts.map((item) => (
            <div
              key={item.key}
              className="rounded-md border border-border bg-background p-4"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-subtle">
                {item.key}
              </p>
              <p className="mt-2 text-sm leading-6">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          Currently based in {site.location}, providing support, maintenance,
          and documentation for office systems and internal applications.
        </p>
      </div>
    </section>
  );
}
