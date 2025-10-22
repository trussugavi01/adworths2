import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AdWorthsLogo } from '@/components/AdWorthsLogo';
import { cn } from '@/lib/utils';
const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Our Work' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinksComponent = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            cn(
              "text-charcoal-gray hover:text-primary-blue transition-colors dark:text-off-white dark:hover:text-sky-blue",
              isActive ? "text-primary-blue dark:text-sky-blue font-semibold" : "",
              "py-2"
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <AdWorthsLogo />
            <div className="hidden sm:block">
              <p className="font-bold text-lg font-display text-foreground leading-tight">AdWorths</p>
              <p className="text-xs text-muted-foreground leading-tight">We are the Ads to Your Brand.</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <NavLinksComponent />
            <ThemeToggle />
            <Button asChild className="bg-accent-orange hover:bg-accent-orange/90 text-white font-bold transition-transform hover:scale-105 active:scale-95">
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-3/4">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">A list of navigation links for the website.</SheetDescription>
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center mb-8">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      <AdWorthsLogo />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <NavLinksComponent className="flex-col items-start gap-4 text-lg" />
                  <div className="mt-6">
                    <ThemeToggle />
                  </div>
                  <Button asChild className="mt-auto bg-accent-orange hover:bg-accent-orange/90 text-white font-bold w-full py-3 text-base">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Free Consultation</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}