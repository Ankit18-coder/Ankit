'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      },
    });

    // Initial fade in
    timeline.from(containerRef.current, {
      duration: 0.5,
      opacity: 0,
    }, 0);

    // Main text appears
    timeline.from(
      textRef.current,
      {
        duration: 1.5,
        opacity: 0,
        y: 30,
      },
      0.3
    );

    // Pulsing glow animation
    gsap.to(containerRef.current, {
      boxShadow: [
        '0 0 30px rgba(255, 182, 193, 0.3)',
        '0 0 60px rgba(255, 182, 193, 0.6)',
        '0 0 30px rgba(255, 182, 193, 0.3)',
      ],
      duration: 2,
      repeat: 2,
      ease: 'sine.inOut',
    });

    // Name reveal with typewriter effect
    timeline.to(
      nameRef.current,
      {
        duration: 2,
        opacity: 1,
        y: 0,
      },
      1.5
    );

    // Final glow burst
    timeline.to(
      containerRef.current,
      {
        duration: 0.8,
        scale: 1.05,
        boxShadow: '0 0 80px rgba(255, 182, 193, 0.8)',
      },
      2.5
    );

    // Fade out
    timeline.to(
      containerRef.current,
      {
        duration: 0.8,
        opacity: 0,
        scale: 1.1,
      },
      3.2
    );
  }, [onComplete]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: 'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
      }}
      initial={{ opacity: 0 }}
    >
      <div className="text-center">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `rgba(255, 182, 193, ${0.3 + Math.random() * 0.3})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: 3,
                delay: Math.random() * 1,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div ref={textRef} className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide mb-6 text-gray-800">
            A Special Day
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-700 mb-8">
            For Ananya
          </p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Name reveal */}
          <motion.div
            ref={nameRef}
            initial={{ opacity: 0, y: 20 }}
            className="mt-12"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-lavender to-peach">
              ✨ Happy Birthday Ananya 🐼❤️ ✨
            </h2>
          </motion.div>
        </div>

        {/* Animated heart pulse */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-5xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: 3,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>
      </div>
    </motion.div>
  );
}
