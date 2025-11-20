'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{
    x: number;
    duration: number;
    delay: number;
  }>>([]);

  // Generuj cząstki tylko po stronie klienta, aby uniknąć hydration mismatch
  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        x: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="Steel welding background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80" />
      </div>

      {/* Logo and Animation */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-teal-500">Steel</span>Flow
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">Systems</p>
        </motion.div>

        {/* Welding Sparks Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-32 h-32 relative"
        >
          <div className="absolute inset-0 bg-teal-600 rounded-full blur-xl opacity-50" />
          <div className="absolute inset-4 bg-teal-500 rounded-full blur-lg opacity-70" />
          <div className="absolute inset-8 bg-teal-400 rounded-full blur-md" />
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-linear-to-r from-teal-600 to-teal-400"
            />
          </div>
          <p className="text-gray-400 text-center mt-2 text-sm">
            {progress}%
          </p>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${particle.x}vw`,
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: '100vh',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
}
