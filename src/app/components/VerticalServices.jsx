"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users2, LineChart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const pill = "px-3 py-1.5 rounded-full text-xs font-semibold";

const cards = [
  {
    id: 1,
    title: "SKILLZREVO ACADEMY",
    subtitle: "TRAINING VERTICAL",
    icon: <GraduationCap className="w-9 h-9 text-white" />,
    href: "https://academy.skillzrevo.com",
    color: "#1d8fff",
    accent: "#ff6900",
    gradient: "from-blue-50 via-white to-orange-50",
    cta: "Explore Our Academy",
    content: [
      "Hands-on labs & capstone projects",
      "Global cert prep (AWS, Azure, GCP, NASSCOM)",
      "Career services: resume, interviews, placement assist",
      "Mentor-led doubt clearing, LMS access & recordings",
      // "Gain practical experience through real-world projects.",
    ],
    tags: [
      { text: "Delivery: Online / Offline / Hybrid", bg: "#E6F1FF", color: "#1d8fff" },
      { text: "Corporate Bootcamps", bg: "#FFF0E6", color: "#ff6900" },
      { text: "Weekend Cohorts", bg: "#f9fafb", color: "#374151" },
    ],
  },
  {
    id: 2,
    title: "SKILLZREVO TALENT",
    subtitle: "STAFFING & WORKFORCE SOLUTIONS",
    icon: <Users2 className="w-9 h-9 text-white" />,
    href: "https://talent.skillzrevo.com",
    color: "#ff6900",
    accent: "#1d8fff",
    gradient: "from-orange-50 via-white to-blue-50",
    cta: "Check Our Staffing Services",
    content: [
      "Pre-screened, skills-verified talent pipeline",
      "AI-assisted sourcing & automated assessments",
      "Global, cost-efficient staffing models",
      "Fast turnaround SLAs & dedicated account manager",
    ],
    tags: [
      { text: "Tech + Non-Tech", bg: "#f9fafb", color: "#374151" },
      { text: "Background Checks", bg: "#E6F1FF", color: "#1d8fff" },
      { text: "Onboarding Support", bg: "#FFF0E6", color: "#ff6900" },
    ],
  },
  {
    id: 3,
    title: "SKILLZREVO CONSULTING",
    subtitle: "DIGITAL & ANALYTICS",
    icon: <LineChart className="w-9 h-9 text-white" />,
    href: "https://consulting.skillzrevo.com",
    color: "#00897b",
    accent: "#ff6900",
    gradient: "from-teal-50 via-white to-orange-50",
    cta: "Explore Our Consulting Services",
    content: [
      "Roadmaps aligned to business KPIs",
      "Industry-focused architects & SMEs",
      "Secure, scalable deployments with governance",
      "Measurable ROI with phased delivery",
    ],
    tags: [
      { text: "AI/ML Consulting", bg: "#E6F1FF", color: "#1d8fff" },
      { text: "Cloud Advisory", bg: "#FFF0E6", color: "#ff6900" },
      { text: "Data Engineering", bg: "#f9fafb", color: "#374151" },
    ],
  },
];

export default function VerticalServices() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-100 overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(600px circle at 0% 0%, #1d8fff22, transparent 50%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(600px circle at 100% 100%, #ff690022, transparent 50%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 px-4 uppercase text-center"
          // style={{ color: "#1d8fff" }}
        >
          OUR VERTICAL SERVICES
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          className="mx-auto max-w-3xl text-center text-gray-600 mb-14"
        >
          From learning to hiring to transformation — our three pillars align talent, technology, and outcomes.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <motion.article
              key={card.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px -12px rgba(0,0,0,0.18), 0 0 0 2px ${card.color}40`,
              }}
              className={`group relative bg-gradient-to-br ${card.gradient} rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col transition-all`}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl"
                style={{ background: `linear-gradient(to right, ${card.color}, ${card.accent})` }}
              ></div>

              {/* Icon */}
              <div className="mx-auto mb-6 mt-3">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full grid place-items-center ring-2 shadow-md"
                    style={{
                      backgroundColor: card.color,
                      ringColor: `${card.color}30`,
                      boxShadow: `0 0 20px ${card.color}55`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div
                    className="absolute inset-0 -z-10 blur-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(40px circle, ${card.accent}, transparent 60%)`,
                    }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 text-center mb-2 leading-tight">
                {card.title} <span className="block">{card.subtitle}</span>
              </h2>

              <div className="flex flex-wrap gap-2 justify-center mb-6 mt-4">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`${pill}`}
                    style={{ background: tag.bg, color: tag.color }}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>

              <div className="space-y-2.5 text-sm text-gray-700 mb-6">
                {card.content.map((point, idx) => (
                  <p key={idx} className="flex items-start">
                    <span className="mr-2">◇</span> {point}
                  </p>
                ))}
              </div>

              <div className="mt-auto flex justify-center">
                <a
                  href={card.href}
                  className="px-6 py-2 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: card.color }}
                >
                  {card.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
