"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, ProjectItem } from "@/lib/constants";
import { ProjectModal } from "@/components/modals/project-modal";

const categories = ["All", "Infrastructure", "Systems", "Display", "Hardware"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [activeProject, setActiveProject] = React.useState<ProjectItem | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#FBFBFA] dark:bg-[#111814]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            {/* Micro-pill eyebrow tag */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/20 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>My Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
              My Latest <span className="text-[#F59E0B]">Projects</span>
            </h2>
          </div>

          {/* Button-in-button header CTA */}
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-5 pr-1.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#1E3A2B]/15 hover:bg-[#274B38] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] self-start sm:self-auto ring-1 ring-white/10"
          >
            <span>View All Projects</span>
            <span className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px]">
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[38px] rounded-full px-4 sm:px-5 py-2 text-xs font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isActive
                    ? "bg-[#1E3A2B] text-white shadow-md ring-1 ring-[#1E3A2B] scale-105"
                    : "bg-black/5 dark:bg-white/5 text-[#5F6E65] dark:text-[#9BB0A4] hover:bg-black/10 dark:hover:bg-white/10 hover:text-[#16231C] dark:hover:text-[#F2F7F4] ring-1 ring-black/5 dark:ring-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index % 4 === 0 || (filteredProjects.length === 1);
            const isSecondWide = index % 4 === 3;
            const spanClass =
              filteredProjects.length === 1
                ? "lg:col-span-12"
                : isFeatured
                ? "lg:col-span-8 md:col-span-2"
                : isSecondWide
                ? "lg:col-span-8 md:col-span-2"
                : "lg:col-span-4 md:col-span-1";

            return (
              <div
                key={project.id}
                data-project-card="true"
                onClick={() => setActiveProject(project)}
                className={`group cursor-pointer rounded-[2rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1 ${spanClass}`}
              >
                {/* Double-Bezel Inner Core */}
                <div className="rounded-[calc(2rem-0.375rem)] bg-white dark:bg-[#18231E] p-4 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between h-full">
                  {/* Mockup Preview Container */}
                  <div className={`relative overflow-hidden rounded-[calc(2rem-0.75rem)] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-2 sm:p-3 flex items-center justify-center ${
                    isFeatured || isSecondWide ? "aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]" : "aspect-[16/10]"
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Card Meta Content */}
                  <div className="mt-6 flex flex-col gap-3">
                    {/* Tag Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F59E0B] px-3.5 py-1 text-[11px] font-bold text-black shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Arrow Button Row */}
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#16231C] dark:text-[#F2F7F4] group-hover:text-[#1E3A2B] dark:group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        {project.title}
                      </h3>

                      {/* Dark green circular arrow button */}
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A2B] text-white group-hover:bg-[#F59E0B] group-hover:text-black group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-sm ring-1 ring-white/10">
                        <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
