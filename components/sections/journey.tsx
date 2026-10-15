"use client";

import * as React from "react";
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { educationHistory, workHistory } from "@/lib/constants";

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-36 bg-[#F4F4EE]/60 dark:bg-[#111814]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Micro-pill eyebrow tag */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/20 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span>Education & Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
            My <span className="text-[#F59E0B]">Academic and Professional</span> Journey
          </h2>
        </div>

        {/* 2-Column Grid: Education vs Work Experience */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column: Education */}
          <div className="flex flex-col gap-8">
            {/* Double-Bezel Header Badge */}
            <div className="rounded-2xl p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white dark:bg-[#18231E] p-4 flex items-center gap-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59E0B] text-black shadow-sm">
                  <GraduationCap className="h-5 w-5" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#16231C] dark:text-[#F2F7F4]">Education</h3>
                  <p className="text-xs text-[#5F6E65] dark:text-[#9BB0A4]">Formal academic degrees & foundations</p>
                </div>
              </div>
            </div>

            {/* Timeline with Concentric Nodes and Connecting Hairline */}
            <div className="relative pl-6 sm:pl-8 flex flex-col gap-6 before:absolute before:left-2.5 sm:before:left-3 before:top-6 before:bottom-6 before:w-px before:bg-gradient-to-b before:from-[#F59E0B]/60 before:via-black/10 dark:before:via-white/15 before:to-transparent">
              {educationHistory.map((edu) => (
                <div key={edu.institution} className="relative">
                  {/* Concentric Node Indicator */}
                  <div className="absolute -left-6 sm:-left-8 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white dark:bg-[#18231E] ring-4 ring-[#F59E0B]/20 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B] ring-2 ring-white dark:ring-[#18231E]" />
                  </div>

                  {/* Double-Bezel Milestone Card */}
                  <div className="rounded-[1.75rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1">
                    <div className="rounded-[calc(1.75rem-0.375rem)] bg-white dark:bg-[#18231E] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 px-3 py-1 text-xs font-bold text-[#1E3A2B] dark:text-[#C6D8CD] mb-3">
                        <Calendar className="h-3.5 w-3.5 text-[#F59E0B]" strokeWidth={1.25} />
                        <span>{edu.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#16231C] dark:text-[#F2F7F4]">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-semibold text-[#F59E0B] mt-0.5 mb-2">
                        {edu.degree}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#5F6E65] dark:text-[#9BB0A4]">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div className="flex flex-col gap-8">
            {/* Double-Bezel Header Badge */}
            <div className="rounded-2xl p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white dark:bg-[#18231E] p-4 flex items-center gap-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A2B] text-[#F59E0B] shadow-sm ring-1 ring-white/10">
                  <Briefcase className="h-5 w-5" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#16231C] dark:text-[#F2F7F4]">Work Experience</h3>
                  <p className="text-xs text-[#5F6E65] dark:text-[#9BB0A4]">Professional internships & field roles</p>
                </div>
              </div>
            </div>

            {/* Timeline with Concentric Nodes and Connecting Hairline */}
            <div className="relative pl-6 sm:pl-8 flex flex-col gap-6 before:absolute before:left-2.5 sm:before:left-3 before:top-6 before:bottom-6 before:w-px before:bg-gradient-to-b before:from-[#F59E0B]/60 before:via-black/10 dark:before:via-white/15 before:to-transparent">
              {workHistory.map((work) => (
                <div key={work.company} className="relative">
                  {/* Concentric Node Indicator */}
                  <div className="absolute -left-6 sm:-left-8 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white dark:bg-[#18231E] ring-4 ring-[#F59E0B]/20 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B] ring-2 ring-white dark:ring-[#18231E]" />
                  </div>

                  {/* Double-Bezel Milestone Card */}
                  <div className="rounded-[1.75rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1">
                    <div className="rounded-[calc(1.75rem-0.375rem)] bg-white dark:bg-[#18231E] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3A2B] ring-1 ring-white/10 px-3 py-1 text-xs font-bold text-white mb-3">
                        <Calendar className="h-3.5 w-3.5 text-[#F59E0B]" strokeWidth={1.25} />
                        <span>{work.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#16231C] dark:text-[#F2F7F4]">
                        {work.company}
                      </h4>
                      <p className="text-sm font-semibold text-[#F59E0B] mt-0.5 mb-3">
                        {work.role}
                      </p>
                      <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#5F6E65] dark:text-[#9BB0A4]">
                        {work.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#F59E0B] shrink-0 mt-0.5" strokeWidth={1.25} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
