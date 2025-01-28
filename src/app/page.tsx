"use client"

import React from "react"
import Hero from "@/components/hero";
import Header from "@/components/header";

function Home() {

  return (
    <>
      <Header />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        <div className="mt-6 flex flex-col items-center justify-center">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default Home;
