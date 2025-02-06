"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "YelpCamp Campgrounds",
      description:
        "Full-stack web app enabling users to post, edit, and review campgrounds.Built with React, Node.js, Express, and MongoDB for a seamless user experience.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "JavaScript",
        "EJS",
        "CSS",
        "BootStrap",
        "Mapbox",
      ],
      link: "https://yelpcamp-1yy4.onrender.com",
      github: "https://github.com/Anzar0211/YelpCamp",
    },
    {
      name: "Goalpost Gazette",
      description:
        "Football-focused blog platform with React.js, Node.js, and MongoDB.Features user authentication, real-time updates, and a rich text editor for posts.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "ExpressJS",
        "TailwindCSS",
        "Redux",
        "Firebase",
      ],
      link: "https://goalpost-gazette.onrender.com",
      github: "https://github.com/Anzar0211/MERN-Football-Blogs",
    },
    {
      name: "BookAway.com",
      description:
        "Hotel booking app using React, Node.js, MongoDB, and Tailwind CSS.Includes features like room search, booking management, and user reviews.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "ContextAPI",
        "Playwright",
      ],
      link: "https://hotelbookingapp-frontend.onrender.com",
      github: "https://github.com/Anzar0211/HotelBookingApp-Frontend",
    },
    {
      name: "CareerPilot.com",
      description:
        "Job finding app built with Next.js and Node.js.Offers advanced search filters, user profiles, and real-time job alerts.",
      techStack: [
        "Next.js",
        "Node.js",
        "Clerk",
        "TailwindCSS",
        "ShadCN",
        "SupaBase",
        "MongoDB",
      ],
      link: "https://career-pilot-jobs-find.vercel.app/",
      github: "https://github.com/Anzar0211/CareerPilot-JobFindingApp",
    },
    {
      name: "Moneyy.com",
      description:
        "Stock portfolio management website built with React, Node.js, and MongoDB. Provides real-time stock data, portfolio tracking, and performance analytics.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Clerk", "ShadCN"],
      link: "https://portfolio-analytics-alpha.vercel.app/",
      github: "https://github.com/Anzar0211/Portfolio-analytics",
    },
    {
      name: "AnonMessenger",
      description:
        "Anonymous Messenger website built with React Native and Firebase. Enables secure, anonymous messaging with real-time updates and end-to-end encryption.",
      techStack: [
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Google Gemini AI",
        "ShadCN",
      ],
      link: "#",
      github: "https://github.com/Anzar0211/anon-messenger",
    },
    {
      name: "Inventory Management",
      description:
        "Inventory Management website built with Next.js, TypeScript, Prisma, and MySQL. Simplifies inventory tracking, order management, and reporting for businesses.",
      techStack: ["TypeScript", "TailwindCSS", "MySQL", "Prisma"],
      link: "#",
      github: "https://github.com/Anzar0211/Inventory-management",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalDuration = 4000;

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, intervalDuration);
      return () => clearInterval(timer);
    }
  }, [isPaused, currentIndex, projects.length]);

  const variants = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-secondary flex flex-col items-center"
    >
      <div
        className="w-full md:w-4/5 relative px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-24 sm:mb-12 text-center gradient-text">
          Projects
        </h2>

        <div className="overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].name}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-card p-6 sm:p-14 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-card-foreground">
                {projects[currentIndex].name}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {projects[currentIndex].description}
              </p>
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-card-foreground">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-accent px-2 py-1 rounded text-xs sm:text-sm text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {projects[currentIndex].link === "#" ? (
                  <span className="text-gray-500 cursor-not-allowed text-xs sm:text-base">
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline button-hover text-xs sm:text-base"
                  >
                    Live
                  </a>
                )}
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline button-hover text-xs sm:text-base"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-card rounded-full p-2 sm:p-3 shadow hover:bg-accent focus:outline-none"
            aria-label="Previous Project"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-card rounded-full p-2 sm:p-3 shadow hover:bg-accent focus:outline-none"
            aria-label="Next Project"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
