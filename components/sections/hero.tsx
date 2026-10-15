"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative min-h-[100dvh] flex flex-col justify-center py-24 sm:py-36 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#F59E0B]/10 dark:bg-[#F59E0B]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Thesis & Actions */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            {/* Microscopic Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#E5A00D]/30 bg-[#FFFBEB] dark:bg-[#1E3A2B]/40 text-[#855302] dark:text-[#F59E0B] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5A00D] animate-pulse" />
              <span>Hello There!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4] lg:leading-[1.12]">
              I&apos;m{" "}
              <span className="text-[#F59E0B] font-extrabold">
                {site.shortName} Shaquille,
              </span>
              <br />
              <span className="text-[#1E3A2B] dark:text-[#A8D5BA]">IT Support Specialist</span>
              <br />
              <span className="text-[#243B30] dark:text-[#D1E2D7] font-bold">Based in Indonesia.</span>
            </h1>

            {/* Short Bio Subtitle */}
            <p className="max-w-xl text-base leading-relaxed text-[#5F6E65] dark:text-[#9BB0A4] sm:text-lg">
              Experienced IT Support & Systems Specialist with hands-on expertise in
              hardware troubleshooting, network cabling, enterprise CCTV deployment,
              and ensuring maximum uptime for teams.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Button-in-Button CTA */}
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-5 sm:pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-xl ring-1 ring-white/10 hover:bg-[#274B38] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                <span>View My Portfolio</span>
                <span className="w-8 h-8 rounded-full bg-[#F59E0B] text-black flex items-center justify-center shadow-sm group-hover:translate-x-1 group-hover:-translate-y-[0.5px] group-hover:scale-105 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <Play className="h-3.5 w-3.5 fill-black ml-0.5" strokeWidth={1.25} />
                </span>
              </Link>

              {/* Secondary Outline Pill */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-md px-6 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-[#1E3A2B] dark:text-white shadow-xs ring-1 ring-black/5 dark:ring-white/10 hover:border-[#1E3A2B] hover:bg-[#1E3A2B] hover:text-white dark:hover:bg-white/10 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                Hire Me
              </Link>
            </div>

            {/* Quick signals / pills */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-[#6F7F76] dark:text-[#9BB0A4]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                Open for roles & contracts
              </span>
              <span className="text-black/20 dark:text-white/20">•</span>
              <span>Universitas Riau Graduate</span>
              <span className="text-black/20 dark:text-white/20">•</span>
              <span>Pertamina EP & Telkom Alumni</span>
            </div>
          </div>

          {/* Right Column: Profile Picture with Double-Bezel Framing & Rotating Stamp */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
              {/* Outer Shell Double-Bezel Framing */}
              <div className="rounded-[2.5rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 shadow-2xl">
                {/* Inner Core with Specular Highlight */}
                <div className="relative overflow-hidden rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-b from-[#FFF5E0] to-[#FCEAC2] dark:from-[#1E3A2B]/40 dark:to-[#162C21]/60 pt-4 px-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-black/5 dark:ring-white/5">
                  <Image
                    src="/images/hero_mayo.png"
                    alt={site.name}
                    width={660}
                    height={660}
                    priority
                    className="relative z-10 w-full h-auto object-cover drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Circular Rotating "HIRE ME" Live Animated Stamp overlay */}
              <div
                className="absolute right-0 sm:right-[2%] top-[14%] sm:top-[20%] z-30 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-[#1E3A2B] text-white shadow-2xl ring-1 ring-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Hire Me circular stamp"
              >
                {/* Rotating Text */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <path
                      id="circlePathHero"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="fill-white text-[9.5px] font-bold tracking-[0.24em] uppercase">
                      <textPath href="#circlePathHero">
                        HIRE ME • HIRE ME • HIRE ME •
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Amber Icon Circle */}
                <div className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating Role Pill 1: Bottom Left */}
              <div className="absolute left-3 bottom-8 z-30 hidden sm:flex items-center gap-2 rounded-full bg-[#1E3A2B]/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-xl ring-1 ring-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] select-none hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>IT Support Specialist</span>
              </div>

              {/* Floating Role Pill 2: Bottom Right */}
              <div className="absolute right-3 bottom-3 z-30 hidden sm:flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-semibold text-black shadow-xl ring-1 ring-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] select-none hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>Systems & Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
