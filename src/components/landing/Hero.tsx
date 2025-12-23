"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative w-full bg-background pt-20 overflow-hidden">
      {/* Floating Animated Elements */}
      {mounted && (
        <>
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 animate-spin-slow">
            <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
              <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-1/4 animate-bounce-slow">
            <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
              <rect x="10" y="10" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" transform="rotate(45 30 30)" />
            </svg>
          </div>

          {/* Code Brackets */}
          <div className="absolute top-1/3 left-[15%] animate-pulse-slow">
            <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-25 text-primary">
              <path d="M15 10 L5 25 L15 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M35 10 L45 25 L35 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Grid Pattern */}
          <div className="absolute top-1/2 right-[10%] animate-float">
            <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-15">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Terminal Window */}
          <div className="absolute bottom-1/4 right-1/3 animate-float-delayed">
            <svg width="70" height="50" viewBox="0 0 70 50" className="opacity-20">
              <rect width="70" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <circle cx="10" cy="10" r="3" fill="currentColor" className="text-primary"/>
              <circle cx="20" cy="10" r="3" fill="currentColor" className="text-primary"/>
              <circle cx="30" cy="10" r="3" fill="currentColor" className="text-primary"/>
              <path d="M10 25 L20 35 L10 45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <line x1="25" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            </svg>
          </div>

          {/* Dots Pattern */}
          <div className="absolute top-[40%] left-[5%] animate-pulse-slow">
            <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
              {[...Array(5)].map((_, i) => (
                [...Array(5)].map((_, j) => (
                  <circle key={`${i}-${j}`} cx={10 + i * 15} cy={10 + j * 15} r="2" fill="currentColor" className="text-primary" />
                ))
              ))}
            </svg>
          </div>

          {/* Arrow Path */}
          <div className="absolute top-[20%] right-[20%] animate-bounce-slow">
            <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
              <path d="M10 30 Q30 10 50 30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" strokeDasharray="5,5"/>
              <polygon points="50,30 45,25 45,35" fill="currentColor" className="text-primary"/>
            </svg>
          </div>

          {/* Star Burst */}
          <div className="absolute bottom-[15%] left-[20%] animate-spin-slow">
            <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-20">
              <path d="M25 5 L27 20 L40 15 L30 25 L45 30 L30 35 L35 48 L25 38 L15 48 L20 35 L5 30 L20 25 L10 15 L23 20 Z" fill="currentColor" className="text-primary"/>
            </svg>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Digital <span className="text-primary">Systems</span> Built for Your Business
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
          <span className="text-primary font-semibold">Branding</span> → <span className="text-primary font-semibold">UI/UX</span> → <span className="text-primary font-semibold">Development</span> → <span className="text-primary font-semibold">SEO</span> → <span className="text-primary font-semibold">Deployment</span>
        </p>
        <p className="mt-3 text-xl leading-relaxed text-foreground/80 md:text-2xl font-semibold">
          Done Right.
        </p>
        <p className="mt-6 text-sm text-foreground/60 tracking-wide">
          Calm execution. Clear communication. Honest deliveries.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
            <a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
              Start a Conversation
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-foreground transition-all">
            <a href="#work">View My Work</a>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(15px) translateX(-15px); }
          66% { transform: translateY(-10px) translateX(10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
