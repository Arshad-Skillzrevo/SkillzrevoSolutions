// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import "swiper/css";
// import "swiper/css/navigation";

// const HeroSlider = () => {
//   const swiperRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       videoSrc: "/videos/1.mp4",
//       badge: "REVOLUTIONIZING",
//       title: "SKILLS, TALENT AND TECHNOLOGY FOR A SMARTER TOMORROW",
//       subtitle:
//         "Bridging the gap between learning, careers, and business transformation.",
//       cta: { text: "Explore Our Training →", href: "#training" },
//     },
//     {
//       videoSrc: "/videos/2.mp4",
//       badge: "TRANSFORMING",
//       title: "EMPOWERING ORGANIZATIONS WITH CUTTING-EDGE SOLUTIONS",
//       subtitle:
//         "Delivering excellence through innovative training and technology solutions.",
//       cta: { text: "Explore Our Staffing →", href: "#staffing" },
//     },
//     {
//       videoSrc: "/videos/3.mp4",
//       badge: "INNOVATING",
//       title: "BUILD THE FUTURE WITH STRATEGIC TALENT DEVELOPMENT",
//       subtitle: "Creating pathways for success in the digital economy.",
//       cta: { text: "Explore Our Consulting →", href: "#consulting" },
//     },
//   ];

//   const handleTypingComplete = () => {
//     setTimeout(() => {
//       swiperRef.current?.slideNext();
//     }, 1000); // tiny delay after typing
//   };

//   return (
//     <div className="relative w-full h-[85vh] overflow-hidden">
//       {/* Navigation Buttons */}
//       <div className="absolute inset-y-0 left-0 flex items-center z-20 px-4 max-md:hidden">
//         <div className="swiper-button-prev bg-white/60 hover:bg-white text-[#1d8fff] p-3 rounded-full backdrop-blur-md shadow cursor-pointer transition">
//           <ChevronLeft className="w-6 h-6" />
//         </div>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center z-20 px-4 max-md:hidden">
//         <div className="swiper-button-next bg-white/60 hover:bg-white text-[#1d8fff] p-3 rounded-full backdrop-blur-md shadow cursor-pointer transition">
//           <ChevronRight className="w-6 h-6" />
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation]}
//         navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
//         speed={1000}
//         loop
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
//         allowTouchMove={false} // so user cannot skip typing
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             <video
//               className="absolute inset-0 w-full h-full object-cover"
//               src={slide.videoSrc}
//               autoPlay loop muted playsInline
//             />
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff]/80 via-blue-500/80 to-orange-600/80"></div>

//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.25, duration: 0.9 }}
//               className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
//             >
//               <div className="bg-white text-[#1d8fff] px-6 py-2 rounded-lg heading-oswald font-bold text-3xl mb-6">
//                 {slide.badge}
//               </div>

//               {currentIndex === index && (
//                 <TypeAnimation
//                   key={index + "-" + currentIndex}
//                   sequence={[slide.title, handleTypingComplete]}
//                   wrapper="h1"
//                   speed={20}
//                   repeat={0}
//                   cursor={true}
//                   className="text-3xl heading-oswald sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight max-w-5xl mb-6 h-[160px]"
//                 />
//               )}

//               <p className="text-lg md:text-xl max-w-3xl mb-10 opacity-90">
//                 {slide.subtitle}
//               </p>

//               <a
//                 href={slide.cta.href}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
//               >
//                 {slide.cta.text}
//               </a>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute bottom-0 bg-orange-500 w-full z-20 py-2"></div>
//     </div>
//   );
// };

// export default HeroSlider;

// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import "swiper/css";
// import "swiper/css/navigation";

// const HeroSlider = () => {
//   const swiperRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       videoSrc: "/videos/1.mp4",
//       badge: "REVOLUTIONIZING",
//       title: "SKILLS, TALENT AND TECHNOLOGY FOR A SMARTER TOMORROW",
//       subtitle:
//         "Bridging the gap between learning, careers, and business transformation.",
//       cta: { text: "Explore Our Training →", href: "#training" },
//     },
//     {
//       videoSrc: "/videos/2.mp4",
//       badge: "STAFFING",
//       title: "EMPOWERING ORGANIZATIONS WITH CUTTING-EDGE SOLUTIONS",
//       subtitle:
//         "Delivering excellence through innovative training and technology solutions.",
//       cta: { text: "Explore Our Staffing →", href: "#staffing" },
//     },
//     {
//       videoSrc: "/videos/3.mp4",
//       badge: "INNOVATING",
//       title: "BUILD THE FUTURE WITH STRATEGIC TALENT DEVELOPMENT",
//       subtitle: "Creating pathways for success in the digital economy.",
//       cta: { text: "Explore Our Consulting →", href: "#consulting" },
//     },
//   ];

//   const handleTypingComplete = () => {
//     setTimeout(() => {
//       swiperRef.current?.slideNext();
//     }, 2000);
//   };

//   return (
//     <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
//         <div className="hidden md:block absolute bg-blue-400 top-30 right-5 blur-3xl  min-h-50 min-w-50 rounded-full" />


//       {/* LEFT TEXT SIDE */}
//       <div className="w-full md:w-[40%] h-full flex items-center px-10 relative z-10
//           text-[#1d8fff]">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.25, duration: 0.9 }}
//           className="flex flex-col gap-6 max-w-xl"
//         >
//           <div className="bg-[#1d8fff] text-white px-6 py-2 rounded-lg heading-oswald font-bold text-2xl w-fit">
//             {slides[currentIndex].badge}
//           </div>

//           <TypeAnimation
//             key={"type-" + currentIndex}
//             sequence={[slides[currentIndex].title, handleTypingComplete]}
//             speed={20}
//             repeat={0}
//             cursor={true}
//             className="text-3xl md:text-5xl font-bold leading-tight heading-oswald"
//           />

//           <p className="text-lg md:text-xl opacity-90">
//             {slides[currentIndex].subtitle}
//           </p>

//           <a
//             href={slides[currentIndex].cta.href}
//             className="bg-orange-500 w-fit hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
//           >
//             {slides[currentIndex].cta.text}
//           </a>
//         </motion.div>
//       </div>

//       {/* RIGHT VIDEO SLIDER */}
//       <div className="hidden md:flex w-[60%] h-full relative items-center justify-center px-10">
//         {/* NAV BTNS */}
//         <div className="absolute inset-y-0 left-3 flex items-center z-20 max-md:hidden">
//           <div className="swiper-button-prev bg-white/70 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer">
//             <ChevronLeft />
//           </div>
//         </div>
//         <div className="absolute inset-y-0 right-3 flex items-center z-20 max-md:hidden">
//           <div className="swiper-button-next bg-white/70 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer">
//             <ChevronRight />
//           </div>
//         </div>
          

//         <Swiper
//           modules={[Navigation]}
//           navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
//           speed={1000}
//           loop
//           onSwiper={(s) => (swiperRef.current = s)}
//           onSlideChange={(s) => setCurrentIndex(s.realIndex)}
//           allowTouchMove={false}
//           className="w-full h-120 rounded-lg p-10 bg-white"
//         >
//           {slides.map((s, i) => (
//             <SwiperSlide key={i} className="relative w-full h-full">
//               <video
//                 className=" w-full h-full object-cover"
//                 src={s.videoSrc}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="absolute bottom-0 bg-orange-500 w-full z-20 py-2"></div>

//     </div>
//   );
// };

// export default HeroSlider;



"use client";
import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
      cta: { text: "Explore Our Training", href: "#training" },
    },
    {
      videoSrc: "/videos/2.mp4",
      badge: "STAFFING",
      title: "EMPOWERING ORGANIZATIONS WITH CUTTING-EDGE SOLUTIONS",
      subtitle:
        "Delivering excellence through innovative training and technology solutions.",
      cta: { text: "Explore Our Staffing", href: "#staffing" },
    },
    {
      videoSrc: "/videos/3.mp4",
      badge: "INNOVATING",
      title: "BUILD THE FUTURE WITH STRATEGIC TALENT DEVELOPMENT",
      subtitle: "Creating pathways for success in the digital economy.",
      cta: { text: "Explore Our Consulting", href: "#consulting" },
    },
  ];

  const handleTypingComplete = () => {
    setTimeout(() => {
      swiperRef.current?.slideNext();
    }, 2000);
  };

  // Parallax orbs
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  // Medium, non-distracting particles
  const particles = useMemo(
    () =>
      Array.from({ length: 160 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 3 + Math.floor(Math.random() * 4),
        duration: 8 + Math.random() * 7,
        delay: Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-white to-[#f8fbff]"
      onMouseMove={onMouseMove}
    >
      {/* Parallax Orbs (light tones) */}
      <motion.div
        aria-hidden
        className="hidden md:block absolute -top-24 -right-16 blur-3xl rounded-full"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(35% 35% at 50% 50%, rgba(29,143,255,0.45), rgba(29,143,255,0.08) 70%, transparent 100%)",
          mixBlendMode: "multiply",
        }}
        animate={{
          x: mouse.x * 24,
          y: mouse.y * 16,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.6 }}
      />
      <motion.div
        aria-hidden
        className="hidden md:block absolute -bottom-28 -left-24 blur-3xl rounded-full"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(35% 35% at 50% 50%, rgba(255,105,0,0.40), rgba(255,105,0,0.08) 70%, transparent 100%)",
          mixBlendMode: "multiply",
        }}
        animate={{
          x: -mouse.x * 20,
          y: -mouse.y * 12,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.6 }}
      />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: -20,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              background:
                p.id % 2 === 0
                  ? "rgba(29,143,255,0.9)"
                  : "rgba(255,105,0,0.9)",
              filter: "blur(0.3px)",
              animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* LEFT TEXT SIDE */}
      <div className="w-full md:w-[40%] h-full flex items-center px-6 md:px-10 relative z-10 text-[#1d8fff]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-xl"
          >
            {/* Badge */}
            <div
              className="flex items-center gap-2 bg-[#1d8fff] text-white px-5 py-2 rounded-xl heading-oswald font-bold text-xl md:text-2xl w-fit shadow-sm"
              style={{ boxShadow: "0 6px 20px rgba(29,143,255,0.25)" }}
            >
              {/* <span
                className="inline-block rounded-full"
                style={{ width: 8, height: 8, background: "white", opacity: 0.9 }}
              /> */}
              <span>{slides[currentIndex].badge}</span>
            </div>

            {/* Title (Typewriter) */}
            <TypeAnimation
              key={`type-${currentIndex}`}
              sequence={[slides[currentIndex].title, handleTypingComplete]}
              speed={20}
              repeat={0}
              cursor
              className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight heading-oswald drop-shadow-sm"
            />

            {/* Subtitle */}
            <p className="text-base md:text-xl text-slate-700/95">
              {slides[currentIndex].subtitle}
            </p>

            {/* CTA (subtle icon appears on hover, slides from behind text) */}
            <a
              href={slides[currentIndex].cta.href}
              className="group w-fit relative inline-flex items-center gap-3 bg-[#ff6900] hover:bg-[#ff7f24] text-white px-7 py-3.5 rounded-xl text-base md:text-lg font-semibold shadow-lg transition-transform active:scale-[0.98] overflow-hidden"
              style={{ boxShadow: "0 10px 24px rgba(255,105,0,0.28)" }}
            >
              <span className="relative z-[1]">{slides[currentIndex].cta.text}</span>
              {/* <span className="absolute right-5 inset-y-0 my-auto flex items-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRight size={20} />
              </span> */}
            </a>

            <div className="mt-2 text-xs md:text-sm text-slate-500">
              No credit card required • Start exploring in minutes
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT VIDEO SLIDER */}
      <div className="hidden md:flex w-[60%] h-full relative items-center justify-center px-4 md:px-10">
        {/* NAV BTNS */}
        <div className="absolute inset-y-0 left-3 flex items-center z-20 max-md:hidden">
          <div className="swiper-button-prev bg-white/80 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer backdrop-blur-sm transition-all active:scale-95">
            <ChevronLeft />
          </div>
        </div>
        <div className="absolute inset-y-0 right-3 flex items-center z-20 max-md:hidden">
          <div className="swiper-button-next bg-white/80 hover:bg-white text-[#1d8fff] p-3 rounded-full shadow cursor-pointer backdrop-blur-sm transition-all active:scale-95">
            <ChevronRight />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          speed={2000}
          loop
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setCurrentIndex(s.realIndex)}
          allowTouchMove={false}
          className="w-full h-120 rounded-2xl p-4 md:p-6 bg-white/90 shadow-[0_20px_60px_rgba(16,24,40,0.10)] backdrop-blur-sm"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="relative w-full h-full">
              <motion.div
                key={`vid-${i}-${currentIndex === i}`}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full overflow-hidden rounded-xl"
              >
                <video
                  className="w-full h-full object-cover"
                  src={s.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Brand bar */}
      <div
        className="absolute bottom-0 w-full z-20 py-2"
        style={{
          background:
            "linear-gradient(90deg, rgba(29,143,255,0.25), rgba(255,105,0,0.35))",
        }}
      />

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) scale(1.05);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;

