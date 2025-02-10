import React from "react"
import Hero from "@/components/section/hero";
import { Gradient } from "@/components/gradient";
import { Particles } from "@/components/magicui/particles";

export default function HomePage() {
  return (
    <>
      <Gradient />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        <div className="mt-6 flex flex-col items-center justify-center">
          <Hero />
        </div>
      </main>
    </>
  );
};
