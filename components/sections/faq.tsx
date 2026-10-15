"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/constants";

export function Faq() {
  const [activeFaq, setActiveFaq] = React.useState<string>("faq-2"); // Default open: Can I download your resume/CV

  const toggle = (id: string) => {
    setActiveFaq((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faqs" className="py-24 sm:py-36 bg-[#1E3A2B] text-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Micro-pill eyebrow tag */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span>FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Questions?{" "}
            <span className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#F59E0B] ml-1">
              Look here.
            </span>
          </h2>
        </div>

        {/* Accordion List with Double-Bezel Architecture & Fluid Motion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;

            return (
              <div
                key={faq.id}
                onClick={() => toggle(faq.id)}
                className={`group rounded-2xl p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${
                  isOpen
                    ? "bg-[#F59E0B]/20 ring-1 ring-[#F59E0B]/40 shadow-xl shadow-black/10"
                    : "bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10"
                }`}
              >
                {/* Inner Core */}
                <div
                  className={`rounded-[calc(1rem-0.125rem)] p-5 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen
                      ? "bg-[#F59E0B] text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                      : "bg-[#254636] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`text-base sm:text-lg tracking-tight transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isOpen ? "text-black font-extrabold" : "text-white/95 font-bold"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xs ${
                        isOpen
                          ? "bg-black text-[#F59E0B] rotate-180"
                          : "bg-[#162C21] text-[#F59E0B] group-hover:scale-105"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={1.25} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.25} />
                      )}
                    </div>
                  </div>

                  {/* Fluid Animated Content */}
                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm font-semibold leading-relaxed text-black/85">
                        {faq.answer}
                      </p>
                    </div>
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
