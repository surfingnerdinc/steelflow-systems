import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://steelflow.pl';
  const locales = ['pl', 'en', 'de'];
  const routes = ['', '/o-firmie', '/realizacje', '/aktualnosci'];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Generate URLs for each locale and route
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    });
  });
  
  return sitemap;
}
