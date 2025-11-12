"use client";
import React, { useState } from "react";
import {
  ArrowPathIcon,
  BeakerIcon,
  ChartPieIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FingerPrintIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { MdHourglassFull } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { CloudIcon } from "@heroicons/react/24/solid";

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-gray-100 p-3 overflow-hidden group transition-all duration-300 w-80 flex-shrink-0">
    <div className="relative w-full h-[190px] rounded-xl overflow-hidden">
      <img
        className="object-cover w-full h-[190px] group-hover:scale-105 transition-transform duration-500"
        src={course.image}
        alt={course.title}
        // fill
        // sizes="100%"
        // quality={25}
      />

      <div className="absolute inset-x-0 top-2 flex justify-between px-2">
        <div className="relative w-20 h-10 rounded bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden">
          <Image src="/logos/nasscom.webp" alt="" fill sizes="w-20 h-10" />
        </div>
        <div className="relative w-20 h-10 rounded bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden">
          <Image src="/logos/ites.webp" alt="" fill sizes="w-20 h-10" />
        </div>
      </div>

      <div className="absolute bottom-2 left-2 flex gap-2 text-xs font-semibold">
        <div className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm text-[#1d8fff] rounded-md border border-[#1d8fff]/20">
          <MdHourglassFull className="text-sm" />
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm text-[#ff6900] rounded-md border border-[#ff6900]/20">
          <FaGear className="text-sm" />
          <span>{course.skillsCount} Skills</span>
        </div>
      </div>
    </div>

    <div className="py-3 px-1">
      <h3 className="text-base font-semibold text-slate-900 leading-5 line-clamp-2 h-12">
        {course.title}
      </h3>

      <a
        href={course.link}
        target="_blank"
        className="mt-4 block bg-[#1d8fff] hover:bg-[#1476d9] text-white font-semibold py-2 text-center rounded-lg text-sm transition-all duration-300"
      >
        View Course
      </a>
    </div>
  </div>
);

// const CourseCard = ({ course }) => (
//   <div className="bg-white rounded-sm hover:shadow-2xl shadow-sm border-gray-200 border p-4 overflow-hidden group card-lift-hover w-76 flex-shrink-0">
//     <div className="relative w-[270px] h-[180px]">
//       <Image
//         className="object-cover rounded-sm"
//         src={course.image}
//         alt={course.title}
//         fill
//         sizes="w-[270px] h-[180px]"
//         quality={25}
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src =
//             "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
//         }}
//       />
//       <div className="relative w-20 h-10 rounded-sm top-1 left-1">
//         <Image
//           src="/logos/nasscom.webp"
//           alt={course.title}
//           fill
//           sizes="w-20 h-10"
//           className="object-cover rounded-sm object-center "
//         />
//       </div>
//       <div className="absolute w-20 h-10 rounded-sm top-1 right-1">
//         <Image
//           src="/logos/ites.webp"
//           alt={course.title}
//           fill
//           sizes="w-20 h-10"

//           className="object-cover rounded-sm object-center bg-white p-px"
//         />
//       </div>

//       <div className="absolute bottom-1 left-1 flex flex-wrap justify-start gap-px text-xs font-bold text-orange-600 uppercase">
//         <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-l">
//           <MdHourglassFull className="" />
//           <span>{course.duration}</span>
//         </div>

//         <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-r">
//           <FaGear className="" />
//           <span>{course.skillsCount} Skills</span>
//         </div>
//       </div>
//     </div>
//     <div className="py-1 mt-2 px-1">
//       <h3 className="text-lg tracking-tight leading-5 font-semibold text-black mb-2 h-16 ">
//         {course.title}
//       </h3>
//       <a
//         href={course.link}
//         target="_blank"
//         className="bg-[#1d8fff] flex justify-center items-center text-white font-bold py-2 px-5 rounded text-sm border border-[#1d8fff] group-hover:bg-white group-hover:text-[#1d8fff]"
//       >
//         View Course
//       </a>
//     </div>
//   </div>
// );

// --- Course Grid Component (for Desktop) ---
const CourseGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState("gen-ai");
  const [openAccordion, setOpenAccordion] = useState("gen-ai");

  const activeTabData = tabData.find((tab) => tab.id === activeTab);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <div className="bg-[#eef1f8] min-h-fit text-slate-800 font-sans px-4">
        <div className="container mx-auto max-md:p-2 py-10 md:py-16">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 px-4 uppercase">
              MASTER IN-DEMAND TECHNOLOGIES <br />
              WITH EXPERT-LED PROGRAMS
            </h2>
            <span className="inline-block w-full h-0.5 bg-gray-200 mt-2"></span>
          </div>

          {/* --- Desktop Layout (md and up) --- */}
          <div className="hidden md:flex flex-col md:flex-row md:space-x-8 lg:space-x-12 max-w-7xl mx-auto">
            {/* Vertical Tab Navigation */}
            <div className="flex-shrink-0 md:w-1/4 lg:w-1/5 border border-gray-100 rounded">
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide md:space-y-2 md:pb-0">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 md:w-full text-left p-4 rounded-xl transition-all duration-300 ease-in-out text-base font-semibold tracking-tight focus:outline-none mr-2 md:mr-0
                      ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#1d8fff] to-[#015bb6] text-white shadow-[0_8px_25px_rgba(29,143,255,0.4)] scale-[1.02]"
                          : "bg-white text-slate-600 hover:bg-slate-50 hover:shadow-lg border border-slate-200"
                      }
                    `}
                  >
                    <div className="flex flex-row gap-3 w-full items-center heading-oswald text-[22px]">
                      <tab.icon className="min-w-8 size-10" />
                      {tab.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content Area */}
            <div className="flex-1 mt-8 md:mt-0 bg-white/50 p-0 rounded-xl shadow-inner">
              {activeTabData ? (
                <CourseGrid courses={activeTabData.courses} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-center text-slate-500">
                    Please select a category.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* --- Mobile Layout (hidden on md and up) --- */}
          <div className="block md:hidden max-w-xl mx-auto">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                className="rounded-2xl border border-slate-200 shadow-sm mb-5 bg-white"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(tab.id)}
                  className={`flex items-center justify-between w-full p-4 font-bold text-lg rounded-xl tracking-tight transition-all duration-300 ${
                    openAccordion === tab.id
                      ? "bg-gradient-to-r from-[#1d8fff] to-[#015bb6] text-white shadow-[0_6px_20px_rgba(29,143,255,0.35)] scale-[1.01]"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <tab.icon className="w-6 h-6" />
                    {tab.name}
                  </div>
                  {openAccordion === tab.id ? (
                    <ChevronUpIcon className="w-6 h-6" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6" />
                  )}
                </button>
                {/* Accordion Content (Course Slider) */}
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openAccordion === tab.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-nowrap overflow-x-auto space-x-4 p-4 scrollbar-hide">
                    {tab.courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// --- Sample Data ---
const tabData = [
  {
    id: "gen-ai",
    name: "Generative AI",
    icon: FaBrain,
    courses: [
      {
        id: 1,
        title: "Advanced AI and Generative AI",
        link: "https://academy.skillzrevo.com/courses/advanced-ai-and-generative-ai-program",
        image: "/course-image/aigi/aigicourse.png",
        duration: "400 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1,640",
        priceINR: "1,45,999",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 2,
        title: "Masters in Data Science & Gen AI",
        link: "https://academy.skillzrevo.com/courses/masters-in-data-science-and-generative-ai",
        image: "/course-image/mdsgi/mdsgicourse.png",
        duration: "650 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "2999",
        priceINR: "249,999",
        type: "Live Classes on Weekends",
        skillsCount: "23+",
      },
      {
        id: 3,
        title: "Master’s in Generative AI",
        link: "https://academy.skillzrevo.com/courses/masters-in-generative-ai",
        image: "/course-image/mgi/mgicourse.png",
        duration: "150 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "549",
        priceINR: "44,999",
        type: "Live Classes on Weekends",
        skillsCount: "23+",
      },
      {
        id: 4,
        title: "Advanced Data Science & Gen AI with Visualization Tools",
        link: "https://academy.skillzrevo.com/courses/advanced-data-science-and-generative-ai-with-visualization-tools",
        image: "/course-image/adsgi/adsgi.png",
        duration: "640 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "2999",
        priceINR: "262000",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 5,
        title: "Mastering in AI and Generative AI Program",
        link: "https://academy.skillzrevo.com/courses/mastering-in-ai-and-generative-ai-program",
        image: "/course-image/migi/migi.png",
        duration: "300  Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1199",
        priceINR: "99,999",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
    ],
  },
  {
    id: "data-science",
    name: "AI & Machine Learning",
    icon: ArrowPathIcon,
    courses: [
      {
        id: 1,
        title: "Applied Data Science with AI",
        link: "https://academy.skillzrevo.com/courses/applied-data-science-with-ai",
        image: "/course-image/adsai/adsai.png",
        duration: "400 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "599",
        priceINR: "49,999",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      // {
      //   id: 2,
      //   title: "Machine Learning A-Z: Hands-On Python & R",
      //   link: "#",
      //   image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Data",
      // },
      // {
      //   id: 3,
      //   title: "Deep Learning Specialization",
      //   link: "#",
      //   image: "https://placehold.co/600x400/ec4899/ffffff?text=Data",
      // },
    ],
  },
  {
    id: "ds-ba",
    name: "Data Science & Business Analytics",
    icon: ServerStackIcon,
    courses: [
      {
        id: 1,
        title: "Applied Data Science with Python",
        link: "https://academy.skillzrevo.com/courses/applied-data-science-with-python",
        image: "/course-image/adspy/adspy.png",
        duration: "240 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1,049",
        priceINR: "84,999",
        type: "Live Classes on Weekdays",
        skillsCount: "15+",
      },
      {
        id: 2,
        title: "Mastering Data Science with R",
        link: "https://academy.skillzrevo.com/courses/mastering-data-science-with-r",
        image: "/course-image/dsr/dsr.png",
        duration: "240 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1,049",
        priceINR: "84,999",
        type: "Live Classes on Weekdays",
        skillsCount: "15+",
      },
      {
        id: 3,
        title: "Business Analytics Course",
        link: "https://academy.skillzrevo.com/courses/business-analytics-course",
        image: "/course-image/bac/6.jpg",
        duration: "300 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "1,199",
        priceINR: "99,999",
        type: "Live Classes on Weekdays",
        skillsCount: "20+",
      },
      {
        id: 4,
        title: "Data Analytic & Generative AI Program",
        link: "https://academy.skillzrevo.com/courses/data-analytics-with-generative-ai",
        image: "/course-image/dagi/hero.png",
        duration: "375 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1,449",
        priceINR: "119,999",
        type: "Live Classes on Weekdays",
        skillsCount: "40+",
      },
      {
        id: 5,
        title: "Data Science with Business Intelligence",
        link: "https://academy.skillzrevo.com/courses/data-science-business-intelligence-program",
        image: "/course-image/dsbi/dsbi.png",
        duration: "375 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "1,449",
        priceINR: "1,19,999",
        type: "Live Classes on Weekdays",
        skillsCount: "20+",
      },
      {
        id: 6,
        title: "Data Analytics Course",
        link: "https://academy.skillzrevo.com/courses/data-analytics-course",
        image: "/course-image/dac/dac.png",
        duration: "300 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "1,199",
        priceINR: "99,999",
        type: "Live Classes on Weekdays",
        skillsCount: "20+",
      },
    ],
  },
  {
    id: "bi-dv",
    name: "BI and Data Visualization",
    icon: BeakerIcon,
    courses: [
      {
        id: 1,
        link: "https://academy.skillzrevo.com/courses/mastering-in-business-intelligence-program",
        title: "Mastering in Business Intelligence",
        indemand: "true",
        category: "Data Science",
        // image: "/ai.png",
        image: "/course-image/mbi/hero.jpg",
        heroTagline: "Mastering in Business Intelligence Program",
        shortpoints: [
          "Master SQL, Tableau, and Power BI for comprehensive business intelligence skills.",
          "Gain hands-on experience with real-world data analysis and visualization.",
          "Learn from industry experts with practical insights.",
          "Develop actionable data-driven insights to support strategic decision-making.",
          "Enhance career prospects with in-demand BI skills and certifications.",
        ],

        applyLink: "#",
        duration: "150 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "549",
        priceINR: "44,999",
        type: "Live Classes on Weekdays",
        skillsCount: "10+",
      },
      {
        id: 2,
        link: "https://academy.skillzrevo.com/courses/mastering-in-data-visualization-with-tableau",
        title: "Mastering in Data Visualization with Tableau",
        indemand: "true",
        category: "Data Science",

        image: "/course-image/mdvt/hero.jpg",
        heroTagline: "Mastering in Data Visualization with Tableau",
        shortpoints: [
          "Comprehensive training in data management and visualization.",
          "Hands-on projects with real-world applications.",
          "Up-to-date curriculum reflecting industry trends",
          "Flexible learning paths tailored to career goals.",
          "Access to extensive support resources and expert guidance.",
        ],

        applyLink: "#",
        duration: "100 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "299",
        priceINR: "24,999",
        type: "Live Classes on Weekdays",
        skillsCount: "10+",
      },
      {
        id: 3,
        link: "https://academy.skillzrevo.com/courses/mastering-data-visualizations-with-power-bi",
        title: "Mastering Data Visualizations with Power BI",
        indemand: "true",
        category: "Data Science",
        heroImage: "/course-image/mdvpbi/hero.jpg",
        image: "/course-image/mdvpbi/hero.jpg",
        heroTagline: "Mastering Data Visualizations with Power BI",
        shortpoints: [
          "Comprehensive training in data management and visualization.",
          "Hands-on projects with real-world applications.",
          "Up-to-date curriculum reflecting industry trends",
          "Recognized certifications for career advancement.",
          "Access to extensive support resources and expert guidance.",
          "Designed for both working professionals and fresh graduates",
          "High Demand and Career Opportunities",
          "Competitive Edge and Innovation",
          "Problem-Solving and Critical Thinking",
        ],

        applyLink: "#",
        duration: "100 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "375",
        priceINR: "29,999",
        type: "Live Classes on Weekdays",
        skillsCount: "10+",
      },
    ],
  },
  {
    id: "big-da",
    name: "Big Data Analytics",
    icon: ChartPieIcon,
    courses: [
      {
        id: 1,
        title: "Big Data with Hadoop & Spark Program",
        link: "https://academy.skillzrevo.com/courses/big-data-with-hadoop-spark-program/",
        image: "/course-image/bdhsp/16.png",
        duration: "200  Hours",
        nextbatch: "27 August 2025",
        priceUSD: "599",
        priceINR: "49,999",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 2,
        title: "Big Data with Data Science",
        link: "https://academy.skillzrevo.com/courses/big-data-with-data-science",
        image: "/course-image/bdds/17.png",
        duration: "450  Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1799",
        priceINR: "149,999",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: ShieldCheckIcon,
    courses: [
      {
        id: 1,

        link: "https://academy.skillzrevo.com/courses/certified-network-security-and-ethical-hacking-specialist-cnsehs",
        title: "Certified Network Security and Ethical Hacking Specialist",
        icon: ShieldCheckIcon,
        indemand: "true",
        category: "Cybersecurity",
        image: "/course-image/cnsehs/19.png",
        coursecardimage: "/course-image/cnsehs/19.png",
        shortpoints: [
          "Capstone Project Discussion & Doubt Clearing Session: 10 Hours",
          "Learn from IIT Faculty & Industry experts",
          "More than 40+ industry-related projects and case studies",
          "Personalised mentorship sessions with industry experts",
          "24*7 Support",
          "Dedicated Learning Management Team",

          "Designed for both working professionals and fresh graduates",
          "High Demand and Career Opportunities",
          "Competitive Edge and Innovation",
          "Problem-Solving and Critical Thinking",
        ],

        applyLink: "#",
        duration: "350 Hours",
        nextbatch: "27 August 2025",
        priceUSD: "1,100",
        priceINR: "94,399",
        type: "Live Classes on Weekdays",
        skillsCount: "15+",
      },
      {
        id: 2,
        link: "https://academy.skillzrevo.com/courses/advanced-cybersecurity-and-threat-management-certification-program",
        title: "Advanced Cybersecurity and Threat Management Certification",
        indemand: "true",
        image: "/course-image/actmp/22.png",
        duration: "550 Hours",
        nextbatch: "14 September 2025",
        priceUSD: "1,650",
        priceINR: "1,41,600",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 3,
        link: "https://academy.skillzrevo.com/courses/mastering-in-cyber-security-forensics",
        title: "Mastering in Cyber Security & Forensics",
        icon: FingerPrintIcon,
        indemand: "true",
        category: "Cyber Security",
        image: "/course-image/actmp/2.jpg",
        coursecardimage: "/course-image/actmp/2.jpg",
        benefitimage: "/course-image/actmp/aigibenefits.webp",
        highlightImages: [
          "/course-image/actmp/1.jpg",
          "/course-image/actmp/22.png",
          "/course-image/actmp/3.jpg",
          "/course-image/actmp/4.jpg",
        ],
        shortpoints: [
          "Comprehensive, industry-relevant curriculum",
          "Hands-on projects and real-world case studies",
          "Expert-led sessions with practical insights",
          "Career support and job assistance",
          "Access to learning resources and tools",
          "Certification upon successful completion",
        ],

        applyLink: "#",
        duration: "250 Hours",
        nextbatch: "14 September 2025",
        priceUSD: "2700",
        priceINR: "2,36,000",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 4,
        link: "https://academy.skillzrevo.com/courses/certified-security-operations-and-incident-specialist",
        title: "Certified Security Operations & Incident Specialist",
        image: "/course-image/csois/21.png",
        duration: "250 Hours",
        nextbatch: "14 September 2025",
        priceUSD: "700",
        priceINR: "59,000",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
    ],
  },
  {
    id: "forensics",
    name: "Forensic Sciences",
    icon: FingerPrintIcon,
    courses: [
      {
        id: 1,
        link: "https://academy.skillzrevo.com/courses/mastering-in-cyber-security-forensics",
        title: "Mastering in Cyber Security & Forensics",
        icon: FingerPrintIcon,
        indemand: "true",
        category: "Cyber Security",
        image: "/course-image/actmp/2.jpg",
        coursecardimage: "/course-image/actmp/2.jpg",
        benefitimage: "/course-image/actmp/aigibenefits.webp",
        highlightImages: [
          "/course-image/actmp/1.jpg",
          "/course-image/actmp/22.png",
          "/course-image/actmp/3.jpg",
          "/course-image/actmp/4.jpg",
        ],
        shortpoints: [
          "Comprehensive, industry-relevant curriculum",
          "Hands-on projects and real-world case studies",
          "Expert-led sessions with practical insights",
          "Career support and job assistance",
          "Access to learning resources and tools",
          "Certification upon successful completion",
        ],

        applyLink: "#",
        duration: "250 Hours",
        nextbatch: "14 September 2025",
        priceUSD: "2700",
        priceINR: "2,36,000",
        type: "Live Classes on Weekdays",
        skillsCount: "23+",
      },
      {
        id: 2,
        link: "https://academy.skillzrevo.com/courses/certified-forensics-analyst",
        title: "Certified Forensics Analyst",
        indemand: "true",
        category: "Forensics",
        image: "/course-image/actmp/1.jpg",
        coursecardimage: "/course-image/actmp/1.jpg",
        benefitimage: "/course-image/actmp/aigibenefits.webp",
        highlightImages: [
          "/course-image/actmp/22.png",
          "/course-image/actmp/2.jpg",
          "/course-image/actmp/3.jpg",
          "/course-image/actmp/4.jpg",
        ],
        shortpoints: [
          "Comprehensive training in digital forensics and cyber investigations.",
          "Hands-on projects simulating real-world cybercrime scenarios.",
          "Practical exposure to evidence collection, memory analysis, and OS forensics.",
          "Curriculum aligned with latest tools, techniques, and legal frameworks.",
          "Expert guidance and mentorship for building industry-ready skills.",
        ],

        applyLink: "#",
        duration: "300 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "449",
        priceINR: "40,999",
        type: "Live Classes on Weekdays",
        skillsCount: "10+",
      },

      {
        id: 3,
        link: "https://academy.skillzrevo.com/courses/advanced-cyber-investigation-and-forensics-specialist-program",
        title: "Advanced Cyber Investigation and Forensics Specialist Program ",
        indemand: "true",
        category: "Forensics",
        image: "/course-image/csois/1.jpg",
        coursecardimage: "/course-image/csois/1.jpg",
        benefitimage: "/course-image/csois/aigibenefits.webp",
        highlightImages: [
          "/course-image/csois/21.png",
          "/course-image/csois/2.jpg",
          "/course-image/csois/3.jpg",
          "/course-image/csois/4.jpg",
        ],
        heroTagline:
          "Advanced Cyber Investigation and Forensics Specialist Program",
        shortpoints: [
          "Comprehensive training in digital forensics and cyber investigations.",
          "Hands-on projects simulating real-world cybercrime scenarios.",
          "Practical exposure to evidence collection, memory analysis, and OS forensics.",
          "Curriculum aligned with latest tools, techniques, and legal frameworks.",
          "Expert guidance and mentorship for building industry-ready skills.",
        ],

        applyLink: "#",
        duration: "400 Hours",
        nextbatch: "16 Sept 2025",
        priceUSD: "549",
        priceINR: "50,999",
        type: "Live Classes on Weekdays",
        skillsCount: "10+",
      },
    ],
  },
  {
    id: "Cloud-and-DevOps",
    name: "Cloud & DevOps",
    icon: CloudIcon,
    courses: [
      {
        id: 1,
        link: "https://academy.skillzrevo.com/courses/cloud-devops-program",
        title: "Cloud & DevOps Program",
        // icon: CloudIcon,
        brochureLink: "YOUR_BROCHURE_LINK_HERE",
        indemand: "true",
        category: "Cloud & DevOps",
        image: "/course-image/cloud-devops/1.jpg",
        coursecardimage: "/course-image/cloud-devops/2.jpg",
        benefitimage: "/course-image/cloud-devops/cloudbenefits.webp",
        highlightImages: [
          "/course-image/cloud-devops/1.jpg",
          "/course-image/cloud-devops/2.jpg",
          "/course-image/cloud-devops/3.jpg",
          "/course-image/cloud-devops/4.jpg",
        ],
        shortpoints: [
          "Multi-Cloud Expertise: Master all three major platforms: AWS, Azure, and GCP.",
          "DevOps Focus: Intensive training in Infrastructure as Code (Terraform), Docker, and Kubernetes.",
          "Accelerated Learning: An intensive 100-hour program designed for fast career transition.",
          "Hands-on Projects: Practical learning through multiple assignments and a real-world Capstone Project.",
          "Expert Faculty: Learn directly from Certified Industry Experts.",
          "Flexible Format: Convenient weekend online live sessions suitable for professionals.",
          "Job Roles: Direct preparation for roles like Junior Cloud Engineer and Cloud-focused DevOps Engineer.",
          "Career Support: Dedicated mentorship and job placement assistance.",
        ],

        applyLink: "#",
        duration: "300 Hours",
        nextbatch: "TBD",
        priceUSD: "TBD",
        priceINR: "TBD",
        type: "Live Classes on Weekends",
        skillsCount: "15+",
      },
      {
        id: 2,
        link: "https://academy.skillzrevo.com/courses/mastering-in-cloud-computing",
        title: "Mastering in Cloud Computing",
        // icon: CloudIcon,
        brochureLink: "YOUR_BROCHURE_LINK_HERE",
        indemand: "true",
        category: "Cloud & DevOps",
        image: "/course-image/cloud/3.jpg",
        coursecardimage: "/course-image/cloud/3.jpg",
        benefitimage: "/course-image/cloud/cloudbenefits.webp",
        highlightImages: [
          "/course-image/cloud/1.jpg",
          "/course-image/cloud/2.jpg",
          "/course-image/cloud/3.jpg",
          "/course-image/cloud/4.jpg",
        ],
        shortpoints: [
          "Multi-Cloud Expertise: Master AWS, Azure, and GCP platforms.",
          "DevOps Focus: Learn Infrastructure as Code (Terraform), Docker, and Kubernetes.",
          "Hands-on Learning: Over 500 hours including a real-world Capstone Project.",
          "Expert Faculty: Learn from IIT Faculty & Industry Experts.",
          "Cost Optimization (FinOps): Acquire skills in Cloud Economics and resource right-sizing.",
          "Career Support: Dedicated mentorship and job placement assistance.",
          "Flexible Format: Weekend live sessions designed for professionals.",
          "Advanced Architectures: Design Hybrid, Multi-Cloud, and Serverless solutions.",
        ],

        applyLink: "#",
        duration: "400 Hours",
        nextbatch: "TBD",
        priceUSD: "TBD",
        priceINR: "TBD",
        type: "Live Classes on Weekends",
        skillsCount: "20+",
      },
    ],
  },
];
