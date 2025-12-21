"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground md:text-5xl lg:text-7xl">
         Designing & Building Digital Systems — End to End
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          From branding and UI to development and deployment. Calm execution, clean structure, no inflated promises.
        </p>
        <p className="mt-4 font-semibold text-foreground/90">
          Clear communication. Honest execution. Reliable delivery.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">
              Start a Conversation
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#work">View Selected Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
