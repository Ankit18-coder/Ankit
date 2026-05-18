'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  'Her smile fixes bad days',
  'She makes ordinary moments unforgettable',
  'A soul too rare for this world',
  'She inspires everyone around her',
  'Her kindness knows no bounds',
  'She brings light to darkness',
];

export default function WhySpecial() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.6), transparent)',
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(230, 213, 245, 0.6), transparent)',
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Stars background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`star-bg-${i}`}
          className="absolute w-1 h-1 rounded-full bg-pink-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 text-gray-800">
            Why She Is Special
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glass-strong rounded-2xl p-8 relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(230, 213, 245, 0.6)',
              }}
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  boxShadow: '0 0 30px rgba(230, 213, 245, 0.4) inset',
                }}
              />

              {/* Rotating background accent */}
              <motion.div
                className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 182, 193, 0.8), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ✨
                </motion.div>

                <h3 className="text-xl font-serif font-light text-gray-800">
                  {reason}
                </h3>

                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-pink-300 via-lavender to-peach mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    delay: index * 0.15 + 0.5,
                    duration: 0.8,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
