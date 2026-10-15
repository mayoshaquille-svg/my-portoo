"use client";

import * as React from "react";
import { Monitor, Terminal, Router, Activity, Wrench, Camera, ShieldCheck } from "lucide-react";
import { tools } from "@/lib/constants";

const toolIcons: Record<string, React.ElementType> = {
  Monitor,
  Terminal,
  Router,
  Activity,
  Wrench,
  Camera,
};

export function Tools() {
  return (
    <section id="tools" className="py-24 sm:py-36 bg-[#FBFBFA] dark:bg-[#111814] relative overflow-hidden">
      {/* Diffused ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-[#1E3A2B]/5 dark:bg-[#F59E0B]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#E5A00D]/30 bg-[#FFFBEB] dark:bg-[#1E3A2B]/40 text-[#855302] dark:text-[#F59E0B] shadow-xs mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5A00D] animate-pulse" />
            <span>My Favorite Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
            <span className="text-[#F59E0B]">Exploring the Tools</span> Behind My Work
          </h2>
        </div>

        {/* 6 Double-Bezel Capsule Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {tools.map((tool) => {
            const Icon = toolIcons[tool.icon] || ShieldCheck;
            return (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-4 select-none"
              >
                {/* Double-Bezel Vertical Pill Capsule */}
                <div className="relative flex flex-col items-center rounded-full p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 shadow-md transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-2xl">
                  {/* Inner Capsule Core with Specular Highlight */}
                  <div className="relative flex flex-col items-center justify-between rounded-full bg-white dark:bg-[#18231E] p-3 pb-7 w-28 h-52 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-black/5 dark:ring-white/5">
                    {/* Top Circular Icon Container */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-black/5 dark:ring-white/10 bg-[#F3F5F2] dark:bg-white/5 text-[#1E3A2B] dark:text-[#A8D5BA] shadow-xs group-hover:scale-105 group-hover:bg-[#1E3A2B] group-hover:text-[#F59E0B] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <Icon className="h-8 w-8" strokeWidth={1.25} />
                    </div>

                    {/* Percentage Score & Telemetry */}
                    <div className="flex flex-col items-center text-center">
                      <span className="text-2xl font-black text-[#16231C] dark:text-[#F2F7F4] tracking-tight group-hover:text-[#1E3A2B] dark:group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        {tool.percentage}%
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8B9B91] dark:text-[#9BB0A4] mt-0.5">
                        Proficiency
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tool Name Label */}
                <span className="text-xs sm:text-sm font-bold text-[#16231C] dark:text-[#F2F7F4] group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] text-center tracking-tight">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
