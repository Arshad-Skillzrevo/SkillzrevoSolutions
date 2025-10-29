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

export default function ChannelPartnerProgram() {
  const partnerCategories = [
    {
      title: "Training Partners",
      icon: <FaUsersCog className="text-white text-2xl" />,
      color: "from-blue-500 to-blue-700",
      link: "https://academy.skillzrevo.com/channel-partner",
      description: "Partner with us to deliver world-class training programs",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
    },
    {
      title: "Consulting Partners",
      icon: <FaUserTie className="text-white text-2xl" />,
      color: "from-orange-500 to-orange-600",
      link: "https://skillzrevotalent.com/channel-partner",
      description: "Expand your consulting services with our expertise",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Staffing Partners",
      icon: <FaHandshake className="text-white text-2xl" />,
      color: "from-green-500 to-green-700",
      link: "https://consulting.skillzrevo.com/channel-partner",
      description: "Connect talent with opportunities seamlessly",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
    },
  ];

  const benefits = [
    { text: "Revenue-sharing & growth incentives", icon: <FaChartLine /> },
    { text: "White-label branding & marketing support", icon: <FaGlobeAsia /> },
    { text: "Regional exclusivity opportunities", icon: <FaHandshake /> },
    // { text: "Partner Portal, Sales Collateral, Co-branding tools", icon: <FaToolbox /> },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 uppercase">
            Channel Sales Partner Program
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our network and unlock new revenue opportunities with industry-leading partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SECTION - Partner Categories */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
              Partner Categories
            </h3>

            <div className="space-y-6">
              {partnerCategories.map((category, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xl text-gray-800 mb-2">
                          {category.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {category.description}
                        </p>
                      </div>
                      <a 
                        href={category.link}
                        className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${category.color} text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                      >
                        Learn More
                        <FaArrowRight className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION - Benefits */}
          <div className="lg:sticky lg:top-24">
            {/* Statistics or Additional Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4">Why Partner With Us?</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Proven Track Record</p>
                    <p className="text-blue-100 text-sm">Join hundreds of successful partners worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaToolbox className="text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Complete Support</p>
                    <p className="text-blue-100 text-sm">Access to resources, training, and dedicated support team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobeAsia className="text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Global Reach</p>
                    <p className="text-blue-100 text-sm">Expand your business across multiple markets</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 uppercase tracking-wide">
              Partner Benefits
            </h3>
            
            <div className="space-y-2 mb-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-300 group"
                >
                  <span className="text-gray-800 font-medium flex-1 text-base group-hover:text-[#1d8fff] transition-colors">
                    {benefit.text}
                  </span>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center ml-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}