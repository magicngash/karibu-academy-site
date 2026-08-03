'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Headphones,
  Target,
  Users,
  Briefcase,
  HeartHandshake,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Headphones,
    title: 'Customer Service Excellence',
    desc: 'Master the art of exceptional service delivery. Learn communication, complaint handling, and customer retention strategies that drive loyalty and growth.',
    badge: 'Most Popular',
    features: ['Service Standards & Protocols', 'Conflict Resolution', 'Customer Journey Mapping', 'NPS Improvement Strategies'],
  },
  {
    icon: Target,
    title: 'Leadership & Management',
    desc: 'Develop the skills to lead high-performing teams. From new managers to senior executives, our programs build confident, effective leaders.',
    badge: 'Executive',
    features: ['Strategic Thinking', 'Team Performance Management', 'Change Leadership', 'Executive Presence'],
  },
  {
    icon: Users,
    title: 'Workplace Communication',
    desc: 'Enhance professional communication across all levels. Build skills in presentation, negotiation, and interpersonal effectiveness.',
    badge: null,
    features: ['Business Writing', 'Presentation Skills', 'Active Listening', 'Cross-Cultural Communication'],
  },
  {
    icon: Briefcase,
    title: 'Professional Development',
    desc: 'Comprehensive career advancement programs covering essential workplace competencies, personal branding, and career strategy.',
    badge: null,
    features: ['Time Management', 'Problem Solving', 'Emotional Intelligence', 'Career Planning'],
  },
  {
    icon: HeartHandshake,
    title: 'Corporate Training Solutions',
    desc: 'Customized training programs designed specifically for your organization. We assess, design, deliver, and measure impact.',
    badge: 'Enterprise',
    features: ['Needs Assessment', 'Custom Curriculum Design', 'Blended Learning Delivery', 'ROI Measurement'],
  },
  {
    icon: BarChart3,
    title: 'Sales & Revenue Growth',
    desc: 'Equip your sales team with proven techniques to close deals, build relationships, and drive consistent revenue growth.',
    badge: null,
    features: ['Consultative Selling', 'Pipeline Management', 'Objection Handling', 'Account Growth Strategies'],
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-karibu-emerald-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">Our Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Training Programs That{' '}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each program is meticulously designed with industry experts to ensure
            practical, immediately applicable skills that transform individual
            and organizational performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full border border-border/50 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    {service.badge && (
                      <Badge
                        variant="secondary"
                        className={`${
                          service.badge === 'Most Popular'
                            ? 'bg-karibu-gold/20 text-karibu-emerald-dark'
                            : 'bg-karibu-emerald-light text-primary'
                        } border-0 font-medium text-xs`}
                      >
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleScroll('#contact')}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-karibu-emerald-dark group/btn transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Button
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20"
          >
            Request a Custom Program
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
