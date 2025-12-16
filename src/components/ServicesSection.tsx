"use client"
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of scalable and responsive web applications using modern technologies like Next.js, React, and Node.js.",
  },
  {
    title: "Shopify Website Development",
    description:
      "I build high-performance Shopify websites using both traditional and headless setups tailored for seamless shopping experiences.",
  },
  {
    title: "WordPress Website Development",
    description:
      "Professional WordPress websites with custom themes, plugins, and page builders like Elementor or Gutenberg—fully optimized and easy to manage.",
  },
  {
    title: "Backend API Integration",
    description:
      "Secure and efficient backend development using Node.js, Express, and third-party API integrations for dynamic data handling.",
  },
  {
    title: "Custom API Development",
    description:
      "Build tailored REST or GraphQL APIs for your apps, ensuring seamless communication between front-end and back-end systems.",
  },
  {
    title: "UI/UX Design & Frontend Engineering",
    description:
      "Design and code visually engaging and intuitive interfaces with React, Tailwind, and ShadCN components.",
  },
  {
    title: "Web Hosting & Deployment",
    description:
      "CI/CD deployment on platforms like Vercel, Netlify, or cPanel with optimization for performance, uptime, and scalability.",
  },
  {
    title: "Website Optimization & Maintenance",
    description:
      "Speed, SEO, and performance audits, plus ongoing updates and bug fixes to keep your site fast, secure, and stable.",
  },
];
  
export default function ServicesSection() {
  const title = "What I Offer";
  const desc = "I craft modern web experiences with a focus on performance, design, and scalability."
  return (
    <div className="bg-white dark:bg-black">
      <SectionHeading title={title} description={desc} />
      {/* <div className="relative mx-auto mt-12 max-w-7xl flex flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-4xl dark:text-slate-300">
            {"What I Offer".split(" ").map((word, index) => (
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
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            I craft modern web experiences with a focus on performance, design,
            and scalability.
          </motion.p>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {services &&
          services.map((val, ind) => {
            return (
              <motion.div
                key={ind}
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.6,
                  delay: ind * 0.2, // 👈 one-by-one delay
                  ease: "easeIn",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-orange-400/40"
              >
                <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                    >
                      <defs>
                        <pattern
                          id="grid-pattern"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                          x="-12"
                          y="4"
                        >
                          <path d="M.5 20V.5H20" fill="none" />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        strokeWidth="0"
                        fill="url(#grid-pattern)"
                      />
                      <svg x="-12" y="4" className="overflow-visible">
                        <rect
                          strokeWidth="0"
                          width="21"
                          height="21"
                          x="140"
                          y="40"
                        />
                        <rect
                          strokeWidth="0"
                          width="21"
                          height="21"
                          x="180"
                          y="80"
                        />
                        <rect
                          strokeWidth="0"
                          width="21"
                          height="21"
                          x="180"
                          y="60"
                        />
                        <rect
                          strokeWidth="0"
                          width="21"
                          height="21"
                          x="160"
                          y="20"
                        />
                      </svg>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20 transition-all duration-300 group-hover:translate-x-2">
                  {val.title}
                </p>
                <p className="text-neutral-600 dark:text-gray-400 mt-4 text-base font-normal relative z-20 transition-opacity duration-300 group-hover:opacity-90">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
