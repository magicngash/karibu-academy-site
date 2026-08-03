'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, MapPin, Layers } from 'lucide-react';

const options = [
  {
    icon: Monitor,
    title: 'Online Learning',
    description: 'Self-paced digital courses accessible from anywhere. Interactive modules, video lessons, quizzes, and downloadable resources.',
    features: ['Learn at your own pace', 'Access from any device', 'Interactive assessments', 'Certificate upon completion'],
  },
  {
    icon: MapPin,
    title: 'Physical Training',
    description: 'In-person workshops and sessions led by expert facilitators. Hands-on practice with real-world scenarios and role-playing.',
    features: ['Expert-led workshops', 'Hands-on practice', 'Networking opportunities', 'Team building exercises'],
  },
  {
    icon: Layers,
    title: 'Hybrid Programs',
    description: 'The best of both worlds. Combine online theory with practical in-person sessions for maximum learning impact.',
    features: ['Flexible scheduling', 'Theory + practice', 'Reduced travel time', 'Enhanced retention'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LearningOptions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="learning-options" className="py-20 sm:py-28 bg-karibu-emerald-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">Flexible Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learning Options That{' '}
            <span className="text-gradient">Fit Your Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you prefer the flexibility of online learning, the energy of in-person workshops, or a blend of both, we have a delivery method that works for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {options.map((option) => (
            <motion.div key={option.title} variants={itemVariants}>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{option.description}</p>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-karibu-emerald-light flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
