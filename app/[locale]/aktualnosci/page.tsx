'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AktualnosciPage() {
  const t = useTranslations('aktualnosci');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState<string>('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Wszystkie aktualności
  const allNews = [
    {
      id: 1,
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      category: 'project',
    },
    {
      id: 2,
      date: '2024-10-28',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80',
      category: 'certificate',
    },
    {
      id: 3,
      date: '2024-10-10',
      image: 'https://images.unsplash.com/photo-1597843786411-e344017d0c5a?w=800&q=80',
      category: 'technology',
    },
    {
      id: 4,
      date: '2024-09-22',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      category: 'project',
    },
    {
      id: 5,
      date: '2024-09-05',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      category: 'technology',
    },
    {
      id: 6,
      date: '2024-08-18',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80',
      category: 'certificate',
    },
    {
      id: 7,
      date: '2024-07-30',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      category: 'project',
    },
    {
      id: 8,
      date: '2024-07-12',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      category: 'technology',
    },
    {
      id: 9,
      date: '2024-06-25',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
      category: 'certificate',
    },
  ];

  const filteredNews = filter === 'all' 
    ? allNews 
    : allNews.filter(n => n.category === filter);

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'project', label: t('filters.project') },
    { id: 'certificate', label: t('filters.certificate') },
    { id: 'technology', label: t('filters.technology') },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold mb-8 tracking-tight leading-none text-gray-900 dark:text-white">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light tracking-tight max-w-4xl leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-16 px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-teal-600 text-white dark:bg-teal-500'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section ref={ref} className="pb-32 px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 aspect-4/3">
                  <img
                    src={item.image}
                    alt={t(`items.${item.id - 1}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      {t(`categories.${item.category}`)}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                      {isMounted ? new Date(item.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }) : item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {t(`items.${item.id - 1}.title`)}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {t(`items.${item.id - 1}.excerpt`)}
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
          </div>

          {/* No results message */}
          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400 dark:text-gray-600 font-light">
                {t('noResults')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
