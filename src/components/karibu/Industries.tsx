'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Hotel,
  UtensilsCrossed,
  Building2,
  Stethoscope,
  ShoppingCart,
  Landmark,
  HeartHandshake,
  Building,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredIndustries = [
  {
    icon: Hotel,
    name: 'Hotels',
    desc: 'From front desk to concierge, housekeeping to food & beverage — we train your entire hotel team to deliver world-class hospitality experiences that earn glowing reviews and repeat bookings.',
    image: '/images/industries.png',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurants & Cafés',
    desc: 'Our flagship Restaurant Customer Excellence Programme transforms waitstaff, hosts, and managers into service professionals who create memorable dining experiences.',
    image: '/images/restaurant.png',
  },
];

const industries = [
  {
    icon: ShoppingCart,
    name: 'Retail',
    desc: 'Customer engagement, sales techniques, visual merchandising, and store management training for retail teams.',
  },
  {
    icon: Stethoscope,
    name: 'Hospitals & Healthcare',
    desc: 'Patient communication, bedside manner, healthcare administration, and patient experience improvement.',
  },
  {
    icon: Landmark,
    name: 'Banks & Financial Services',
    desc: 'Financial customer care, compliance, relationship management, and professional banking service standards.',
  },
  {
    icon: HeartHandshake,
    name: 'NGOs & Development',
    desc: 'Stakeholder engagement, community relations, programme management, and donor communication skills.',
  },
  {
    icon: Building,
    name: 'Government & Public Sector',
    desc: 'Public service delivery, citizen engagement, administrative excellence, and inter-departmental communication.',
  },
  {
    icon: Building2,
    name: 'SMEs & Startups',
    desc: 'Customer acquisition, team building, professional practices, and scalable business communication skills.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="industries" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-emerald-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expertise Across{' '}
            <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The same world-class training programmes, tailored to the unique demands and
            standards of each industry. We understand that great service looks different
            in every sector.
          </p>
        </motion.div>

        {/* Featured Industries (with images) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredIndustries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[16/10] relative">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-karibu-emerald-dark/90 via-karibu-emerald-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <Badge className="bg-karibu-gold text-karibu-emerald-dark border-0 font-medium mb-3">
                    {ind.name}
                  </Badge>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={itemVariants}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <ind.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{ind.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-karibu-emerald-dark group/btn transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">Don&apos;t see your industry? We serve many more.</p>
          <Button
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20"
          >
            Discuss Your Industry Needs
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
