'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const t = useTranslations('services');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('welding.title'),
      description: t('welding.description'),
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('steel.title'),
      description: t('steel.description'),
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=600&q=80',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('renovation.title'),
      description: t('renovation.description'),
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('projects.title'),
      description: t('projects.description'),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-32 md:py-48 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Minimalist card - tomlens inspired */}
              <div className="space-y-6">
                {/* Large image */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content - clean and spacious */}
                <div className="space-y-4 py-4">
                  <div className="flex items-start gap-4">
                    <div className="text-teal-600 dark:text-teal-400 shrink-0">
                      {service.icon}
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Nie znalazłeś tego, czego szukasz? Skontaktuj się z nami, a znajdziemy rozwiązanie!
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 transition-colors duration-300"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
