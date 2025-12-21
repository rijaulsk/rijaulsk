import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package, BookOpen, Zap, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";


interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Package,
    title: "End-to-End Execution",
    description: "I don't just code — I design, optimize, and deploy complete systems. No coordination headaches."
  },
  {
    icon: BookOpen,
    title: "Teaching Experience",
    description: "I've taught 100+ students web development, design, SEO, and marketing at Welearn Academy for 2+ years. I can explain things clearly."
  },
  {
    icon: Zap,
    title: "Performance-Focused",
    description: "Every site I build is architected for speed and clean code. Lighthouse 90+ is my baseline, not a goal."
  },
  {
    icon: ThumbsUp,
    title: "Honest Communication",
    description: "I don't sell business guarantees or fake promises. I focus on correct execution and reliable delivery."
  }
];

export default function WhyMe() {
  return (
    <section id="why-me" className="w-full py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">Why Work With Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/80">
            More than a freelancer, a partner in building your digital presence.
          </p>
        </div>
        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-2">
          {differentiators.map((item) => (
            <FadeIn key={item.title}>
              <Card className="shadow-sm h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary animate-levitate">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
