'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Lightbulb,
  Clock,
  Shield,
  HandCoins,
  Globe,
  UserCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Practical & Actionable',
    desc: 'No fluff. Every module is designed for immediate real-world application with hands-on exercises and real case studies.',
  },
  {
    icon: UserCheck,
    title: 'Expert Facilitators',
    desc: 'Learn from seasoned industry professionals with decades of experience, not just academic instructors.',
  },
  {
    icon: Clock,
    title: 'Flexible Delivery',
    desc: 'Choose from online, in-person, or blended learning formats that fit your schedule and learning style.',
  },
  {
    icon: Shield,
    title: 'Certified Programs',
    desc: 'Industry-recognized certifications that boost your resume and demonstrate verified competencies.',
  },
  {
    icon: HandCoins,
    title: 'Affordable Investment',
    desc: 'Competitive pricing with flexible payment plans. We believe quality training should be accessible to all.',
  },
  {
    icon: Globe,
    title: 'Pan-African Reach',
    desc: 'Training delivery across East Africa with programs adapted to local market contexts and needs.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-semibold text-karibu-emerald-dark">Why Karibu Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Karibu{' '}
              <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We don&apos;t just teach theory. We transform behavior, build
              confidence, and create measurable results that matter to your
              career and your bottom line.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-karibu p-8 sm:p-10">
                <div className="text-karibu-gold text-4xl sm:text-5xl font-bold mb-2">98%</div>
                <div className="text-white text-lg font-medium mb-1">Client Satisfaction</div>
                <div className="text-white/60 text-sm">
                  Based on post-training surveys from the last 12 months
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="group flex gap-4 p-5 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-karibu-emerald-light/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <reason.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
