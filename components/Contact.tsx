"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type React from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">Contact Me</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 bg-card text-card-foreground rounded border border-gray-300 focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 bg-card text-card-foreground rounded border border-gray-300 focus:border-primary focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-2 bg-card text-card-foreground rounded border border-gray-300 focus:border-primary focus:outline-none h-32"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {submitMessage && (
          <p className="text-green-500 mb-4">{submitMessage}</p>
        )}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4 bg-card p-6 rounded-lg shadow-lg card-hover"
        >
          <p className="text-card-foreground">
            <span className="font-semibold">Email:</span>{" "}
            mohdanzar.work@gmail.com
          </p>
          <p className="text-card-foreground">
            <span className="font-semibold">Phone:</span> +91-8700376090
          </p>
          <p className="text-card-foreground">
            <span className="font-semibold">Location:</span> Indrapuram,
            Ghaziabad
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://linkedin.com/in/mohd-anzar-783060227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline button-hover"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Anzar0211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline button-hover"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1OVI3rMeYNaVoScjwJ0GZ2LhOTxBw5Mrw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-primary hover:underline button-hover"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
