import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SteelFlow Systems",
  description: "Profesjonalne spawanie i konstrukcje stalowe",
};

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
        <title>SteelFlow Systems – Nowoczesne systemy stalowe</title>
        <meta
          name="description"
          content="SteelFlow Systems – Profesjonalne spawanie i konstrukcje stalowe"
        />
        <meta property="og:title" content="SteelFlow Systems" />
        <meta
          property="og:description"
          content="Nowoczesne rozwiązania w spawaniu i konstrukcjach stalowych."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://steelflow.pl" />
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
