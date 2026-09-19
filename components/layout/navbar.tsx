"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { nav, site } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

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
        rootMargin: "-80px 0px -60% 0px",
        threshold: prefersReduced ? 1 : 0,
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface-0/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="#top"
          className="flex min-h-[44px] items-center gap-2 rounded-md font-mono text-sm font-semibold uppercase tracking-widest focus-visible:outline-2"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {site.name}
          <span className="hidden text-muted-foreground sm:inline">/ {site.role}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex min-h-[44px] items-center rounded-md px-3 text-sm transition-colors focus-visible:outline-2 ${
                  isActive
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent aria-label="Mobile navigation">
              <SheetHeader>
                <SheetTitle>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {site.name} / {site.role}
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
                {nav.map((item) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`inline-flex min-h-[44px] items-center rounded-md px-2 text-base transition-colors ${
                        isActive
                          ? "bg-accent-muted text-accent font-medium"
                          : "text-foreground hover:bg-surface-1"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
