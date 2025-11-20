# SteelFlow Systems - Strona Firmowa

Nowoczesna, responsywna strona internetowa dla firmy SteelFlow Systems specjalizującej się w spawaniu i konstrukcjach stalowych.

## 🌟 Funkcjonalności

### ✅ Zrealizowane
- **Wielojęzyczność** - Polski (domyślny), Angielski, Niemiecki
- **Responsywny design** - Działa na wszystkich urządzeniach
- **Loading Screen** - Animowany ekran ładowania z efektami spawania
- **Nawigacja** - Sticky header z przełącznikiem języków i mobile menu
- **Hero Section** - Fullscreen hero z parallax effect
- **Sekcja O Firmie** - Prezentacja firmy ze statystykami
- **Usługi** - Grid z kartami usług z efektami hover
- **Portfolio/Galeria** - Responsywna galeria realizacji z lightbox
- **Kontakt** - Formularz kontaktowy i dane firmy
- **Footer** - Stopka z social media i szybkimi linkami
- **Animacje** - Płynne animacje przy scrollowaniu (framer-motion)
- **Optymalizacja zdjęć** - Next.js Image optimization

## 🚀 Szybki Start

### Instalacja
```bash
npm install
```

### Uruchomienie Development Server
```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### Build Production
```bash
npm run build
npm start
```

## 📁 Struktura Projektu

```
stronka/
├── app/
│   ├── [locale]/          # Strony z obsługą języków
│   │   ├── layout.tsx     # Layout dla każdego języka
│   │   └── page.tsx       # Strona główna
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Globalne style
├── components/
│   ├── LoadingScreen.tsx  # Ekran ładowania
│   ├── Navigation.tsx     # Nawigacja/Header
│   ├── Hero.tsx          # Sekcja Hero
│   ├── About.tsx         # Sekcja O Firmie
│   ├── Services.tsx      # Sekcja Usługi
│   ├── Portfolio.tsx     # Galeria/Portfolio
│   ├── Contact.tsx       # Formularz kontaktowy
│   └── Footer.tsx        # Stopka
├── i18n/
│   ├── request.ts        # Konfiguracja next-intl
│   └── routing.ts        # Routing dla języków
├── messages/
│   ├── pl.json          # Tłumaczenia polskie
│   ├── en.json          # Tłumaczenia angielskie
│   └── de.json          # Tłumaczenia niemieckie
└── public/              # Pliki statyczne (zdjęcia, favicon itp.)
```

## 🎨 Customizacja

### Kolory
Główne kolory są zdefiniowane w Tailwind CSS:
- **Główny kolor**: `red-600` (#dc2626) - można zmienić w komponentach
- **Tło**: Czarne/szare gradienty
- **Tekst**: Białe/szare odcienie

### Zdjęcia
Obecnie strona używa zdjęć z Unsplash jako placeholdery. Aby dodać własne zdjęcia:

1. Umieść zdjęcia w folderze `public/images/`
2. Zamień URLe w komponentach, np.:
   ```tsx
   // Było:
   src="https://images.unsplash.com/photo-..."
   
   // Będzie:
   src="/images/twoje-zdjecie.jpg"
   ```

### Treści i Tłumaczenia
Edytuj pliki w folderze `messages/`:
- `pl.json` - Polski
- `en.json` - Angielski  
- `de.json` - Niemiecki

### Dodawanie Nowych Języków
1. Dodaj plik tłumaczeń, np. `messages/fr.json`
2. Zaktualizuj `i18n/routing.ts`:
   ```typescript
   locales: ['pl', 'en', 'de', 'fr'],
   ```
3. Dodaj przycisk w `components/Navigation.tsx`

## 📝 Informacje o Kontakcie
Aktualnie dane kontaktowe są przykładowe. Zaktualizuj je w:
- `components/Contact.tsx` - formularz i info kontaktowe
- `components/Footer.tsx` - stopka
- `messages/*.json` - tłumaczenia

### Aktualne placeholder'y:
- **Adres**: ul. Przemysłowa 123, 00-000 Warszawa
- **Tel**: +48 123 456 789
- **Email**: kontakt@steelflow.pl

## 🎯 Kolejne Kroki

### Rekomendowane ulepszenia:
1. **CMS** - Dodaj Sanity lub Contentful dla łatwej edycji treści
2. **Formularz** - Podłącz backend dla formularza kontaktowego (np. Formspree, SendGrid)
3. **SEO** - Dodaj metadata, Open Graph, sitemap.xml
4. **Analytics** - Google Analytics lub Plausible
5. **Prawdziwe zdjęcia** - Zamień placeholdery na zdjęcia klienta
6. **Blog** - Opcjonalna sekcja aktualności/realizacji
7. **Mapy** - Dodaj prawdziwą mapę Google Maps
8. **Certyfikaty** - Sekcja z certyfikatami i normami

## 🛠️ Technologie

- **Next.js 16** - React framework z App Router
- **TypeScript** - Bezpieczeństwo typów
- **Tailwind CSS v4** - Utility-first CSS
- **next-intl** - Wielojęzyczność
- **Framer Motion** - Animacje
- **React Intersection Observer** - Animacje przy scrollowaniu

## 📱 Responsywność

Strona jest w pełni responsywna i testowana na:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎨 Styl

Strona łączy:
- **Klasyczny styl** - Inspirowany stroną ZAMPAP (prosty layout, czytelność)
- **Nowoczesne elementy** - Fullscreen hero, parallax, animacje
- **Przemysłowy charakter** - Ciemne kolory, czerwone akcenty, zdjęcia spawania

## 📞 Wsparcie

W razie pytań lub problemów:
- Sprawdź [dokumentację Next.js](https://nextjs.org/docs)
- Zobacz [przykłady next-intl](https://next-intl-docs.vercel.app/)
- Kontakt: [twój email]

## 📄 Licencja

Projekt stworzony dla SteelFlow Systems.

---

**Autor**: [Twoje imię/firma]  
**Data**: Listopad 2024  
**Wersja**: 1.0.0
