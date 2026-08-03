'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight, Star, Users, TrendingUp, Building2, Award, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Grace Wanjiru',
    role: 'Front Office Manager, Safari Park Hotel',
    image: '/images/testimonial1.png',
    quote: 'Karibu Academy transformed our front desk team. Guest satisfaction scores improved by 35% within three months of completing the Customer Service Excellence program. The practical approach made all the difference.',
    rating: 5,
    before: 'Guest complaints were frequent and our online ratings were declining.',
    after: 'Our TripAdvisor rating jumped from 3.5 to 4.6 stars in just 6 months.',
  },
  {
    name: 'James Mwangi',
    role: 'CEO, Nairobi Restaurant Group',
    image: '/images/testimonial2.png',
    quote: 'We enrolled 50 staff members in the Restaurant programme. The improvement in service quality and team morale was remarkable. Our online ratings jumped from 3.8 to 4.6 stars. Incredible ROI.',
    rating: 5,
    before: 'Staff turnover was at 40% annually and customer complaints were growing.',
    after: 'Turnover dropped to 18% and revenue per table increased by 28%.',
  },
  {
    name: 'Amina Hassan',
    role: 'HR Director, East Africa Banking Corp',
    image: '/images/testimonial3.png',
    quote: 'The Leadership & Management program has been a game-changer for our mid-level managers. The blend of theory and practical exercises helped them become more confident and effective leaders.',
    rating: 5,
    before: 'Managers struggled with team engagement and performance management.',
    after: 'Employee engagement scores rose 40% and team productivity improved significantly.',
  },
];

const impactStats = [
  { icon: Users, value: '1,000+', label: 'Learners Trained' },
  { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
  { icon: Building2, value: '200+', label: 'Organizations Served' },
  { icon: Award, value: '90%', label: 'Course Completion Rate' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-karibu relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-karibu-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-gold">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hear From Those We&apos;ve{' '}
            <span className="text-karibu-gold">Transformed</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Real results from real organizations. Our clients speak to the
            tangible impact of our training programs.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <stat.icon className="w-6 h-6 text-karibu-gold mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <Quote className="w-10 h-10 text-karibu-gold/40 mb-6" />

              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-lg sm:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Before/After */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Before</p>
                    <p className="text-sm text-white/70">{testimonials[current].before}</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">After</p>
                    <p className="text-sm text-white/70">{testimonials[current].after}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-karibu-gold/50">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        {testimonials[current].name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-karibu-gold text-karibu-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-karibu-gold w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </motion.div>

        {/* Video Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm mb-6">Watch what our clients have to say</p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-5 cursor-pointer hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-full bg-karibu-gold/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-karibu-gold ml-0.5" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Video Testimonials</p>
              <p className="text-white/50 text-xs">Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
