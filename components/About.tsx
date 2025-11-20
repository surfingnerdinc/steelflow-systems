'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const t = useTranslations('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '20+', label: t('experience') },
    { number: '500+', label: t('projects') },
    { number: '200+', label: t('clients') },
  ];

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 bg-white dark:bg-black">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80"
                alt="Steel construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Red accent border */}
              <div className="absolute top-8 left-8 right-8 bottom-8 border-4 border-red-600/50 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('description')}
            </p>

            <div className="border-l-4 border-teal-600 pl-6 py-4 bg-white dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Precyzja, solidność i terminowość to fundamenty naszej pracy. 
                Każdy projekt traktujemy jako okazję do pokazania naszego 
                doświadczenia i zaangażowania."
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              {[
                'Certyfikowani spawacze',
                'Nowoczesny park maszynowy',
                'Kompleksowa obsługa projektów',
                'Gwarancja jakości',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-teal-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 text-center border-t-4 border-teal-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium uppercase text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
