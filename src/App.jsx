import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import { SVGAssets } from './components/SVGAssets';
import Header from './components/Header';
import Home from './components/Home';
import ModulePage from './pages/ModulePage';
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

// Everything that belongs only on the homepage now lives in one element,
// passed to the "/" route below — instead of sitting outside <Routes>
// where it rendered on every page, including module detail pages.
function HomePage() {
  return (
    <>
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
    </>
  );
}

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

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <SVGAssets />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/:slug" element={<ModulePage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;