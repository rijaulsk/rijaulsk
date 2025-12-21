"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Engagement', href: '#engagement' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
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
            <a href="#contact">
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
                        <a href="#contact">
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