"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import Link from "next/link";

export const LanguageToggle = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" aria-label="Language toggle">
        <Languages className="w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem key="en" asChild>
        <Link href="/en" lang="en" scroll={false}>
          English
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem key="zh-Hant-Tw" asChild>
        <Link href="/tw" lang="zh-Hant-Tw" scroll={false}>
          繁體中文
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
