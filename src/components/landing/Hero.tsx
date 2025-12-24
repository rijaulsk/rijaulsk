"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const primaryButtonRef = useRef<HTMLDivElement>(null);
  const secondaryButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, buttonRef: React.RefObject<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Magnetic effect within 150px radius
    if (distance < 150) {
      const strength = (150 - distance) / 150;
      const moveX = (distanceX / distance) * strength * 15;
      const moveY = (distanceY / distance) * strength * 15;
      
      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      button.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleMouseLeave = (buttonRef: React.RefObject<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0px, 0px)';
  };

  // Track mouse for cursor glow
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <section id="home" className="relative w-full bg-background pt-16 md:pt-20 overflow-hidden">
      {/* Custom Cursor Glow */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary/30 transition-all duration-300 ease-out z-50"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

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
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
        {/* Animated Badge */}
        <div className="group mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 cursor-default">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Available for Select Projects</span>
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </div>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Digital <span className="text-primary relative inline-block">
            Systems
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
            </svg>
          </span> Built for Your Business
        </h1>
        
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <span className="text-primary font-semibold">Branding</span> → <span className="text-primary font-semibold">UI/UX</span> → <span className="text-primary font-semibold">Development</span> → <span className="text-primary font-semibold">SEO</span> → <span className="text-primary font-semibold">Deployment</span>
        </p>
        <p className="mt-3 text-xl leading-relaxed text-foreground/80 md:text-2xl font-semibold animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Done Right.
        </p>
        <p className="mt-6 text-sm text-foreground/60 tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          Calm execution. Clear communication. Honest deliveries.
        </p>

        {/* God-Level Interactive Buttons */}
        <div 
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
          onMouseMove={(e) => {
            handleMouseMove(e, primaryButtonRef);
            handleMouseMove(e, secondaryButtonRef);
          }}
          onMouseLeave={() => {
            handleMouseLeave(primaryButtonRef);
            handleMouseLeave(secondaryButtonRef);
          }}
        >
          {/* Primary Magnetic Button */}
          <div 
            ref={primaryButtonRef}
            className="relative transition-transform duration-200 ease-out"
          >
            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <Button 
              asChild 
              size="lg" 
              className="group relative text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
            >
              <a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </Button>
          </div>

          {/* Secondary Magnetic Button */}
          <div 
            ref={secondaryButtonRef}
            className="relative transition-transform duration-200 ease-out"
          >
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group relative text-base px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 overflow-hidden"
            >
              <a href="#work" className="relative z-10">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  View My Work
                  <svg 
                    className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Response within 24 hours</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse animation-delay-1000" />
            <span>2 project slots available</span>
          </div>
        </div>
      </div>

      {/* Section Divider Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,32 C320,80 640,0 960,32 C1280,64 1440,0 1440,32 L1440,80 L0,80 Z" 
            fill="hsl(var(--background))"
            className="opacity-100"
          />
        </svg>
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

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
