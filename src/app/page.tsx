'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '@/components/sections/Loader';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import WhySpecial from '@/components/sections/WhySpecial';
import MusicVisualizer from '@/components/sections/MusicVisualizer';
import SecretMessage from '@/components/sections/SecretMessage';
import Celebration from '@/components/sections/Celebration';
import ParticleBackground from '@/components/effects/ParticleBackground';
import SmoothScroll from '@/components/effects/SmoothScroll';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <SmoothScroll key="page">
          <ParticleBackground />
          
          <main className="relative z-10 w-full">
            <Hero />
            <Gallery />
            <WhySpecial />
            <MusicVisualizer />
            <SecretMessage />
            <Celebration />
          </main>
        </SmoothScroll>
      )}
    </AnimatePresence>
  );
}
