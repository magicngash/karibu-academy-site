'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Crown,
  Rocket,
  Sparkles,
  Send,
  CalendarCheck,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const packages = [
  {
    name: 'Starter',
    icon: Rocket,
    description: 'Suitable for small cafés and restaurants looking to establish a foundation of excellent customer service.',
    highlight: false,
    features: [
      'Customer Care Fundamentals',
      'Communication Skills for Service',
      'Food Service Etiquette',
      'Online Learning Access',
      'Digital Completion Certificates',
    ],
  },
  {
    name: 'Professional',
    icon: Star,
    description: 'For growing restaurants and businesses ready to take their team performance to the next level.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter, plus:',
      'Staff Skills Assessments',
      'Manager Performance Reports',
      'Team Progress Tracking Dashboard',
      'Physical Training Sessions',
      'One-on-One Coaching Sessions',
      'Physical Completion Certificates',
    ],
  },
  {
    name: 'Enterprise',
    icon: Crown,
    description: 'For established organizations seeking a comprehensive, tailored training partnership.',
    highlight: false,
    features: [
      'Everything in Professional, plus:',
      'Customized Training Programmes',
      'Mystery Shopper Assessments',
      'Customer Experience Audit',
      'Management Development Programme',
      'Quarterly Review Meetings',
      'Dedicated Account Manager',
      'Priority Scheduling & Support',
    ],
  },
];

export default function TrainingPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    phone: '',
    email: '',
    numberOfStaff: '',
    packageOfInterest: '',
    preferredContactMethod: '',
    additionalInformation: '',
  });
  const { toast } = useToast();

  const handlePackageClick = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setShowForm(true);
    setFormData((prev) => ({ ...prev, packageOfInterest: pkgName }));
    setTimeout(() => {
      document.getElementById('enquiry-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({ title: 'Please fill in your name and email', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'package-enquiry' }),
      });
      if (res.ok) {
        toast({ title: 'Enquiry submitted successfully! Our team will contact you shortly.' });
        setFormData({ name: '', company: '', industry: '', phone: '', email: '', numberOfStaff: '', packageOfInterest: '', preferredContactMethod: '', additionalInformation: '' });
        setShowForm(false);
      } else {
        toast({ title: 'Something went wrong. Please try again.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Network error. Please check your connection and try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-karibu-emerald-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-karibu-gold-light px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-karibu-emerald-dark">Training Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient">Training Package</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Flexible packages designed to match your organization&apos;s size, needs, and ambitions. No hidden costs — contact us for a customized proposal.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.highlight
                  ? 'border-primary shadow-lg shadow-primary/10'
                  : 'border-border/50 hover:border-primary/30'
              }`}>
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-karibu-gold text-karibu-emerald-dark px-4 py-1 text-sm font-semibold shadow-lg shadow-karibu-gold/20">
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8 pb-2">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    pkg.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <pkg.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-4">
                  <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-primary' : 'text-karibu-gold'}`} />
                        <span className={f.startsWith('Everything in') ? 'font-semibold text-primary' : ''}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 font-semibold group ${
                      pkg.highlight
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                    onClick={() => handlePackageClick(pkg.name)}
                  >
                    Enquire About {pkg.name}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enquiry note & form toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="bg-white rounded-2xl border border-border/50 p-8 sm:p-10 max-w-3xl mx-auto">
            <CalendarCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Interested in a Package?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Complete the enquiry form and our team will contact you to discuss your organization&apos;s needs and prepare a customized proposal.
            </p>
            {!showForm ? (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  onClick={() => { setShowForm(true); }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 group"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Submit Enquiry
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-semibold"
                >
                  Book a Consultation
                </Button>
              </div>
            ) : null}
          </div>
        </motion.div>

        {/* Enquiry Form */}
        {showForm && (
          <motion.div
            id="enquiry-form-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border/50 p-8 sm:p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Package Enquiry Form</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="pkg-name">Full Name *</Label>
                  <Input
                    id="pkg-name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-email">Email Address *</Label>
                  <Input
                    id="pkg-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-company">Company Name</Label>
                  <Input
                    id="pkg-company"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    placeholder="Your Company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(v) => setFormData((p) => ({ ...p, industry: v }))}>
                    <SelectTrigger id="pkg-industry"><SelectValue placeholder="Select industry" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="banking">Banking</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="sme">SME</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-phone">Phone Number</Label>
                  <Input
                    id="pkg-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-staff">Number of Staff</Label>
                  <Select value={formData.numberOfStaff} onValueChange={(v) => setFormData((p) => ({ ...p, numberOfStaff: v }))}>
                    <SelectTrigger id="pkg-staff"><SelectValue placeholder="Select range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1 - 10</SelectItem>
                      <SelectItem value="11-50">11 - 50</SelectItem>
                      <SelectItem value="51-100">51 - 100</SelectItem>
                      <SelectItem value="101-500">101 - 500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="pkg-package">Package of Interest</Label>
                  <Select value={formData.packageOfInterest} onValueChange={(v) => setFormData((p) => ({ ...p, packageOfInterest: v }))}>
                    <SelectTrigger id="pkg-package"><SelectValue placeholder="Select package" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Starter">Starter</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                      <SelectItem value="Enterprise">Enterprise</SelectItem>
                      <SelectItem value="Custom">Custom / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="pkg-contact-method">Preferred Contact Method</Label>
                  <Select value={formData.preferredContactMethod} onValueChange={(v) => setFormData((p) => ({ ...p, preferredContactMethod: v }))}>
                    <SelectTrigger id="pkg-contact-method"><SelectValue placeholder="Select method" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="pkg-info">Additional Information</Label>
                  <Textarea
                    id="pkg-info"
                    value={formData.additionalInformation}
                    onChange={(e) => setFormData((p) => ({ ...p, additionalInformation: e.target.value }))}
                    placeholder="Tell us more about your training needs..."
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-semibold"
                >
                  Book a Consultation
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
