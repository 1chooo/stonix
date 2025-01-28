import type { Metadata } from "next";

import Footer from "@/components/footer"
import Header from "@/components/header";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
  description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

function RootLayout({ children }: { readonly children: React.ReactNode; }) {
  return (
    <>
      <Header />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
