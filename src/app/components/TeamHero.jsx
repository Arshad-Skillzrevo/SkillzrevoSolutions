"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="w-full bg-blue-50 py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 grid grid-cols-1 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl heading-oswald lg:text-7xl text-center uppercase font-bold leading-tight text-gray-900">
            Meet the Minds Behind <span className="text-blue-600">SkillzRevo</span>
          </h1>

          <p className="text-gray-700 max-w-5xl mx-auto text-center text-lg md:text-xl leading-relaxed">
            Our team consists of passionate leaders, expert trainers, and dedicated
            professionals who work tirelessly to create impactful learning experiences.
            Together, we build innovative solutions that empower individuals and
            organizations to thrive in today’s digital world.
          </p>

          <a
            href="#team-section"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-md transition-all duration-200"
          >
            Meet Our Team
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center "
        >
          <div className="relative w-full md:w-10/12 h-64 md:h-100 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="SkillzRevo Team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
