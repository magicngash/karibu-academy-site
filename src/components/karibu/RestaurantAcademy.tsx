'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  UtensilsCrossed, 
  Users, 
  TrendingUp, 
  Star, 
  Shield, 
  Heart,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function RestaurantAcademy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Heart,
      title: 'For Frontline Staff',
      points: [
        'Deliver memorable dining experiences that guests rave about',
        'Handle difficult customers with confidence and professionalism',
        'Upsell effectively without being pushy',
        'Understand food safety and hygiene standards',
        'Build lasting relationships with regular customers',
      ],
    },
    {
      icon: Shield,
      title: 'For Managers',
      points: [
        'Lead and motivate diverse restaurant teams',
        'Implement service standards that drive consistency',
        'Conduct effective pre-shift briefings and training',
        'Manage customer complaints and recover situations',
        'Track and improve team performance metrics',
      ],
    },
    {
      icon: TrendingUp,
      title: 'For Restaurant Owners',
      points: [
        'Increase customer satisfaction scores and online ratings',
        'Reduce staff turnover through professional development',
        'Drive repeat business and customer loyalty',
        'Build a strong service culture that sets you apart',
        'See measurable ROI on your training investment',
      ],
    },
  ];

  return (
    <section id="restaurant-academy" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-karibu-gold/20 text-karibu-emerald-dark border-karibu-gold/30 px-4 py-1.5 text-sm font-medium mb-6">
            <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5" />
            Restaurant Academy
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elevate Your Restaurant&apos;s{' '}
            <span className="text-gradient">Customer Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In the restaurant industry, exceptional service is the difference between a one-time visit and a loyal customer. 
            Our Restaurant Customer Excellence Programme is designed to transform every member of your team into a service professional.
          </p>
        </motion.div>

        {/* Why customer service matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Why Customer Service Matters in Restaurants
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In today&apos;s competitive dining landscape, the food alone is no longer enough. 
              Customers choose where to eat based on the complete experience — and that experience 
              is delivered by your people.
            </p>
            <div className="space-y-4">
              {[
                '86% of guests are willing to pay more for a better experience',
                'A single negative review can cost a restaurant up to 30 customers',
                'Restaurants with trained staff see 23% higher customer retention',
                'Word-of-mouth remains the #1 driver of new restaurant visits',
              ].map((stat) => (
                <div key={stat} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{stat}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/restaurant.png"
              alt="Restaurant excellence training"
              className="w-full h-[350px] sm:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-karibu-emerald-dark/30 to-transparent" />
          </div>
        </motion.div>

        {/* Benefits for different roles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-karibu-gold/20 flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-karibu-emerald-dark" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h4>
              <ul className="space-y-3">
                {benefit.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-karibu-gold flex-shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => handleScroll('#packages')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 group"
          >
            View Training Packages
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
