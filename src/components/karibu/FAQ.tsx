'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What types of training programs does Karibu Academy offer?',
    a: 'We offer a comprehensive range of programs including Customer Service Excellence, Leadership & Management, Workplace Communication, Professional Development, Sales & Revenue Growth, and fully customized Corporate Training Solutions. Each program is available in online, in-person, or blended formats.',
  },
  {
    q: 'How long do the training programs typically last?',
    a: 'Program durations vary based on depth and format. Short workshops run 1-2 days, certificate programs span 2-4 weeks, and comprehensive corporate programs can be 4-12 weeks. We also offer self-paced online courses that you can complete on your own schedule.',
  },
  {
    q: 'Are the certifications recognized by employers?',
    a: 'Yes. Our certifications are recognized by leading organizations across East Africa. We partner with industry bodies and professional associations to ensure our programs meet the highest standards. Many of our graduates report that their Karibu Academy certification directly contributed to career advancement.',
  },
  {
    q: 'Can you customize training for our specific organization?',
    a: 'Absolutely! Custom corporate training is one of our core strengths. We begin with a thorough needs assessment, then design and deliver a program tailored to your organization\'s specific challenges, industry, and goals. We also provide post-training follow-up and impact measurement.',
  },
  {
    q: 'What is the investment required for training programs?',
    a: 'Our programs are competitively priced to ensure accessibility. Individual programs start from KES 15,000, while corporate packages are customized based on team size and program scope. We offer flexible payment plans and early-bird discounts. Contact us for a detailed quote.',
  },
  {
    q: 'Do you offer training outside of Nairobi?',
    a: 'Yes! While our headquarters is in Nairobi, we deliver training across East Africa and beyond. For in-person programs, we can arrange training at your premises or at partner venues in major cities. Our online programs are accessible from anywhere.',
  },
  {
    q: 'What makes Karibu Academy different from other training providers?',
    a: 'Three key differentiators: First, our programs are designed and delivered by active industry practitioners, not just academics. Second, we focus on measurable outcomes with post-training impact assessments. Third, our ongoing mentorship and support ensure lasting behavioral change, not just temporary knowledge transfer.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-karibu-emerald-light/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our programs and how we can help.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
