import BlogSlider from "./components/Blog";
import JobListPage from "./components/CareerSection";
import ChannelPartnerProgram from "./components/ChannelPartnerProgram";
// import Component2 from "./components/Component2";
import CorporateTraining from "./components/CorporateTraining";
import SkillzRevoFooter from "./components/Footer";
import HeroSlider from "./components/HeroSection";
import LearnersReviewSlider from "./components/LearnersReviewSlider";
import LogoMarquee from "./components/LogoSlider";
import PartneringCompaniesSlider from "./components/PartneringCompaniesSlider";
import SuccessStoriesTestimonials from "./components/Success";
import TrainerGrid from "./components/TrainerGrid";
import VerticalServices from "./components/VerticalServices";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseSkillzRevo from "./components/WhyChooseSkillzrevo";
import CourseTabs from "./components/CourseTabs";


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



export default function Home() {
  return (
    <>
      <HeroSlider/>
      {/* <Component2/> */}
            <div id="divisions"/>
      <VerticalServices/>
      <LogoMarquee/>
      <CourseTabs/>
      <CorporateTraining/>
      <ChannelPartnerProgram/>
      <WhyChooseSkillzRevo/>
      <LearnersReviewSlider/>
      <PartneringCompaniesSlider/>
      {/* <SuccessStoriesTestimonials/> */}
      <JobListPage/>
      <WhoWeAre/>

      <TrainerGrid/>
      <BlogSlider/>

    </>
  );
}
