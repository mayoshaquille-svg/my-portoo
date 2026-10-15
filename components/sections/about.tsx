"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-36 bg-[#1E3A2B] text-white relative overflow-hidden">
      {/* Ambient radial mesh glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-[480px] w-[480px] rounded-full bg-radial from-[#F59E0B]/15 via-[#F59E0B]/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 -z-10 h-72 w-72 rounded-full bg-[#162C21] blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Portrait in Double-Bezel Concentric Framing with Micro-Pill Skill Badges */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[420px]">
              {/* Outer Shell Bezel */}
              <div className="relative z-10 mx-auto aspect-square rounded-full p-2 ring-1 ring-white/15 bg-white/5 shadow-2xl">
                {/* Inner Core Bezel with Specular Highlight */}
                <div className="relative h-full w-full overflow-hidden rounded-full p-1.5 ring-1 ring-[#F59E0B]/30 bg-gradient-to-b from-[#F59E0B]/20 via-[#1E3A2B]/40 to-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <Image
                    src="/images/about_mayo.png"
                    alt={`About ${site.name}`}
                    width={560}
                    height={560}
                    priority
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Micro-Pill Skill Badges radiating along bottom edge */}
              <div className="absolute -bottom-3 inset-x-0 flex flex-wrap justify-center gap-1.5 sm:gap-2 px-2 z-20">
                <span className="rounded-full bg-[#F59E0B] px-3.5 py-1 text-[10px] uppercase tracking-wider font-bold text-black shadow-lg ring-1 ring-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] -rotate-2 select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105">
                  Hardware Diagnostics
                </span>
                <span className="rounded-full bg-[#162C21] px-3.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white shadow-lg ring-1 ring-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] rotate-1 select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105">
                  LAN Cabling
                </span>
                <span className="rounded-full bg-[#F59E0B] px-3.5 py-1 text-[10px] uppercase tracking-wider font-bold text-black shadow-lg ring-1 ring-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] rotate-3 select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105">
                  CCTV Systems
                </span>
                <span className="rounded-full bg-[#162C21] px-3.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white shadow-lg ring-1 ring-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] -rotate-1 select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105">
                  WiFi Networks
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Telemetry Metrics Counters, Download CV, Signature */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            {/* Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#E5A00D]/30 bg-[#FFFBEB]/10 text-[#F59E0B] shadow-xs mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E5A00D] animate-pulse" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Who is{" "}
                <span className="text-[#F59E0B]">
                  {site.shortName} Shaquille?
                </span>
              </h2>
            </div>

            {/* Bio story paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-[#C6D8CD]">
              Fresh Graduate in Information Systems from Universitas Riau with direct field
              experience at PT Pertamina EP Field Lirik and Telkom Plasa. Proficient in diagnosing
              hardware faults, engineering clean LAN cabling infrastructures, configuring WiFi
              access points, and deploying digital display kiosks that keep operational teams
              running without friction.
            </p>

            {/* Clean Telemetry Metrics with Inner Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="rounded-2xl p-4 sm:p-5 ring-1 ring-white/10 bg-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight">
                  3.71
                </p>
                <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wider font-medium text-[#C6D8CD]/80">
                  IPK / GPA (S.Kom)
                </p>
              </div>

              <div className="rounded-2xl p-4 sm:p-5 ring-1 ring-white/10 bg-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight">
                  5<span className="text-2xl sm:text-3xl font-extrabold">+</span>
                </p>
                <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wider font-medium text-[#C6D8CD]/80">
                  Hands-on Projects
                </p>
              </div>

              <div className="rounded-2xl p-4 sm:p-5 ring-1 ring-white/10 bg-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight">
                  10<span className="text-2xl sm:text-3xl font-extrabold">+</span>
                </p>
                <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wider font-medium text-[#C6D8CD]/80">
                  Core Tech Skills
                </p>
              </div>
            </div>

            {/* Action Row: Download CV Pill + Cursive Signature */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
              <a
                href={site.cvUrl}
                download="CV M.Mayo Shaquille.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#162C21] ring-1 ring-white/15 pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:ring-[#F59E0B]/50 hover:bg-[#203D2F] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <span>Download CV</span>
                <span className="w-8 h-8 rounded-full bg-[#F59E0B] text-black flex items-center justify-center shadow-sm group-hover:translate-x-1 group-hover:-translate-y-[0.5px] group-hover:scale-105 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </a>

              {/* Cursive Signature */}
              <div className="flex items-center">
                <span className="font-cursive text-3xl sm:text-4xl text-[#F59E0B] tracking-wide select-none drop-shadow-sm">
                  Mayo Shaquille
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
