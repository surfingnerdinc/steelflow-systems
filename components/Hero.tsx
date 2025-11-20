'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
function AnimatedNumber({ value, delay = 0, suffix = '' }: { value: number; delay?: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return controls.stop;
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return <>{displayValue}{suffix}</>;
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const t = useTranslations('hero');

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="Steel welding"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.05) 10px,
              rgba(255, 255, 255, 0.05) 20px
            )`,
          }}
        />
      </div>

      {/* Content - asymmetric layout */}
      <div className="relative z-20 w-full h-full flex items-center px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <motion.div
          style={{ opacity }}
          className="w-full lg:w-1/2 text-left"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 tracking-tight leading-none">
              <span className="text-teal-400">{t('title').split(' ')[0]}</span>
              <br />
              <span className="text-white">{t('title').split(' ')[1]}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8 font-light tracking-tight leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-xl leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#services"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {t('cta')}
            </a>
          </motion.div>

          {/* Mobile Technical Drawing - Below text, rotated 90 degrees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:hidden mt-12 w-full flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl h-48 overflow-hidden">
              <svg viewBox="0 0 500 500" className="w-full h-full" style={{ transform: 'rotate(90deg)' }}>
                {/* Grid Background */}
                <defs>
                  <pattern id="grid-mobile" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="500" height="500" fill="url(#grid-mobile)" />

                {/* H-Beam Profile - Front View */}
                <motion.g
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                >
                  {/* Top Flange */}
                  <motion.rect 
                    x="150" y="100" width="200" height="30" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ transformOrigin: 'center' }}
                  />
                  {/* Web */}
                  <motion.rect 
                    x="235" y="130" width="30" height="240" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                  />
                  {/* Bottom Flange */}
                  <motion.rect 
                    x="150" y="370" width="200" height="30" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ transformOrigin: 'center' }}
                  />
                </motion.g>

                {/* Dimension Lines */}
                {/* Width dimension - Top */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <line x1="150" y1="70" x2="350" y2="70" stroke="#0d9488" strokeWidth="1" />
                  <line x1="150" y1="60" x2="150" y2="80" stroke="#0d9488" strokeWidth="1" />
                  <line x1="350" y1="60" x2="350" y2="80" stroke="#0d9488" strokeWidth="1" />
                  <text x="250" y="60" fill="#0d9488" fontSize="14" textAnchor="middle" fontFamily="monospace">
                    <AnimatedNumber value={200} delay={1.5} suffix="mm" />
                  </text>
                </motion.g>

                {/* Height dimension - Right */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <line x1="380" y1="100" x2="380" y2="400" stroke="#0d9488" strokeWidth="1" />
                  <line x1="370" y1="100" x2="390" y2="100" stroke="#0d9488" strokeWidth="1" />
                  <line x1="370" y1="400" x2="390" y2="400" stroke="#0d9488" strokeWidth="1" />
                  <text x="410" y="255" fill="#0d9488" fontSize="14" textAnchor="middle" fontFamily="monospace" transform="rotate(90 410 255)">
                    <AnimatedNumber value={300} delay={1.7} suffix="mm" />
                  </text>
                </motion.g>

                {/* Flange thickness */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <line x1="120" y1="100" x2="120" y2="130" stroke="#0d9488" strokeWidth="1" />
                  <line x1="110" y1="100" x2="130" y2="100" stroke="#0d9488" strokeWidth="1" />
                  <line x1="110" y1="130" x2="130" y2="130" stroke="#0d9488" strokeWidth="1" />
                  <text x="95" y="120" fill="#0d9488" fontSize="12" textAnchor="end" fontFamily="monospace">
                    <AnimatedNumber value={30} delay={1.9} suffix="mm" />
                  </text>
                </motion.g>

                {/* Web thickness */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  <line x1="235" y1="430" x2="265" y2="430" stroke="#0d9488" strokeWidth="1" />
                  <line x1="235" y1="420" x2="235" y2="440" stroke="#0d9488" strokeWidth="1" />
                  <line x1="265" y1="420" x2="265" y2="440" stroke="#0d9488" strokeWidth="1" />
                  <text x="250" y="455" fill="#0d9488" fontSize="12" textAnchor="middle" fontFamily="monospace">
                    <AnimatedNumber value={30} delay={2.1} suffix="mm" />
                  </text>
                </motion.g>

                {/* Center line */}
                <motion.line 
                  x1="250" y1="90" x2="250" y2="410" 
                  stroke="#0d9488" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                />

                {/* Welding Point - Połączenie górnej półki z środnikiem */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  {/* Outer glow - largest */}
                  <motion.circle
                    cx="250"
                    cy="130"
                    r="20"
                    fill="#f59e0b"
                    opacity="0.15"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Middle glow */}
                  <motion.circle
                    cx="250"
                    cy="130"
                    r="12"
                    fill="#f59e0b"
                    opacity="0.4"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Core welding point - bright */}
                  <motion.circle
                    cx="250"
                    cy="130"
                    r="6"
                    fill="#fbbf24"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Hot center */}
                  <motion.circle
                    cx="250"
                    cy="130"
                    r="3"
                    fill="#ffffff"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Welding sparks - longer and brighter */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const distance = 20 + Math.random() * 20;
                    const endX = 250 + Math.cos(angle) * distance;
                    const endY = 130 + Math.sin(angle) * distance;
                    
                    return (
                      <motion.line
                        key={i}
                        x1="250"
                        y1="130"
                        x2={endX}
                        y2={endY}
                        stroke="#fbbf24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1, 0.8, 0],
                          opacity: [0, 1, 0.6, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}

                  {/* Additional flying sparks - larger and brighter */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const distance = 12 + Math.random() * 8;
                    const sparkX = 250 + Math.cos(angle) * distance;
                    const sparkY = 130 + Math.sin(angle) * distance;
                    
                    return (
                      <motion.circle
                        key={`spark-${i}`}
                        cx={sparkX}
                        cy={sparkY}
                        r="2.5"
                        fill="#fbbf24"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0.7, 0],
                          scale: [0, 1.2, 0.8, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}

                  {/* Weld symbol annotation - brighter and larger */}
                  <motion.text
                    x="280"
                    y="122"
                    fill="#fbbf24"
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="monospace"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ⚡ WELD
                  </motion.text>
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Technical Drawing of H-Beam */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex w-1/2 h-full items-center justify-center relative flex-col group"
        >
          <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
            {/* Technical Drawing Container */}
            <div className="relative w-full aspect-square cursor-pointer transition-all duration-500 group-hover:scale-105">
              <svg viewBox="0 0 500 500" className="w-full h-full transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                {/* Grid Background */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="500" height="500" fill="url(#grid)" />

                {/* H-Beam Profile - Front View */}
                <motion.g
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                >
                  {/* Top Flange */}
                  <motion.rect 
                    x="150" y="100" width="200" height="30" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ transformOrigin: 'center' }}
                  />
                  {/* Web */}
                  <motion.rect 
                    x="235" y="130" width="30" height="240" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                  />
                  {/* Bottom Flange */}
                  <motion.rect 
                    x="150" y="370" width="200" height="30" 
                    fill="none" stroke="#94a3b8" strokeWidth="2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ transformOrigin: 'center' }}
                  />
                </motion.g>

                {/* Dimension Lines */}
                {/* Width dimension - Top */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <line x1="150" y1="70" x2="350" y2="70" stroke="#0d9488" strokeWidth="1" />
                  <line x1="150" y1="60" x2="150" y2="80" stroke="#0d9488" strokeWidth="1" />
                  <line x1="350" y1="60" x2="350" y2="80" stroke="#0d9488" strokeWidth="1" />
                  <text x="250" y="60" fill="#0d9488" fontSize="14" textAnchor="middle" fontFamily="monospace">
                    <AnimatedNumber value={200} delay={1.5} suffix="mm" />
                  </text>
                </motion.g>

                {/* Height dimension - Right */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <line x1="380" y1="100" x2="380" y2="400" stroke="#0d9488" strokeWidth="1" />
                  <line x1="370" y1="100" x2="390" y2="100" stroke="#0d9488" strokeWidth="1" />
                  <line x1="370" y1="400" x2="390" y2="400" stroke="#0d9488" strokeWidth="1" />
                  <text x="410" y="255" fill="#0d9488" fontSize="14" textAnchor="middle" fontFamily="monospace" transform="rotate(90 410 255)">
                    <AnimatedNumber value={300} delay={1.7} suffix="mm" />
                  </text>
                </motion.g>

                {/* Flange thickness */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <line x1="120" y1="100" x2="120" y2="130" stroke="#0d9488" strokeWidth="1" />
                  <line x1="110" y1="100" x2="130" y2="100" stroke="#0d9488" strokeWidth="1" />
                  <line x1="110" y1="130" x2="130" y2="130" stroke="#0d9488" strokeWidth="1" />
                  <text x="95" y="120" fill="#0d9488" fontSize="12" textAnchor="end" fontFamily="monospace">
                    <AnimatedNumber value={30} delay={1.9} suffix="mm" />
                  </text>
                </motion.g>

                {/* Web thickness */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  <line x1="235" y1="430" x2="265" y2="430" stroke="#0d9488" strokeWidth="1" />
                  <line x1="235" y1="420" x2="235" y2="440" stroke="#0d9488" strokeWidth="1" />
                  <line x1="265" y1="420" x2="265" y2="440" stroke="#0d9488" strokeWidth="1" />
                  <text x="250" y="455" fill="#0d9488" fontSize="12" textAnchor="middle" fontFamily="monospace">
                    <AnimatedNumber value={30} delay={2.1} suffix="mm" />
                  </text>
                </motion.g>

                {/* Center line */}
                <motion.line 
                  x1="250" y1="90" x2="250" y2="410" 
                  stroke="#0d9488" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                />

                {/* HOVER EFFECTS - Corner Weld Points */}
                <motion.g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Top-Left Corner Weld */}
                  <motion.g>
                    <motion.circle cx="150" cy="100" r="10" fill="#f59e0b" opacity="0.2"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle cx="150" cy="100" r="5" fill="#fbbf24"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const dist = 8 + Math.random() * 6;
                      return (
                        <motion.line
                          key={`tl-${i}`}
                          x1="150" y1="100"
                          x2={150 + Math.cos(angle) * dist}
                          y2={100 + Math.sin(angle) * dist}
                          stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
                          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        />
                      );
                    })}
                  </motion.g>

                  {/* Top-Right Corner Weld */}
                  <motion.g>
                    <motion.circle cx="350" cy="100" r="10" fill="#f59e0b" opacity="0.2"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.circle cx="350" cy="100" r="5" fill="#fbbf24"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                    />
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const dist = 8 + Math.random() * 6;
                      return (
                        <motion.line
                          key={`tr-${i}`}
                          x1="350" y1="100"
                          x2={350 + Math.cos(angle) * dist}
                          y2={100 + Math.sin(angle) * dist}
                          stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
                          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 + 0.3 }}
                        />
                      );
                    })}
                  </motion.g>

                  {/* Bottom-Left Corner Weld */}
                  <motion.g>
                    <motion.circle cx="150" cy="400" r="10" fill="#f59e0b" opacity="0.2"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.circle cx="150" cy="400" r="5" fill="#fbbf24"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
                    />
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const dist = 8 + Math.random() * 6;
                      return (
                        <motion.line
                          key={`bl-${i}`}
                          x1="150" y1="400"
                          x2={150 + Math.cos(angle) * dist}
                          y2={400 + Math.sin(angle) * dist}
                          stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
                          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 + 0.6 }}
                        />
                      );
                    })}
                  </motion.g>

                  {/* Bottom-Right Corner Weld */}
                  <motion.g>
                    <motion.circle cx="350" cy="400" r="10" fill="#f59e0b" opacity="0.2"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                    />
                    <motion.circle cx="350" cy="400" r="5" fill="#fbbf24"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.9 }}
                    />
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const dist = 8 + Math.random() * 6;
                      return (
                        <motion.line
                          key={`br-${i}`}
                          x1="350" y1="400"
                          x2={350 + Math.cos(angle) * dist}
                          y2={400 + Math.sin(angle) * dist}
                          stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
                          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 + 0.9 }}
                        />
                      );
                    })}
                  </motion.g>

                  {/* Hover Info Label */}
                  <motion.text
                    x="250" y="250"
                    fill="#0d9488" fontSize="16" fontWeight="bold"
                    textAnchor="middle" fontFamily="monospace"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚙️ WELDING ZONES
                  </motion.text>
                </motion.g>
              </svg>
            </div>

            {/* Technical Nameplate - Below Drawing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="mt-6 bg-black/50 backdrop-blur-sm border border-teal-500/30 rounded p-4 w-full"
            >
              <div className="space-y-1 text-xs font-mono text-gray-300">
                <div className="flex justify-between border-b border-teal-500/20 pb-1 mb-2">
                  <span className="text-teal-400 font-semibold">PROFILE:</span>
                  <span className="text-white">HEB 300</span>
                </div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <span>Weight:</span>
                  <span className="text-teal-400">
                    <AnimatedNumber value={117} delay={2.5} suffix=" kg/m" />
                  </span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                >
                  <span>Material:</span>
                  <span className="text-teal-400">S355J2</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.9 }}
                >
                  <span>Area:</span>
                  <span className="text-teal-400">
                    <AnimatedNumber value={149} delay={2.9} suffix=" cm²" />
                  </span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1 }}
                >
                  <span>Ix:</span>
                  <span className="text-teal-400">
                    <AnimatedNumber value={25170} delay={3.1} suffix=" cm⁴" />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10" />
    </section>
  );
}
