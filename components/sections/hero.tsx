import { ArrowRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit">
            {site.location} / Open to work
          </Badge>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {site.name} — {site.role}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {site.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail aria-hidden="true" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
