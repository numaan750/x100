"use client";

import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/animated-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const IMAGES = [
  { url: "/Morocco/cover.webp", title: "Studio Apartments" },
  { url: "/new zealand/cover.jpg", title: "Luxury Apartments" },
  { url: "/Tokyo/cover.jpg", title: "Downtown Penthouses" },
  { url: "/Bali/cover.jpeg", title: "Suburban Family Homes" },
  { url: "/Iceland/cover.jpg", title: "Modern Villas" },
];

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              src={image.url}
              alt={image.title}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text description sliding up */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="text-2xl text-white font-bold">{image.title}</h3>
              <p className="text-white/80 mt-2 text-sm">
                Explore the beautiful landscapes and moments captured in{" "}
                {image.title}.
              </p>
            </div>
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <motion.h1
          className="max-w-xl text-5xl tracking-tighter text-primary text-backdrop-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          EliteHomes
        </motion.h1>
        <motion.p
          className="my-6 max-w-xl text-primary "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A premium real estate platform, designed to flawlessly showcase luxury
          properties and find your dream home.{" "}
        </motion.p>
        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatedButton
              href="/showcase"
              variant="outline"
              icon={<ArrowRight size={16} />}
            >
              Showcase
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton
              href="/about"
              variant="outline"
              icon={<ArrowRight size={16} />}
            >
              About
            </AnimatedButton>
          </motion.div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}

export function HeroDemo1() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={image.url}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <AnimatedButton
            href="/about"
            variant="outline"
            icon={<ArrowRight size={16} />}
          >
            Learn more about my journey
          </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}

export function HeroDemo2() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant="fourCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={image.url}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <AnimatedButton
            href="/about"
            variant="outline"
            icon={<ArrowRight size={16} />}
          >
            Learn more about my journey
          </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}

export function HeroDemo3() {
  return (
    <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
      <BentoGrid
        variant="threeCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={image.url}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-400">
            Get Started
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-white"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}
