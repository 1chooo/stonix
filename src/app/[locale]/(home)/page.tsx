import React from "react"
import Hero from "@/components/section/hero";
import { Gradient } from "@/components/gradient";
import { Particles } from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import { GitHubStars, GitHubStarsFallback } from "@/components/section/github-stars"
import { ArrowUpRightIcon } from "@primer/octicons-react"
import { useLocale } from "next-intl"


export default function HomePage() {
  const locale = useLocale()
  return (
    <>
      <Gradient />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
        <div className="mt-10 z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <Link
              href="https://github.com/1chooo/stonix/stargazers"
              target="_blank"
              rel="noreferrer"
              aria-label="Star on GitHub"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Proudly Open Source</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <Hero />
          <div className="my-10 grid gap-2 sm:grid-cols-2">
            <div className="text-center sm:block sm:text-right">
              <Button className="w-48 rounded-full sm:w-auto" asChild>
                <Link href={`/${locale}/dashboard`}>
                  Get Started
                  <ArrowUpRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="text-center sm:block sm:text-left">
              <Button variant="outline" className="w-48 rounded-full sm:w-auto" asChild>
                <Link
                  href="https://github.com/1chooo/stonix"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Star on GitHub"
                >
                  Star on GitHub{" "}
                  <Suspense fallback={<GitHubStarsFallback />}>
                    <GitHubStars />
                  </Suspense>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
