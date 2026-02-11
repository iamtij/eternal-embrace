
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { GuideSection } from './components/GuideSection';
import { PlanSection } from './components/PlanSection';
import { SuccessSection } from './components/SuccessSection';
import { FailureSection } from './components/FailureSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterSection } from './components/FooterSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
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

export default App;
