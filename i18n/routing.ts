import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Wszystkie wspierane języki
  locales: ['pl', 'en', 'de'],

  // Domyślny język
  defaultLocale: 'pl',
});

// Export hooks i komponenty dla nawigacji
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
