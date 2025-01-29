"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IntlLocale, locales } from "@/i18n";
import { Languages } from "lucide-react";
import Link from "next/link";

const languageMap: Record<IntlLocale, string> = {
  en: "English",
  "zh-Hant-Tw": "繁體中文",
};

const languagePathMap: Record<IntlLocale, string> = {
  en: "/",
  "zh-Hant-Tw": "/tw",
};

export const LanguageToggle = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" aria-label="Language toggle">
        <Languages className="w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {locales.map((locale) => (
        // no idea why next.js Link won't refresh locale param on layout,
        // so using anchor tag instead to force refresh
        <DropdownMenuItem key={locale} asChild>
          <Link href={languagePathMap[locale]} lang={locale} scroll={false}>
            {languageMap[locale]}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);