import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  description: string;
}  

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="relative mx-auto mt-12 max-w-7xl flex flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center  font-bold text-slate-700 text-5xl md:text-7xl  dark:text-slate-300">
          {`${title}`.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
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
          {description}
        </motion.p>
      </div>
    </div>
  );
}
