import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import TrainersCarousel from "../components/TrainersCarousel"; // Adjust path as needed
import ProfileCard from "../components/ProfileCrad"; // Adjust path as needed

// --- Data ---
// Based on public data for Management
const managementData = [
  {
    id: 1,
    name: "Anurag Shrivastava",
    title: "Co-Founder & CEO",
    image: "/images/team/anurag-shrivastava.jpeg", // Dummy path
    linkedin: "https://www.linkedin.com/in/anurag-shrivastava-93a0651a/",
  },
  {
    id: 2,
    name: "Rohit Kumar",
    title: "Co-Founder",
    image: "/images/team/rohit-kumar.jpeg", // Dummy path
    linkedin: "https://www.linkedin.com/in/rohit-kumar-50b0751a/",
  },
];

// Dummy data for Core Team
const teamData = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Head of Marketing",
    image: "/images/team/dummy-female-1.jpeg", // Dummy path
    linkedin: "#",
  },
  {
    id: 2,
    name: "Rahul Verma",
    title: "Operations Manager",
    image: "/images/team/dummy-male-1.jpeg", // Dummy path
    linkedin: "#",
  },
  {
    id: 3,
    name: "Aisha Khan",
    title: "Student Success Lead",
    image: "/images/team/dummy-female-2.jpeg", // Dummy path
    linkedin: "#",
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Corporate Partnerships",
    image: "/images/team/dummy-male-2.jpeg", // Dummy path
    linkedin: "#",
  },
];

export default function OurTeamPage() {
  return (
    <div className="overflow-x-hidden">
      {/* === Hero Section === */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side (Text) */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 heading-oswald uppercase">
                Meet the Minds
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent">
                  Behind Skillzrevo
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                We are a passionate team of industry experts, visionaries, and
                educators dedicated to bridging the skills gap and empowering
                the next generation of tech professionals.
              </p>
              <Link
                href="/careers" // Or contact page
                className="inline-block bg-gradient-to-r from-[#1d8fff] to-[#015bb6] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Join Our Mission
              </Link>
            </div>

            {/* Right Side (Image) */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Skillzrevo Team working"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover"
                // priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Management Section === */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 heading-oswald uppercase">
            <span className="bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent">
              Our Leadership
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {managementData.map((member) => (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === Trainers Section === */}
      {/* This section uses the component you provided */}
      <section className="bg-gray-50">
        <TrainersCarousel />
      </section>

      {/* === Core Team Section === */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 heading-oswald uppercase">
            <span className="bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent">
              Our Core Team
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}