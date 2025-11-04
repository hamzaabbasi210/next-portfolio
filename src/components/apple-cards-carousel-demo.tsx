"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SectionHeading from "./SectionHeading";
import { jucijellies } from "../../public/projects-hero-sections/juicyjellies.png";
export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const title = "My Work";
  const desc =
    "From front-end frameworks to backend systems and cloud deployment, these are the technologies I specialize in.";
  return (
    <div className="w-full h-full">
      <SectionHeading title={title} description={desc} />
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/projects-hero-sections/juicyjellies.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://myjuicyjellies.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/projects-hero-sections/hassancomputer.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="http://hassancomputer.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/projects-hero-sections/ellavita.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="http://chotabhai.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/projects-hero-sections/zarahoor.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="http://zara-hoor.web.app/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/projects-hero-sections/chotaBhai.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="http://chotabhai.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/projects-hero-sections/olive.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://olive1solutions.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/projects-hero-sections/logilink.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="http://logilinklabs.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/projects-hero-sections/saraCosmetics.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://saracosmetics.net/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/projects-hero-sections/glejapan.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://glejapan.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/projects-hero-sections/valuebox.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://valueboxprinting.vercel.app/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/projects-hero-sections/dorzy.webp",
    content: (
      <div className="w-full h-[65vh] rounded-xl overflow-hidden">
        <iframe
          src="https://dorzay.olive1solutions.com/"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    ),
  },
];
