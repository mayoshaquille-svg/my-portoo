"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("top");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const sectionIds = nav.map((item) => item.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0,
      }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full bg-[#1E3A2B]/95 p-1.5 pl-5 pr-2 sm:pl-6 sm:pr-2 text-white ring-1 ring-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-500 ease-agency ${
          scrolled ? "bg-[#1E3A2B]/90 shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]" : ""
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-white"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F59E0B] text-xs font-black text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-500 ease-agency group-hover:scale-105">
            M
          </span>
          <span className="text-base font-extrabold tracking-tight text-white">
            Mayo<span className="text-[#F59E0B]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-[#C2D6CB]">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 transition-all duration-500 ease-agency ${
                  isActive
                    ? "bg-white/[0.08] font-semibold text-[#F59E0B] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "text-[#C2D6CB] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button: Nested Button-in-Button Architecture */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#contact"
            className="group relative inline-flex items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/15 hover:ring-white/25 active:scale-[0.98] transition-all duration-700 ease-agency"
          >
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#1E3A2B] shadow-sm transition-all duration-700 ease-agency group-hover:bg-[#F59E0B] group-hover:text-black">
              <span>Contact Me</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-agency group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button with Fluid 2-line Morph */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2A4B3A]/80 text-white ring-1 ring-white/10 hover:bg-[#F59E0B] hover:text-black active:scale-95 transition-all duration-500 ease-agency focus:outline-none"
          >
            <div className="relative h-4 w-4 flex items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-4 bg-current rounded-full transition-all duration-500 ease-agency ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-1 rotate-0"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current rounded-full transition-all duration-500 ease-agency ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-1 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu: Heavy glass backdrop-blur-3xl with staggered slide-up mask reveal */}
      {open && (
        <div className="lg:hidden mt-2.5 mx-auto max-w-5xl rounded-3xl bg-[#1E3A2B]/90 backdrop-blur-3xl ring-1 ring-white/10 p-5 sm:p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] animate-in fade-in slide-in-from-top-3 duration-500 ease-agency">
          <div className="flex flex-col gap-2">
            {nav.map((item, index) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              const delays = ["delay-75", "delay-100", "delay-150", "delay-200", "delay-300"];
              const delayClass = delays[index] || "delay-75";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-500 ease-agency animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards ${delayClass} ${
                    isActive
                      ? "bg-[#F59E0B] text-black font-semibold shadow-xs"
                      : "text-white/80 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" strokeWidth={1.25} />
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-white/10 animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards delay-300 duration-500 ease-agency">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="group relative flex w-full items-center justify-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 active:scale-[0.98] transition-all duration-700 ease-agency shadow-sm"
              >
                <span className="flex w-full items-center justify-center rounded-full bg-[#F59E0B] py-2.5 text-sm font-bold text-black transition-all duration-500 ease-agency group-hover:bg-amber-400">
                  Contact Me
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}