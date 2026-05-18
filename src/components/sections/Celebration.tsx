'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'confetti' | 'balloon' | 'sparkle';
}

export default function Celebration() {
  const containerRef = useRef(null);
  const particlesRef = useRef<Particle[]>([]);

  const createParticles = () => {
    const newParticles: Particle[] = [];
    const types = ['confetti', 'balloon', 'sparkle'] as const;

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: `particle-${Date.now()}-${i}`,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 8 - 4,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    return newParticles;
  };

  useEffect(() => {
    // Create initial burst of particles
    particlesRef.current = createParticles();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Background gradient celebration */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
            'linear-gradient(135deg, #FFE4E1 0%, #F0E8FF 25%, #FFDAB9 50%, #FFFBF7 100%)',
            'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main celebration title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-serif font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-lavender to-peach"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Happy Birthday! 🎉
          </motion.h2>

          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-pink-400 via-lavender to-peach mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-800 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Once Again ❤️
          </motion.p>
        </motion.div>

        {/* Floating balloons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`balloon-${i}`}
            className="absolute w-12 h-16 rounded-full"
            style={{
              background: `hsl(${i * 45}, 80%, 60%)`,
              left: `${15 + i * 10}%`,
              bottom: '-80px',
            }}
            animate={{
              y: [-80, -window.innerHeight - 100],
              x: Math.sin(i) * 30,
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeIn',
            }}
          >
            {/* Balloon string */}
            <div className="absolute w-0.5 h-20 bg-gray-400 left-1/2 transform -translate-x-1/2 -bottom-20" />
          </motion.div>
        ))}

        {/* Confetti pieces */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10px',
              backgroundColor: ['#FFB6C1', '#E6D5F5', '#FFDAB9', '#FFFFFF'][
                Math.floor(Math.random() * 4)
              ],
            }}
            animate={{
              y: window.innerHeight + 20,
              x: (Math.random() - 0.5) * 200,
              rotate: 720,
              opacity: [1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeIn',
            }}
          />
        ))}

        {/* Floating hearts */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-3xl"
            animate={{
              y: [-50, -window.innerHeight - 50],
              x: Math.sin(i) * 40,
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeIn',
            }}
            style={{
              left: `${20 + i * 12}%`,
              bottom: '-50px',
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Fireworks burst */}
        {Array.from({ length: 3 }).map((burst, burstIdx) => (
          <motion.div
            key={`burst-${burstIdx}`}
            className="absolute"
            style={{
              left: '50%',
              top: '30%',
              transformOrigin: 'center',
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`spark-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: ['#FFB6C1', '#E6D5F5', '#FFDAB9'][i % 3],
                  left: 0,
                  top: 0,
                }}
                animate={{
                  x: Math.cos((i / 12) * Math.PI * 2) * 100,
                  y: Math.sin((i / 12) * Math.PI * 2) * 100,
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: burstIdx * 0.5,
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Memory floating cards background */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-gray-700 text-lg font-light mb-12">
            All these memories floating through time
          </p>

          {/* Floating memory emojis */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['🌸', '💕', '✨', '🌺', '💝', '🎀'].map((emoji, i) => (
              <motion.div
                key={emoji}
                className="text-4xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-700 italic text-lg font-light">
            "A website made with emotions, not just code."
          </p>
          <motion.p
            className="text-sm text-gray-600 mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with 💖 for your special day
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
