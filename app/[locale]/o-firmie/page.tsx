'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function OFirmiePage() {
  const t = useTranslations('oFirmie');
  const [storyStarted, setStoryStarted] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    year: t(`chapters.${i}.year`),
    title: t(`chapters.${i}.title`),
    description: t(`chapters.${i}.description`),
    icon: t(`chapters.${i}.icon`),
    image: `https://images.unsplash.com/photo-${
      ['1504328345606-18bbc8c9d7d1', '1581094794329-c8112a89af12', '1565372195458-9de0b320ef04', 
       '1581092160562-40aa08e78837', '1581092918056-0c4c3acd3789', '1504917595217-d4dc5ebe6122',
       '1581092580497-e0d23cbdf1dc', '1621905251189-08b45d6a269e', '1578328819058-b69f3a3b0f6b',
       '1597843786411-e344017d0c5a'][i]
    }?w=1200&q=80`,
  }));

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      {!storyStarted ? (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-8 sm:px-12 lg:px-16">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight leading-none text-gray-900 dark:text-white">
                  {t('title')}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light tracking-tight max-w-4xl leading-relaxed mb-12">
                  {t('subtitle')}
                </p>
              </motion.div>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              >
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">14+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-light">{t('stats.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-light">{t('stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-400 font-light">{t('stats.specialists')}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-light">{t('stats.satisfaction')}</div>
                </div>
              </motion.div>

              {/* Story CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-linear-to-br from-teal-900/20 to-gray-900/20 dark:from-teal-900/40 dark:to-gray-900/40 border-2 border-teal-500/30 rounded-lg p-12 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('storyTitle')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  {t('storySubtitle')}
                </p>
                <button
                  onClick={() => setStoryStarted(true)}
                  className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold px-12 py-6 text-xl rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span>{t('startButton')}</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </section>

          {/* Contact Form */}
          <Contact />
        </>
      ) : (
        <section className="min-h-screen pt-32 pb-20 px-8 sm:px-12 lg:px-16 flex items-center justify-center">
          <div className="container mx-auto max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-teal-600 dark:text-teal-400">
                      {t('chapter')} {currentChapter + 1} / {chapters.length}
                    </span>
                    <button
                      onClick={() => setStoryStarted(false)}
                      className="text-sm font-mono text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      {t('exitStory')} ✕
                    </button>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-teal-600 dark:bg-teal-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Chapter Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-4/3 rounded-lg overflow-hidden"
                  >
                    <img
                      src={chapters[currentChapter].image}
                      alt={chapters[currentChapter].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-4xl">{chapters[currentChapter].icon}</span>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm font-mono text-teal-600 dark:text-teal-400 mb-2">
                      {chapters[currentChapter].year}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                      {chapters[currentChapter].title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      {chapters[currentChapter].description}
                    </p>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={prevChapter}
                        disabled={currentChapter === 0}
                        className={`px-6 py-3 rounded-sm font-semibold transition-all ${
                          currentChapter === 0
                            ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600'
                        }`}
                      >
                        ← {t('previousButton')}
                      </button>
                      <button
                        onClick={nextChapter}
                        disabled={currentChapter === chapters.length - 1}
                        className={`px-6 py-3 rounded-sm font-semibold transition-all ${
                          currentChapter === chapters.length - 1
                            ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                            : 'bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-600'
                        }`}
                      >
                        {t('nextButton')} →
                      </button>
                    </div>

                    {currentChapter === chapters.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 p-6 bg-teal-900/20 border border-teal-500/30 rounded-lg"
                      >
                        <p className="text-gray-900 dark:text-white font-semibold mb-2">
                          🎉 {t('endMessage')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {t('endSubtitle')}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
