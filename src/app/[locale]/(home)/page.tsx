import React from "react"
import Hero from "@/components/hero";
import { Particles } from "@/components/magicui/particles";

export default function HomePage() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <Hero />
    </div>
  );
};
