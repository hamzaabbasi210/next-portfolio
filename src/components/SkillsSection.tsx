"use client";
import SectionHeading from "./SectionHeading";
import { Tabs } from "./ui/tabs";
import SkillTag from "@/components/SkillTag";
import { skills } from "@/data/skills";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Design",
];

const generateContent = (category: string) => {
  const filtered =
    category === "All" ? skills : skills.filter((s) => s.category === category);

  return (
    <div className="w-full flex justify-center bg-slate-200 dark:bg-zinc-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((skill, i) => (
          <SkillTag
            key={`${skill.name}-${i}`}
            name={skill.name}
            category={skill.category}
            Icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

const tabs = categories.map((category) => ({
  title: category,
  value: category,
  content: generateContent(category),
}));

export default function SkillsSection() {
  const title = "Technical Skills";
  const desc ="From front-end frameworks to backend systems and cloud deployment, these are the technologies I specialize in.";

  return (
    <div className="w-full">
      <SectionHeading title={title} description={desc} />
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center gap-4">
          <li>All</li>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Database</li>
          <li>Cloud</li>
          <li>DevOps</li>
          <li>Design</li>
        </ul>
      </div>
      <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center bg-slate-200 dark:bg-zinc-900 rounded-t-lg ">
        {/* <Tabs tabs={tabs} /> */}
      </div>
    </div>
  );
}
