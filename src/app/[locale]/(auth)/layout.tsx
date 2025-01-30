import { ReactNode } from 'react';
import type { Metadata } from "next";

import AuthHeader from '@/components/layout/auth-header';

export const metadata: Metadata = {
  title: "Stonix | Modern Stock Tracking Application for Your Portfolio",
  description: "An open-source stock tracking application that helps you keep track of your portfolio and make better investment decisions.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthHeader />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        {children}
      </main>
    </>
  );
}
