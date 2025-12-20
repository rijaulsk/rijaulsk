"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
<<<<<<< HEAD
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Engagement', href: '#engagement' },
=======
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
>>>>>>> 08dc22f (first commit)
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
=======
      // Activates the glass effect after scrolling 10px
>>>>>>> 08dc22f (first commit)
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
<<<<<<< HEAD
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/75 backdrop-blur-lg border-b border-border/40 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl font-bold text-foreground">
            Rijaul Sk
          </a>
          <span className="hidden sm:block text-sm text-foreground/80">
            Founder @ DebugSwift
          </span>
        </div>
=======
        // Base styles: Sticky, Width, Z-index (keeps it above the grid)
        'sticky top-0 z-50 w-full transition-all duration-300',
        
        // Conditional Styles
        isScrolled
          ? 'bg-background/75 backdrop-blur-lg border-b border-border/40 shadow-sm' // Glassmorphism Active
          : 'bg-transparent' // Initial State (Clean)
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold text-foreground">
          Rijaul Sk
        </a>
>>>>>>> 08dc22f (first commit)
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
<<<<<<< HEAD
            <a href="#contact">
=======
            <a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
>>>>>>> 08dc22f (first commit)
              Start a Conversation
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            
<<<<<<< HEAD
=======
            {/* Mobile Menu Content - Added consistent Glassmorphism here too */}
>>>>>>> 08dc22f (first commit)
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <a href="#home" className="text-xl font-bold text-foreground" onClick={closeMobileMenu}>
                    Rijaul Sk
                  </a>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full">
<<<<<<< HEAD
                        <a href="#contact">
=======
                        <a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
>>>>>>> 08dc22f (first commit)
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