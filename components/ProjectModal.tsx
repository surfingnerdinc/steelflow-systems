'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    image: string;
    year: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    gallery: string[];
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const t = useTranslations('realizacje');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-12 px-4 sm:px-8">
        <div className="relative max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-8 right-8 text-white hover:text-teal-400 transition-colors z-20 bg-black/50 p-3 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-teal-400 uppercase tracking-wider">
                {t(`categories.${project.category}`)}
              </span>
              <span className="text-sm text-gray-400 font-mono">
                {project.year}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Challenge & Solution Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Challenge */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-teal-400 text-sm font-mono uppercase tracking-wider mb-4">
                Wyzwanie
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-teal-400 text-sm font-mono uppercase tracking-wider mb-4">
                Rozwiązanie
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-teal-900/20 border border-teal-500/30 p-8 rounded-lg mb-12"
          >
            <h3 className="text-teal-400 text-sm font-mono uppercase tracking-wider mb-6">
              Rezultaty
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-white text-2xl font-semibold mb-6">Galeria</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-4/3 rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={img}
                      alt={`${project.title} - zdjęcie ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
