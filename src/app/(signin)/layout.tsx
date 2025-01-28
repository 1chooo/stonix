import { ReactNode } from 'react';
import AuthHeader from '@/components/auth-header';

export default function SignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthHeader />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        {children}
      </main>
    </>
  );
}