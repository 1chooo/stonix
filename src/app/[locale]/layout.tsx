import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ThemeProvider from "@/components/theme/theme-provider";
import { routing } from '@/i18n/routing';
import { inter } from "@/styles/fonts";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
  description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
  openGraph: {
    url: "https://stonix.vercel.app",
    type: "website",
    siteName: "Stonix",
    title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
    description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
    images: "/og.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
    description:
      "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
    images: "/og.png",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/logo192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  readonly children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
