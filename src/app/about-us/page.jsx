export const metadata = {
  title: "About SkillzRevo - SkillzRevo",
  description:
    "SkillzRevo Solutions Pvt. Ltd — Revolutionizing skills acquisition through training, staffing & consulting. Learn about our mission, vision, team and journey.",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://skillzrevo.com/about-skillzrevo/",
  },
};

import Image from "next/image";
import Link from "next/link";
import {
  FaLaptopCode,
  FaUserTie,
  FaCloud,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaGlobe,
  FaCheckCircle,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobeAmericas,
  FaArrowRight,
  FaUsers,
  FaShieldAlt,
  FaSearch,
  FaAward,
  FaBook,
  FaChalkboardTeacher,
  FaMedal,
  FaLightbulb,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Oswald } from "next/font/google";

import FounderSection from "./FounderSection";
import WhyChooseSkillzRevo from "../components/WhyChooseSkillzrevo";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--heading-oswald",
});

const primaryColor = "#1d8fff";
const accentColor = "#ff6a1d";

const divisions = [
  {
    title: "SkillzRevo Academy",
    icon: FaChalkboardTeacher,
    desc: "Outcome-driven training in AI, Data Science, Cloud, Cybersecurity & more — designed to future-proof careers.",
    href: "https://academy.skillzrevo.com/",
    color: "#1d8fff",
    stat: "5000+ Trained",
  },
  {
    title: "SkillzRevo Talent",
    icon: FaUserTie,
    desc: "Strategic staffing and talent solutions to build high-performing teams — permanent, contract & remote hiring.",
    href: "https://talent.skillzrevo.com/",
    color: "#ff6a1d",
    stat: "100+ Placements",
  },
  {
    title: "SkillzRevo Consulting",
    icon: FaCloud,
    desc: "Data-driven consulting, AI implementation, cloud migration and digital transformation for enterprises.",
    href: "https://consulting.skillzrevo.com/",
    color: "#1ddf9f",
    stat: "50+ Projects",
  },
];

const values = [
  { name: "Honesty", icon: FaShieldAlt },
  { name: "Integrity", icon: FaCheckCircle },
  { name: "Innovation", icon: FaLightbulb },
  { name: "Diversity & Inclusion", icon: FaUsers },
  { name: "Reliability", icon: FaMedal },
  { name: "Transparency", icon: FaGlobe },
  { name: "Excellence & Expertise", icon: FaAward },
  { name: "Collaboration", icon: FaHandshake },
  { name: "Continuous Learning", icon: FaBook },
];

const timelineEvents = [
  {
    year: "Pre-Jul 2024",
    text: "Operated via partnership model delivering enterprise training & workforce solutions.",
    color: "#8b5cf6",
  },
  {
    year: "Jul 2024",
    text: "Incorporated as SkillzRevo Solutions Pvt Ltd — a move to scale and formalize operations.",
    color: "#1d8fff",
  },
  {
    year: "Sep 2024",
    text: "Launched SkillzRevo Academy with flagship AI & Data Science programs.",
    color: "#ff6a1d",
  },
  {
    year: "Oct 2024",
    text: "Began global expansion to South Africa, Middle East, UK & Southeast Asia.",
    color: "#1ddf9f",
  },
  {
    year: "Jan 2025",
    text: "Expanded into consulting & talent verticals to offer end-to-end enterprise solutions.",
    color: "#1d8fff",
  },
  {
    year: "Jul 2025",
    text: "Onboarded multiple large enterprise partners accelerating B2B growth.",
    color: "#ff6a1d",
  },
  {
    year: "Aug 2025",
    text: "Reached milestone: 5,000+ professionals empowered & 100+ corporate clients.",
    color: "#1d8fff",
  },
];

const testimonials = [
  {
    quote:
      "SkillzRevo helped us upskill 150 employees in 3 months — practical, hands-on, results-driven.",
    author: "Head of L&D",
    company: "Leading IT Firm",
    rating: 5,
  },
  {
    quote:
      "Their data transformation consulting unlocked efficiencies and measurable cost savings.",
    author: "VP Technology",
    company: "Retail Enterprise",
    rating: 5,
  },
];

const stats = [
  { number: "5000+", label: "Professionals Trained", icon: FaUsers },
  { number: "100+", label: "Corporate Clients", icon: FaHandshake },
  { number: "95%", label: "Success Rate", icon: FaChartLine },
  { number: "15+", label: "Countries Served", icon: FaGlobeAmericas },
];

export default function AboutSkillzrevo() {
  return (
    <div className={`bg-white text-gray-900 antialiased`}>
      {/* HERO SECTION - Full Width */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8">
        {/* Animated Background Elements */}
        <div className="flex">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          </div>

          <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 py-8">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="font-medium">
                    Transforming Futures Since 2024
                  </span>
                </div>

                <h1 className="heading-oswald text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold leading-[1.1] text-white uppercase">
                  EMPOWERING THE Future with Skills, Talent & Technology
                </h1>

                <p className="text-sm xl:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  SkillzRevo Solutions brings together industry-led training,
                  strategic talent solutions, and enterprise-grade consulting to
                  enable transformation — for people and businesses.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#divisions"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:-translate-y-0.5"
                  >
                    Explore Divisions
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold transition-all"
                  >
                    Get In Touch
                  </Link>
                </div>

                {/* Stats Row */}
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                      alt="Team collaboration"
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <FaChalkboardTeacher className="text-white text-2xl" />
                      </div>
                      <div>
                        <div className="heading-oswald text-lg font-bold">
                          Training
                        </div>
                        <div className="text-sm text-gray-600">
                          Outcome Focused
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 animate-float animation-delay-2000">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FaRocket className="text-white text-2xl" />
                      </div>
                      <div>
                        <div className="heading-oswald text-lg font-bold">
                          Innovation
                        </div>
                        <div className="text-sm text-gray-600">
                          Future Ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="text-white min-w-8 min-h-8 w-12 h-12 text-xl" />
                    <div className="heading-oswald text-4xl  font-bold text-white">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-base text-gray-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* MISSION BANNER - Full Width */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAyMG0tMiAwYTIgMiAwIDEgMCA0IDAgMiAyIDAgMSAwLTQgMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
          <p className="heading-oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            <span className="text-orange-300">SKILLZREVO</span> = SKILLZ +
            REVOLUTION
          </p>
          <p className="mt-3 text-lg text-blue-100 max-w-3xl mx-auto">
            Building industry-ready talent through education, staffing and
            consulting
          </p>
        </div>
      </section>

      {/* WHO WE ARE - Full Width */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                alt="Who we are"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                  <FaGlobe className="text-blue-600" />
                  <span className="font-semibold text-sm">
                    Global Learning Organization
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  ABOUT US
                </span>
                <h2 className="heading-oswald text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  WHO WE <span className="text-blue-600">ARE</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                We are a global, industry-led learning & workforce enablement
                organisation. Our team combines academic rigor with practical
                industry experience to design transformative education, talent
                and consulting solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "SkillzRevo Academy",
                    desc: "Future-ready training programs",
                    color: "#1d8fff",
                  },
                  {
                    title: "SkillzRevo Talent",
                    desc: "Strategic staffing solutions",
                    color: "#ff6a1d",
                  },
                  {
                    title: "SkillzRevo Consulting",
                    desc: "Digital transformation",
                    color: "#1ddf9f",
                  },
                  {
                    title: "Outcomes",
                    desc: "Hands-on career enablement",
                    color: "#8b5cf6",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 hover:-translate-y-1"
                    style={{ borderColor: item.color }}
                  >
                    <h4
                      className="heading-oswald text-xl font-bold mb-2"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <FaAward className="text-blue-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="heading-oswald text-lg font-bold mb-2">
                    Industry Recognition
                  </h4>
                  <p className="text-gray-700">
                    NASSCOM member, certified programs, and partnerships with
                    leading enterprises globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS - Full Width Dark Section */}
      <section
        id="divisions"
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 font-semibold text-sm mb-4">
              OUR DIVISIONS
            </span>
            <h3 className="heading-oswald text-5xl md:text-6xl font-bold text-white mb-4">
              THREE VERTICALS,
              <span className="block text-blue-400">ONE MISSION</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrated solutions for education, talent, and technology
              transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {divisions.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${d.color}dd, ${d.color})`,
                    }}
                  >
                    <Icon className="text-4xl text-white" />
                  </div>

                  <h4 className="heading-oswald text-2xl font-bold text-white mb-3">
                    {d.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">{d.desc}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: d.color }}
                    >
                      {d.stat}
                    </span>
                    <Link
                      href={d.href}
                      className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
                    >
                      <span className="text-sm font-semibold">Learn More</span>
                      <FaArrowRight className="text-blue-400" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseSkillzRevo/>

      {/* MISSION VISION VALUES - Full Width */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
          {/* Mission Vision Row */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                  <FaBullseye className="text-white text-3xl" />
                </div>
                <h4 className="heading-oswald text-2xl font-bold mb-4">
                  OUR MISSION
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize skill development, talent transformation and
                  enterprise solutions through tech-enabled, outcome-driven
                  services.
                </p>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <FaGlobe className="text-white text-3xl" />
                </div>
                <h4 className="heading-oswald text-2xl font-bold mb-4">
                  OUR VISION
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Be a global leader in shaping the digital workforce and
                  enabling intelligent enterprise growth.
                </p>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <FaHandshake className="text-white text-3xl" />
                </div>
                <h4 className="heading-oswald text-2xl font-bold mb-4">
                  OUR VALUES
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Integrity, innovation, inclusivity and measurable impact guide
                  everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="text-center mb-12">
            <h4 className="heading-oswald text-4xl font-bold text-gray-900">
              CORE VALUES
            </h4>
            <p className="text-gray-600 mt-2">
              The principles that drive our organization
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="heading-oswald text-lg font-bold text-gray-900 mb-1">
                        {v.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        We live by {v.name.toLowerCase()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE - Full Width */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAyMG0tMiAwYTIgMiAwIDEgMCA0IDAgMiAyIDAgMSAwLTQgMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 font-semibold text-sm mb-4">
              OUR JOURNEY
            </span>
            <h3 className="heading-oswald text-5xl md:text-6xl font-bold mb-4">
              THE SKILLZREVO
              <span className="block text-blue-400">TIMELINE</span>
            </h3>
            <p className="text-xl text-gray-400">
              Key milestones that shaped our growth
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12">
              {timelineEvents.map((t, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                      {/* Left Side */}
                      <div
                        className={`${
                          isLeft ? "lg:text-right" : "lg:order-2"
                        } mb-8 lg:mb-0`}
                      >
                        <div className="inline-block mb-4">
                          <span
                            className="px-5 py-2 rounded-full heading-oswald text-lg font-bold text-white shadow-lg"
                            style={{ backgroundColor: t.color }}
                          >
                            {t.year}
                          </span>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
                          <p className="text-gray-300 leading-relaxed">
                            {t.text}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <div
                          className="w-6 h-6 rounded-full border-4 border-gray-900"
                          style={{ backgroundColor: t.color }}
                        />
                      </div>

                      {/* Right Side (empty for spacing) */}
                      <div
                        className={`${
                          isLeft ? "lg:order-2" : ""
                        } hidden lg:block`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Full Width */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
              TESTIMONIALS
            </span>
            <h3 className="heading-oswald text-5xl md:text-6xl font-bold text-gray-900">
              CLIENT <span className="text-blue-600">SUCCESS STORIES</span>
            </h3>
            <p className="text-xl text-gray-600 mt-4">
              Hear from organizations we've transformed
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border-l-4 border-blue-600 hover:-translate-y-2"
              >
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaQuoteLeft className="text-8xl text-blue-600" />
                </div>

                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-400 text-xl" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white heading-oswald text-xl font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="heading-oswald text-lg font-bold text-gray-900">
                        {t.author}
                      </p>
                      <p className="text-sm text-gray-600">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Testimonials
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      {/* <FounderSection /> */}

      {/* CAREERS - Full Width */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-8">
              <FaRocket className="text-xl" />
              <span className="font-semibold">JOIN OUR TEAM</span>
            </div>

            <h3 className="heading-oswald text-5xl md:text-6xl font-bold text-white mb-6">
              BUILD YOUR CAREER AT
              <span className="block mt-2">SKILLZREVO</span>
            </h3>

            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our dynamic team of innovators, educators and strategists.
              We're hiring across training, consulting and talent teams to
              revolutionize the future of work.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://lms.skillzrevo.com/Career/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl heading-oswald text-lg font-bold shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all"
              >
                Explore Opportunities
                <FaArrowRight />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl heading-oswald text-lg font-bold hover:bg-white/20 transition-all"
              >
                Contact HR Team
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              {[
                { icon: FaUsers, label: "Collaborative Culture" },
                { icon: FaRocket, label: "Growth Opportunities" },
                { icon: FaGlobe, label: "Global Impact" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <Icon className="text-4xl text-white mx-auto mb-3" />
                    <p className="font-semibold text-white">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER - Full Width */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h4 className="heading-oswald text-4xl font-bold mb-8">
                GET IN <span className="text-blue-400">TOUCH</span>
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Head Office</p>
                    <p className="text-gray-400 leading-relaxed">
                      SkillzRevo Solutions Pvt Ltd, Plot No.- GH01A, Sector-16C
                      T-11 Suite No.-1901, Greater Noida, Uttar Pradesh -
                      201308, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">+91 96323 47896</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      contact@skillzrevo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaGlobeAmericas className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">www.skillzrevo.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h4 className="heading-oswald text-4xl font-bold mb-8">
                FIND <span className="text-blue-400">US</span>
              </h4>

              <div className="h-[400px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <iframe
                  title="SkillzRevo Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9360004362866!2d77.51098177549528!3d28.48147397574762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebe392505305%3A0xd246535121d00e21!2sSkillzRevo%20Solutions%20Pvt%20Ltd%20(Registered%20Office)!5e0!3m2!1sen!2sin!4v1755939407731!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      </footer>

      {/* Add custom CSS for animations */}
      {/* <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style> */}
    </div>
  );
}

// // app/about-skillzrevo/page.jsx
// export const metadata = {
//   title: "About SkillzRevo - SkillzRevo",
//   description:
//     "SKILLZREVO SOLUTION PVT. LTD Revolutionizing Skills Acquisition is an EdTech Organisation providing an online learning platform for aspiring learners in",
//   robots:
//     "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
//   alternates: {
//     canonical: "https://skillzrevo.com/about-skillzrevo/",
//   },
// };

// import {
//   FaLaptopCode,
//   FaUserTie,
//   FaCloud,
//   FaRocket,
//   FaHandshake,
//   FaBullseye,
//   FaGlobe,
//   FaCheckCircle,
//   FaQuoteLeft,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaGlobeAmericas,
//   FaArrowRight,
//   FaBalanceScale,
//   FaLightbulb,
//   FaEye,
//   FaUsers,
//   FaShieldAlt,
//   FaSearch,
//   FaAward,
//   FaGlobeAsia,
//   FaBook,
// } from "react-icons/fa";
// import { FaGraduationCap } from "react-icons/fa6";
// import Image from "next/image";
// import {
//   ArrowRight,
//   ArrowRightIcon,
//   Sparkles,
//   Target,
//   Users,
// } from "lucide-react";

// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import Link from "next/link";
// // import PartneringCompaniesSlider from "../components/PartneringCompaniesSlider";

// import { FaChalkboardTeacher, FaMedal } from "react-icons/fa";

// const AboutSkillzrevo = () => {
//   const primaryColor = "#1d8fff";
//   const secondaryColor = "#ff6a1d";
//   const divisions2 = [
//     {
//       title: "SkillzRevo Academy (Training & Upskilling)",
//       desc: "Future-proof your career with industry-aligned training programs in Data Science, Artificial Intelligence, Cybersecurity, Generative AI, Cloud, and more.",
//       points: [
//         "NASSCOM-certified trainers & curriculum",
//         "Hands-on learning & real-world case studies",
//         "Customized corporate training solutions",
//       ],
//       cta: { label: "Explore Courses →", href: "https://skillzrevo.com" },
//     },
//     {
//       title: "SkillzRevo Talent (Staffing & Workforce Solutions)",
//       desc: "We help organizations build high-performing teams through end-to-end talent solutions:",
//       points: [
//         "Permanent & contract staffing",
//         "Recruitment Process Outsourcing (RPO)",
//         "Remote & offshore team hiring",
//         "Executive & leadership hiring",
//       ],
//       cta: { label: "Hire Talent →", href: "https://talent.skillzrevo.com/" },
//     },
//     {
//       title: "SkillzRevo Consulting (Digital Transformation & Analytics)",
//       desc: "Partnering with enterprises to unlock business growth using data, technology, and insights:",
//       points: [
//         "AI & analytics implementation",
//         "Business intelligence & automation",
//         "Cloud migration & cybersecurity solutions",
//         "Digital transformation strategy",
//       ],
//       cta: {
//         label: "Explore Consulting →",
//         href: "https://consulting.skillzrevo.com/",
//       },
//     },
//   ];

//   const divisions = [
//     {
//       icon: FaGraduationCap,
//       title: "SkillzRevo Academy",
//       description:
//         "Delivering outcome-driven training programs in Data Science, Artificial Intelligence, Cybersecurity, Generative AI, and more—designed to future-proof careers and upskill the workforce.",
//       url: "https://skillzrevo.com/",
//     },
//     {
//       icon: FaUserTie,
//       title: "SkillzRevo Talent",
//       description:
//         "We specialize in strategic staffing, recruitment, and talent management solutions. Whether it’s project-based, contract, or permanent hiring—we help organizations build high-performance teams.",
//       url: "https://talent.skillzrevo.com/",
//     },
//     {
//       icon: FaCloud,
//       title: "SkillzRevo Consulting",
//       description:
//         "Our consulting arm partners with enterprises to enable digital transformation through advanced analytics, AI implementation, cloud migration, and cybersecurity solutions—built on deep domain knowledge and strategic insights.",
//       url: "https://consulting.skillzrevo.com/",
//     },
//   ];
//   const values = [
//     {
//       title: "Honesty",
//       desc: "We are committed to delivering accurate information, fair practices, and genuine solutions across all our verticals.",
//       icon: (
//         <FaHandshake className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
//       ),
//     },
//     {
//       title: "Integrity",
//       desc: "We act responsibly and ethically, ensuring our actions reflect our words and remain accountable for their impact.",
//       icon: (
//         <FaBalanceScale className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />
//       ),
//     },
//     {
//       title: "Innovation",
//       desc: "We foster innovation by integrating emerging technologies and forward-thinking approaches across all verticals.",
//       icon: (
//         <FaLightbulb className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
//       ),
//     },
//     {
//       title: "Diversity & Inclusion",
//       desc: "We embrace diverse perspectives and create inclusive opportunities for learners, professionals, and partners.",
//       icon: <FaUsers className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />,
//     },
//     {
//       title: "Reliability",
//       desc: "We are dependable and results-driven, ensuring consistent delivery of impactful solutions across training, staffing, and consulting.",
//       icon: (
//         <FaShieldAlt className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
//       ),
//     },
//     {
//       title: "Transparency",
//       desc: "We believe in open communication, complete clarity, and fairness with learners, clients, and partners.",
//       icon: <FaSearch className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />,
//     },
//     {
//       title: "Excellence & Expertise",
//       desc: "We strive for excellence through deep domain expertise, practical experience, and industry insights.",
//       icon: <FaAward className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />,
//     },
//     {
//       title: "Collaboration",
//       desc: "We believe in the power of teamwork, building strong partnerships with learners, clients, and industry leaders to achieve shared success.",
//       icon: (
//         <FaGlobeAsia className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />
//       ),
//     },
//     {
//       title: "Continuous Learning & Growth",
//       desc: "We are dedicated to fostering lifelong learning, encouraging adaptability, and empowering individuals to grow in an ever-evolving professional landscape.",
//       icon: <FaBook className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />,
//     },
//   ];

//   const coreValues = [
//     { icon: FaRocket, text: "Innovation-First" },
//     { icon: FaHandshake, text: "Integrity & Trust" },
//     { icon: FaBullseye, text: "Client-Centricity" },
//     { icon: FaLightbulb, text: "Continuous Learning" },
//     { icon: FaGlobe, text: "Impact-Driven Approach" },
//   ];

//   const advantages = [
//     "5000+ Professionals Empowered",
//     "100+ Global Corporate Clients",
//     "Expert-Led Curriculum & Consulting",
//     "Customizable Workforce Solutions",
//     "Industry Partnerships & Real Outcomes",
//   ];

//   const timelineEvents = [
//     {
//       year: "Pre-July 2024",
//       text: "Operated under a partnership model delivering enterprise-driven training and workforce solutions.",
//     },
//     {
//       year: "July 2024",
//       text: "Incorporated as SkillzRevo Solutions Pvt Ltd to strengthen our vision and expand our global footprint.",
//     },

//     {
//       year: "September 2024",
//       text: "Launched SkillzRevo Academy, introducing flagship AI & Data Science training programs with NASSCOM-aligned curriculum.",
//     },
//     {
//       year: "October 2024",
//       text: "Embarked on global expansion into South Africa, Middle East, UK, and Southeast Asia, strengthening our presence across emerging and developed markets.",
//     },
//     {
//       year: "January 2025",
//       text: "Expanded into SkillzRevo Consulting and SkillzRevo Talent, offering enterprise consulting and strategic staffing solutions.",
//     },
//     {
//       year: "July 2025",
//       text: "Successfully onboarded Fortune 100 clients and institutional partners, accelerating our B2B growth strategy.",
//     },
//     {
//       year: "August 2025",
//       text: "Achieved a major milestone with 5,000+ professionals empowered and 100+ corporate clients served globally.",
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "SkillzRevo helped us upskill over 150 employees in just 3 months with real-world AI implementation strategies. Excellent experience!",
//       author: "Head of L&D, Leading IT Firm",
//     },
//     {
//       quote:
//         "Their consulting support on data transformation projects helped us unlock operational efficiency and cost savings.",
//       author: "VP Technology, Retail Enterprise",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 text-gray-800">
//       {/* 1. Hero Section / Company Snapshot */}
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden">
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

//           <div className="relative mx-auto px-6 py-16 md:py-24">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Content Side */}
//               <div className="space-y-8 text-center md:text-left">
//                 {/* Badge */}
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//                   <Sparkles className="w-4 h-4" />
//                   <span>Transforming Futures Since 2024</span>
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight uppercase heading-oswald">
//                   Empowering the Future with{" "}
//                   <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
//                     Skills, Talent & Technology
//                   </span>
//                 </h1>

//                 {/* Description */}
//                 <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                   At SkillzRevo Solutions Pvt Ltd, we are redefining how
//                   individuals, professionals, and organizations evolve — through
//                   cutting-edge training, intelligent staffing solutions, and
//                   strategic consulting services.
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                   <a
//                     href="/#divisions"
//                     className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5"
//                   >
//                     Explore Our Divisions
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                   <a
//                     href="/contact-us"
//                     className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5"
//                   >
//                     Get in Touch
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
//                   <div className="text-center md:text-left">
//                     <div className="text-3xl font-bold text-gray-900">500+</div>
//                     <div className="text-sm text-gray-600 mt-1">
//                       Trained Professionals
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left">
//                     <div className="text-3xl font-bold text-gray-900">50+</div>
//                     <div className="text-sm text-gray-600 mt-1">
//                       Partner Companies
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left">
//                     <div className="text-3xl font-bold text-gray-900">95%</div>
//                     <div className="text-sm text-gray-600 mt-1">
//                       Success Rate
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Image Side */}
//               <div className="relative hidden md:block">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
//                 <div className="relative bg-white rounded-3xl shadow-2xl p-8">
//                   <img
//                     src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
//                     alt="Learning illustration"
//                     className="w-full h-auto rounded-2xl"
//                   />

//                   {/* Floating Cards */}
//                   <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                         <Target className="w-6 h-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-gray-900">
//                           Training
//                         </div>
//                         <div className="text-xs text-gray-500">Excellence</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                         <Users className="w-6 h-6 text-orange-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-gray-900">
//                           Staffing
//                         </div>
//                         <div className="text-xs text-gray-500">Solutions</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission Banner */}
//         <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTQtNGgydjJoLTJ2LTJ6bS00LTRoMnYyaC0ydi0yem00LTRoMnYyaC0ydi0yem0tNCA0aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

//           <div className="relative max-w-6xl mx-auto px-6 py-12">
//             <div className="flex items-center justify-center gap-4 text-center">
//               <Sparkles className="w-8 h-8 text-orange-300 hidden sm:block" />
//               <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold leading-relaxed">
//                 <span className="text-orange-300 font-bold">SkillzRevo</span>{" "}
//                 stands for Skillz + Revolution — embodying our mission to
//                 revolutionize skill acquisition, talent solutions, and
//                 enterprise consulting in a digital-first economy.
//               </p>
//               <Sparkles className="w-8 h-8 text-orange-300 hidden sm:block" />
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Main Content Container */}
//       <div className="bg-white">
//         {/* 2. Who We Are */}

//         <section className="md:py-16 py-8 bg-gradient-to-b from-blue-50 to-white">
//           <div className="grid md:grid-cols-2 px-4 items-center max-w-7xl gap-10 mx-auto pb-10">
//             <div className="relative h-60 md:h-full w-[100%]">
//               <Image
//                 fill
//                 src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
//                 alt="Background Grid"
//                 className="object-cover rounded-lg"
//                 quality={50}
//                 unoptimized={true}
//               />
//             </div>
//             <div className="grid gap-2">
//               <h2 className="text-4xl sm:text-5xl font-bold text-[#1d8fff] tracking-tight uppercase">
//                 Who We Are
//               </h2>

//               {/* Intro Text */}
//               <p className="text-gray-700 text-base leading-tight">
//                 At{" "}
//                 <span className="">
//                   We proudly serve as a global trailblazing training solutions
//                   provider dealing with bringing a revolution in upskilling by
//                   offering comprehensive and specialized training programs with
//                   the enhanced pedagogy, technology and experienced industry
//                   experts and trainers. We are founded and led by a team of
//                   committed professionals, bringing a richness of scholastic
//                   rigor and experience to our goal. Comprising accomplished
//                   Masters and PhD holders from IITs, our shareholders are
//                   dedicated to evolving education in the sphere of emerging
//                   technologies. We provide classroom and online training for
//                   high quality and hands-on training experiences associated with
//                   a huge number of certification programs. Our specialization
//                   lies in empowering individuals and organizations with
//                   essential skills and advanced technologies of the digital era.
//                   At SkillzRevo, we believe in fostering career advancement
//                   through the power of continuous learning and equipping our
//                   learners with leading-edge skills essential for directing and
//                   succeeding in today’s digital ecosystem.
//                 </span>
//               </p>
//             </div>
//           </div>
//           <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
//             {/* Heading */}

//             {/* Service Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
//               <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#1d8fff] hover:shadow-2xl transition text-left">
//                 <h3 className="font-bold text-xl mb-2">SkillzRevo Academy</h3>
//                 <p className="text-gray-600">
//                   Future-focused training & upskilling programs designed for
//                   professionals and students alike.
//                 </p>
//               </div>
//               <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#ff6a1d] hover:shadow-2xl transition text-left">
//                 <h3 className="font-bold text-xl mb-2">SkillzRevo Talent</h3>
//                 <p className="text-gray-600">
//                   Strategic staffing & recruitment solutions that connect top
//                   talent with the right opportunities.
//                 </p>
//               </div>
//               <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#1ddf9f] hover:shadow-2xl transition text-left">
//                 <h3 className="font-bold text-xl mb-2">
//                   SkillzRevo Consulting
//                 </h3>
//                 <p className="text-gray-600">
//                   Data-driven enterprise consulting & digital transformation
//                   services for measurable business impact.
//                 </p>
//               </div>
//             </div>

//             {/* Closing Text */}
//             <p className="text-gray-700 text-lg mt-6 max-w-2xl">
//               With a growing global presence, we deliver{" "}
//               <span className="font-semibold text-[#1d8fff]">
//                 real results{" "}
//               </span>
//               through a unique mix of innovation, expertise, and hands-on
//               experience.
//             </p>
//           </div>
//         </section>

//         <section className="py-20 bg-gray-50" id="about">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Image */}
//             <div className="relative w-full h-[500px]">
//               <Image
//                 src="/corporate.jpg" // <-- replace with your image
//                 alt="About SkillzRevo"
//                 fill
//                 className="object-cover rounded-2xl shadow-lg"
//                 quality={25}
//               />
//             </div>

//             {/* Right Side - Content */}
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
//                 About <span className="text-[#1d8fff]">SkillzRevo</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 At{" "}
//                 <span className="font-semibold">
//                   SkillzRevo Solutions Pvt Ltd
//                 </span>
//                 , we are a global leader in{" "}
//                 <span className="text-orange-500">
//                   Training, Staffing, and Consulting
//                 </span>
//                 , empowering individuals, professionals, and organizations to
//                 thrive in today’s digital-first world. Our commitment lies in
//                 revolutionizing learning, workforce enablement, and enterprise
//                 growth through cutting-edge technologies and industry-driven
//                 expertise.
//               </p>

//               {/* Highlights with Icons */}
//               <div className="grid sm:grid-cols-2 gap-6 mt-6">
//                 <div className="flex items-start gap-4">
//                   <FaUsers className="text-[#1d8fff] text-3xl min-w-6 min-h-6" />
//                   <p className="text-gray-700">
//                     Led by visionary <strong>Ph.D. & IIT professionals</strong>{" "}
//                     with decades of experience.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaChalkboardTeacher className="text-orange-500 text-3xl min-w-6 min-h-6" />
//                   <p className="text-gray-700">
//                     Specialized in <strong>classroom & online training</strong>{" "}
//                     with NASSCOM-certified courses.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaLightbulb className="text-[#1d8fff] text-3xl min-w-6 min-h-6" />
//                   <p className="text-gray-700">
//                     Expertise in{" "}
//                     <strong>
//                       AI, ML, Cybersecurity, IoT, Robotics, Blockchain
//                     </strong>{" "}
//                     and more.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaMedal className="text-orange-500 text-3xl min-w-6 min-h-6" />
//                   <p className="text-gray-700">
//                     Recognized as a{" "}
//                     <strong>NASSCOM Member & Licensed Training Partner</strong>.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-600 leading-relaxed mt-6">
//                 With innovation, continuous learning, and transformation at our
//                 core, our mission is to empower individuals, professionals, and
//                 enterprises to lead, adapt, and succeed in today’s evolving
//                 digital economy.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* <hr className=" border-gray-200" /> */}

//       <div className="bg-white">

//         <hr id="divisions" className=" border-gray-300" />

//         <section className="max-w-7xl mx-auto px-6 py-16">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#1d8fff] uppercase ">
//             Our Divisions
//           </h2>

//           {/* Divisions Grid */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {divisions2.map((div, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-t-4 border-[#1d8fff] hover:shadow-xl transition"
//               >
//                 <div>
//                   <h3 className="text-xl font-bold text-[#1d8fff] mb-3">
//                     {div.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{div.desc}</p>

//                   <ul className="space-y-2 mb-6">
//                     {div.points.map((pt, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-2 text-gray-700"
//                       >
//                         <CheckCircleIcon className="h-5 w-5 text-[#1d8fff] flex-shrink-0" />
//                         <span>{pt}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <Link
//                   href={div.cta.href}
//                   className="inline-block bg-[#1d8fff] text-white px-5 py-2 rounded-lg font-medium text-center hover:bg-blue-600 transition"
//                 >
//                   {div.cta.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 4. Mission, Vision & Values */}
//         <section className="py-12 px-6 lg:px-20 bg-gray-50">
//           {/* Mission & Vision */}
//           <section className="py-4 bg-gray-50">
//             <div className="text-center mb-12">
//               <h2 className="text-[#1d8fff] font-bold uppercase text-3xl heading-oswald">
//                 Mission, Vision & Values
//               </h2>
//               <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//                 At SkillzRevo, we are driven by a clear mission and vision that
//                 guide our work in training, staffing, and consulting.
//               </p>
//             </div>

//             <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//               {/* Mission */}
//               <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6a1d] to-[#ff9157] shadow-md">
//                     <FaBullseye className="text-white min-w-[32px] min-h-[32px]" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 text-center">
//                   Our Mission
//                 </h3>
//                 <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                   Revolutionize skill development, talent transformation, and
//                   enterprise solutions through tech-enabled, outcome-driven
//                   services.
//                 </p>
//               </div>

//               {/* Vision */}
//               <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1d8fff] to-[#5aaeff] shadow-md">
//                     <FaEye className="text-white min-w-[32px] min-h-[32px]" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 text-center">
//                   Our Vision
//                 </h3>
//                 <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                   Be a global leader in shaping the digital workforce and
//                   enabling intelligent enterprise growth.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Values */}
//           <h2 className="text-3xl mt-10 mb-6 font-[#1d8fff] text-[#1d8fff] text-center font-bold uppercase heading-oswald">
//             Our Core Values
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
//             {values.map((value, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
//               >
//                 <div className="flex items-center gap-4 mb-3">
//                   {value.icon}
//                   <h4 className="text-xl font-semibold text-gray-900">
//                     {value.title}
//                   </h4>
//                 </div>
//                 <p className="text-gray-600">{value.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Tagline */}
//           <div className="mt-16 text-center">
//             <p className="text-lg font-semibold text-gray-800">
//               <span className="text-[#1d8fff]">“At SkillzRevo,</span> our values
//               drive everything we do — empowering people, enabling businesses,
//               and engineering transformation.”
//             </p>
//           </div>
//         </section>

//         {/* <section className="py-16 max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
//               Mission, Vision & Values
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-16 px-2">
//             <div className="p-6 bg-blue-50 rounded-lg shadow-lg border-1 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold text-gray-900">Our Mission:</h3>
//               <p className="mt-4 text-gray-500">
//                 To revolutionize skill development, talent transformation, and enterprise solutions by delivering value-driven, tech-enabled, and future-ready services.
//               </p>
//             </div>
//             <div className="p-6 bg-blue-50 rounded-lg shadow-lg border-1 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold text-gray-900">Our Vision:</h3>
//               <p className="mt-4 text-gray-500">
//                 To be a global leader in shaping the digital workforce and enabling intelligent enterprise growth through skills, technology, and innovation.
//               </p>
//             </div>
//             <div className="md:col-span-2 p-6 bg-blue-50 rounded-lg shadow-lg border-1">
//               <h3 className="text-2xl text-center font-bold text-gray-900">Our Core Values:</h3>
//               <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                 {coreValues.map((value, index) => (
//                   <div key={index} className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:scale-105">
//                     <value.icon size={36} className="text-[#1d8fff]" />
//                     <p className="mt-2 font-medium text-gray-700">{value.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section> */}

//         <hr className="border-gray-200" />

//         {/* 5. Why Choose SkillzRevo */}

//         <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
//             {/* Image */}
//             <div className="relative w-[100%] h-[100%] rounded-2xl shadow-lg">
//               <Image
//                 src="/partner3.jpg"
//                 alt="Why Choose SkillzRevo"
//                 className="object-cover rounded-xl"
//                 fill
//                 priority
//                 quality={50}
//               />
//               {/* Decorative background blob */}
//               <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1d8fff]/20 rounded-full blur-2xl" />
//             </div>

//             {/* Content */}
//             <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10">
//               <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center uppercase md:text-left">
//                 Why Choose <span className="text-[#1d8fff]">SkillzRevo</span>
//               </h2>

//               <ul className="space-y-2">
//                 {advantages.map((advantage, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start p-3 rounded-xl hover:bg-blue-50 transition"
//                   >
//                     <FaCheckCircle className="flex-shrink-0 h-6 w-6 mt-1 text-[#1d8fff]" />
//                     <p className="ml-3 text-lg text-gray-700 leading-relaxed">
//                       {advantage}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         <hr className="border-gray-200" />

//         {/* 6. Leadership Team */}
//         {/* <section className="py-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
//               Leadership Team
//             </h2>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="p-6 bg-white rounded-lg shadow-lg text-center">
//               <h3 className="text-xl font-bold text-gray-900">Rakesh Singh</h3>
//               <p className="text-lg text-gray-500">Founder & CEO</p>
//               <p className="mt-4 text-gray-600 max-w-2xl">
//                 With a vision to bridge the gap between academia and industry, Rakesh brings years of experience in EdTech, enterprise consulting, and people strategy.
//               </p>
//             </div>
//             <p className="mt-8 text-gray-500">
//               [Other leaders can be listed here with short bios, photos, and titles.]
//             </p>
//           </div>
//         </section> */}

//         <hr className=" border-gray-200" />

//         {/* 7. Our Journey */}

//         <section className="py-20 bg-gray-950 text-white font-sans">
//           <div className="text-center mb-16 px-4">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
//               Our <span style={{ color: primaryColor }}>Journey</span>
//             </h2>
//             <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//               A timeline of how SkillzRevo evolved into a global force in
//               digital transformation.
//             </p>
//           </div>

//           {/* Vertical Timeline Container */}
//           <div className="relative max-w-2xl mx-auto px-6">
//             {/* Vertical Line */}
//             <div
//               className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5"
//               style={{ backgroundColor: primaryColor }}
//             ></div>

//             {timelineEvents.map((event, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 flex items-start w-full ${
//                   index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                 }`}
//               >
//                 {/* Year & Text Container */}
//                 <div
//                   className={`w-1/2 p-0 transition-transform duration-500 transform hover:scale-105 ${
//                     index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
//                   }`}
//                 >
//                   <div
//                     className="inline-block px-4 py-1 text-sm rounded-full text-white font-bold mb-2"
//                     style={{ backgroundColor: secondaryColor }}
//                   >
//                     {event.year}
//                   </div>
//                   <p className="text-gray-300 text-sm md:text-base">
//                     {event.text}
//                   </p>
//                 </div>

//                 {/* Timeline Dot */}
//                 <div
//                   className="w-8 h-8 rounded-full border-4 border-gray-950 z-10 flex-shrink-0 relative"
//                   style={{
//                     backgroundColor: primaryColor,
//                     boxShadow: "0 0 0 3px white",
//                   }}
//                 >
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white animate-pulse"></div>
//                 </div>

//                 {/* Empty Spacer */}
//                 <div
//                   className={`w-1/2 flex-grow ${
//                     index % 2 === 0 ? "pl-12" : "pr-12"
//                   }`}
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         <hr className=" border-gray-200" />

//         {/* 8. Client Testimonials */}
//         <section className="py-16 bg-blue-50 ">
//           <div className="max-w-7xl mx-auto px-2">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl uppercase heading-oswald">
//                 Client Testimonials
//               </h2>
//             </div>
//             <div className="grid gap-8 md:grid-cols-2">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-lg border-l-4"
//                   style={{ borderColor: primaryColor }}
//                 >
//                   <FaQuoteLeft size={24} className="text-gray-400 mb-4" />
//                   <p className="text-lg text-gray-600 italic">
//                     "{testimonial.quote}"
//                   </p>
//                   <p className="mt-4 font-bold text-gray-800">
//                     {testimonial.author}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* <PartneringCompaniesSlider /> */}

//         {/* 9. Clients & Partners */}
//         {/* <section className="py-16 mx-auto max-w-7xl px-2">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
//               Clients & Partners
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">

//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 1</span>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 2</span>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 3</span>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 4</span>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 5</span>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
//               <span className="text-gray-400">Logo 6</span>
//             </div>
//           </div>
//         </section> */}

//         <hr className=" border-gray-200" />

//         {/* 10. Careers @ SkillzRevo */}
//         <section className="py-16 bg-blue-200">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff] sm:text-4xl uppercase heading-oswald">
//               Careers @ SkillzRevo
//             </h2>
//           </div>
//           <div className="flex flex-col items-center p-6  rounded-lg ">
//             <p className="text-xl text-gray-600 max-w-2xl text-center">
//               Join our dynamic team of innovators, educators, and strategists!
//               We’re always looking for passionate professionals in training,
//               consulting, and talent solutions.
//             </p>
//             <a
//               href="https://lms.skillzrevo.com/Career/"
//               className="mt-6 inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-white transition-colors duration-200 shadow-md hover:shadow-lg"
//               style={{ backgroundColor: primaryColor }}
//             >
//               Explore Opportunities
//               <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//         </section>
//       </div>

//       <hr className=" border-gray-200" />

//       {/* 11. Contact Us */}
//       <footer className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-[#1d8fff] font-bold text-3xl uppercase  heading-oswald">
//                 Contact Us
//               </h3>
//               <ul className="mt-6 space-y-4 text-gray-600">
//                 <li className="flex items-start">
//                   <FaMapMarkerAlt
//                     className="flex-shrink-0 h-6 w-6 mr-3"
//                     style={{ color: primaryColor }}
//                   />
//                   <span>
//                     Head Office: SkillzRevo Solutions Pvt Ltd Plot No.- GH01A,
//                     Sector-16C T-11 Suite No.-1901, Gauttam Buddha Nagar Greater
//                     Noida, Uttar Pradesh - 201308 India
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <FaPhone
//                     className="flex-shrink-0 h-6 w-6 mr-3"
//                     style={{ color: primaryColor }}
//                   />
//                   <span>Phone: +91 96323 47896</span>
//                 </li>
//                 <li className="flex items-center">
//                   <FaEnvelope
//                     className="flex-shrink-0 h-6 w-6 mr-3"
//                     style={{ color: primaryColor }}
//                   />
//                   <span>Email: contact@skillzrevo.com</span>
//                 </li>
//                 <li className="flex items-center">
//                   <FaGlobeAmericas
//                     className="flex-shrink-0 h-6 w-6 mr-3"
//                     style={{ color: primaryColor }}
//                   />
//                   <span>Website: www.skillzrevo.com</span>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-[#1d8fff] font-bold text-3xl uppercase  heading-oswald">
//                 Office Map
//               </h3>
//               <div className="mt-6 h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9360004362866!2d77.51098177549528!3d28.48147397574762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebe392505305%3A0xd246535121d00e21!2sSkillzRevo%20Solutions%20Pvt%20Ltd%20(Registered%20Office)!5e0!3m2!1sen!2sin!4v1755939407731!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutSkillzrevo;
