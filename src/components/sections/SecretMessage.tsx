'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function SecretMessage() {
  const [isRevealed, setIsRevealed] = useState(false);

  const message = `Dear Ananya 🐼❤️,

On this special day, I want you to know how incredibly wonderful you are. Your presence in this world makes it brighter, warmer, and more beautiful.

You inspire everyone around you with your kindness, grace, and genuine spirit. The way you light up a room is truly magical.

This website is a small token of the enormous love and appreciation we have for you. Every pixel, every animation, every detail was created with heartfelt emotions.

May this year bring you endless joy, unforgettable moments, and dreams coming true.

Happy Birthday Ananya 🐼❤️. ✨

With all our love,
Ankit`;

  const handleHeartClick = () => {
    if (!isRevealed) {
      const heart = document.querySelector('#secret-heart');
      if (heart) {
        gsap.to(heart, {
          scale: 1.5,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
        });
      }
    }
    setIsRevealed(!isRevealed);
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
      {/* Dark dreamy background for this section */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            className="fixed inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(230, 213, 245, 0.1), rgba(100, 50, 100, 0.2))',
            }}
          />
        )}
      </AnimatePresence>

      {/* Animated stars */}
      <AnimatePresence>
        {isRevealed &&
          Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 text-gray-800">
            {isRevealed ? 'A Secret For You' : 'Unlock A Secret'}
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Interactive Heart */}
        <div className="flex flex-col items-center justify-center">
          <motion.button
            id="secret-heart"
            onClick={handleHeartClick}
            className="text-9xl cursor-pointer mb-8 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRevealed ? '💖' : '💗'}
          </motion.button>

          <motion.p
            className="text-center text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isRevealed ? 'Click again to close' : 'Click the heart to reveal the message'}
          </motion.p>
        </div>

        {/* Secret Message */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-2xl p-10 md:p-14 relative overflow-hidden"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 182, 193, 0.3), inset 0 0 20px rgba(255, 182, 193, 0.1)',
                    '0 0 40px rgba(230, 213, 245, 0.5), inset 0 0 40px rgba(230, 213, 245, 0.2)',
                    '0 0 20px rgba(255, 182, 193, 0.3), inset 0 0 20px rgba(255, 182, 193, 0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Message text with typewriter effect */}
              <motion.div className="relative z-10">
                {message.split('\n').map((line, i) => (
                  <motion.p
                    key={i}
                    className={`text-gray-800 font-light leading-relaxed mb-3 ${
                      line === '' ? 'h-2' : ''
                    } ${
                      line.startsWith('With') || line.startsWith('Those')
                        ? 'text-right italic'
                        : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.5,
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>

              {/* Floating sparkles around message */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute text-lg pointer-events-none"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
