"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function FloatingWidget() {
  const [phone, setPhone] = useState("+919632347896");
  const whatsapp = "+919632347896";

  // region-specific numbers
  const phoneNumbers = {
    US: "+16264613130",
    AE: "+16467774969",
    IN: "+919632347896",
  };

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const countryCode = data.country_code;
        setPhone(phoneNumbers[countryCode] || phoneNumbers.IN);
      })
      .catch(() => setPhone(phoneNumbers.IN));
  }, []);

  return (
    <>
      <div className="flex z-60 top-2/3 left-0 fixed flex-col bg-[#1d8fff] rounded-r-md w-fit text-white">
        <a
          href="https://www.facebook.com/skillzrevo/"
          className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
        >
          <FaFacebookF className="size-6" />
        </a>
        <a
          href="https://x.com/skillzrevo89393"
          className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
        >
          <FaTwitter className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/skillzrevo/"
          className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
        >
          <FaLinkedinIn className="size-6" />
        </a>
        <a
          href="https://www.instagram.com/skillzrevo"
          className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
        >
          <FaInstagram className="size-6" />
        </a>
        <a
          href="https://www.youtube.com/@SkillzRevo"
          className="hover:bg-[#ff5e14] p-2 w-fit rounded-md transition-colors duration-200"
        >
          <FaYoutube className="size-6" />
        </a>
      </div>
      <div className="fixed bottom-5 left-5 z-60 shadow-[0_0_10px_#1d8fff] rounded-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center bg-[#1d8fff] shadow-xl border-2 border-[#1d8fff] rounded-full overflow-hidden"
        >
          {/* Call */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition group"
          >
            <FaPhone className="text-white group-hover:text-[#1d8fff] text-lg" />
            <span className="hidden sm:inline text-sm font-medium text-white group-hover:text-gray-800">
              Call Us
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200" />

          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Hi!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 hover:bg-green-500 transition group"
          >
            <FaWhatsapp className="text-white group-hover:text-green-50 text-xl" />
            <span className="hidden sm:inline text-sm font-medium text-white">
              Say Hi! on WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </>
  );
}
