"use client";

import { useMountedTheme } from "@/lib/use-mounted-theme";
import { cn } from "@/lib/utils";

export const Gradient = () => {
  const { theme, mounted } = useMountedTheme();

  return (
    <div
      className={cn(
        "absolute left-0 top-0 h-[100dvh] w-full bg-gradient-to-b from-transparent via-70% to-transparent opacity-50 transition-opacity",
        // the opacity-0 class is used to prevent the Flash of Unstyled Content (FOUC)
        mounted
          ? theme === "dark"
            ? "via-[#613b95]"
            : "via-[#FF9900]"
          : "opacity-0",
      )}
    />
  );
};
