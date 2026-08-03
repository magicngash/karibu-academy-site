'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, BookOpen, TrendingUp, CheckCircle2, Target, Eye, Heart, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: Users, value: '10,000+', label: 'Graduates Trained', desc: 'Across East Africa' },
  { icon: Award, value: '500+', label: 'Organizations Served', desc: 'From startups to enterprises' },
  { icon: BookOpen, value: '50+', label: 'Training Programs', desc: 'Industry-certified courses' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', desc: 'From participant feedback' },
];

const highlights = [
  'Founded by industry veterans with 20+ years experience',
  'Blend of online and in-person training delivery',
  'Custom programs tailored to organizational needs',
  'Continuous post-training support and mentorship',
  'Recognized by leading industry bodies',
  'Affordable, flexible payment options',
];

const coreValues = [
  { icon: Heart, title: 'Excellence', description: 'We pursue the highest standards in everything we do, from content creation to delivery and follow-up.' },
  { icon: Users, title: 'Inclusivity', description: 'We believe everyone deserves access to quality training that can transform their career and life.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously evolve our methods and content to stay relevant in a rapidly changing workplace.' },
  { icon: Shield, title: 'Integrity', description: 'We build trust through transparency, honesty, and a genuine commitment to our clients\' success.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="border-0 bg-karibu-emerald-light/50 hover:bg-karibu-emerald-light transition-colors h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base mb-0.5">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.desc}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/images/about.png"
                alt="Karibu Academy team"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-karibu-gold text-karibu-emerald-dark rounded-xl p-4 sm:p-5 shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold">12+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-semibold text-karibu-emerald-dark">About Karibu Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Ambition Meets{' '}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Karibu Academy is East Africa&apos;s premier workforce development
              partner. We bridge the gap between academic knowledge and
              real-world workplace demands through practical, outcomes-driven
              training programs.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              Whether you&apos;re an individual looking to advance your career or
              an organization seeking to uplift your team&apos;s capabilities, we
              deliver training that creates lasting impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          <div className="bg-karibu-emerald-light/50 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To equip individuals and organizations with practical skills that enhance workplace performance, drive career growth, and strengthen businesses across Africa.
            </p>
          </div>
          <div className="bg-karibu-gold-light/50 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-karibu-gold/20 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-karibu-emerald-dark" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa&apos;s most trusted and impactful training academy, recognized for transforming workplaces and empowering professionals continent-wide.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Training Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe learning must be practical, engaging, and measurable. Every programme combines theory with hands-on practice, real-world scenarios, and actionable takeaways.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">Our Core Values</h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            These principles guide everything we do at Karibu Academy — from how we design our courses to how we interact with every learner and client.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
