import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function Welcome() {
  const roles = useMemo(
    () => ["Web Developer", "Problem Solver", "Software Engineer"],
    []
  );
  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = 100; // Speed of typing
    const deletingInterval = 50; // Speed of deleting
    const pauseDuration = 1500; // Pause before deleting

    const typeCharacter = () => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < roles[currentIndex].length) {
          setCurrentRole(
            roles[currentIndex].substring(0, currentCharIndex + 1)
          );
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setCurrentRole(
            roles[currentIndex].substring(0, currentCharIndex - 1)
          );
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(
      typeCharacter,
      isDeleting ? deletingInterval : typingInterval
    );
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentIndex, isDeleting, roles]);

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-6xl font-bold mb-4 gradient-text"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hi, I am Mohammad Anzar
        </motion.h1>
        <motion.div
          className="text-2xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>
            I am a{" "}
            <span className="text-primary font-semibold">{currentRole}</span>
            <span className="animate-blink">|</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold button-hover"
          >
            Explore My Work
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
