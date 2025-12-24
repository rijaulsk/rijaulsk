"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, FadeInStagger } from "../ui/fade-in";
import { Code2, GraduationCap, Briefcase, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Building Since",
    value: "2017",
  },
  {
    icon: GraduationCap,
    label: "Students Trained",
    value: "100+",
  },
  {
    icon: Briefcase,
    label: "Teaching Experience",
    value: "2+ Years",
  },
  {
    icon: Award,
    label: "Projects Delivered",
    value: "Multiple",
  },
];

export default function About() {
  const authorImage = PlaceHolderImages.find((p) => p.id === "rijaulsk-photo");

  return (
    <section
      id="about"
      className="relative w-full bg-background py-16 md:py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* Image Side */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-accent/40 to-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />

                {/* Image Container */}
                <div className="relative">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-border/50 group-hover:border-primary/50 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105">
                    <img
                      src="/images/rijaulsk.png"
                      alt="Rijaul Sk - Full Stack Developer"
                      width={250}
                      height={250}
                      className="rounded-full object-cover aspect-square w-full h-full"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent animate-pulse animation-delay-2000" />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="group/stat bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary group-hover/stat:bg-primary group-hover/stat:text-primary-foreground transition-all duration-300">
                          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                        </div>
                        <p className="text-xs text-foreground/50 font-medium">
                          {stat.label}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-foreground group-hover/stat:text-primary transition-colors duration-300">
                        {stat.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Person Behind the Work
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              About <span className="text-primary">Me</span>
            </h2>

            <FadeInStagger className="mt-8 space-y-6">
              <FadeIn>
                <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative z-10 text-base leading-relaxed text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                    I'm{" "}
                    <span className="font-semibold text-foreground">
                      Rijaul Sk
                    </span>{" "}
                    — Founder of{" "}
                    <span className="text-primary font-semibold">
                      DebugSwift
                    </span>{" "}
                    and Instructor at{" "}
                    <span className="text-primary font-semibold">
                      Welearn Academy
                    </span>
                    .
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative z-10 text-base leading-relaxed text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                    I've been building websites and digital systems since{" "}
                    <span className="font-semibold text-primary">2017</span>,
                    starting from my college days. What started as curiosity
                    turned into a skill set that covers branding, design,
                    development, SEO, and deployment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative z-10 text-base leading-relaxed text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                    I founded{" "}
                    <span className="font-semibold text-primary">
                      DebugSwift
                    </span>{" "}
                    to handle custom projects for businesses that need complete
                    digital execution — not just a website, but the full system.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative z-10 text-base leading-relaxed text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                    I also teach web development, Python, digital marketing, and
                    design at Welearn Academy, where I've trained{" "}
                    <span className="font-semibold text-primary">
                      100+ students
                    </span>{" "}
                    over the past 2+ years. Teaching keeps my fundamentals
                    strong and my approach structured.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative z-10 text-base leading-relaxed text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                    I work with modern tools and frameworks, but I'm not locked
                    to any single stack. I choose what fits the problem —
                    whether that's React, WordPress, PHP/MySQL, or custom
                    solutions.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="group relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground flex-shrink-0 mt-0.5">
                      <Award className="h-4 w-4" />
                    </div>
                    <p className="text-base leading-relaxed font-semibold text-foreground">
                      I don't sell growth promises or inflated guarantees. I
                      focus on clean execution, honest communication, and
                      delivering what I commit to.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </FadeIn>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
