'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Najlepsze projekty - pokazujemy tylko 4 na stronie głównej
  const projects = [
    {
      title: 'Konstrukcja stalowa hali przemysłowej',
      category: 'Konstrukcje stalowe',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80',
    },
    {
      title: 'Spawanie konstrukcji mostowej',
      category: 'Spawanie',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    },
    {
      title: 'Modernizacja linii produkcyjnej',
      category: 'Modernizacje',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    },
    {
      title: 'Konstrukcja stalowa wieży',
      category: 'Konstrukcje stalowe',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-32 md:py-48 bg-white dark:bg-black">
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer h-80"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-teal-500 text-sm font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-teal-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* View icon */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Red border effect */}
              <div className="absolute inset-0 border-4 border-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/realizacje"
            className="inline-block bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold px-12 py-5 text-lg rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {t('viewAll')}
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto"
            />
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">{projects[selectedImage].title}</h3>
              <p className="text-teal-500">{projects[selectedImage].category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
