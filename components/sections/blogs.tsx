"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogs } from "@/lib/constants";

export function Blogs() {
  return (
    <section id="blogs" className="py-24 sm:py-36 bg-[#FBFBFA] dark:bg-[#111814]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            {/* Micro-pill eyebrow tag */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/20 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>News & Blogs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16231C] dark:text-[#F2F7F4]">
              Our Latest <span className="text-[#F59E0B]">News & Blogs</span>
            </h2>
          </div>

          {/* Button-in-button header CTA */}
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#1E3A2B] pl-5 pr-1.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#1E3A2B]/15 hover:bg-[#274B38] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] self-start sm:self-auto ring-1 ring-white/10"
          >
            <span>View All Blogs</span>
            <span className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px]">
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        {/* 3 Blog Cards in Double-Bezel Architecture */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group flex flex-col justify-between rounded-[2rem] p-1.5 ring-1 ring-black/5 dark:ring-white/10 bg-black/5 dark:bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1"
            >
              {/* Inner Core */}
              <div className="rounded-[calc(2rem-0.375rem)] bg-white dark:bg-[#18231E] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between h-full">
                <div>
                  {/* Image Container with Floating Arrow */}
                  <div className="relative overflow-hidden rounded-[calc(2rem-0.75rem)] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 aspect-[16/10] mb-5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={480}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    {/* Floating Amber Arrow Circle */}
                    <div className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-lg opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={1.25} />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-[11px] font-bold text-black shadow-xs">
                      {blog.category}
                    </span>
                    <span className="rounded-full bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 px-3 py-1 text-[11px] font-semibold text-[#5F6E65] dark:text-[#9BB0A4]">
                      {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#16231C] dark:text-[#F2F7F4] group-hover:text-[#1E3A2B] dark:group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] leading-snug">
                    {blog.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5F6E65] dark:text-[#9BB0A4]">
                    {blog.summary}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16231C] dark:text-[#F2F7F4] group-hover:text-[#F59E0B] transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
