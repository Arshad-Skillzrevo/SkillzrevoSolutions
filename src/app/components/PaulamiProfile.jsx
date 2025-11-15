"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaAward,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const PaulamiProfile = () => {
  const achievements = [
    {
      icon: FaUsers,
      label: "People-Centric Leader",
      desc: "Expert in HR development & team building",
    },
    {
      icon: FaAward,
      label: "Operational Excellence",
      desc: "Structured execution & process optimisation",
    },
    {
      icon: FaGlobe,
      label: "Multi-Vertical Leadership",
      desc: "Academy, Talent & Consulting operations",
    },
  ];

  const visionPoints = [
    {
      title: "Operational Excellence",
      desc: "Build scalable, efficient & high-performance organisational systems.",
      icon: FaChartLine,
      color: "#1d8fff",
    },
    {
      title: "People-First Leadership",
      desc: "Develop strong, empowered teams built on trust and capability.",
      icon: FaUsers,
      color: "#ff6a1d",
    },
    {
      title: "Service Excellence",
      desc: "Deliver exceptional learner, partner & enterprise experience.",
      icon: FaLightbulb,
      color: "#1ddf9f",
    },
  ];

  const principles = [
    {
      text: "Building strong teams with people-first leadership",
      icon: FaUsers,
    },
    {
      text: "Driving operational discipline and efficiency",
      icon: FaRocket,
    },
    {
      text: "Ensuring consistency, quality & measurable outcomes",
      icon: FaChartLine,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* RIGHT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-orange-500/20 rounded-[3rem] blur-3xl" />

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-orange-600 rounded-[3rem] opacity-20 blur-2xl" />

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/team/madam.jpeg"
                  width={300}
                  height={500}
                  className="object-cover object-top scale-125 w-full h-[500px] lg:h-[600px]"
                  alt="Paulami B Singh - Co-Founder & COO"
                />

                {/* Name & Title Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <p className="heading-oswald text-2xl font-bold text-gray-900">
                      Mrs. Paulami B Singh
                    </p>
                    <p className="text-blue-600 font-semibold">
                      Co-Founder & Chief Operating Officer
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        People-First Leader
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        Operations Expert
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Leadership</p>
                    <p className="text-xs text-gray-600">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-500 font-semibold text-sm mb-4">
                LEADERSHIP
              </span>
              <h2 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight uppercase">
                Co-Founder’s
                <span className="block text-blue-600">Message</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-semibold text-gray-800">
                Leading with Excellence, People, and Purpose
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Paulami B Singh is a strategic, people-focused leader shaping
                SkillzRevo’s operational backbone. As Co-Founder & COO, she
                drives execution, service delivery, customer experience, and
                organisational excellence across SkillzRevo Academy, Talent, and
                Consulting.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  With extensive experience across education leadership,
                  operations, HR development, and institutional management,
                  Paulami ensures SkillzRevo runs with precision, quality, and a
                  strong commitment to people-first leadership.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paulami-bhattacharje-singh-88429478/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Connect on LinkedIn
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:coo@skillzrevo.com"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all"
              >
                Email the COO
              </a>
            </div>
          </motion.div>
        </div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-[3rem] blur-3xl opacity-10" />

          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-[3rem] p-12 lg:p-16 text-center">
            <p className="heading-oswald text-3xl md:text-4xl text-white opacity-90 leading-relaxed mb-8">
              "Operational excellence, people-first leadership, and a relentless
              commitment to quality form the backbone of SkillzRevo’s growth."
            </p>

            <div className="pt-8 border-t border-white/20">
              <p className="heading-oswald text-2xl font-bold text-white mb-2">
                — Paulami B Singh
              </p>
              <p className="text-gray-400">
                Co-Founder & Chief Operating Officer
              </p>
              <a
                href="https://www.linkedin.com/in/paulami-bhattacharje-singh-88429478/"
                className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <FaLinkedin className="text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* ABOUT SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
              MEET THE LEADER
            </span>
            <h3 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase mb-6">
              About the <span className="text-blue-600">COO</span>
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              With deep expertise in operations management, educational
              leadership, HR development, and academic excellence, Paulami B
              Singh brings discipline, structure, and transformative leadership
              to SkillzRevo.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-white text-3xl" />
                    </div>
                    <h4 className="heading-oswald text-2xl font-bold mb-2">
                      {item.label}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-xl" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative -mx-6 lg:-mx-16 xl:-mx-24 mb-24"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 py-20 relative overflow-hidden">
            <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
              <div className="text-center mb-16">
                <h3 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-4">
                  COO’s Vision
                  <span className="block mt-2">For the Future</span>
                </h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Built on operational mastery, people-first culture, and execution excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {visionPoints.map((vision, idx) => {
                  const Icon = vision.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 bg-white rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-2">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: vision.color }}
                        >
                          <Icon className="text-white text-3xl" />
                        </div>
                        <h4 className="heading-oswald text-2xl font-bold text-gray-900 mb-3">
                          {vision.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {vision.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-[3rem] p-12 lg:p-16"
        >
          <h3 className="heading-oswald text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-6">
            Connect with the <span className="text-blue-600">COO</span>
          </h3>

          <p className="text-xl text-gray-700 mb-4">
            <strong className="text-blue-600">Paulami B Singh</strong> — Co-Founder & Chief Operating Officer
          </p>

          <p className="text-lg text-gray-600 mb-8">
            📧{" "}
            <a
              href="mailto:coo@skillzrevo.com"
              className="text-blue-600 hover:underline font-semibold"
            >
              coo@skillzrevo.com
            </a>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/paulami-bhattacharje-singh-88429478/"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <FaLinkedin className="text-xl" />
              Connect on LinkedIn
            </a>

            <a
              href="mailto:coo@skillzrevo.com"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PaulamiProfile;
