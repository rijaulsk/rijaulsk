"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Telescope, DraftingCompass, Code, Rocket } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const processSteps = [
  {
    icon: Telescope,
    title: "Understand",
    description: "Goals, constraints, and context come first. I dig into what you need and why before proposing solutions.",
    details: ["Business objectives", "Target audience", "Technical requirements", "Success metrics"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: DraftingCompass,
    title: "Design & Plan",
    description: "UI, structure, and technical decisions are made deliberately with your input at each stage.",
    details: ["Wireframes & mockups", "Information architecture", "Tech stack selection", "Timeline planning"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Code,
    title: "Build & Optimize",
    description: "Clean, performance-focused execution. Regular updates keep you informed as the system takes shape.",
    details: ["Component development", "Performance tuning", "SEO implementation", "Quality assurance"],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Smooth deployment with documentation, training, and continued support to ensure long-term success.",
    details: ["Production deployment", "Analytics setup", "Documentation", "Post-launch support"],
    gradient: "from-orange-500/20 to-amber-500/20"
  }
];

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-muted/30 py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-dot opacity-[0.03]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Structured Approach
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            A clear, repeatable process that reduces risk and delivers results. No surprises, just steady progress.
          </p>
        </div>

        {/* Desktop Timeline */}
        <FadeInStagger className="mt-16 relative hidden md:block">
          {/* Connecting Line with Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse-slow opacity-50"></div>
          </div>
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <FadeIn key={step.title} className="relative mb-16 last:mb-0">
                <div className="flex items-center" style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}>
                  {/* Card Side */}
                  <div className={`w-1/2 ${isEven ? 'pr-12' : 'pl-12'}`}>
                    <Card className="group relative shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Corner Accent */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-20 h-20 bg-primary/10 ${isEven ? 'rounded-bl-[100px]' : 'rounded-br-[100px]'} transform ${isEven ? 'translate-x-10' : '-translate-x-10'} -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`} />

                      <CardContent className="relative z-10 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                            <Icon className="h-7 w-7" strokeWidth={2} />
                          </div>
                          <h3 className="text-2xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed text-foreground/70 mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li 
                              key={detail} 
                              className="flex items-start text-sm text-foreground/60 group-hover:text-foreground/70 transition-all duration-300"
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      {/* Bottom Glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>
                  </div>

                  {/* Empty Side for Layout */}
                  <div className="w-1/2"></div>
                </div>
                
                {/* Center Number Badge with Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                    {/* Main Badge */}
                    <div className="relative w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-default">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (except last item) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8 z-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary/40 animate-bounce-slow">
                      <path d="M12 5v14m0 0l-4-4m4 4l4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </FadeIn>
            );
          })}
        </FadeInStagger>

        {/* Mobile Stack */}
        <FadeInStagger className="mt-12 md:hidden space-y-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <FadeIn key={step.title}>
                <Card className="group relative shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <CardContent className="relative z-10 p-6">
                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-lg">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/70 mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li 
                          key={detail} 
                          className="flex items-start text-xs text-foreground/60 group-hover:text-foreground/70 transition-all duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
