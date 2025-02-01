"use client";

import Link from "next/link"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@primer/octicons-react";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";

const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1.3,
      },
    },
  },
};

const h1Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const h2Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: 0.7,
    },
  },
};

const nameVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: 0.4,
    },
  },
};

const buttonVariants = cva(
  [
    "ring-offset-background inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors",
    "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50"
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Hero() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  function BlinkingCursor() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible((v) => !v);
      }, 533);

      return () => clearInterval(interval);
    }, []);

    return isVisible ? (
      <div className={"inline-block text-purple-700"}>_</div>
    ) : (
      <div className={"inline-block invisible"}>_</div>
    );
  }

  return (
    <div className="my-12 space-y-8">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center w-full h-full z-3"
      >
        <motion.h1
          variants={h1Variants}
          initial="initial"
          animate="animate"
          className="text-center text-4xl font-bold sm:text-8xl"
        >
          {t('title')}{" "}
          <motion.span
            variants={nameVariants}
            initial="initial"
            animate="animate"
            className="block text-6xl sm:text-8xl sm:inline-block bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent"
          >
            {t('project')}
            <BlinkingCursor />
          </motion.span>
        </motion.h1>
        <motion.h2
          variants={h2Variants}
          initial="initial"
          animate="animate"
          className="px-4 py-6 text-center text-lg md:text-xl text-gh-text-secondary"
        >
          {t('subtitle')}
        </motion.h2>
      </motion.div>
      <p className="leading-6 text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl">
        {t('description')}
      </p>
      <div className="flex gap-4 justify-center align-middle">
        <Link href={`/${locale}/dashboard`} className={buttonVariants()}>
          {t('start')}
          <ArrowUpRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
