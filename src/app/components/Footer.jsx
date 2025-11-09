"use client";
import React from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-skillzrevo" },
  {
    title: "Divisions",
    dropdown: [
      { title: "Academy", href: "https://academy.skillzrevo.com" },
      { title: "Staffing", href: "https://www.skillzrevotalent.com/" },
      { title: "Consulting", href: "https://consulting.skillzrevo.com" },
    ],
  },
  {
    title: "Corporate Training",
    href: "https://academy.skillzrevo.com/corporate-trainingcorporate-training",
  },
  {
    title: "Partner with us",
    dropdown: [
      { title: "Academy Partner", href: "https://academy.skillzrevo.com/channel-partner" },
      { title: "Staffing Partner", href: "https://www.skillzrevotalent.com/channel-partner" },
      { title: "Consulting Partner", href: "https://consulting.skillzrevo.com/channel-partner/" },
    ],
  },
  { title: "Contact us", href: "/contact-us" },
];

const STAFFING_LINKS = [
  { label: "IT Recruitment", href: "https://www.skillzrevotalent.com/it-recruitment" },
  { label: "Contract Staffing", href: "https://www.skillzrevotalent.com/contract-staffing" },
  { label: "Permanent Staffing", href: "https://www.skillzrevotalent.com/permanent-staffing" },
  { label: "Remote Staffing & Offshore Teams", href: "https://www.skillzrevotalent.com/remote-staffing-offshore-teams" },
  { label: "Recruitment Process Outsourcing", href: "https://www.skillzrevotalent.com/recruitment-process-outsourcing" },
  { label: "Campus & Fresher Hiring", href: "https://www.skillzrevotalent.com/campus-fresher-hiring" },
  { label: "Train-to-Hire", href: "https://www.skillzrevotalent.com/train-to-hire" },
  { label: "Contact-to-Hire", href: "https://www.skillzrevotalent.com/contact-to-hire" },
  { label: "Bulk Hiring", href: "https://www.skillzrevotalent.com/bulk-hiring" },
  { label: "Executive Search", href: "https://www.skillzrevotalent.com/executive-search" },
  { label: "Vendor Management Solutions (VMS)", href: "https://www.skillzrevotalent.com/vendor-management-solutions" },
];


export default function SkillzRevoFooter() {
  const divisions = NAV_LINKS.find((l) => l.title === "Divisions")?.dropdown || [];
  const partners = NAV_LINKS.find((l) => l.title === "Partner with us")?.dropdown || [];

  return (
    <div className="flex flex-col">
      {/* --- CTA Section --- */}
      <section className="bg-white w-fit mx-auto py-12 px-8 shadow-lg rounded-lg border border-gray-200 relative top-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 uppercase">
            Ready to Transform Your Business or Career?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://academy.skillzrevo.com"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              Our Academy <FaArrowRight className="text-sm" />
            </a>
            <a
              href="https://www.skillzrevotalent.com/"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              Staffing Services <FaArrowRight className="text-sm" />
            </a>
            <a
              href="https://consulting.skillzrevo.com"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              Consulting Services <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer Section --- */}
      <footer className="bg-gradient-to-br from-blue-500 to-blue-600 text-white pt-20">
        <div className=" mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* --- Brand --- */}
            <div className="">
              <a href="/" className="flex items-center gap-2 mb-4">
                
                  <img
              src="/footer-white.webp"
              alt="SkillzRevo Logo"
              className="w-80 mb-5 self-center object-cover"
            />
               
              </a>

            <div className="flex gap-6">
              {/* --- Divisions --- */}
            <div>
              <h3 className="font-bold text-lg mb-4">Divisions</h3>
              <ul className="space-y-2 text-sm">
                {divisions.map((div, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-xs">◇</span>
                    <a href={div.href} className="hover:underline">
                      {div.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

             {/* --- Partner Links --- */}
            <div>
              <h3 className="font-bold text-lg mb-4">Partner With Us</h3>
              <ul className="space-y-2 text-sm">
                {partners.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-xs">◇</span>
                    <a href={p.href} className="hover:underline">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>

            </div>  

              {/* <div className=" px-4">
              <p className="text-sm mb-4 text-center opacity-90">
                Empowering growth through training, staffing, and consulting excellence.
              </p>
              
               </div> */}
            </div>

            

           


            {/* --- Contact --- */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm opacity-90">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <p>
                    Plot No. 99/1A, Sector-16C, Greater Noida, Uttar Pradesh 201308, India
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <a
                    href="mailto:contact@skillzrevo.com"
                    className="hover:underline"
                  >
                    contact@skillzrevo.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <FaPhone className="mt-1" />
                  <div>
                    <p>+919632347896</p>
                    <p>Mon–Fri, 9 AM – 6 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4 text-orange-500">
                {[
                  { icon: <FaFacebookF />, href: "https://www.facebook.com/skillzrevo/" },
                  { icon: <FaTwitter />, href: "https://x.com/skillzrevo89393" },
                  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/skillzrevo/" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/skillzrevo" },
                  { icon: <FaYoutube />, href: "https://www.youtube.com/@SkillzRevo" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-transform hover:scale-110"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Courses</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/advanced-ai-and-generative-ai-program"
                    className="hover:underline"
                  >
                    Advanced AI and Generative AI
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/applied-data-science-with-ai"
                    className="hover:underline"
                  >
                    Applied Data Science with AI
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/applied-data-science-with-python"
                    className="hover:underline"
                  >
                    Applied Data Science with Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/mastering-in-business-intelligence-program"
                    className="hover:underline"
                  >
                    Mastering in Business Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/big-data-with-hadoop-spark-program/"
                    className="hover:underline"
                  >
                    Big Data with Hadoop & Spark Program
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/certified-network-security-and-ethical-hacking-specialist-cnsehs"
                    className="hover:underline"
                  >
                    Certified Network Security and Ethical Hacking Specialist
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.skillzrevo.com/courses/mastering-in-cyber-security-forensics"
                    className="hover:underline"
                  >
                    Mastering in Cyber Security & Forensics
                  </a>
                </li>

                <li className="mt-4">
                  <a
                    href="/explore-courses"
                    className="inline-block text-white font-bold hover:underline"
                  >
                    View all courses &rarr;
                  </a>
                </li>
              </ul>
            </div>

             {/* --- Staffing Services --- */}
            <div>
              <h3 className="font-bold text-lg mb-4">Staffing Services</h3>
              <ul className="space-y-2 text-sm custom-bullet">
                {STAFFING_LINKS.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 custom-bullet">
                    {/* <span className="text-xs">◇</span> */}
                    <a href={service.href} className="hover:underline">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="bg-orange-600 py-4 text-center text-sm">
          <p>© 2025 SkillzRevo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



// "use client";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
//   FaMapPin,
//   FaClock,
//   FaEnvelope,
//   FaPhone,
// } from "react-icons/fa6";

// export default function GlobalFooter({ site = "master" }) {
//   const year = new Date().getFullYear();

//   const divisions = [
//     { name: "Academy", url: "https://academy.skillzrevo.com" },
//     { name: "Staffing", url: "https://talent.skillzrevo.com" },
//     { name: "Consulting", url: "https://consulting.skillzrevo.com" },
//   ];

//   const partners = [
//     {
//       name: "Training Channel Partner",
//       url: "https://academy.skillzrevo.com/channel-partner",
//     },
//     {
//       name: "Staffing Channel Partner",
//       url: "https://talent.skillzrevo.com/channel-partner",
//     },
//     {
//       name: "Consulting Channel Partner",
//       url: "https://consulting.skillzrevo.com/channel-partner",
//     },
//   ];

//   const academyCourses = [
//     { name: "Advanced AI and Generative AI", url: "https://academy.skillzrevo.com/courses/advanced-ai-and-generative-ai-program" },
//     { name: "Applied Data Science with Python", url: "https://academy.skillzrevo.com/courses/applied-data-science-with-python" },
//     { name: "Mastering in Cyber Security & Forensics", url: "https://academy.skillzrevo.com/courses/mastering-in-cyber-security-forensics" },
//   ];

//   const staffingServices = [
//     { name: "IT Recruitment", url: "https://talent.skillzrevo.com/it-recruitment" },
//     { name: "Contract Staffing", url: "https://talent.skillzrevo.com/contract-staffing" },
//     { name: "Recruitment Process Outsourcing", url: "https://talent.skillzrevo.com/recruitment-process-outsourcing" },
//     { name: "Executive Search", url: "https://talent.skillzrevo.com/executive-search" },
//   ];

//   const consultingServices = [
//     { name: "Business Transformation", url: "https://consulting.skillzrevo.com/business-transformation" },
//     { name: "IT Strategy & Roadmap", url: "https://consulting.skillzrevo.com/it-strategy-roadmap" },
//     { name: "Process Optimization", url: "https://consulting.skillzrevo.com/process-optimization" },
//   ];

//   const isActive = (domain) =>
//     site.toLowerCase().includes(domain.toLowerCase())
//       ? "text-[#ff5e14] font-semibold"
//       : "hover:text-[#ff5e14]";

//   return (
//     <footer className="bg-[#0e457b] text-white">
//       {/* --- Social Bar --- */}
//       <div className="bg-[#1d8fff] py-8 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//           <h2 className="text-2xl md:text-3xl font-bold uppercase text-center md:text-left">
//             Follow Us on Social Media
//           </h2>
//           <div className="flex space-x-2">
//             {[
//               { icon: <FaFacebookF />, href: "https://www.facebook.com/skillzrevo/" },
//               { icon: <FaTwitter />, href: "https://x.com/skillzrevo89393" },
//               { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/skillzrevo/" },
//               { icon: <FaInstagram />, href: "https://www.instagram.com/skillzrevo" },
//               { icon: <FaYoutube />, href: "https://www.youtube.com/@SkillzRevo" },
//             ].map((s, i) => (
//               <a
//                 key={i}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- Main Footer Content --- */}
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
//         {/* Logo + About */}
//         <div className="bg-[#ff5e14] py-6 px-4 flex flex-col items-center justify-center text-center md:col-span-1">
//           <img
//             src="/SkillzRevo_White.webp"
//             alt="SkillzRevo Logo"
//             className="w-48 mb-4 object-contain"
//           />
//           <p className="text-sm font-light leading-relaxed">
//             SkillzRevo Solutions Pvt Ltd provides <b>Academy, Staffing,</b> and
//             <b> Consulting</b> solutions to help individuals and organizations
//             achieve excellence.
//           </p>
//         </div>

//         {/* Academy */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Academy</h4>
//           <ul className="space-y-2 text-sm">
//             {academyCourses.map((c, i) => (
//               <li key={i}>
//                 <a href={c.url} className={isActive("academy")}>
//                   {c.name}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a
//                 href="https://academy.skillzrevo.com/explore-courses"
//                 className="font-semibold text-white hover:underline mt-2 inline-block"
//               >
//                 View All Courses →
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Staffing */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Staffing Services</h4>
//           <ul className="space-y-2 text-sm">
//             {staffingServices.map((s, i) => (
//               <li key={i}>
//                 <a href={s.url} className={isActive("talent")}>
//                   {s.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Consulting */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Consulting Services</h4>
//           <ul className="space-y-2 text-sm">
//             {consultingServices.map((c, i) => (
//               <li key={i}>
//                 <a href={c.url} className={isActive("consulting")}>
//                   {c.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Contact Info</h4>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-start gap-2">
//               <FaMapPin className="mt-1 text-white" />
//               Plot No. GH01A, Sector 16C, Greater Noida, India
//             </li>
//             <li className="flex items-center gap-2">
//               <FaClock className="text-white" /> Mon–Sat: 9 AM – 8 PM
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEnvelope className="text-white" /> contact@skillzrevo.com
//             </li>
//             <li className="flex items-center gap-2">
//               <FaPhone className="text-white" /> +91 96323 47896
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* --- Copyright --- */}
//       <div className="border-t border-gray-600 py-4 text-center text-xs text-gray-300 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
//         <p>© {year} SkillzRevo Solutions Pvt Ltd. All Rights Reserved.</p>
//         <div className="flex gap-4 mt-2 md:mt-0">
//           <a href="/TermsandConditions" className="hover:underline">
//             Terms & Conditions
//           </a>
//           <a href="/PrivacyPolicy" className="hover:underline">
//             Privacy Policy
//           </a>
//           <a href="/cancellation-refund-policy" className="hover:underline">
//             Refund Policy
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
