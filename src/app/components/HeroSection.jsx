"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      videoSrc: "/videos/1.mp4",
      badge: "REVOLUTIONIZING",
      title: "SKILLS, TALENT AND TECHNOLOGY FOR A SMARTER TOMORROW",
      subtitle:
        "Bridging the gap between learning, careers, and business transformation.",
      cta: { text: "Explore Our Training →", href: "#training" },
    },
    {
      videoSrc: "/videos/2.mp4",
      badge: "TRANSFORMING",
      title: "EMPOWERING ORGANIZATIONS WITH CUTTING-EDGE SOLUTIONS",
      subtitle:
        "Delivering excellence through innovative training and technology solutions.",
      cta: { text: "Explore Our Staffing →", href: "#staffing" },
    },
    {
      videoSrc: "/videos/3.mp4",
      badge: "INNOVATING",
      title: "BUILD THE FUTURE WITH STRATEGIC TALENT DEVELOPMENT",
      subtitle: "Creating pathways for success in the digital economy.",
      cta: { text: "Explore Our Consulting →", href: "#consulting" },
    },
  ];

  const handleTypingComplete = () => {
    setTimeout(() => {
      swiperRef.current?.slideNext();
    }, 1000); // tiny delay after typing
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Navigation Buttons */}
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
        modules={[Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        speed={1000}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        allowTouchMove={false} // so user cannot skip typing
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.videoSrc}
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff]/80 via-blue-500/80 to-orange-600/80"></div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
            >
              <div className="bg-white text-[#1d8fff] px-6 py-2 rounded-lg heading-oswald font-bold text-3xl mb-6">
                {slide.badge}
              </div>

              {currentIndex === index && (
                <TypeAnimation
                  key={index + "-" + currentIndex}
                  sequence={[slide.title, handleTypingComplete]}
                  wrapper="h1"
                  speed={20}
                  repeat={0}
                  cursor={true}
                  className="text-3xl heading-oswald sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight max-w-5xl mb-6 h-[160px]"
                />
              )}

              <p className="text-lg md:text-xl max-w-3xl mb-10 opacity-90">
                {slide.subtitle}
              </p>

              <a
                href={slide.cta.href}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
              >
                {slide.cta.text}
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 bg-orange-500 w-full z-20 py-2"></div>
    </div>
  );
};

export default HeroSlider;
