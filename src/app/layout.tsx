import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import ThemeProvider from "@/components/theme/theme-provider";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Stock Tracker | Modern Stock Tracking Application for Your Portfolio",
  description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
