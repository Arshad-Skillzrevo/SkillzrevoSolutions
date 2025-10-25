"use client";
import React, { useState } from "react";
import RoleModal from "./RoleModal";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  User,
  Linkedin,
  Youtube,
  User2,
  UserCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const PRIMARY_BLUE = "#1d8fff";
const SECONDARY_ORANGE = "#ff6900";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-skillzrevo" },
  {
    title: "Divisions",
    href: "#divisions",
    dropdown: [
      { title: "Academy", href: "https://academy.skillzrevo.com" },
      { title: "Staffing", href: "https://www.skillzrevotalent.com/" },
      { title: "Consulting", href: "https://consulting.skillzrevo.com" },
    ],
  },
  { title: "Corporate Training", href: "https://academy.skillzrevo.com/corporate-trainingcorporate-training" },
  {
    title: "Partner with us",
    href: "#partner",
    dropdown: [
      { title: "Academy Partner", href: "https://academy.skillzrevo.com/channel-partner" },
      { title: "Staffing Partner", href: "https://www.skillzrevotalent.com/channel-partner" },
      { title: "Consulting Partner", href: "https://consulting.skillzrevo.com/channel-partner/" },
    ],
  },
  // { title: "Work with us", href: "#work-with-us" },
  // { title: "Blogs", href: "#blogs" },
  { title: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
    <header className="w-full sticky top-0 z-50">
      {/* --- Top Bar --- */}
      <div className="hidden md:block bg-[#1d8fff] text-white text-xs">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          {/* Left: Contact Info */}
          <div className="flex space-x-6">
            <a
              href="tel:+919845267765"
              className="flex items-center font-medium hover:opacity-75 transition"
              // style={{ color: SECONDARY_ORANGE }}
            >
              <Phone className="h-4 w-4 mr-1" /> +919632347896
            </a>
            <a
              href="mailto:contact@skillzrevo.com"
              className="flex items-center font-medium hover:opacity-75 transition"
              // style={{ color: SECONDARY_ORANGE }}
            >
              <Mail className="h-4 w-4 mr-1" /> contact@skillzrevo.com
            </a>
          </div>

          {/* Right: Logins & Socials */}
          <div className="flex items-center space-x-6">
            

            <div className="flex space-x-1 text-white">
            <a
              href="https://www.facebook.com/skillzrevo/"
              className="hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              <FaFacebookF className="size-5" />
            </a>
            <a
              href="https://x.com/skillzrevo89393"
              className="hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              <FaTwitter className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/skillzrevo/"
              className="hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              <FaLinkedinIn className="size-5" />
            </a>
            <a
              href="https://www.instagram.com/skillzrevo"
              className="hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              <FaInstagram className="size-5" />
            </a>
            <a
              href="https://www.youtube.com/@SkillzRevo"
              className="hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              <FaYoutube className="size-5" />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav 
        className="backdrop-blur-md bg-[#fff] text-black shadow-lg transition-all duration-300"
        // style={{ backgroundColor: PRIMARY_BLUE }}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Skillzrevo</span>
            <div className="relative w-[200px] h-[50px]">
              <Image
                fill
                src="/Logo.webp"
                alt="Skillzrevo"
                className="object-contain"
                fetchPriority="high"
                quality={60}
              />
            </div>
            {/* <img
              alt="Skillzrevo"
              src="/assets/Logo.webp"
              className="lg:h-full h-12 lg:w-[160px]"
            /> */}
          </a>

            {/* --- Desktop Menu --- */}
            <div className="hidden lg:flex items-center space-x-2 h-full">
              {NAV_LINKS.map((link, i) =>
                link.dropdown ? (
                  <div
                    key={link.title}
                    className="relative group h-full flex items-center"
                  >
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="flex items-center text-gray-900 text-sm font-medium px-2 py-2 hover:opacity-80 transition"
                    >
                      {link.title}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === i ? "rotate-180": "rotate-0" }`} />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 w-52 rounded-b-lg shadow-xl overflow-hidden  ring-opacity-5 bg-[#0069d3] transition-all duration-300 origin-top backdrop-blur-lg ${
                        openDropdown === i
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-white hover:bg-white hover:text-gray-900 transition"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-gray-900 text-sm font-medium px-2 py-2 hover:opacity-80 transition"
                  >
                    {link.title}
                  </a>
                )
              )}
              <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="px-4 py-2 flex gap-2 items-center justify-between rounded text-white bg-[#1d8fff] hover:bg-[#1575d3] transition-colors text-[14px] font-semibold"
          >
            Log in <UserCircle/> 
          </a>
            </div>

            {/* --- Mobile Button --- */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-blue-500 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": SECONDARY_ORANGE }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-1 bg-[#1d8fff]/95">
            {NAV_LINKS.map((link, i) =>
              link.dropdown ? (
                <div key={link.title} className="w-full">
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="flex justify-between items-center w-full py-3 px-3 text-left text-white font-medium hover:bg-blue-700/60 rounded-lg transition"
                  >
                    {link.title}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`bg-blue-800/40 mt-1 rounded-lg py-1 space-y-1 transition-all duration-300 overflow-hidden ${
                      openDropdown === i
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 pl-8 pr-4 text-gray-200 hover:text-white hover:bg-blue-700/70 transition rounded-lg"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.title}
                  href={link.href}
                  className="block py-3 px-3 text-white font-medium hover:bg-blue-700/70 rounded-lg transition"
                >
                  {link.title}
                </a>
              )
            )}

            {/* Mobile Logins */}
            
          </div>
        </div>
        
      </nav>
                <RoleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </header></>
  );
}
