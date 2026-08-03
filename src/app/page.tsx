'use client';

import Navbar from '@/components/karibu/Navbar';
import Hero from '@/components/karibu/Hero';
import About from '@/components/karibu/About';
import Services from '@/components/karibu/Services';
import Courses from '@/components/karibu/Courses';
import Industries from '@/components/karibu/Industries';
import LearningOptions from '@/components/karibu/LearningOptions';
import FeaturedProgramme from '@/components/karibu/FeaturedProgramme';
import WhyChooseUs from '@/components/karibu/WhyChooseUs';
import RestaurantAcademy from '@/components/karibu/RestaurantAcademy';
import TrainingPackages from '@/components/karibu/TrainingPackages';
import Testimonials from '@/components/karibu/Testimonials';
import FAQ from '@/components/karibu/FAQ';
import Contact from '@/components/karibu/Contact';
import Footer from '@/components/karibu/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <About />
        <Courses />
        <Industries />
        <LearningOptions />
        <FeaturedProgramme />
        <RestaurantAcademy />
        <TrainingPackages />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
