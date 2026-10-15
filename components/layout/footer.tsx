"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Send, Mail } from "lucide-react";
import { site, nav } from "@/lib/constants";
import { Ticker } from "@/components/sections/ticker";
import { LinkedinIcon, InstagramIcon } from "@/components/ui/brand-icons";

export function Footer() {
  const [subscribed, setSubscribed] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer className="w-full bg-[#FBFBFA] pt-8">
      {/* Pre-footer Ticker Ribbon */}
      <div className="mb-16">
        <Ticker variant="reverse" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* "Let's Connect there" CTA Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-14 border-b border-black/5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C]">
            Let&apos;s <span className="text-[#F59E0B]">Connect</span> there
          </h2>

          <Link
            href="#contact"
            className="group relative inline-flex items-center rounded-full bg-[#1E3A2B]/5 p-1 ring-1 ring-[#1E3A2B]/10 hover:ring-[#1E3A2B]/20 active:scale-[0.98] transition-all duration-700 ease-agency self-start sm:self-auto"
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-6 pr-2 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(30,58,43,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] group-hover:bg-[#254636] transition-all duration-700 ease-agency">
              <span>Start a Project</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-xs group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-500 ease-agency">
                <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
              </span>
            </span>
          </Link>
        </div>

        {/* Footer Main Multi-Column Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link href="#top" className="group flex items-center gap-2.5 font-bold tracking-tight text-[#16231C]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] text-sm font-black text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-500 ease-agency group-hover:scale-105">
                M
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#16231C]">
                Mayo<span className="text-[#F59E0B]">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-[#5F6E65] max-w-xs">
              IT Support & Systems Specialist dedicated to resilient enterprise infrastructure,
              troubleshooting, network setups, and seamless operations.
            </p>

            {/* Double-Bezel Social Pills in Amber with Agency Spring Physics */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group p-1 rounded-full bg-black/[0.03] ring-1 ring-black/5 hover:ring-[#F59E0B]/30 hover:bg-[#F59E0B]/10 active:scale-95 transition-all duration-500 ease-agency"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_6px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-500 ease-agency">
                  <LinkedinIcon className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="group p-1 rounded-full bg-black/[0.03] ring-1 ring-black/5 hover:ring-[#F59E0B]/30 hover:bg-[#F59E0B]/10 active:scale-95 transition-all duration-500 ease-agency"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_6px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-500 ease-agency">
                  <Mail className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group p-1 rounded-full bg-black/[0.03] ring-1 ring-black/5 hover:ring-[#F59E0B]/30 hover:bg-[#F59E0B]/10 active:scale-95 transition-all duration-500 ease-agency"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_6px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-500 ease-agency">
                  <InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F59E0B]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#5F6E65]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors duration-300 ease-agency hover:text-[#16231C]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F59E0B]">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#5F6E65]">
              <p className="font-semibold text-[#16231C]">{site.phone}</p>
              <p>{site.email}</p>
              <p>{site.location}</p>
              <p className="text-[11px] text-[#88998E]">Available for Full-time & Contracts</p>
            </div>
          </div>

          {/* Col 4: Newsletter / Quick Email Input (3 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F59E0B]">
              Get the latest information
            </h4>
            <p className="text-xs text-[#5F6E65] leading-relaxed">
              Subscribe for IT infrastructure tips and project availability updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2 flex items-center">
              <input
                type="email"
                required
                placeholder="Email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full rounded-2xl bg-[#EBECE7]/70 ring-1 ring-black/5 px-4 py-3 pr-12 text-xs text-[#16231C] placeholder-[#88998E] focus:ring-1 focus:ring-[#1E3A2B] focus:outline-none transition-all duration-500 ease-agency"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E3A2B] text-white hover:bg-[#F59E0B] hover:text-black active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-500 ease-agency"
              >
                <Send className="h-3.5 w-3.5" strokeWidth={1.25} />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] font-bold text-[#10B981]">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-black/5 text-xs text-[#7F8F85]">
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-[#16231C]">{site.name}</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#top" className="transition-colors duration-300 ease-agency hover:text-[#16231C]">
              User Terms & Conditions
            </Link>
            <span className="text-black/10">|</span>
            <Link href="#top" className="transition-colors duration-300 ease-agency hover:text-[#16231C]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}