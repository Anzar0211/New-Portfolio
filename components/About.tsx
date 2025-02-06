import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-secondary"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        {/* Photo Section */}
        <motion.img
          src="/My%20Pic.jpeg"
          alt="Profile"
          className="w-48 h-48 mx-auto mb-6 rounded-lg hover:shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        />
        <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
        <motion.p
          className="text-lg mb-6 text-secondary-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I&apos;m a passionate Full Stack Developer with experience in building
          scalable web applications using modern technologies. Currently
          pursuing B.Tech in Computer Science and Information Technology at DR.
          A.P.J Abdul Kalam Technical University. I have a strong foundation in
          both front-end and back-end development, and I am proficient in a
          variety of programming languages and frameworks. I am always eager to
          learn new technologies and improve my skills. In my free time, I enjoy
          contributing to open-source projects and staying updated with the
          latest trends in the tech industry.
        </motion.p>
      </motion.div>
    </section>
  );
}
