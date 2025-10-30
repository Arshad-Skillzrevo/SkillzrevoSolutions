"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

export default function CareerShowcase() {
  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 uppercase">
          Build Your Career with Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Explore endless opportunities — whether you want to work with us
          directly or find your dream job through our staffing network.
        </p>
      </motion.div>

      {/* Career Options Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Block - Staffing Careers */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-2xl shadow-xl border border-blue-100 bg-white"
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff] via-[#1d8fff]/80 to-orange-500/90  group-hover:opacity-100 transition" />

          {/* Content */}
          <div className="relative z-10 p-10 text-white flex flex-col justify-end min-h-[400px]">
            <div className="mb-4">
              <Briefcase size={48} className="text-white opacity-90 mb-3" />
              <h3 className="text-3xl font-semibold mb-2">Explore Jobs</h3>
              <p className="text-white/90 text-base leading-relaxed">
                Browse job openings across industries with SkillzRevo Staffing.
                Whether you’re a fresher or an experienced professional, we’ll
                help you find the right fit.
              </p>
            </div>
            <a
              href="https://skillzrevotalent.com/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-fit bg-white text-[#1d8fff] font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              View Openings
            </a>
          </div>
        </motion.div>

        {/* Right Block - Work With Us */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-2xl shadow-xl border border-blue-100 bg-white"
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff] via-[#1d8fff]/80 to-orange-500/90 transition group-hover:opacity-100" />

          {/* Content */}
          <div className="relative z-10 p-10 text-white flex flex-col justify-end min-h-[400px]">
            <div className="mb-4">
              <Users size={48} className="text-white opacity-90 mb-3" />
              <h3 className="text-3xl font-semibold mb-2">Work With Us</h3>
              <p className="text-white/90 text-base leading-relaxed">
                Join the SkillzRevo core team — a passionate group shaping the
                future of IT, Training & Consulting. Grow your career where
                innovation meets opportunity.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-4 inline-block w-fit bg-white text-[#1d8fff] font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Join Our Team
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating accent orbs */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 right-1/3 w-20 h-20 bg-blue-200/40 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300/30 rounded-full blur-2xl"
      />
    </section>
  );
}
