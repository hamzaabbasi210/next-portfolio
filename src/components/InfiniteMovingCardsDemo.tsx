"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Globe,
  Database,
  Server,
  Code,
  FileCode,
  GitBranch,
  Github,
  Cloud,
  CloudLightning,
  Cpu,
  Layout,
  Boxes,
  Terminal,
  CpuIcon,
  Flame,
  Braces,
  Shield,
  Workflow,
  Box,
  FileJson,
  File,
  CloudUpload,
  Plug,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export function InfiniteMovingCardsDemo() {
  const title = "Technical Skills";
  const desc =
    "From front-end frameworks to backend systems and cloud deployment, these are the technologies I specialize in.";
  return (
    <>
     <SectionHeading title={title} description={desc} />
    <div className="rounded-md max-w-6xl flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
    </div>
    </>
  );
}

const techStack = [
  { name: "HTML5", img: FileCode },
  { name: "CSS3", img: Layout },
  { name: "JavaScript", img: Code },
  { name: "TypeScript", img: Braces },
  { name: "React.js", img: Flame },
  { name: "Next.js", img: Globe },
  { name: "Node.js", img: Server },
  { name: "Express.js", img: Workflow },
  { name: "Firebase", img: Cloud },
  { name: "Firestore", img: Database },
  { name: "MongoDB", img: Box },
  { name: "MySQL", img: Database },
  { name: "PostgreSQL", img: Database },
  { name: "Prisma ORM", img: FileJson },
  { name: "REST API", img: Plug },
  { name: "GraphQL", img: CloudLightning },
  { name: "Git", img: GitBranch },
  { name: "GitHub", img: Github },
  { name: "Vercel", img: CloudUpload },
  { name: "Netlify", img: CloudUpload },
  { name: "Docker", img: Boxes },
  { name: "Nginx", img: Shield },
  { name: "Linux", img: Terminal },
  { name: "VS Code", img: File },
];
// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
