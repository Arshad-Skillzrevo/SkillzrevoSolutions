"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
      badge: "REVOLUTIONIZING",
      title: "SKILLS, TALENT AND TECHNOLOGY FOR A SMARTER TOMORROW",
      subtitle:
        "Bridging the gap between learning, careers, and business transformation.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80",
      badge: "TRANSFORMING",
      title: "EMPOWERING ORGANIZATIONS WITH CUTTING-EDGE SOLUTIONS",
      subtitle:
        "Delivering excellence through innovative training and technology solutions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80",
      badge: "INNOVATING",
      title: "BUILD THE FUTURE WITH STRATEGIC TALENT DEVELOPMENT",
      subtitle:
        "Creating pathways for success in the digital economy.",
    },
  ];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Custom navigation buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20 px-4 max-md:hidden">
        <div className="swiper-button-prev bg-white/60 hover:bg-white text-[#1d8fff] p-3 rounded-full backdrop-blur-md shadow cursor-pointer transition">
          <ChevronLeft className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20 px-4 max-md:hidden">
        <div className="swiper-button-next bg-white/60 hover:bg-white text-[#1d8fff] p-3 rounded-full backdrop-blur-md shadow cursor-pointer transition">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* KEN BURNS BG IMAGE */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.19 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff]/80 via-blue-500/80 to-orange-600/80"></div>

            {/* CONTENT ANIMATION */}
            <motion.div
              key={index} // important for re-trigger per slide
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
            >
              <div className="bg-white text-[#1d8fff] px-6 py-2 rounded-lg font-bold heading-oswald text-3xl mb-6">
                {slide.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold heading-oswald leading-tight max-w-5xl mb-6">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl max-w-3xl mb-10 opacity-90 leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#divisions" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2" >
                  Explore Our Divisions →
                </a>
                {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Free Consultation →
                </button> */}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 bg-orange-500 w-full z-20 py-2"></div>
    </div>
  );
};

export default HeroSlider;
