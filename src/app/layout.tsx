import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import ThemeProvider from "@/components/theme/theme-provider";
import Footer from "@/components/footer"
import Header from "@/components/header";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Refinaid | Bridging the Gap with AI For Everyone",
  description: "An open-source learning platform, making AI accessible to everyone, no programming skills needed. Empowering all to explore the future of AI.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

function RootLayout({ children }: { readonly children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
