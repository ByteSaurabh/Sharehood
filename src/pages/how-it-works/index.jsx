import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InteractiveTimeline from './components/InteractiveTimeline';
import UserTypeSection from './components/UserTypeSection';
import TrustSafetySection from './components/TrustSafetySection';
import NeighborhoodSimulator from './components/NeighborhoodSimulator';
import OnboardingSection from './components/OnboardingSection';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <InteractiveTimeline />
        <UserTypeSection />
        <TrustSafetySection />
        <NeighborhoodSimulator />
        <OnboardingSection />
      </main>
    </div>
  );
};

export default HowItWorks;