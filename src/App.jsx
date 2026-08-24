import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SVGAssets } from './components/SVGAssets';
import Header from './components/Header';
import Home from './components/Home';
import Module from './components/Module';
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
  const location = useLocation();

  // Re-run the reveal observer whenever the route changes, and scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [location.pathname]); // re-run per route, not per raw hash string

  return (
    <>
      <SVGAssets />
      <Header />

      <Routes>
        <Route
          path="/module/:slug"
          element={
            <main>
              <Module />
            </main>
          }
        />
        <Route
          path="/"
          element={
            <main>
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
            </main>
          }
        />
      </Routes>

      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;