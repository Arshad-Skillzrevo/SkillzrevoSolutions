"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";

/** ─────────────────────────────────────────────────────────────
 *  DATA (unchanged – you can move to an external file if needed)
 *  ────────────────────────────────────────────────────────────*/
const reviews = [
  {
    name: "Dr. Anubhuti Gupta",
    employer: "Hanumant Technologies Pvt Ltd",
    designation: "Senior Data Analyst",
    exp: "24+ Years",
    course: "Master’s in GenAI",
    country: "India",
    image: "/learners/dranubhuti.jpeg",
    linkedin: "https://linkedin.com/in/dr-anubhuti-gupta-7a820973",
    review:
      'I have done a course titled "MASTERS IN GENERATIVE AI PROGRAM WITH AGENTIC AI" from SkillzRevo. And I must say that the course was very informative and thoughtfully designed. The instructor, Ashish Tiwari, had wide experience in the field, and he taught with enough practical hands-on for every important concept. After the course I was able to build my own AI agents. I am greatly thankful to the entire team of SkillzRevo for the guidance and support extended to each student.',
  },
  {
    name: "Mr. Mandar Morajkar",
    employer: "CRG Solution Pvt Ltd",
    designation: "Senior Business Analyst",
    exp: "10+ Years",
    course: "Advanced AI and GenAI Program",
    country: "India",
    image: "/learners/madan.jpg",
    linkedin: "#",
    review:
      "Outstanding Learning Experience with SkillzRevo! SkillzRevo is a game-changer when it comes to upskilling! The platform offers high-quality, industry-relevant courses that are well-structured and easy to follow. The instructors are experts in their fields, ensuring that learning is both engaging and effective. What truly sets SkillzRevo apart is its practical approach—real-world case studies, hands-on projects, and interactive sessions make the learning process seamless. The support team is also fantastic, always ready to assist. Whether you're a beginner or looking to advance your career, SkillzRevo is the perfect platform. Highly recommended!",
  },
  {
    name: "Najah Mohammad Issa",
    employer: "Leaders Private School",
    designation: "Teacher",
    exp: "20+ Years",
    course: "Data Analytics & Generative AI",
    country: "Oman",
    image: "/learners/issa.jpg",
    linkedin:
      "https://www.linkedin.com/in/najah-issa-153b3431?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByV4MwFouSeSyM299d%2F1wdA%3D%3D",
    review: ` Dear SkillzRevo Team,
I wanted to take a moment to share my feedback on the Generative Al and Data Analysis
course, which I am currently taking. So far, the learning experience has been highly
enriching and well-structured.
The Advanced Excel sessions were particularly fruitful. providing deep insights into data
manipulation and analysis techniques. The transition into Python has been equally
engaging, with clear explanations and practical applications that make the learning
process both informative and enjoyable. The content delivery is structured in a way that
makes even complex topics accessible and actionable.
Additionally, the previous learning materials available on the dashboard serve as a valuable
resource, reinforcing key concepts and allowing for self-paced revision. This has greatly
supported my understanding of the topics covered so far
I look forward to continuing the course and exploring more aspects of Generative Al and
Data Analysis- Thank you for providing such a well-designed and insightful learning
experience.
Best regards.
Najah Issa`,
  },
  {
    name: "Dr. Tawanda Richard Shoniwa",
    employer: "Ministry of Education",
    designation: "Ministry of Education",
    exp: "25 Years",
    course: "Mastering in AI & Generative AI",
    country: "UAE",
    image: "/learners/drtwanda.jpg",
    review:
      "SkillzRevo is an exceptional training organization that delivers top-notch courses in AI, machine learning, business analytics, and data science. Their programs are well-structured, hands-on, and designed to equip learners with practical skills that can be applied immediately in real-world scenarios. The instructors are highly knowledgeable, engaging, and always willing to go the extra mile to ensure every participant fully understands the concepts. Whether you’re a beginner or an experienced professional looking to upskill, SkillzRevo provides the perfect learning environment with cutting-edge resources and industry-relevant case studies. I highly recommend SkillzRevo to anyone looking to advance their career in the rapidly evolving world of AI and data science. Their commitment to excellence and learner success truly sets them apart!",
  },
  {
    name: "Mr. James Mania Kakranja",
    employer: "Emirates Flight Catering",
    designation: "Supervisor",
    exp: "10+ Years",
    course: "Master’s in GenAI",
    country: "Dubai",
    image: "/learners/jamesmania.jpg",
    review:
      "I have a very good experience with SkillzRevo. The admiration team is very supportive and the trainer has excellent knowledge of the subject matter. I want to say thank you and recommend it to anyone who wants to get hands on skills in Generative AI and Data science.",
  },
  {
    name: "Akif Hussain",
    employer: "Alpek Polyester",
    designation: "Plant Manager",
    exp: "22 Years",
    course: "Advanced AI & Generative AI",
    country: "Saudi Arabia",
    image: "/learners/akif.jpeg",
    linkedin:
      "https://www.linkedin.com/in/akifhussainmanufacturingoperationsmanagementprofessional/",
    review:
      "Great learning in AI with SkillRezvo Solu. Great course program, very well setup. All trainers highly skilled and knowledgeable. I would strongly recommend to join if u want to master AI.",
  },
  {
    name: "Mr. Mohamed Ariff Miljan",
    employer: "RAWAS International",
    designation: "Finance Head",
    exp: "20+ Years",
    course: "Master’s in GenAI",
    country: "Saudi Arabia",
    image: "",
    review:
      "My experience with the SkillzRevo - Institute has been very positive. The learning support offered was consistent and effective, making the journey smooth and engaging. What impressed me most was that Mr. Arun, the General Manager, personally checked in and facilitated the process. His direct involvement not only ensured things ran well but also set a culture of commitment and support within the institute. This level of leadership, combined with the structured guidance, made the overall experience highly valuable and reassuring.",
  },
  {
    name: "Mr. Shunmugam Sorimuthu",
    employer: "MiPS Web Services, Private Limited",
    designation: "Project Manager",
    exp: "20+ Years",
    course: "Master’s in GenAI",
    country: "India",
    image: "/learners/shunmugamsori.jpeg",
    linkedin: "https://www.linkedin.com/in/shunmugam-sorimuthu-549011182/",
    review:
      "Very good learning experience. The sessions are conducted without any delay or any break. That is most appreciatable one. Also the trainer explains the topics without any rush.",
  },
];

/** ─────────────────────────────────────────────────────────────
 *  UI HELPERS
 *  ────────────────────────────────────────────────────────────*/
const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.61L12 2 9.69 8.63 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
  </svg>
);

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Initials = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="w-24 h-28 md:w-28 md:h-32 bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center rounded-lg text-white font-extrabold text-xl">
      {initials}
    </div>
  );
};

/** Modal (centered). Autoplay continues (per your instruction). */
const Modal = ({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-label={title || "Dialog"}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        className="relative z-[81] mx-4 w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
      >
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

/** ─────────────────────────────────────────────────────────────
 *  MAIN COMPONENT
 *  ────────────────────────────────────────────────────────────*/
export default function LearnersReviewSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      {/* Bold/Marketing background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0ea5ff] via-[#1d8fff] to-[#0066ff]" />
      {/* subtle pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[9] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.2) 0 8%, transparent 9%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.15) 0 6%, transparent 7%), radial-gradient(circle at 40% 80%, rgba(255,255,255,.12) 0 7%, transparent 8%)",
          backgroundSize: "140px 140px, 160px 160px, 180px 180px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4 max-md:flex-col">
          <div className="space-y-2">
            <p className="uppercase tracking-widest text-white/80 text-xs font-semibold">
              Trusted by Professionals
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#fff] to-[#ddd] bg-clip-text text-transparent heading-oswald uppercase">
              Learner Reviews
            </h2>
            <p className="text-white/90 max-w-2xl text-sm md:text-base">
              Join SkillzRevo’s expert-led programs and unlock a future-proof
              career in AI, GenAI, Data Science, BI, Cybersecurity, and more.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              ref={prevRef}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white text-[#1d8fff] shadow-lg hover:shadow-xl hover:bg-gray-50 transition flex items-center justify-center active:scale-95"
            >
              <ChevronDownIcon className="h-5 w-5 rotate-90" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white text-[#1d8fff] shadow-lg hover:shadow-xl hover:bg-gray-50 transition flex items-center justify-center active:scale-95"
            >
              <ChevronDownIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
          }}
          loop
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation, Autoplay, A11y]}
          className="pb-2"
        >
          {reviews.map((rev, index) => {
            const short =
              rev.review && rev.review.length > 260
                ? rev.review.slice(0, 260) + "…"
                : rev.review;

            return (
              <SwiperSlide key={index}>
                <article className="group h-80 max-md:h-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-shadow overflow-hidden flex flex-col">
                  {/* Badge */}
                 

                  {/* Header */}
                  <div className="px-6 pt-4 pb-3 flex max-sm:flex-col items-center gap-4">
                    {rev.image ? (
                      <a
                        href={rev.linkedin || "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${rev.name} LinkedIn Profile`}
                        className="relative inline-block"
                      >
                        <img
                          src={rev.image}
                          alt={rev.name}
                          loading="lazy"
                          className="w-24 h-28 md:w-28 md:h-32 object-cover rounded-lg ring-2 ring-white/60 shadow-sm"
                        />
                        {rev.linkedin && (
                          <span className="absolute -bottom-2 -right-2 border-2 border-white bg-[#1d8fff] rounded-full p-2 shadow-md">
                            <FaLinkedinIn className="h-4 w-4 text-white" />
                          </span>
                        )}
                      </a>
                    ) : (
                      <Initials name={rev.name} />
                    )}

                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {rev.name}
                      </h3>
                      <p className="text-sm text-orange-600 font-semibold mt-0.5">
                        {rev.designation} • {rev.exp}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Currently at{" "}
                        <span className="font-semibold text-gray-900">
                          {rev.employer}
                        </span>
                        , {rev.country}
                      </p>

                      {/* Rating + Course */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                        {rev.course && (
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-600 bg-gray-100 rounded-full px-2.5 py-1">
                            {rev.course}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="px-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  </div>

                  {/* Review */}
                  <div className="px-6 py-4 flex-1 flex flex-col">
                    {rev.review ? (
                      <>
                        <p className="text-sm text-gray-800 leading-relaxed line-clamp-5">
                          {short}
                        </p>
                        {rev.review.length > 260 && (
                          <div className="mt-3">
                            <button
                              onClick={() => setActiveModalIndex(index)}
                              className="inline-flex items-center gap-2 text-[#1d8fff] font-semibold text-sm hover:underline active:scale-[0.98] transition"
                            >
                              Read Full Review
                              <FaArrowRight className="text-xs" />
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-gray-400 italic">
                        No review provided.
                      </p>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?sa=X&rlz=1C1OPNX_enIN1124IN1124&sca_esv=7550878c098e0420&cs=1&biw=1680&bih=915&sxsrf=AE3TifNC7wTBpUPM-4SxqSawHBzRAHJ1wg:1756994365946&kgmid=/g/11wg7gxph5&q=SkillzRevo+Solutions+Pvt+Ltd&shndl=30&shem=lcuae,lsptbl1,uaasie&source=sh/x/loc/uni/m1/1&kgs=3365fa44e46a00fb&utm_source=lcuae,lsptbl1,uaasie,sh/x/loc/uni/m1/1#lrd=0x3bae15a01928a245:0x5b89af795985a099,1,,,,"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            See All Testimonials
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </div>

      {/* MODAL (centered). Autoplay continues in background. */}
      <Modal
        open={activeModalIndex !== null}
        onClose={() => setActiveModalIndex(null)}
        title={
          activeModalIndex !== null
            ? `Full Review — ${reviews[activeModalIndex].name}`
            : ""
        }
      >
        {activeModalIndex !== null && (
          <div className="space-y-4">
            {/* Header mini */}
            <div className="flex items-center gap-3">
              {reviews[activeModalIndex].image ? (
                <img
                  src={reviews[activeModalIndex].image as string}
                  alt={reviews[activeModalIndex].name}
                  loading="lazy"
                  className="w-12 h-12 rounded-lg object-cover ring-1 ring-gray-200"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                  {reviews[activeModalIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 3)
                    .toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900">
                  {reviews[activeModalIndex].name}
                </p>
                <p className="text-xs text-gray-600">
                  {reviews[activeModalIndex].designation} •{" "}
                  {reviews[activeModalIndex].exp}
                </p>
              </div>
            </div>

            {/* Full text */}
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
              {reviews[activeModalIndex].review}
            </p>

            {/* Footer actions */}
            <div className="pt-2 flex items-center justify-between">
              {reviews[activeModalIndex].linkedin ? (
                <a
                  href={reviews[activeModalIndex].linkedin as string}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#1d8fff] font-semibold hover:underline"
                >
                  View LinkedIn
                  <FaLinkedinIn className="text-sm" />
                </a>
              ) : (
                <span />
              )}

              <button
                onClick={() => setActiveModalIndex(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 active:scale-95 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
