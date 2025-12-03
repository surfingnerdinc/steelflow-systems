'use client';

import { useTranslations } from 'next-intl';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to hash anchor after page loads
    if (!isLoading && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove '#'
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (  
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
