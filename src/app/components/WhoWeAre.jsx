"use client";

import React from "react";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const cards = [
  {
    title: "Our Mission",
    text: "To empower learners, professionals, and enterprises with future-ready skills and solutions.",
  },
  {
    title: "Our Vision",
    text: "To become a global leader in integrated talent, training, and technology services.",
  },
  {
    title: "Our Values",
    text: (
      <>
        Integrity | Innovation <br /> Industry Alignment <br /> Impact
      </>
    ),
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 py-16 md:py-24  overflow-hidden">
      {/* Decorative background blob */}
      <div
        aria-hidden
        className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(400px circle at 0% 100%, rgba(29,143,255,0.25), transparent 60%)",
        }}
      ></div>

      <div className="relative mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Right Side - Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="w-full lg:w-1/2 max-lg:hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
            alt="Team collaboration"
            className="rounded-r-2xl shadow-xl w-full object-cover h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px]"
          />
        </motion.div>
        
        
        {/* Left Side - Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-1/2 text-center lg:text-left md:pr-4"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 px-4 uppercase">
            WHO WE ARE
          </h2>
          <p className="text-gray-700 mb-10 px-4 leading-relaxed text-base md:text-lg">
            SkillzRevo Solutions Pvt Ltd is a{" "}
            <span className="font-semibold text-gray-900">
              Multi-Vertical Enterprise
            </span>{" "}
            driving growth for individuals and businesses through{" "}
            <span className="font-semibold text-gray-900">
              Training, Staffing, and Consulting.
            </span>
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 px-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 12px 24px -8px rgba(0,0,0,0.15), 0 0 0 2px rgba(29,143,255,0.15)",
                }}
                className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center px-6 py-8"
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                  <CircleCheckBig className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#1d8fff] mb-2 text-lg">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {card.text}
                </p>
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                  style={{
                    background:
                      "linear-gradient(to right, #1d8fff, #ff6900, #1d8fff)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            href="/about-skillzrevo"
            className="mx-4 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            About SkillzRevo →
          </motion.a>
        </motion.div>

        
      </div>
    </section>
  );
}
