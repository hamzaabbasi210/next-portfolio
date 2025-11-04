import { IconType } from "react-icons";

// components/SkillTag.tsx
interface SkillTagProps {
  name: string;
  category: string;
  Icon: IconType;
}

const categoryColors: Record<string, string> = {
  Frontend: "bg-orange-500",
  Backend: "bg-yellow-600",
  Database: "bg-yellow-600",
  Cloud: "bg-indigo-500",
  DevOps: "bg-emerald-600",
  Design: "bg-pink-500",
};

export default function SkillTag({ name, category, Icon: Icon }: SkillTagProps) {
  return (
    <button className="z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover sm:w-56 w-full flex items-center justify-start bg-white dark:bg-zinc-700 rounded-full">
      <Icon className="text-xs" />
      <span className="font-medium">{name}</span>
      <span
        className={`text-sm px-2 py-0.5 rounded-full text-white ${categoryColors[category]}`}
      >
        {category}
      </span>
    </button>
  );
}
