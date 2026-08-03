'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Map,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 700 123 456',
    sub: 'Mon-Fri, 8am-6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@karibuacademy.co.ke',
    sub: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Westlands, Nairobi, Kenya',
    sub: 'Sarit Centre, 5th Floor',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri: 8:00 AM - 6:00 PM',
    sub: 'Sat: 9:00 AM - 1:00 PM',
  },
];

const industries = [
  'Hospitality & Hotels',
  'Restaurant & F&B',
  'Corporate & Business',
  'Travel & Tourism',
  'Healthcare & Pharma',
  'Retail & E-Commerce',
  'Banking & Finance',
  'Education & Training',
  'NGO & Development',
  'Government',
  'SME',
  'Other',
];

const programs = [
  'Customer Service Excellence',
  'Leadership & Management',
  'Workplace Communication',
  'Professional Development',
  'Sales & Revenue Growth',
  'Restaurant Customer Excellence',
  'Custom Corporate Training',
  'Not sure yet',
];

const contactMethods = ['Email', 'Phone Call', 'WhatsApp'];

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    programOfInterest: '',
    numberOfStaff: '',
    preferredContactMethod: '',
    additionalInformation: '',
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in your name and email.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contact',
          'bot-field': '',
          ...form,
        }),
      });
      setSuccess(true);
      toast({
        title: 'Enquiry Submitted!',
        description: "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const selectClass =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fill in the form below and our team will reach out within 24 hours
            with a personalized training recommendation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-0.5">{info.label}</div>
                  <div className="font-medium text-foreground text-sm sm:text-base">
                    {info.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{info.sub}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <div className="pt-4">
              <Button
                className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold gap-2"
                onClick={() => window.open('https://wa.me/254700123456', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Google Maps Placeholder */}
            <div className="pt-4">
              <div className="relative rounded-xl overflow-hidden border border-border/50 bg-muted h-48 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground font-medium">Google Maps</p>
                  <p className="text-xs text-muted-foreground">Sarit Centre, Westlands, Nairobi</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Card className="bg-karibu-emerald-light/50 border-0">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">&ldquo;Karibu&rdquo;</span> means
                    <span className="font-semibold"> &ldquo;Welcome&rdquo;</span> in Swahili —
                    and that&apos;s exactly how we treat every enquiry. We look
                    forward to welcoming you to our community of learners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {success ? (
              <Card className="border-0 bg-karibu-emerald-light/50">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your enquiry has been submitted successfully. Our team will
                    contact you within 24 hours with a personalized response.
                  </p>
                  <Button
                    onClick={() => {
                      setSuccess(false);
                      setForm({ name: '', email: '', phone: '', company: '', industry: '', programOfInterest: '', numberOfStaff: '', preferredContactMethod: '', additionalInformation: '' });
                    }}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Submit Another Enquiry
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Netlify required hidden fields */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-name">Full Name *</Label>
                        <Input id="c-name" name="name" placeholder="John Doe" value={form.name} onChange={(e) => updateField('name', e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-email">Email Address *</Label>
                        <Input id="c-email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={(e) => updateField('email', e.target.value)} required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-phone">Phone Number</Label>
                        <Input id="c-phone" name="phone" placeholder="+254 700 123 456" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-company">Company / Organization</Label>
                        <Input id="c-company" name="company" placeholder="Acme Ltd" value={form.company} onChange={(e) => updateField('company', e.target.value)} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-industry">Industry</Label>
                        <select id="c-industry" name="industry" value={form.industry} onChange={(e) => updateField('industry', e.target.value)} className={selectClass}>
                          <option value="">Select industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-program">Program of Interest</Label>
                        <select id="c-program" name="programOfInterest" value={form.programOfInterest} onChange={(e) => updateField('programOfInterest', e.target.value)} className={selectClass}>
                          <option value="">Select program</option>
                          {programs.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-staff">Number of Staff</Label>
                        <Input id="c-staff" name="numberOfStaff" placeholder="e.g., 10-50" value={form.numberOfStaff} onChange={(e) => updateField('numberOfStaff', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-contact">Preferred Contact Method</Label>
                        <select id="c-contact" name="preferredContactMethod" value={form.preferredContactMethod} onChange={(e) => updateField('preferredContactMethod', e.target.value)} className={selectClass}>
                          <option value="">Select method</option>
                          {contactMethods.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-message">Additional Information</Label>
                      <Textarea id="c-message" name="additionalInformation" placeholder="Tell us more about your training needs..." rows={4} value={form.additionalInformation} onChange={(e) => updateField('additionalInformation', e.target.value)} className="resize-none" />
                    </div>

                    <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20">
                      {loading ? (
                        <><Loader2 className="mr-2 w-4 h-4 animate-spin" /> Submitting...</>
                      ) : (
                        <><Send className="mr-2 w-4 h-4" /> Submit Enquiry</>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
