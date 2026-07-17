import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { SVGAssets } from './components/SVGAssets';
import Header from './components/Header';
import Home from './components/Home';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import FeaturedSection from './components/FeaturedSection';
import TestimonialSection from './components/TestimonialSection';
import HowItWorkSection from './components/HowItWorkSection';
import AccessSection from './components/AccessSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ChatWidget from './components/ChatWidget';
import ResourcesSection from './components/ResourcesSection';
import SecuritySection from './components/SecuritySection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';



function App() {
 useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.15, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

    return (
    <>
      <SVGAssets />
      <Header />
      <Home />
      <StatsSection />
      <TeamSection />
      <FeaturedSection />
      <TestimonialSection />
      <HowItWorkSection />
      <AccessSection />
      <SolutionSection />
      <PricingSection />
      <ResourcesSection />
      <SecuritySection />
      <FAQSection />
      <FinalCtaSection />
      <Footer />  
      <ChatWidget />
    </>
  );
}

export default App;

