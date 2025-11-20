'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RealizacjePage() {
  const t = useTranslations('realizacje');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Wszystkie projekty
  const allProjects = [
    {
      title: 'Konstrukcja stalowa hali przemysłowej',
      category: 'steel',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80',
      year: '2024',
      description: 'Kompleksowa realizacja konstrukcji stalowej dla zakładu produkcyjnego o powierzchni 5000m²',
      challenge: 'Klient potrzebował budynku o powierzchni 5000m² z dużymi rozpiętościami bezsłupowymi dla swobodnej organizacji przestrzeni produkcyjnej. Wymagana była szybka realizacja i minimalne koszty utrzymania.',
      solution: 'Zaprojektowaliśmy i wykonaliśmy konstrukcję stalową z dźwigarami kratowymi o rozpiętości 30m. Wykorzystaliśmy wysokogatunkową stal S355, co pozwoliło na optymalizację przekrojów. Projekt zrealizowano w 4 miesiące.',
      results: ['Rozpiętość 30m bez słupów wewnętrznych', 'Oszczędność 15% w stosunku do pierwotnego budżetu', 'Realizacja w terminie 4 miesięcy', 'Certyfikat EN 1090'],
      gallery: [
        'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80',
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
      ],
    },
    {
      title: 'Spawanie konstrukcji mostowej',
      category: 'welding',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      year: '2024',
      description: 'Spawanie elementów mostu drogowego z certyfikowanymi procedurami spawalniczymi',
      challenge: 'Most kolejowy wymagał spawania konstrukcji zgodnie z najsurowszymi normami kolejowymi. Każdy szew spawalniczy musiał być w pełni udokumentowany i sprawdzony metodami nieniszczącymi.',
      solution: 'Zastosowaliśmy certyfikowane procedury spawalnicze WPS zgodne z EN ISO 15614. Spawanie wykonywaliśmy metodami MAG i SAW. Wszystkie spoiny przeszły badania ultradźwiękowe i radiograficzne.',
      results: ['100% spawów zaakceptowanych', 'Certyfikacja zgodnie z normami kolejowymi', 'Zerowa liczba wad krytycznych', 'Pełna dokumentacja spawalnicza'],
      gallery: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
      ],
    },
    {
      title: 'Modernizacja linii produkcyjnej',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      year: '2023',
      description: 'Przebudowa i modernizacja konstrukcji stalowych linii produkcyjnej w przemyśle automotive',
      challenge: 'Istniejąca linia produkcyjna wymagała modernizacji bez zatrzymania produkcji. Konstrukcje stalowe były przeciążone i wymagały wzmocnienia.',
      solution: 'Opracowaliśmy harmonogram prac w weekendy. Wzmocniliśmy istniejące konstrukcje dodatkowymi oczepami i stężeniami. Wymieniliśmy najbardziej zużyte elementy.',
      results: ['Zero przestojów produkcyjnych', 'Zwiększenie nośności o 40%', 'Przedłużenie żywotności o 20 lat', 'Modernizacja w 8 weekendów'],
      gallery: [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
        'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&q=80',
      ],
    },
    {
      title: 'Konstrukcja stalowa wieży',
      category: 'steel',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      year: '2023',
      description: 'Projekt i wykonanie konstrukcji stalowej wieży telekomunikacyjnej o wysokości 45m',
      challenge: 'Budowa wieży telekomunikacyjnej w trudnym terenie górskim. Wymagana odporność na wiatr do 200 km/h i montaż bez użycia dźwigów ciężkich.',
      solution: 'Zaprojektowaliśmy konstrukcję kratową z segmentów montowanych helikopterem. Zastosowaliśmy połączenia śrubowe wysokiej wytrzymałości dla łatwego montażu.',
      results: ['Wysokość 45m', 'Odporność na wiatr 200 km/h', 'Montaż w 5 dni', 'Bez uszkodzeń środowiska'],
      gallery: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
        'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&q=80',
      ],
    },
    {
      title: 'Spawanie elementów maszynowych',
      category: 'welding',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      year: '2023',
      description: 'Precyzyjne spawanie elementów maszyn przemysłowych metodami TIG i MIG',
      challenge: 'Elementy maszyn wymagały spawania z tolerancją ±0.5mm. Materiały obejmowały stale wysokostopowe i aluminium.',
      solution: 'Wykorzystaliśmy spawanie TIG z kontrolą cyfrową parametrów. Każdy element przechodził pomiary 3D i kontrolę jakości.',
      results: ['Tolerancja ±0.3mm osiągnięta', 'Zero reklamacji', 'Seria 50 sztuk', 'Czas realizacji: 2 tygodnie'],
      gallery: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
      ],
    },
    {
      title: 'Konstrukcja platformy stalowej',
      category: 'steel',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
      year: '2023',
      description: 'Wykonanie wielopoziomowych platform stalowych dla centrum logistycznego',
      challenge: 'Centrum logistyczne potrzebowało platformy roboczej na 3 poziomach z dużą nośnością i systemem schodów ewakuacyjnych.',
      solution: 'Zaprojektowaliśmy modułową konstrukcję stalową z kratownic. System umożliwia łatwą rozbudowę w przyszłości.',
      results: ['3 poziomy po 500m² każdy', 'Nośność 500 kg/m²', 'Montaż w 3 tygodnie', 'Możliwość rozbudowy'],
      gallery: [
        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80',
      ],
    },
    {
      title: 'Remont konstrukcji stalowej zakładu',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
      year: '2022',
      description: 'Kompleksowy remont i wzmocnienie istniejącej konstrukcji stalowej budynku przemysłowego',
      challenge: '40-letnia konstrukcja wykazywała oznaki korozji i zmęczenia materiału. Budynek musiał pozostać w użyciu podczas remontu.',
      solution: 'Przeprowadziliśmy szczegółową inwentaryzację. Wymieniliśmy skorodowane elementy, wzmocniliśmy węzły i zastosowaliśmy system antykorozyjny.',
      results: ['Przedłużenie żywotności o 30 lat', 'Bez przestojów w produkcji', 'Zwiększenie nośności o 20%', 'Gwarancja 10 lat'],
      gallery: [
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
      ],
    },
    {
      title: 'Konstrukcja rampy załadunkowej',
      category: 'steel',
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e34e8b0e?w=800&q=80',
      year: '2022',
      description: 'Projekt i wykonanie ramp załadunkowych dla magazynu wysokiego składowania',
      challenge: 'Magazyn wymagał 6 stanowisk załadunkowych z rampami hydraulicznymi i systemem zabezpieczeń.',
      solution: 'Zaprojektowaliśmy i wykonaliśmy stalowe rampy z platformami hydraulicznymi. System zintegrowano z automatyką magazynu.',
      results: ['6 stanowisk załadunkowych', 'Nośność 20 ton każde', 'System hydrauliczny', 'Integracja z BMS'],
      gallery: [
        'https://images.unsplash.com/photo-1581092160607-ee67e34e8b0e?w=1200&q=80',
      ],
    },
    {
      title: 'Spawanie zbiorników przemysłowych',
      category: 'welding',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
      year: '2022',
      description: 'Spawanie zbiorników ciśnieniowych zgodnie z normami AD 2000 i EN 13445',
      challenge: 'Zbiorniki ciśnieniowe dla przemysłu chemicznego wymagały certyfikacji zgodnie z Dyrektywą PED i badań nieniszczących 100% spoin.',
      solution: 'Zastosowaliśmy spawanie SAW z kontrolą parametrów. Wszystkie spoiny przeszły badania RTG. Dokumentacja zgodna z PED.',
      results: ['Certyfikat PED kategoria III', '100% spoin bez wad', 'Ciśnienie robocze 16 bar', 'Temperatura do 300°C'],
      gallery: [
        'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1200&q=80',
      ],
    },
  ];

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
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={filteredProjects[selectedImage].image}
              alt={filteredProjects[selectedImage].title}
              className="w-full h-auto"
            />
            <div className="mt-6 text-white">
              <h3 className="text-3xl font-semibold mb-2">{filteredProjects[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredProjects[selectedImage].description}</p>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
