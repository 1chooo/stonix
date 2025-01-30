import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "zh-Hant-Tw"] as const;

export type IntlLocale = (typeof locales)[number];

export const messages = {
  en: {
    hero: {
      title: "We are",
    },
  },
  "zh-Hant-Tw": {
    hero: {
      title: "我們是",
    },
  },
} as const satisfies Record<IntlLocale, unknown>;

export default getRequestConfig(async ({ locale }) => {
  const message = messages[locale as keyof typeof messages];

  // Validate that the incoming `locale` parameter is valid
  if (!message) notFound();

  return {
    messages: message,
  };
});
