"use client";

import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  currentSection: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export default function Navigation({
  currentSection,
  isSidebarOpen,
  setIsSidebarOpen,
}: NavigationProps) {
  const navItems = [
    { id: "welcome", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "techstack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element) {
      event?.preventDefault();

      element.scrollIntoView({ behavior: "smooth" });

      setIsSidebarOpen(false);
    }
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md py-4 hidden md:block"
      >
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-lg ${
                  currentSection === item.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                } hover:text-primary transition-colors`}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 left-0 bottom-0 w-64 bg-background/95 backdrop-blur-md z-50 md:hidden"
      >
        <div className="p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 p-2"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="space-y-4 mt-12">
            {navItems.map((item) => (
              <motion.li key={item.id} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block text-lg w-full text-left ${
                    currentSection === item.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  } hover:text-primary transition-colors`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
