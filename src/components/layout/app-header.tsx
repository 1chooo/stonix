"use client";

import Link from "next/link";
import {
  LogIn,
  User,
  House,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme/theme-toggle"

interface AppHeaderProps {
  title: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <DropdownMenu>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="relative h-10 w-10 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="#" alt="Avatar" />
                        <AvatarFallback className="bg-transparent">
                          <User className="w-5" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">Login</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent align="end" forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/signin`} className="flex items-center justify-between w-full hover:cursor-pointer">
                    <span>Sign In</span>
                    <LogIn className="w-4 h-4 ml-2 text-muted-foreground" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}`} className="flex items-center justify-between w-full hover:cursor-pointer">
                    <span>Home</span>
                    <House className="w-4 h-4 ml-2 text-muted-foreground" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
