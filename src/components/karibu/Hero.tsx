'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Professional training session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-karibu-emerald-dark/95 via-karibu-emerald-dark/80 to-karibu-emerald-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-karibu-emerald-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-karibu-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="bg-karibu-gold/20 text-karibu-gold border-karibu-gold/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Trusted by 500+ Organizations
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Transforming People.
            <br />
            <span className="text-karibu-gold">Strengthening</span> Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            Karibu Academy delivers practical, industry-focused training that
            empowers individuals and elevates organizational performance across
            hospitality, retail, healthcare, banking, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScroll('#courses')}
              className="bg-karibu-gold text-karibu-emerald-dark hover:bg-karibu-gold/90 font-semibold text-base px-8 py-6 shadow-xl shadow-karibu-gold/25 group"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll('#packages')}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-6 backdrop-blur-sm"
            >
              Book a Consultation
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => handleScroll('#contact')}
              className="text-white/80 hover:text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex flex-wrap items-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-karibu-gold" />
              <span>ISO Certified Training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-karibu-gold" />
              <span>10,000+ Graduates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-karibu-gold" />
              <span>Industry Experts</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
