'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [20, -20]);
  const rotateY = useTransform(mouseX, [-100, 100], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = imageRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Parallax and scroll animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to(containerRef.current, {
      y: -100,
      opacity: 0.8,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
            'linear-gradient(135deg, #FFE4E1 0%, #FFECD5 25%, #FFFBF7 50%, #F0E8FF 100%)',
            'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating butterflies */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`butterfly-${i}`}
          className="absolute text-4xl pointer-events-none"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
        >
          🦋
        </motion.div>
      ))}

      {/* Floating stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-2xl pointer-events-none"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Glassmorphism image frame */}
        <motion.div
          ref={imageRef}
          className="glass-strong rounded-3xl p-4 mb-8 max-w-sm mx-auto relative"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow:
                '0 0 40px rgba(255, 182, 193, 0.4), inset 0 0 40px rgba(255, 182, 193, 0.2)',
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(255, 182, 193, 0.4), inset 0 0 40px rgba(255, 182, 193, 0.2)',
                '0 0 60px rgba(230, 213, 245, 0.6), inset 0 0 60px rgba(230, 213, 245, 0.3)',
                '0 0 40px rgba(255, 182, 193, 0.4), inset 0 0 40px rgba(255, 182, 193, 0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Photo image */}
          <div className="w-full relative rounded-2xl overflow-hidden mx-auto" style={{ maxWidth: 260, aspectRatio: '9 / 16' }}>
            <Image
              src="/Annu2.jpeg"
              alt="Ananya"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Title and subtitle */}
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-light mb-4 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Happy Birthday Ananya 🐼❤️
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A small digital universe made specially for you ✨
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.button
            className="glass-strong px-8 py-4 rounded-full font-medium text-gray-800 hover:text-pink-600"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 182, 193, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#memories')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            💫 Explore Memories
          </motion.button>

          <motion.button
            className="glass-strong px-8 py-4 rounded-full font-medium text-gray-800 hover:text-pink-600"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(230, 213, 245, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#music')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🎵 Play Music
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
