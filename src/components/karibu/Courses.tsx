'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart, Laptop, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  delivery: string[];
}

interface Category {
  name: string;
  icon: string;
  courses: Course[];
}

const categories: Category[] = [
  {
    name: 'Customer Service',
    icon: 'Headphones',
    courses: [
      {
        title: 'Customer Care Fundamentals',
        description: 'Build a strong foundation in customer service principles, including understanding customer needs, managing expectations, and creating positive first impressions.',
        duration: '2 Days',
        level: 'Foundation',
        delivery: ['Online', 'Physical', 'Hybrid'],
      },
      {
        title: 'Customer Experience Management',
        description: 'Learn to design, measure, and optimize the complete customer journey. From touchpoint mapping to experience strategy.',
        duration: '3 Days',
        level: 'Intermediate',
        delivery: ['Online', 'Physical', 'Hybrid'],
      },
      {
        title: 'Complaint Handling & Recovery',
        description: 'Master techniques for turning complaints into opportunities. Learn de-escalation, service recovery paradox, and retention strategies.',
        duration: '1 Day',
        level: 'Foundation',
        delivery: ['Online', 'Physical'],
      },
      {
        title: 'Communication Skills for Service',
        description: 'Develop verbal, non-verbal, and written communication skills tailored for customer-facing roles across all industries.',
        duration: '2 Days',
        level: 'Foundation',
        delivery: ['Online', 'Physical', 'Hybrid'],
      },
    ],
  },
  {
    name: 'Leadership',
    icon: 'Target',
    courses: [
      {
        title: 'Supervisory Skills',
        description: 'Essential skills for new supervisors including delegation, performance feedback, team motivation, and day-to-day management.',
        duration: '3 Days',
        level: 'Intermediate',
        delivery: ['Physical', 'Hybrid'],
      },
      {
        title: 'Coaching & Mentoring',
        description: 'Learn to develop others through effective coaching conversations, mentoring relationships, and structured development plans.',
        duration: '2 Days',
        level: 'Advanced',
        delivery: ['Physical', 'Hybrid'],
      },
      {
        title: 'Performance Management',
        description: 'Master the full performance management cycle: setting objectives, conducting reviews, managing underperformance, and driving improvement.',
        duration: '2 Days',
        level: 'Intermediate',
        delivery: ['Physical', 'Hybrid'],
      },
      {
        title: 'Leadership Development',
        description: 'Comprehensive programme for emerging and established leaders covering strategic thinking, change management, and organizational leadership.',
        duration: '5 Days',
        level: 'Advanced',
        delivery: ['Physical', 'Hybrid'],
      },
    ],
  },
  {
    name: 'Workplace Skills',
    icon: 'Users',
    courses: [
      {
        title: 'Teamwork & Collaboration',
        description: 'Build high-performing teams through understanding team dynamics, effective collaboration, and conflict resolution within groups.',
        duration: '1 Day',
        level: 'Foundation',
        delivery: ['Online', 'Physical'],
      },
      {
        title: 'Emotional Intelligence',
        description: 'Develop self-awareness, self-regulation, empathy, and social skills that are critical for workplace success and leadership.',
        duration: '2 Days',
        level: 'Intermediate',
        delivery: ['Online', 'Physical', 'Hybrid'],
      },
      {
        title: 'Conflict Resolution',
        description: 'Learn practical strategies for managing and resolving workplace conflicts constructively, maintaining productivity and relationships.',
        duration: '1 Day',
        level: 'Foundation',
        delivery: ['Online', 'Physical'],
      },
      {
        title: 'Time Management & Productivity',
        description: 'Master prioritization, planning, and focus techniques to maximize productivity and reduce stress in demanding work environments.',
        duration: '1 Day',
        level: 'Foundation',
        delivery: ['Online', 'Physical'],
      },
      {
        title: 'Professional Ethics & Conduct',
        description: 'Understand workplace ethics, professional standards, and codes of conduct that build trust and integrity in organizations.',
        duration: '1 Day',
        level: 'Foundation',
        delivery: ['Online', 'Physical'],
      },
    ],
  },
  {
    name: 'Sales & Business',
    icon: 'BarChart',
    courses: [
      {
        title: 'Sales Excellence',
        description: 'Proven sales methodologies, prospecting techniques, presentation skills, and closing strategies that drive consistent results.',
        duration: '3 Days',
        level: 'Intermediate',
        delivery: ['Physical', 'Hybrid'],
      },
      {
        title: 'Negotiation Skills',
        description: 'Master the art of negotiation through understanding interests, creating value, managing dynamics, and reaching win-win outcomes.',
        duration: '2 Days',
        level: 'Intermediate',
        delivery: ['Physical', 'Hybrid'],
      },
      {
        title: 'Business Communication',
        description: 'Elevate your professional communication including email writing, report writing, presentations, and stakeholder communication.',
        duration: '2 Days',
        level: 'Foundation',
        delivery: ['Online', 'Physical', 'Hybrid'],
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  Foundation: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">Our Courses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Course Catalogue</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Practical, results-oriented courses designed to build skills that matter. Each course includes real-world applications and professional certification.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === i
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Course Cards */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {categories[activeCategory].courses.map((course) => (
            <div
              key={course.title}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className={levelColors[course.level]}>{course.level}</Badge>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {course.delivery.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {d === 'Online' && <Laptop className="w-3 h-3" />}
                    {d === 'Physical' && <Building2 className="w-3 h-3" />}
                    {d === 'Hybrid' && <BarChart className="w-3 h-3" />}
                    {d}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-karibu-emerald-dark group/btn transition-colors"
              >
                Enquire Now
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Can&apos;t find what you need? We create custom programs too.</p>
          <Button
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20"
          >
            Request Custom Training
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
