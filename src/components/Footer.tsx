import React from 'react'
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="w-full py-10 px-4 rounded-3xl bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter  dark:text-slate-300">
              Lets build something.
            </h2>
            <div className="h-1 w-20 bg-neutral-900 dark:bg-white"></div>
            <p className="text-xl text-neutral-600 dark:text-gray-400 max-w-2xl">
              Let’s turn your idea into a high-quality digital product. I
              respond fastest on WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div style={{ opacity: 1, transform: "none;" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="
          group relative flex items-start justify-between p-8 rounded-2xl border transition-all duration-300
          bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700
        "
                href="mailto:hamzaabbassi210@gmail.com"
              >
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <FaRegEnvelope />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                      hamzaabbassi210@gmail.com
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 text-neutral-400"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="
          group relative flex items-start justify-between p-8 rounded-2xl border transition-all duration-300
          bg-neutral-900 dark:bg-neutral-100 border-transparent hover:opacity-90
        "
                href="https://wa.me/+923244945592"
              >
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-neutral-900">
                      WhatsApp
                    </h3>
                    <p className="text-sm mt-1 text-neutral-400 dark:text-neutral-500">
                      Available 24/7 for Clients
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 text-neutral-400 dark:text-neutral-500"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-neutral-100 dark:border-neutral-900"
            style={{ opacity: 1 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Socials &amp; Freelance
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800  hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700  transition-all text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white "
                href="https://github.com/hamzaabbasi210"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github w-4 h-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800  hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700  transition-all text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white "
                href="https://www.linkedin.com/in/hamza-abbasi-38b9922b9/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin w-4 h-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800  hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700  transition-all text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white "
                href="https://www.upwork.com/freelancers/~013e4799c4af6c07eb"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
                </svg>
                <span className="text-sm font-medium">Upwork</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800  hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700  transition-all text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white "
                href="https://www.fiverr.com/hamzaabbassi210"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"></path>
                </svg>
                <span className="text-sm font-medium">Fiverr</span>
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer
