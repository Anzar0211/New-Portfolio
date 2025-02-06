"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGraphql,
  SiMysql,
  SiPostman,
  SiRedux,
  SiGithub,
  SiPython,
  SiFastapi,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GraphQL", icon: SiGraphql },
  { name: "MySQL", icon: SiMysql },
  { name: "Postman", icon: SiPostman },
  { name: "Redux", icon: SiRedux },
  { name: "GitHub", icon: SiGithub },
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
];

export default function TechStack() {
  return (
    <section id="techstack" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <tech.icon className="text-6xl mb-2" />
              <span className="text-lg text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
