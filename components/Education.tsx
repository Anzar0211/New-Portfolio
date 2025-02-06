import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      institution: "DR. A.P.J Abdul Kalam Technical University",
      degree: "B.Tech in Computer Science and Information Technology",
      year: "2021 – 2025",
      details: [
        "Current CGPA (Avg): 8.09",
        "Relevant Coursework: Computer Architecture, OOP, Networks, Software Engineering, DBMS",
      ],
    },
    {
      institution: "St. Thomas School",
      degree: "XII (PCM)",
      year: "2021",
      details: [
        "Percentage: 90.2%",
        "Relevant Coursework: Physics, Chemistry, Maths, Computer Science",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Education
        </h2>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="mb-12 bg-card p-6 rounded-lg shadow-lg card-hover"
          >
            <h3 className="text-2xl font-semibold mb-2 text-card-foreground">
              {edu.institution}
            </h3>
            <p className="text-xl mb-2 text-primary">{edu.degree}</p>
            <p className="text-muted-foreground mb-4">{edu.year}</p>
            <ul className="list-disc list-inside text-card-foreground">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
