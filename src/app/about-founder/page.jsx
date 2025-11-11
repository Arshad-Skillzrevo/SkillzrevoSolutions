"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Mail, ChevronDown, Sparkles, Target, Users, TrendingUp } from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/your-profile-link";
const FOUNDER_IMAGE = "/test.jpg";

export default function FounderCEOMessage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(29, 143, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(29, 143, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.2}px)`
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="fixed top-20 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative mx-auto px-6 py-12 lg:py-20">
        {/* Hero Section */}
        <section className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-16 justify-between mb-24">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400 tracking-wide">Founder & CEO</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Inspiring
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Transformation
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                At SkillzRevo, we revolutionize skill acquisition and bridge the gap between talent and opportunity through technology and innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>

                <a
                  href="mailto:ceo@skillzrevo.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm font-medium hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email the CEO</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <StatCard icon={TrendingUp} number="20+" label="Years Experience" />
                <StatCard icon={Target} number="3" label="Verticals" />
                <StatCard icon={Users} number="1M" label="Target Learners" />
              </div>
            </div>

            {/* Right - Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500" />
                
                <div className="p-6 w-[70%] ">
                  <div className=" rounded-2xl overflow-hidden bg-slate-800 mb-6">
                    <img
                      src={FOUNDER_IMAGE}
                      alt="Rakesh Singh - Founder & CEO"
                      className="w-fit h-fit object-contain object-center"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Rakesh Singh</h3>
                      <p className="text-blue-400 text-sm font-medium">Founder & CEO</p>
                      <p className="text-slate-400 text-sm">SkillzRevo Solutions Pvt Ltd</p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      A believer in continuous learning and innovation — driving measurable outcomes through upskilling, consulting and talent enablement.
                    </p>

                    <div className="flex gap-2 pt-2">
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                      <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VerticalCard
              title="SkillzRevo Academy"
              icon="🎓"
              description="Empowering professionals through future-ready training"
              gradient="from-blue-600/20 to-blue-800/20"
            />
            <VerticalCard
              title="SkillzRevo Talent"
              icon="👔"
              description="Connecting skilled talent with the right opportunities"
              gradient="from-orange-600/20 to-orange-800/20"
            />
            <VerticalCard
              title="SkillzRevo Consulting"
              icon="💡"
              description="Delivering enterprise consulting in emerging technologies"
              gradient="from-purple-600/20 to-purple-800/20"
            />
          </div>
        </section>

        {/* Message Section */}
        <section className="mb-24">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Message from the Founder & CEO
                </h2>

                <div className="relative pl-6 border-l-4 border-gradient-to-b from-blue-500 to-orange-500">
                  <blockquote className="text-slate-300 italic leading-relaxed">
                    "We are living in a time when technology is transforming everything — how we work, learn, and grow. At SkillzRevo, our purpose is not just to teach or consult, but to drive transformation — enabling individuals to thrive and organizations to innovate. Every program, project, and partnership is guided by our core belief in excellence, innovation, and impact."
                  </blockquote>
                </div>

                <div className="pt-4 space-y-1">
                  <p className="text-slate-400 font-medium">— Rakesh Singh</p>
                  <p className="text-slate-500 text-sm">Founder & CEO, SkillzRevo Solutions Pvt Ltd</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">About the Founder</h3>
                <p className="text-slate-300 leading-relaxed">
                  Rakesh Singh is an experienced leader with over 20 years of expertise in corporate training, consulting, and talent solutions. He has partnered with global organizations to design impactful programs in AI, Data Science, Cyber Security, and Digital Transformation.
                </p>

                <ul className="space-y-3">
                  {[
                    "Empowering people through continuous learning",
                    "Fostering innovation through collaboration",
                    "Driving real-world impact with measurable outcomes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent">
              Vision for the Future
            </h2>
            <p className="text-slate-400 text-lg">Building tomorrow's talent ecosystem today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FutureCard
              title="Global Brand"
              description="Build SkillzRevo into a global brand in technology education and consulting"
              color="blue"
            />
            <FutureCard
              title="1M Learners"
              description="Empower 1 million learners and professionals in the next five years"
              color="orange"
            />
            <FutureCard
              title="Sustainable Ecosystem"
              description="Create a sustainable bridge between talent, technology, and transformation"
              color="purple"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SkillzRevo Solutions Pvt Ltd · 
            <a href="mailto:ceo@skillzrevo.com" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
              ceo@skillzrevo.com
            </a>
          </p>
        </footer>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-600" />
      </div>
    </main>
  );
}

function StatCard({ icon: Icon, number, label }) {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />
      <Icon className="w-6 h-6 text-blue-400 mb-2" />
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function VerticalCard({ title, icon, description, gradient }) {
  return (
    <div className={`group relative bg-gradient-to-br ${gradient} rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 overflow-hidden`}>
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-500" />
    </div>
  );
}

function FutureCard({ title, description, color }) {
  const colors = {
    blue: 'from-blue-600/20 to-blue-900/20 border-blue-500/30',
    orange: 'from-orange-600/20 to-orange-900/20 border-orange-500/30',
    purple: 'from-purple-600/20 to-purple-900/20 border-purple-500/30'
  };

  return (
    <div className={`group relative bg-gradient-to-br ${colors[color]} rounded-2xl p-8 border backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden`}>
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10">
        <h5 className="text-2xl font-bold mb-4">{title}</h5>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
    </div>
  );
}