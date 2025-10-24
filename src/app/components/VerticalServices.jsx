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

export default function VerticalServices() {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-100">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(600px circle at 0% 0%, #1d8fff22, transparent 50%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(600px circle at 100% 100%, #ff690022, transparent 50%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-5xl md:text-6xl font-black text-center mb-6 tracking-tight heading-oswald"
          style={{ color: "#1d8fff" }}
        >
          OUR VERTICAL SERVICES
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.5}
          className="mx-auto max-w-3xl text-center text-gray-600 mb-14"
        >
          From learning to hiring to transformation—our three pillars align talent, technology, and outcomes.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 — Academy */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            whileHover={{
              y: -6,
              boxShadow:
                "0 20px 40px -12px rgba(0,0,0,0.18), 0 0 0 2px rgba(29,143,255,0.25)",
            }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col transition-all"
          >
            {/* Icon */}
            <div className="mx-auto mb-6">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full grid place-items-center ring-2 ring-blue-400 shadow-md shadow-blue-400"
                  style={{
                    backgroundColor: "#1d8fff",
                    ringColor: "rgba(29,143,255,0.18)",
                  }}
                >
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 -z-10 blur-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: "radial-gradient(40px circle, #ff6900, transparent 60%)" }}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center mb-2 leading-tight">
              SKILLZREVO ACADEMY <span className="block">TRAINING VERTICAL</span>
            </h2>

            <p className="text-gray-600 text-center mb-5 text-sm">
              Programs in AI, GenAI, Cloud, DevOps, Cybersecurity, Data Science, Big Data & Analytics.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <span className={`${pill}`} style={{ background: "#E6F1FF", color: "#1d8fff" }}>
                Delivery: Online / Offline / Hybrid
              </span>
              <span className={`${pill}`} style={{ background: "#FFF0E6", color: "#ff6900" }}>
                Corporate Bootcamps
              </span>
              <span className={`${pill} bg-gray-50 text-gray-700 border border-gray-200`}>Weekend Cohorts</span>
            </div>

            {/* Bullets */}
            <div className="space-y-2.5 text-sm text-gray-700 mb-6">
              <p className="flex items-start"><span className="mr-2">◇</span> Hands-on labs & capstone projects</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Global cert prep (AWS, Azure, GCP, NASSCOM)</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Career services: resume, interviews, placement assist</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Mentor-led doubt clearing, LMS access & recordings</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Gain practical experience through real-world projects.</p>

            </div>

            {/* CTA */}
            <div className="mt-auto flex justify-center">
              <a
                href="https://academy.skillzrevo.com"
                className="px-6 py-2 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#ff6900" }}
              >
                Explore Our Academy
              </a>
            </div>
          </motion.article>

          {/* Card 2 — Talent */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1.5}
            whileHover={{
              y: -6,
              boxShadow:
                "0 20px 40px -12px rgba(0,0,0,0.18), 0 0 0 2px rgba(29,143,255,0.25)",
            }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col transition-all"
          >
            {/* Icon */}
            <div className="mx-auto mb-6">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full grid place-items-center ring-2 ring-orange-400 shadow-md shadow-orange-400"
                  style={{
                    backgroundColor: "#ff6900",
                    ringColor: "rgba(29,143,255,0.18)",
                  }}
                >
                  <Users2 className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 -z-10 blur-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: "radial-gradient(40px circle, #ff6900, transparent 60%)" }}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center mb-2 leading-tight">
              SKILLZREVO TALENT <span className="block">STAFFING & WORKFORCE SOLUTIONS</span>
            </h2>

            <p className="text-gray-600 text-center mb-5 text-sm">
              Permanent, Contract, RPO, Dedicated Offshore Teams for IT, BFSI, Retail, Healthcare, Manufacturing, EdTech.
            </p>

            {/* Why Us */}
            <p className="text-center font-semibold mb-3" style={{ color: "#1d8fff" }}>
              Why Choose Us
            </p>
            <div className="space-y-2.5 text-sm text-gray-700 mb-6">
              <p className="flex items-start"><span className="mr-2">◇</span> Pre-screened, skills-verified talent pipeline</p>
              <p className="flex items-start"><span className="mr-2">◇</span> AI-assisted sourcing & automated assessments</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Global, cost-efficient staffing models</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Fast turnaround SLAs & dedicated account manager</p>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <span className={`${pill} bg-gray-50 text-gray-700 border border-gray-200`}>Tech + Non-Tech</span>
              <span className={`${pill}`} style={{ background: "#E6F1FF", color: "#1d8fff" }}>Background Checks</span>
              <span className={`${pill}`} style={{ background: "#FFF0E6", color: "#ff6900" }}>Onboarding Support</span>
            </div>

            {/* CTA */}
            <div className="mt-auto flex justify-center">
              <a
                href="https://skillzrevotalent.com"
                className="px-6 py-2 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#ff6900" }}
              >
                Check Our Staffing Services
              </a>
            </div>
          </motion.article>

          {/* Card 3 — Consulting */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            whileHover={{
              y: -6,
              boxShadow:
                "0 20px 40px -12px rgba(0,0,0,0.18), 0 0 0 2px rgba(29,143,255,0.25)",
            }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col transition-all"
          >
            {/* Icon */}
            <div className="mx-auto mb-6">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full grid place-items-center ring-2 ring-blue-400 shadow-md shadow-blue-400"
                  style={{
                    backgroundColor: "#1d8fff",
                    ringColor: "rgba(29,143,255,0.18)",
                  }}
                >
                  <LineChart className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 -z-10 blur-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: "radial-gradient(40px circle, #ff6900, transparent 60%)" }}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center mb-2 leading-tight">
              SKILLZREVO CONSULTING <span className="block">DIGITAL & ANALYTICS</span>
            </h2>

            <p className="text-gray-600 text-center mb-5 text-sm">
              Advisory to execution across AI/ML, Cloud, BI & Visualization, and Digital Transformation.
            </p>

            {/* Services */}
            <div className="mb-6">
              <p className="font-semibold text-center mb-3">Services</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["AI/ML Consulting", "BI & Dashboards", "Cloud Advisory", "Digital Strategy", "Data Engineering"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-gray-700 rounded-full text-sm border border-gray-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Benefits */}
            <p className="text-center font-bold mb-3" style={{ color: "#1d8fff" }}>
              Client Benefits
            </p>
            <div className="space-y-2.5 text-sm text-gray-700 mb-6">
              <p className="flex items-start"><span className="mr-2">◇</span> Roadmaps aligned to business KPIs</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Industry-focused architects & SMEs</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Secure, scalable deployments with governance</p>
              <p className="flex items-start"><span className="mr-2">◇</span> Measurable ROI with phased delivery</p>
            </div>

            {/* CTA */}
            <div className="mt-auto flex justify-center">
              <a
                href="https://consulting.skillzrevo.com"
                className="px-6 py-2 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#ff6900" }}
              >
                Explore Our Consulting Services
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
