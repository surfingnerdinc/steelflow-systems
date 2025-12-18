import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://steelflow.pl/sitemap.xml',
    host: 'https://steelflow.pl',
  };
}
