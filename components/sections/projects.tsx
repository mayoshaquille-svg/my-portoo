import { projects } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="projects-heading"
          eyebrow="03 / Supported Systems"
          title="Supported Systems"
          description="Systems I support and maintain: the issue context, how each system is kept running, and the support role behind it."
        />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
