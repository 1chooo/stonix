import type { Metadata } from "next";

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
