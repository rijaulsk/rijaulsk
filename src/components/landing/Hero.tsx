"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground md:text-5xl lg:text-7xl">
         I Build <span className="text-primary">Complete Digital Presence</span> for Businesses
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          From branding and design to development, SEO, and deployment — I handle the full system. No coordination chaos, no juggling multiple freelancers.
        </p>
        <p className="mt-4 font-semibold text-foreground/90">
          Founder @ DebugSwift | Teaching Web Dev @ Welearn Academy (2+ years, 100+ students)
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
              Start a Conversation
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#work">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
