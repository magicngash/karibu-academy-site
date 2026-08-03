'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, UtensilsCrossed, TrendingUp, Award } from 'lucide-react';

export default function FeaturedProgramme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-karibu p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-karibu-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-karibu-gold/20 text-karibu-gold border-karibu-gold/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
                <Star className="w-3.5 h-3.5 mr-1.5" />
                Featured Programme
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Restaurant Customer Excellence Programme
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our flagship programme designed specifically for restaurant teams. Transform
                every guest interaction into an unforgettable experience that drives repeat
                business, glowing reviews, and higher revenue.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: UtensilsCrossed, label: 'Service Excellence' },
                  { icon: TrendingUp, label: 'Revenue Growth' },
                  { icon: Award, label: 'Team Certification' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <item.icon className="w-5 h-5 text-karibu-gold flex-shrink-0" />
                    <span className="text-white/90 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => handleScroll('#restaurant-academy')}
                  className="bg-karibu-gold text-karibu-emerald-dark hover:bg-karibu-gold/90 font-semibold text-base shadow-xl shadow-karibu-gold/25 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScroll('#contact')}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base backdrop-blur-sm"
                >
                  Request Information
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/restaurant.png"
                  alt="Restaurant customer excellence"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-karibu-emerald-dark/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-karibu-gold/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-karibu-emerald-dark" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">40%</p>
                    <p className="text-sm text-muted-foreground">Avg. Revenue Increase</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
