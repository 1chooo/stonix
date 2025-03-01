import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="space-y-8">
      <div className="z-3 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold sm:text-8xl">
          {t("title")}{" "}
          <span className="block bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-6xl text-transparent sm:inline-block sm:text-8xl">
            {t("project")}
          </span>
        </h1>
        <h2 className="text-gh-text-secondary px-4 py-6 text-center text-lg md:text-xl">
          {t("subtitle")}
        </h2>
      </div>
      <p className="mx-auto max-w-2xl text-center text-lg leading-6 text-muted-foreground md:text-xl">