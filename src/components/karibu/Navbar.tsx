'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, GraduationCap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Industries', href: '#industries' },
  { label: 'Restaurant Academy', href: '#restaurant-academy' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg sm:text-xl font-bold leading-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Karibu
            </span>
            <span className={`text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-colors ${scrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
              Academy
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 ${
                scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <Button
            onClick={() => handleNav('#contact')}
            className="bg-karibu-gold text-karibu-emerald-dark hover:bg-karibu-gold/90 font-semibold shadow-lg shadow-karibu-gold/20"
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={scrolled ? 'text-foreground' : 'text-white'}
            >
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold text-primary">Karibu Academy</span>
                </div>
              </div>
              <div className="flex-1 py-4 px-3 overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 text-base font-medium rounded-lg text-foreground hover:bg-karibu-emerald-light transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="p-6 border-t border-border">
                <Button
                  onClick={() => handleNav('#contact')}
                  className="w-full bg-karibu-gold text-karibu-emerald-dark hover:bg-karibu-gold/90 font-semibold"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
