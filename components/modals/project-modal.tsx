"use client";

import * as React from "react";
import Image from "next/image";
import { X, Calendar, MapPin, Building, Tag } from "lucide-react";
import { ProjectItem } from "@/lib/constants";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] animate-in fade-in"
      onClick={onClose}
    >
      {/* Outer Shell: Double-Bezel Window */}
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2.25rem] p-1.5 ring-1 ring-white/15 bg-white/10 dark:bg-white/5 shadow-2xl animate-in zoom-in-95 duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner Core */}
        <div className="max-h-[calc(90vh-0.75rem)] w-full overflow-y-auto rounded-[calc(2.25rem-0.375rem)] bg-[#FBFBFA] dark:bg-[#18231E] p-6 sm:p-8 text-[#16231C] dark:text-[#F2F7F4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-5 top-5 sm:right-7 sm:top-7 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A2B] text-white hover:bg-[#F59E0B] hover:text-black transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ring-1 ring-white/10 shadow-md"
          >
            <X className="h-4 w-4" strokeWidth={1.25} />
          </button>

          {/* Modal Header */}
          <div className="pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-bold text-black shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-[#5F6E65] dark:text-[#9BB0A4] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Project Meta Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4 text-xs">
            <div className="flex items-center gap-2.5">
              <Building className="h-4 w-4 text-[#F59E0B]" strokeWidth={1.25} />
              <div>
                <p className="text-[#88998F] font-medium">Client</p>
                <p className="font-bold text-[#16231C] dark:text-[#F2F7F4]">{project.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Tag className="h-4 w-4 text-[#F59E0B]" strokeWidth={1.25} />
              <div>
                <p className="text-[#88998F] font-medium">Category</p>
                <p className="font-bold text-[#16231C] dark:text-[#F2F7F4]">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 text-[#F59E0B]" strokeWidth={1.25} />
              <div>
                <p className="text-[#88998F] font-medium">Duration</p>
                <p className="font-bold text-[#16231C] dark:text-[#F2F7F4]">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-[#F59E0B]" strokeWidth={1.25} />
              <div>
                <p className="text-[#88998F] font-medium">Location</p>
                <p className="font-bold text-[#16231C] dark:text-[#F2F7F4]">{project.country}</p>
              </div>
            </div>
          </div>

          {/* Project Mockup Graphic */}
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 shadow-inner">
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={500}
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>

          {/* Deep Dive: Challenge, Solution, Impact */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* The Challenge */}
            <div className="rounded-2xl p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white dark:bg-[#1C2923] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] h-full flex flex-col">
                <h4 className="text-xs font-bold text-[#1E3A2B] dark:text-[#9BB0A4] uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5F6E65] dark:text-[#C6D8CD]">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white dark:bg-[#1C2923] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] h-full flex flex-col">
                <h4 className="text-xs font-bold text-[#1E3A2B] dark:text-[#9BB0A4] uppercase tracking-wider mb-2">
                  The Solution
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5F6E65] dark:text-[#C6D8CD]">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* The Impact */}
            <div className="rounded-2xl p-1.5 ring-1 ring-[#F59E0B]/30 bg-[#F59E0B]/10">
              <div className="rounded-[calc(1rem-0.125rem)] bg-[#FFFBEB] dark:bg-[#2A2312] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] h-full flex flex-col">
                <h4 className="text-xs font-bold text-[#B45309] dark:text-[#F59E0B] uppercase tracking-wider mb-2">
                  The Impact
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#78350F] dark:text-[#FEF3C7] font-medium">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>

          {/* Modal CTA Footer */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-5 pr-1.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#1E3A2B]/15 hover:bg-[#274B38] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ring-1 ring-white/10"
            >
              <span>Close Case Study</span>
              <span className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                <X className="h-4 w-4" strokeWidth={1.25} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
