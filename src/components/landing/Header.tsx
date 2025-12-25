"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Logo and Tagline - FIXED: Removed SheetTitle from here */}
        <div className="flex flex-col min-w-0 flex-shrink">
          <a
            href="#home"
            className="text-xl font-bold text-foreground leading-tight block"
            onClick={closeMobileMenu}
          >
            Rijaul Sk
          </a>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            Founder @ DebugSwift | Instructor @ Welearn Academy
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-shrink-0">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Button
            asChild
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            <a
              href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu className="!h-6 !w-6" strokeWidth={2} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md [&>button]:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div className="flex flex-col min-w-0 flex-1">
                    {/* FIXED: Moved SheetTitle here (inside the Sheet) for accessibility */}
                    <SheetTitle asChild>
                      <a
                        href="#home"
                        className="text-xl font-bold text-foreground leading-tight"
                        onClick={closeMobileMenu}
                      >
                        Rijaul Sk
                      </a>
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Founder @ DebugSwift | Instructor @ Welearn Academy
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMobileMenu}
                    className="h-12 w-12 hover:bg-accent hover:text-accent-foreground rounded-md flex-shrink-0"
                  >
                    <X className="!h-6 !w-6" strokeWidth={2} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-1 items-center">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-lg w-full text-center"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-8">
                  <Button
                    asChild
                    className="w-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <a
                      href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start a Conversation
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
