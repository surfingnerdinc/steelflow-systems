'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Link } from '@/i18n/routing';

export default function News() {
  const t = useTranslations('news');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const newsItems = [
    {
      id: 1,
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      category: t('items.0.category'),
    },
    {
      id: 2,
      date: '2024-10-28',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80',
      category: t('items.1.category'),
    },
    {
      id: 3,
      date: '2024-10-10',
      image: 'https://images.unsplash.com/photo-1597843786411-e344017d0c5a?w=800&q=80',
      category: t('items.2.category'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="news" className="py-32 md:py-48 bg-white dark:bg-black">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white"
            >
              {t('title')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light tracking-tight max-w-3xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
          </div>

          {/* News Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16"
          >
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 aspect-4/3">
                  <img
                    src={item.image}
                    alt={t(`items.${index}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                      {new Date(item.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {t(`items.${index}.title`)}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {t(`items.${index}.excerpt`)}
                  </p>
                  <span className="text-sm font-mono text-teal-600 dark:text-teal-400 group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    {t('readMore')}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/aktualnosci"
              className="inline-block bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold px-12 py-5 text-lg rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {t('viewAll')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
