"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const memories = [
  { id: 1, caption: 'Our First Memory', img: '/images/img1.jpeg' },
  { id: 2, caption: 'Precious Moments', img: '/images/img2.jpeg' },
  { id: 3, caption: 'Unforgettable Times', img: '/images/img3.jpeg' },
  { id: 4, caption: 'Beautiful Memories', img: '/images/img4.jpeg' },
  // last slide uses the uploaded Annu1.jpeg
  { id: 5, caption: 'Forever Cherished', img: '/Annu1.jpeg' },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section id="memories" ref={containerRef} className="relative w-full py-20 px-4 md:px-8">
      <motion.div className="max-w-6xl mx-auto" style={{ opacity }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 text-gray-800">Memory Gallery</h2>
          <motion.div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} />
        </motion.div>

        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <motion.div className="flex gap-8 px-4 pb-4" drag="x" dragConstraints={{ left: -1500, right: 0 }} dragElastic={0.2}>
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div className="glass-strong rounded-2xl p-6 w-80 flex flex-col items-center justify-center relative group cursor-pointer" whileHover={{ boxShadow: '0 0 40px rgba(255, 182, 193, 0.6)' }}>
                  <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 40px rgba(255, 182, 193, 0.4) inset' }} />

                  <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full mb-4 rounded-xl overflow-hidden relative" style={{ aspectRatio: '9 / 16' }}>
                      <Image src={memory.img} alt={memory.caption} fill className="object-cover" />
                    </div>

                    <h3 className="text-2xl font-serif font-light text-gray-800 mb-4">{memory.caption}</h3>
                    <motion.p className="text-sm text-gray-600" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>Click to reveal memory</motion.p>
                  </div>

                  <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-pink-400" initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: Math.cos((i / 8) * Math.PI * 2) * 100, y: Math.sin((i / 8) * Math.PI * 2) * 100, opacity: 0 }} transition={{ duration: 0.8 }} />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p className="text-center text-gray-600 text-sm mt-4" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          ← Drag to scroll through memories →
        </motion.p>
      </motion.div>
    </section>
  );
}
