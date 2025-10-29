"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Users, Globe, Building2, Award, Handshake, TrendingUp } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Professionals Trained", icon: Users, color: "from-blue-500 to-cyan-500" },
  { value: "500+", label: "Global Clients Served", icon: Globe, color: "from-purple-500 to-pink-500" },
  { value: "20+", label: "Industry Verticals Covered", icon: Building2, color: "from-orange-500 to-red-500" },
  { value: "100+", label: "Certified Trainers & Experts", icon: Award, color: "from-green-500 to-emerald-500" },
  { value: "PAN India", label: "& International Presence", icon: TrendingUp, color: "from-indigo-500 to-blue-500" },
  { value: "Partnerships", label: "with NASSCOM, Microsoft, AWS, Google Cloud, Tableau", icon: Handshake, color: "from-amber-500 to-orange-500" },
];

export default function WhyChooseSkillzRevo() {
  return (
    <section className="relative w-full py-8 md:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
            {/* <BadgeCheck size={56} className="text-[#1d8fff]" /> */}
          </motion.div>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4">
            WHY CHOOSE SKILLZREVO?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering professionals worldwide with cutting-edge training and expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-md`}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.h3
                    className="text-4xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {item.value}
                  </motion.h3>

                  {/* Label */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.label}
                  </p>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#1d8fff] to-[#ff6900] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}