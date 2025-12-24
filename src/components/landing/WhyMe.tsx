import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package, BookOpen, Zap, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
  microcopy: string;
  gradient: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Package,
    title: "End-to-End Execution",
    description: "I don't just code — I handle design, optimization, and deployment as complete systems. One person, full ownership, no coordination headaches.",
    microcopy: "From concept to launch, handled.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: BookOpen,
    title: "Teaching Background",
    description: "I've taught 100+ students web development, design, SEO, and marketing at Welearn Academy for 2+ years. I can break down complex concepts into clear explanations.",
    microcopy: "Clear communication, always.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Zap,
    title: "Performance-Focused Builds",
    description: "Every project is architected for speed, scalability, and clean code. Lighthouse 90+ scores are my baseline standard, not an aspiration.",
    microcopy: "Fast sites, maintainable code.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description: "I don't sell business guarantees or inflated promises. I focus on correct technical execution, realistic timelines, and reliable delivery.",
    microcopy: "I return clarity, not confusion.",
    gradient: "from-orange-500/20 to-amber-500/20"
  }
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative w-full bg-background py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Your Partner in Digital Growth
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Why Work <span className="text-primary">With Me</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            More than technical skills — a reliable partner who understands both the code and the business context.
          </p>
        </div>

        <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <FadeIn key={item.title}>
                <Card className="group relative h-full shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[100px] transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  
                  {/* Animated Number Badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>

                  <CardHeader className="relative z-10 flex flex-row items-start gap-4 pb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 shadow-lg flex-shrink-0">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {item.title}
                      </CardTitle>
                      <p className="text-xs text-primary/70 font-medium mt-1 italic group-hover:text-primary transition-colors duration-300">
                        {item.microcopy}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0">
                    <p className="text-sm leading-relaxed text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Side Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>

        {/* Trust Statement */}
        <FadeIn className="mt-12 text-center">
          <div className="inline-block px-6 py-4 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
            <p className="text-base font-medium text-foreground/80 max-w-2xl">
              I work with businesses and professionals who value{" "}
              <span className="text-primary font-semibold">clarity</span>,{" "}
              <span className="text-primary font-semibold">quality</span>, and{" "}
              <span className="text-primary font-semibold">reliable execution</span>.
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </section>
  );
}
