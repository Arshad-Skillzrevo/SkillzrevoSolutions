import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { Oswald } from "next/font/google";
import SkillzRevoFooter from "./components/Footer";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  display: "swap",
});

export const metadata = {
  title: "SkillzRevo | IT Training, Staffing Solutions & Business Consulting Services in India 2025",
  description:
    "Transform your career and business with SkillzRevo's comprehensive services: Professional IT training in Data Science, AI & Cybersecurity | Expert staffing solutions | Strategic business consulting. 100% placement assistance with live projects.",
  keywords: [
    "SkillzRevo",
    "IT training institute",
    "data science courses",
    "AI training",
    "cybersecurity certification",
    "IT staffing solutions",
    "talent acquisition",
    "recruitment services",
    "business consulting",
    "digital transformation",
    "technology consulting",
    "online tech courses india",
    "placement assistance"
  ],
  alternates: {
    canonical: "https://skillzrevo.com/",
  },
  openGraph: {
    title: "SkillzRevo | IT Training, Staffing Solutions & Business Consulting Services in India 2025",
    description:
      "Your complete technology partner: Industry-leading IT training in Data Science, Generative AI & Cybersecurity | Professional staffing solutions for tech talent | Strategic business consulting for digital transformation. Empowering careers and businesses nationwide.",
    url: "https://skillzrevo.com/",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <Navbar/>

        {children}

      <SkillzRevoFooter/>

      </body>

    </html>
  );
}
