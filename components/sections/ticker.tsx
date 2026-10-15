"use client";

import * as React from "react";
import { tickerItems } from "@/lib/constants";

interface TickerProps {
  variant?: "primary" | "reverse";
}

export function Ticker({ variant = "primary" }: TickerProps) {
  // Duplicate array 3 times for continuous seamless marquee loop
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Dark green underlying angled strip with delicate ring */}
      <div
        className="absolute inset-0 -skew-y-1 transform bg-[#1E3A2B] dark:bg-[#162A20] opacity-90 scale-105 ring-1 ring-black/5 dark:ring-white/10"
        aria-hidden="true"
      />

      {/* Main Vibrant Amber Ribbon with delicate borders and specular highlights */}
      <div className="relative z-10 -skew-y-1 transform bg-[#F59E0B] py-3.5 shadow-lg border-y border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.12)]">
        <div className="flex overflow-hidden select-none group">
          <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-8 whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            {repeated.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-6 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#16231C]"
              >
                <span>{item}</span>
                <span className="text-[#16231C]/50 text-xs select-none" aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
