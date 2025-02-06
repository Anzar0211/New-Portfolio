"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "IBM SkillsBuild",
    role: "Frontend Trainee",
    duration: "July 2024 - August 2024",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    company: "DevStack Soft Solutions",
    role: "Full Stack Developer Intern",
    duration: "August 2024 - October 2024",
    techStack: [
      "React",
      "JavaScript",
      "Express",
      "ElasticSearch",
      "TypeScript",
      "GraphQL",
      "MongoDB",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-secondary min-h-screen flex justify-center"
    >
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Experience
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full border-l-2 border-gray-300" />
          <ul className="space-y-8 ml-12">
            {experiences.map((exp, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline marker */}
                <div className="absolute -left-9 top-0">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background" />
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground">
                    {exp.role}
                  </p>
                  <span className="block text-sm text-gray-500 mb-4">
                    {exp.duration}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent px-2 py-1 rounded text-sm text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
