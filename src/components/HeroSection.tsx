"use client";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { SparklesPreview } from "./ui/background-sparkles";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { FaWhatsapp, FaDownload } from "react-icons/fa6";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-8  max-w-7xl flex flex-col items-center justify-center">
      {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
      <div className="px-4 py-10 md:py-20">
        {/* <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 lg:mb-8 rounded-full overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/10 ring-4 ring-white/50 dark:ring-gray-800/50 "
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 lg:mb-8 rounded-full overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/10 ring-4 ring-white/50 dark:ring-gray-800/50">
              <img
                src="/Developer.gif"
                alt="Landing page preview"
                className="aspect-[10/9] h-auto w-full object-cover"
                height={1000}
                width={1000}
              />
            </div>
          </motion.div> */}
        {/* <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-sm md:text-lg font-normal text-neutral-600 dark:text-neutral-400 flex items-center justify-center"
          >
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
              pointerClassName="text-yellow-500"
            >
              <span className="relative z-10">
                Full-Stack Developer & UI/UX Enthusiast
              </span>
            </PointerHighlight>
          </motion.p> Hi, I'm Hamza Abbasi*/}

        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-[5.5rem] dark:text-slate-300">
          {"Building digital Products that Perform"
            .split(" ")
            .map((word, index) => {
              const highlightWords = ["Products", "Perform"];

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className={`mr-2 inline-block ${
                    highlightWords.includes(word)
                      ? "text-2xl md:text-4xl lg:text-[5.5rem]  bg-gradient-to-br from-violet-500 to-pink-500 text-transparent bg-clip-text"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
        </h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-gray-400"
        >
          I am Hamza Abbasi, a Software Engineer specializing in creating
          full-stack mobile and web apps. With a passion for clean code and
          innovative design, I turn ideas into reality in the world.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/Resume-muhammad-hamza.pdf" target="_blank">
            <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 flex items-center justify-center gap-4">
              Resume <FaDownload />
            </button>
          </a>
          <a href="https://wa.me/+923244945592" target="_blank">
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 flex items-center justify-center gap-4">
              Let's Talk <FaWhatsapp />
            </button>
          </a>
        </motion.div>
      </div>
      {/* </BackgroundLines> */}
      <InfiniteMovingCardsDemo />
    </div>
  );
}
