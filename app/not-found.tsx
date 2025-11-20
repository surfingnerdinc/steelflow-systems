'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Simple navigation without i18n */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/98 dark:bg-black/98 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center space-x-3 shrink-0 group">
              <img 
                src="/images/steelflow-logo1.svg" 
                alt="SteelFlow Systems" 
                className="h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="hidden sm:block">
                <span className="text-gray-900 dark:text-white font-semibold text-2xl tracking-tight">
                  <span className="text-teal-600">Steel</span>Flow
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      
      <section className="grow flex items-center justify-center px-8 sm:px-12 lg:px-16 py-32">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated 404 with welding spark effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <motion.h1 
              className="text-[180px] md:text-[240px] font-bold text-gray-200 dark:text-gray-800 leading-none select-none"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(20, 184, 166, 0.3)',
                  '0 0 40px rgba(20, 184, 166, 0.5)',
                  '0 0 20px rgba(20, 184, 166, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>

            {/* Welding sparks around 404 */}
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const distance = 120;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                    style={{ left: x, top: y }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                );
              })}
            </motion.div>
          </motion.div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/pl/o-firmie" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                About Us
              </Link>
              <Link href="/pl/realizacje" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                Projects
              </Link>
              <Link href="/pl/aktualnosci" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                News
              </Link>
              <a href="/#services" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple footer without i18n */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-400">© 2024 SteelFlow Systems. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
