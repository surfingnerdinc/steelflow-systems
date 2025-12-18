import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const baseUrl = "https://steelflow.pl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    metadataBase: new URL(baseUrl),
    title: "SteelFlow Systems",
    description: "Profesjonalne spawanie i konstrukcje stalowe",
    icons: {
      icon: "/images/steelflow-logo2.png",
      apple: "/images/steelflow-logo2.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pl': '/pl',
        'en': '/en',
        'de': '/de',
      },
    },
    openGraph: {
      title: "SteelFlow Systems – Profesjonalne spawanie",
      description: "Nowoczesne rozwiązania w spawaniu i konstrukcjach stalowych.",
      url: baseUrl,
      siteName: "SteelFlow Systems",
      images: [
        {
          url: "/images/steelflow-logo1.svg",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SteelFlow Systems",
      description: "Profesjonalne spawanie i konstrukcje stalowe",
      images: ["/images/steelflow-logo1.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="keywords" content="spawanie, konstrukcje stalowe, stal, welding, metalworking, SteelFlow" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Toaster position="top-right" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
