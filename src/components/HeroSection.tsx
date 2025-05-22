
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-white to-portfolio-blue-light">
      <div className="container max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in" id="about">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-blue-dark">
            Sahand Sorouri
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-gray-dark mb-6">
            Senior Product Manager
          </h2>
          <p className="text-lg mb-8 max-w-lg text-gray-700">
            Customer-driven Senior Product Manager with over 6 years of experience driving digital product innovation and monetization in high-growth environments. Specializing in data-driven insights and cross-functional collaboration.
          </p>
          <div className="flex items-center space-x-4">
            <Button onClick={scrollToExperience} className="bg-portfolio-blue hover:bg-portfolio-blue-dark">
              View Experience
            </Button>
            <a 
              href="https://www.linkedin.com/in/sahand-sorouri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-blue hover:text-portfolio-blue-dark underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in animate-delay-200">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/lovable-uploads/702a68fd-ba7b-4c6c-adb9-2c7591ddf217.png" 
              alt="Sahand Sorouri" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToExperience} className="text-portfolio-blue hover:text-portfolio-blue-dark">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
