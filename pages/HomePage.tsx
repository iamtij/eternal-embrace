import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { GuideSection } from '../components/GuideSection';
import { PlanSection } from '../components/PlanSection';
import { SuccessSection } from '../components/SuccessSection';
import { FailureSection } from '../components/FailureSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FooterSection } from '../components/FooterSection';

export const HomePage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main aria-label="Main content">
        <Hero />
        <ProblemSection />
        <GuideSection />
        <PlanSection />
        <SuccessSection />
        <FailureSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
};
