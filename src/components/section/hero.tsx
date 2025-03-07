"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
@@ -18,9 +16,4 @@ export default function Hero() {
          {t("subtitle")}
        </h2>
      </div>
      <p className="mx-auto max-w-2xl text-center text-lg leading-6 text-muted-foreground md:text-xl">
        {t("description")}
      </p>
    </div>
  );
}
