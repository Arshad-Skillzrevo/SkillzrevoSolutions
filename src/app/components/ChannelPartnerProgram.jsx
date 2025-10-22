"use client";
import React from "react";
import {
  FaHandshake,
  FaUserTie,
  FaUsersCog,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaGlobeAsia,
  FaToolbox,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ChannelPartnerProgram() {
  const partnerCategories = [
    {
      title: "Training Partners",
      icon: <FaUsersCog className="text-white text-2xl" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Consulting Partners",
      icon: <FaUserTie className="text-white text-2xl" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Staffing Partners",
      icon: <FaHandshake className="text-white text-2xl" />,
      color: "from-green-500 to-green-700",
    },
  ];

  const benefits = [
    { text: "Revenue-sharing & growth incentives", icon: <FaChartLine /> },
    { text: "White-label branding & marketing support", icon: <FaGlobeAsia /> },
    { text: "Regional exclusivity opportunities", icon: <FaHandshake /> },
    { text: "Partner Portal, Sales Collateral, Co-branding tools", icon: <FaToolbox /> },
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
            
      
          <h2 className="text-4xl sm:text-5xl heading-oswald font-bold text-[#1d8fff] mb-8">
            Channel Sales <br/> Partner Program
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Partner Categories
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 shadow-md`}
                >
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {category.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md p-3 flex items-center justify-between hover:shadow-xl"
              >
                <span className="text-gray-800 font-medium flex-1 text-sm sm:text-base">
                  {benefit.text}
                </span>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center ml-4 flex-shrink-0 shadow-md">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
              Become a Partner
              <FaArrowRight className="text-sm" />
            </button>
            <button className="border-2 border-blue-600 text-[#1d8fff] font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-blue-600 hover:text-white shadow-sm">
              Partner Login
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
