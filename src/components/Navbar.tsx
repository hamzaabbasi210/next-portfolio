"use client";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="flex w-full  max-w-7xl mx-auto items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Hamza Abbasi</h1>
      </div>
      <div className="space-x-2">
        <a
          href="https://www.linkedin.com/in/hamza-abbasi-38b9922b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="transform rounded-lg bg-black px-2 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            <FaLinkedin />
          </button>
        </a>
        <a
          href="https://www.fiverr.com/hamzaabbassi210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="transform rounded-lg bg-black px-2 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            <TbBrandFiverr />
          </button>
        </a>
        <button
          onClick={() => changeTheme()}
          className="transform rounded-lg bg-black px-2 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}
