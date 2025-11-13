"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaQuoteLeft, FaCheckCircle, FaAward, FaGlobe, FaLightbulb, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const FounderSection = () => {
  const achievements = [
    { icon: FaAward, label: "20+ Years Experience", desc: "Corporate training & consulting" },
    { icon: FaGlobe, label: "Global Reach", desc: "Partnerships across continents" },
    { icon: FaUsers, label: "5000+ Trained", desc: "Professionals empowered" },
  ];

  const visionPoints = [
    {
      title: "Global Brand",
      desc: "Build SkillzRevo into a worldwide leader in technology education & consulting",
      icon: FaGlobe,
      color: "#1d8fff"
    },
    {
      title: "1M Learners",
      desc: "Empower 1 million learners & professionals in the next 5 years",
      icon: FaUsers,
      color: "#ff6a1d"
    },
    {
      title: "Sustainable Bridge",
      desc: "Create lasting connections between talent, technology & transformation",
      icon: FaRocket,
      color: "#1ddf9f"
    },
  ];

  const principles = [
    { text: "Empowering people through continuous learning", icon: FaLightbulb },
    { text: "Fostering innovation with collaboration", icon: FaRocket },
    { text: "Delivering measurable real-world outcomes", icon: FaChartLine },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-24 lg:py-32 overflow-hidden">
      {/* Main Content Grid */}
      <div className="max-w-[1600px] mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

        {/* RIGHT SIDE - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-[3rem] blur-3xl" />

            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] opacity-20 blur-2xl" />
              
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/founder.jpg"
                  width={700}
                  height={800}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                  alt="Rakesh Singh - Founder & CEO"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <p className="heading-oswald text-2xl font-bold text-gray-900"> Mr. Rakesh Singh</p>
                    <p className="text-blue-600 font-semibold">Founder & CEO</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">20+ Years</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Industry Leader</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">NASSCOM</p>
                    <p className="text-xs text-gray-600">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* LEFT SIDE - Content */}
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
              <h2 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight uppercase heading-oswald">
                Founder & CEO's
                <span className="block text-blue-600">Message</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-semibold text-gray-800">
                A Vision to Revolutionize Skills for the Future
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                At SkillzRevo Solutions Pvt Ltd, we believe that the future belongs to those who can learn, adapt, and innovate faster than change itself. Our mission is simple yet powerful — to revolutionize skill acquisition and bridge the gap between talent and opportunity in an era driven by technology and transformation.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  Under the leadership of our Founder & CEO, <span className="font-bold text-blue-600">Mr. Rakesh Singh</span>, SkillzRevo has grown into a multi-division organization focused on Education & Training, Staffing & Talent Solutions, and Technology Consulting.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Connect on LinkedIn 
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:ceo@skillzrevo.com"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all"
              >
                Email the CEO
              </a>
            </div>
          </motion.div>

          
        </div>

        {/* QUOTE SECTION - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-[3rem] blur-3xl opacity-10" />
          
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-[3rem] p-12 lg:p-16 text-center">
            <FaQuoteLeft className="text-blue-400 text-5xl mx-auto mb-8 opacity-50" />

            <blockquote className="max-w-4xl mx-auto space-y-6">
              <p className="heading-oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed">
                "The world is witnessing an unprecedented shift — where artificial intelligence, analytics, and automation are redefining how we learn, work, and grow."
              </p>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                At SkillzRevo, our purpose is not just to teach or consult, but to{" "}
                <span className="text-blue-400 font-bold">drive transformation</span>. Every initiative we take is rooted in excellence, innovation, and impact.
              </p>

              <div className="pt-8 border-t border-white/20">
                <p className="heading-oswald text-2xl font-bold text-white mb-2">— Rakesh Singh</p>
                <p className="text-gray-400">Founder & CEO, SkillzRevo Solutions Pvt Ltd</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                  Connect on LinkedIn
                </a>
              </div>
            </blockquote>
          </div>
        </motion.div>

        {/* ABOUT THE FOUNDER */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
              MEET THE LEADER
            </span>
            <h3 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase mb-6">
              About the <span className="text-blue-600">Founder</span>
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              With over <span className="font-bold text-blue-600">20+ years of experience</span> in corporate training, consulting, and technology enablement, Mr. Rakesh Singh has shaped SkillzRevo's global direction. He has collaborated with major organizations and institutions to create high-impact programs across AI, Data Science, Cyber Security, Business Intelligence, Cloud Computing, and Digital Transformation.
            </p>
          </div>

          {/* Achievement Cards */}
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
                    <h4 className="heading-oswald text-2xl font-bold mb-2">{item.label}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-xl" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-2">{point.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* VISION FOR FUTURE - Full Width Colored Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative -mx-6 lg:-mx-16 xl:-mx-24 mb-24"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
            
            <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
              <div className="text-center mb-16">
                <h3 className="heading-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-4">
                  Our Founder's Vision
                  <span className="block mt-2">For the Future</span>
                </h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Three pillars that will shape SkillzRevo's next chapter
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {visionPoints.map((vision, index) => {
                  const Icon = vision.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
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
                        <h4 className="heading-oswald text-2xl font-bold text-gray-900 mb-3">{vision.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{vision.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONNECT WITH FOUNDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-[3rem] p-12 lg:p-16"
        >
          <h3 className="heading-oswald text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-6">
            Connect with the <span className="text-blue-600">Founder</span>
          </h3>

          <div className="space-y-4 mb-8">
            <p className="text-xl text-gray-700">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <strong className="text-blue-600">Rakesh Singh</strong>
              </span>
              {" "}— Founder & CEO, SkillzRevo Solutions Pvt Ltd
            </p>
            <p className="text-lg text-gray-600">
              📧 <a href="mailto:ceo@skillzrevo.com" className="text-blue-600 hover:underline font-semibold">ceo@skillzrevo.com</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <FaLinkedin className="text-xl" />
              Connect on LinkedIn
            </a>

            <a
              href="mailto:ceo@skillzrevo.com"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FounderSection;


