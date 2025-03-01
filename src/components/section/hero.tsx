"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"


export default function Hero() {
  const t = useTranslations("HomePage")

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center w-full h-full z-3">
        <h1 className="text-center text-4xl font-bold sm:text-8xl">
          {t("title")}{" "}
          <span
            className="block text-6xl sm:text-8xl sm:inline-block bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent"
          >
            {t("project")}
          </span>
        </h1>
        <h2
          className="px-4 py-6 text-center text-lg md:text-xl text-gh-text-secondary"
        >
          {t("subtitle")}
        </h2>
      </div>
      <p className="leading-6 text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl">
        {t("description")}
      </p>
    </div>
  )
}
