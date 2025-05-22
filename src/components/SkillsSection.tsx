
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Customer-Centric Skills",
      skills: ["User Journey Mapping", "VoC Analysis", "UX Research", "User-Centered Design"]
    },
    {
      title: "Technical Expertise",
      skills: ["Blockchain (Solidity, MetaMask)", "DeFi", "Smart Contracts", "SQL/Python", "Agile", "Jira/Figma"]
    },
    {
      title: "Business Leadership",
      skills: ["Product Lifecycle", "Roadmap Development", "Stakeholder Management", "Compliance Frameworks"]
    }
  ];

  const education = {
    university: "Sharif University of Technology (2018)",
    degree: "Bachelor of Electrical Engineering",
    notes: "Ranked Top 0.003% Nationally (9th out of 300,000+ applicants)",
    coursework: "Product Design, Business Analytics"
  };

  const interests = [
    "Artificial Intelligence",
    "Chess and Strategic Games",
    "Bouldering (Rock Climbing)",
    "Global Market Trend Analysis",
    "Community Leadership & Nonprofits"
  ];

  const certificates = [
    "AI for Product Management",
    "Aha! Product Management",
    "DeFi & Tokenomics (In Progress)",
    "Data Analysis",
    "Statistics"
  ];
  
  return (
    <section id="skills" className="py-24 bg-portfolio-blue-light">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-blue-dark">Skills & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skills */}
          <div className="space-y-8 col-span-1 md:col-span-2 opacity-0 animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">Core Competencies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <Card key={idx} className="p-6 h-full shadow-md">
                  <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary" className="bg-white text-portfolio-blue-dark">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="col-span-1 opacity-0 animate-fade-in animate-delay-200">
            <Card className="p-6 h-full shadow-md">
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">Education</h3>
              <div>
                <h4 className="text-lg font-semibold">{education.university}</h4>
                <p className="text-gray-700">{education.degree}</p>
                <p className="text-sm text-gray-600 mt-2">{education.notes}</p>
                <div className="mt-4">
                  <span className="font-medium">Coursework:</span> {education.coursework}
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Certificates</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {certificates.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <Badge key={idx} variant="outline" className="bg-white border-portfolio-blue text-portfolio-blue-dark">{interest}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
