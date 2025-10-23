"use client";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Professionals Trained" },
  { value: "500+", label: "Global Clients Served" },
  { value: "20+", label: "Industry Verticals Covered" },
  { value: "100+", label: "Certified Trainers & Experts" },
  { value: "PAN India", label: "& International Presence" },
  { value: "Partnerships", label: "with NASSCOM, Microsoft, AWS, Google Cloud, Tableau" },
];

export default function WhyChooseSkillzRevo() {
  return (
    <section className="relative w-full pt-16 pb-24">
      {/* Split Background */}
      <div className="absolute inset-0 bg-white top-0 h-1/2" />
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-[#1d8fff]" />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d8fff] text-center heading-oswald mb-10">
          WHY CHOOSE SKILLZREVO?
        </h2>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-lg max-w-6xl w-full overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-x divide-gray-300">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-2"
              >
                <BadgeCheck size={40} className="text-[#ff6900]" />
                <p className="text-xl font-bold text-black">{item.value}</p>
                <p className="text-gray-600 text-sm max-w-[220px] leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
