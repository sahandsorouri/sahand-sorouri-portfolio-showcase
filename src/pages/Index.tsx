
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ResumeDownload from "@/components/ResumeDownload";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ResumeDownload />
      <ContactSection />
      <footer className="bg-portfolio-blue-dark text-white py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sahand Sorouri. All rights reserved.</p>
          <p className="text-sm text-white/70 mt-2">Senior Product Manager</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
