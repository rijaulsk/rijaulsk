import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const capabilities = [
  "Brand & UI Systems",
  "Business & Professional Websites",
  "Custom Web Applications",
  "Performance & Technical Optimization",
  "SEO-ready Foundations",
  "Deployment & Ongoing Support",
];

export default function WhatIHandle() {
  return (
    <section id="capabilities" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">What I Handle</h2>
        </div>
        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <FadeIn key={capability}>
              <Card className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold leading-snug">{capability}</CardTitle>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}