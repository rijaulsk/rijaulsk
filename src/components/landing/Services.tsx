"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Code2, Search, Rocket } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const capabilities = [
  {
    icon: Palette,
    title: "Brand & Identity Systems",
    description: "Visual foundation that represents your business clearly",
    points: [
      "Logo direction and color systems",
      "Consistent style guidelines",
      "Professional, purposeful design"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Layout,
    title: "Business Websites",
    description: "Fast, mobile-optimized sites built for conversion",
    points: [
      "Responsive across all devices",
      "Performance-tuned for speed",
      "Clear user flows and navigation"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Tailored digital tools that fit your workflow",
    points: [
      "Built for your specific needs",
      "Scalable architecture",
      "Clean, maintainable code"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Structured for visibility and lightning-fast loading",
    points: [
      "Technical SEO foundation",
      "Google Business setup & optimization",
      "Schema markup and metadata",
      "Lighthouse 90+ optimization"
    ],
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "Reliable handover with ongoing maintenance",
    points: [
      "Smooth production deployment",
      "Analytics and tracking setup",
      "Documentation and training",
      "Post-launch support available"
    ],
    gradient: "from-indigo-500/20 to-violet-500/20"
  }
];

export default function Capabilities() {
  return (
    <section id="services" className="relative w-full bg-background py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 animate-pulse-slow">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Full-Stack Capabilities
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            What I <span className="text-primary">Build</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Complete digital systems from brand identity to deployment. Each piece designed to work together.
          </p>
        </div>

        <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.slice(0, 3).map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeIn key={capability.title}>
                <Card className="group relative h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-[100px] transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {capability.description}
                    </p>
                    <ul className="space-y-2.5">
                      {capability.points.map((point, idx) => (
                        <li 
                          key={point} 
                          className="flex items-start text-sm text-foreground/60 group-hover:text-foreground/70 transition-all duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>

        <FadeInStagger className="mt-6 grid gap-6 md:grid-cols-2">
          {capabilities.slice(3).map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeIn key={capability.title}>
                <Card className="group relative h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-[100px] transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {capability.description}
                    </p>
                    <ul className="space-y-2.5">
                      {capability.points.map((point, idx) => (
                        <li 
                          key={point} 
                          className="flex items-start text-sm text-foreground/60 group-hover:text-foreground/70 transition-all duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
