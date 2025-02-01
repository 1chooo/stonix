import type { Metadata } from "next";

import Footer from "@/components/layout/footer"
import HomeHeader from "@/components/layout/home-header";
import { Gradient } from "@/components/gradient";
import { Particles } from "@/components/magicui/particles";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
  description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function HomeLayout(
  { children }: { readonly children: React.ReactNode; }
) {
  return (
    <>
      <HomeHeader />
      <Gradient />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        {children}
      </main>
      <Footer />
    </>
  );
};
