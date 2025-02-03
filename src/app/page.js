import Image from "next/image";
import Button from "./components/Button";
import Banner from "./components/Banner";
import StatsDisplay from "./components/StatsDisplay";
import AboutSection from "./components/AboutSection";
import StudyDestinationSection from "./components/StudyDestinationSection";
import StudentExperienceSection from "./components/StudentExperienceSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <StatsDisplay></StatsDisplay>
      <AboutSection></AboutSection>
      <StudyDestinationSection></StudyDestinationSection>
      <StudentExperienceSection></StudentExperienceSection>
    </div>
  );
}
