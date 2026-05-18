'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const bars = Array.from({ length: 20 });

  return (
    <section
      id="music"
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at center, rgba(230, 213, 245, 0.3), transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 text-gray-800">
            A Song For You
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-peach to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Music Player Container */}
        <motion.div
          className="glass-strong rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Vinyl Disc Animation */}
          <motion.div
            className="w-48 h-48 mx-auto mb-8 relative"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: isPlaying ? 3 : 0,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-4xl">
                🎵
              </div>
            </div>
            {/* Vinyl grooves */}
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-gray-700 opacity-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Waveform Visualizer */}
          <div className="flex items-end justify-center gap-1 h-32 mb-12">
            <AnimatePresence>
              {bars.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 rounded-full bg-gradient-to-t from-pink-400 to-lavender"
                  initial={{ height: 20 }}
                  animate={
                    isPlaying
                      ? {
                          height: [20, 60, 30, 70, 40, 20],
                        }
                      : { height: 20 }
                  }
                  transition={{
                    duration: 0.8,
                    repeat: isPlaying ? Infinity : 0,
                    delay: index * 0.05,
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Play Button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg mx-auto mb-8 hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>

          {/* Ambient particles */}
          <AnimatePresence>
            {isPlaying &&
              Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-pink-400"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos((i / 8) * Math.PI * 2) * 150,
                    y: Math.sin((i / 8) * Math.PI * 2) * 150,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
          </AnimatePresence>

          {/* Song Info */}
          <motion.div className="mt-8">
            <h3 className="text-xl font-serif font-light text-gray-800 mb-2">
              Happy Birthday 🎂
            </h3>
            <p className="text-sm text-gray-600">
              A special moment just for you
            </p>
          </motion.div>
        </motion.div>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src="/birthday-music.mp3"
          loop
          preload="auto"
          style={{ display: 'none' }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </section>
  );
}
