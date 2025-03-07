"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Gradient } from "@/components/gradient";
import { Particles } from "@/components/magicui/particles";

function Feature({ name }: { readonly name: string }) {
  return (
    <li className="flex items-center gap-5 fill-primary">
      <Check />
      <span>{name}</span>
    </li>
  );
}

function Features({ names }: { readonly names: string[] }) {
  return (
    <ul>
      {names.map((name) => (
        <Feature key={name} name={name} />
      ))}
    </ul>
  );
}

const starter = ["Stock Visualizer", "US/TW Stock Market"];

const pro = [
  "Everything in Starter",
  "Daily / Weekly / Yearly Stats",
  "Priority Support",
];

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <>
      <Gradient />
      <Particles
        className="absolute left-0 top-0 h-full w-full"
        quantity={50}
      />
      <main className="relative mx-auto mb-16 max-w-4xl px-8 py-24">
        <div className="mt-16 flex w-full flex-col items-center justify-center gap-10 sm:flex-row sm:items-stretch">
          <div className="flex w-[90%] flex-col gap-10 rounded-xl bg-gray-50 bg-secondary p-10 dark:bg-gray-900 sm:w-2/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">{t("starter")}</h2>
              <div className="flex items-end gap-1">
                <h2 className="text-4xl font-semibold">$0</h2>
                <div className="text-sm opacity-50">/ forever</div>
              </div>
            </div>
            <Link
              href="/#"
              className="cursor-pointer rounded-md border border-primary p-2 text-center font-semibold"
            >
              Get started
            </Link>
            <Features names={starter} />
          </div>
          <div className="flex w-[90%] flex-col gap-10 rounded-xl bg-gray-50 bg-secondary p-10 dark:bg-gray-900 sm:w-2/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">Pro</h2>
              <div className="flex items-end gap-1">
                <h2 className="text-4xl font-semibold">$5</h2>
                <div className="text-sm opacity-50">/ month</div>
              </div>
            </div>
            <Link
              href="/#"
              className="rounded-md bg-primary p-2 text-center font-semibold text-secondary"
            >
              Get started
            </Link>
            <Features names={pro} />
          </div>
        </div>
      </main>
    </>
  );
}
