import BlogSlider from "./components/Blog";
import JobListPage from "./components/CareerSection";
import ChannelPartnerProgram from "./components/ChannelPartnerProgram";
import CorporateTraining from "./components/CorporateTraining";
import SkillzRevoFooter from "./components/Footer";
import HeroSlider from "./components/HeroSection";
import SuccessStoriesTestimonials from "./components/Success";
import VerticalServices from "./components/VerticalServices";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseSkillzRevo from "./components/WhyChooseSkillzrevo";

export default function Home() {
  return (
    <>
      <HeroSlider/>
      <WhoWeAre/>
      <div id="divisions"/>
      <VerticalServices/>
      <CorporateTraining/>
      <ChannelPartnerProgram/>
      <WhyChooseSkillzRevo/>
      <SuccessStoriesTestimonials/>
      <BlogSlider/>
      <JobListPage/>

    </>
  );
}
