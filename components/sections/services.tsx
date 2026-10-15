"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Network, Headphones, Monitor, ShieldCheck, ChevronRight } from "lucide-react";
import { services } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Network,
  Headphones,
  Monitor,
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-36 bg-[#FBFBFA] dark:bg-[#111814] relative overflow-hidden">
      {/* Diffused ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-[#1E3A2B]/5 dark:bg-[#F59E0B]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#E5A00D]/30 bg-[#FFFBEB] dark:bg-[#1E3A2B]/40 text-[#855302] dark:text-[#F59E0B] shadow-xs mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5A00D] animate-pulse" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
              <span className="text-[#F59E0B]">Services</span> I Provide
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-5 pr-1.5 py-1.5 text-xs font-semibold text-white shadow-md ring-1 ring-white/10 hover:bg-[#274B38] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] self-start sm:self-auto"
          >
            <span>View All Services</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-xs group-hover:translate-x-0.5 group-hover:scale-105 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        {/* Services Cards Grid with Double-Bezel Architecture */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-[2rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="flex flex-col justify-between h-full rounded-[calc(2rem-0.375rem)] bg-white dark:bg-[#18231E] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-black/5 dark:ring-white/5">
                  <div>
                    {/* Squircle Icon Box with kinetic hover */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-[#F2F5F3] dark:bg-white/5 text-[#1E3A2B] dark:text-[#A8D5BA] group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:bg-[#1E3A2B] group-hover:text-[#F59E0B] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] mb-6 shadow-sm">
                      <Icon className="h-7 w-7" strokeWidth={1.25} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#16231C] dark:text-[#F2F7F4] mb-3 group-hover:text-[#1E3A2B] dark:group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#5F6E65] dark:text-[#9BB0A4]">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More link with arrow */}
                  <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16231C] dark:text-[#F2F7F4] group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" strokeWidth={1.25} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
