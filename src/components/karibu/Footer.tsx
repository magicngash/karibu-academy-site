'use client';

import { GraduationCap, ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  Programs: [
    { label: 'Customer Service', href: '#courses' },
    { label: 'Leadership', href: '#courses' },
    { label: 'Workplace Skills', href: '#courses' },
    { label: 'Sales & Business', href: '#courses' },
    { label: 'Restaurant Academy', href: '#restaurant-academy' },
    { label: 'Training Packages', href: '#packages' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Industries', href: '#industries' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-karibu-emerald-dark text-white">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to Transform Your Team?
            </h3>
            <p className="text-white/80 text-base sm:text-lg">
              Join 500+ organizations that trust Karibu Academy.
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => handleNav('#contact')}
            className="bg-karibu-gold text-karibu-emerald-dark hover:bg-karibu-gold/90 font-semibold shadow-xl shadow-black/20 whitespace-nowrap"
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-karibu-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Karibu</span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-white/50">
                  Academy
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming people and strengthening businesses through
              practical, industry-focused training across East Africa.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-karibu-gold/20 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4 text-white/70 hover:text-karibu-gold" />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-white/60 hover:text-karibu-gold text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Westlands, Nairobi, Kenya</li>
              <li>Sarit Centre, 5th Floor</li>
              <li className="text-karibu-gold">+254 700 123 456</li>
              <li className="text-karibu-gold">info@karibuacademy.co.ke</li>
            </ul>
            {/* WhatsApp button */}
            <Button
              variant="outline"
              size="sm"
              className="mt-5 border-green-500/40 text-green-400 hover:bg-green-500/10 hover:text-green-300 gap-2"
              onClick={() => window.open('https://wa.me/254700123456', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <Separator className="bg-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Karibu Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <button className="hover:text-white/60 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/60 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 flex items-center justify-center transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
