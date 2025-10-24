"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "swiper/css";
import "swiper/css/navigation";

const Component2 = () => {
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
      badge: "STAFFING",
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
    }, 2000);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center  bg-gradient-to-tr from-[#1d8fff]/90 via-blue-500/80 to-orange-600/90">

      {/* LEFT TEXT SIDE */}
      <div className="w-full md:w-[40%] h-full flex items-center px-10 relative z-10
          text-white">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <div className="bg-white text-[#1d8fff] px-6 py-2 rounded-lg heading-oswald font-bold text-2xl w-fit">
            {slides[currentIndex].badge}
          </div>

          <TypeAnimation
            key={"type-" + currentIndex}
            sequence={[slides[currentIndex].title, handleTypingComplete]}
            speed={20}
            repeat={0}
            cursor={true}
            className="text-3xl md:text-5xl font-bold leading-tight heading-oswald"
          />

          <p className="text-lg md:text-xl opacity-90">
            {slides[currentIndex].subtitle}
          </p>

          <a
            href={slides[currentIndex].cta.href}
            className="bg-orange-500 w-fit hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            {slides[currentIndex].cta.text}
          </a>
        </motion.div>
      </div>

      {/* RIGHT VIDEO SLIDER */}
      <div className="hidden md:flex w-[60%] h-full relative items-center justify-center px-10">
        {/* NAV BTNS */}
        <div className="absolute inset-y-0 left-3 flex items-center z-20 max-md:hidden">
          <div className="swiper-button-prev bg-white/70 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer">
            <ChevronLeft />
          </div>
        </div>
        <div className="absolute inset-y-0 right-3 flex items-center z-20 max-md:hidden">
          <div className="swiper-button-next bg-white/70 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer">
            <ChevronRight />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          speed={1000}
          loop
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setCurrentIndex(s.realIndex)}
          allowTouchMove={false}
          className="w-full h-120 rounded-lg p-10 bg-white"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="relative w-full h-full">
              <video
                className=" w-full h-full object-cover"
                src={s.videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Component2;
