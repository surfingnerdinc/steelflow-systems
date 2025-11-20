'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';

export default function RealizacjePage() {
  const t = useTranslations('realizacje');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Wszystkie projekty z tłumaczeń
  const projectImages = [
    'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee67e34e8b0e?w=800&q=80',
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
  ];

  const projectCategories = ['steel', 'welding', 'renovation', 'steel', 'welding', 'steel', 'renovation', 'steel', 'welding'];
  const projectYears = ['2024', '2024', '2023', '2023', '2023', '2023', '2022', '2022', '2022'];

  const galleryImages = [
    [
      'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
      'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1581092160607-ee67e34e8b0e?w=1200&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1200&q=80',
    ],
  ];

  const allProjects = Array.from({ length: 9 }, (_, i) => ({
    title: t(`projects.${i}.title`),
    category: projectCategories[i],
    image: projectImages[i],
    year: projectYears[i],
    description: t(`projects.${i}.description`),
    challenge: t(`projects.${i}.challenge`),
    solution: t(`projects.${i}.solution`),
    results: t.raw(`projects.${i}.results`) as string[],
    gallery: galleryImages[i],
  }));

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'steel', label: t('filters.steel') },
    { id: 'welding', label: t('filters.welding') },
    { id: 'renovation', label: t('filters.renovation') },
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

      {/* Projects Grid */}
      <section ref={ref} className="pb-32 px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 aspect-4/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-teal-600 dark:bg-teal-500 text-white px-3 py-1 text-xs font-mono">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {t(`categories.${project.category}`)}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
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

      {/* Project Detail Modal */}
      {selectedImage !== null && (
        <ProjectModal
          project={filteredProjects[selectedImage]}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <Footer />
    </main>
  );
}
