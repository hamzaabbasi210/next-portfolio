import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiReactrouter,
    SiNodedotjs, SiExpress,
    SiMongodb, SiPostgresql, SiMysql,
    SiFirebase, SiSupabase, SiAmazon, SiGooglecloud,
    SiDocker, SiGit,
    SiFigma, SiAdobephotoshop
} from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";

export const skills = [
    { name: "JavaScript", category: "Frontend", icon: SiJavascript },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
    { name: "React Native", category: "Frontend", icon: SiReact },

    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "Express.js", category: "Backend", icon: SiExpress },

    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "MySQL", category: "Database", icon: SiMysql },

    { name: "Firebase", category: "Cloud", icon: SiFirebase },
    { name: "Supabase", category: "Cloud", icon: SiSupabase },
    { name: "AWS", category: "Cloud", icon: SiAmazon },
    { name: "Google Cloud", category: "Cloud", icon: SiGooglecloud },
    { name: "Azure", category: "Cloud", icon: TiVendorMicrosoft },

    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "Git", category: "DevOps", icon: SiGit },

    { name: "Figma", category: "Design", icon: SiFigma },
    { name: "Photoshop", category: "Design", icon: SiAdobephotoshop },
];
  