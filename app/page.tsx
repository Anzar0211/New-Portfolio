"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import Navigation from "@/components/Navigation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Experience from "@/components/Experience";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "welcome",
        "about",
        "education",
        "experience",
        "projects",
        "techstack",
        "contact",
      ];

      const sectionElements = sections
        .map((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: section,
              top: rect.top + window.scrollY,
              bottom: rect.bottom + window.scrollY,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sectionElements) {
        if (
          section &&
          scrollPosition >= section.top &&
          scrollPosition < section.bottom
        ) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-background/80 backdrop-blur-md rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <Navigation
        currentSection={currentSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <section id="welcome" className="min-h-screen">
            <Welcome />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="education" className="min-h-screen">
            <Education />
          </section>
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="techstack" className="min-h-screen">
            <TechStack />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
