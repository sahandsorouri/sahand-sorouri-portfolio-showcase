
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Nextop Tech Company",
      location: "Dubai, UAE",
      period: "2024 - 2025 [1 year]",
      description: "Cryptocurrency Financial Company, Specializing in Crypto, B2B, B2C, Web & Mobile",
      positions: [
        {
          title: "Senior Product Manager, TopChange Product",
          duration: "May 2024 – Apr 2025 (1y)",
          details: [
            "Leading Middle Eastern Crypto Platform: 2M+ transactions/month, 1M+ active users",
            "Launched beginner-friendly crypto trading tools, increasing revenue by 50%.",
            "Reduced onboarding friction by 35% through simplified UI and real-time analytics.",
            "Redesigned platform UI/UX based on customer feedback loops, boosting engagement by 25% and achieving a 4.8/5 user satisfaction score.",
            "Expanded MENA market presence by 30% through localized tokenomics (staking, yield farming), attracting 50K+ retail traders."
          ]
        }
      ]
    },
    {
      company: "SnappFood Company",
      location: "",
      period: "2018 - 2023 [5 years]",
      description: "eCommerce Marketplace, Food Tech, B2B, B2C, Web & Mobile: 10M+ monthly transactions, 4M MAU, 80K partners, 2K employees",
      positions: [
        {
          title: "Head of Product, QBAR Startup (Company's Initiative)",
          duration: "Mar 2022 – Aug 2023 (18mo.)",
          details: [
            "QR-facilitator: 1M+ monthly visitors, 3K+ B2B subscriptions",
            "Built and led a 20-member cross-functional team, reducing time-to-market by 25% through agile workflows and weekly user feedback.",
            "Automated CRM processes to slash B2B partner onboarding from 30 days to 3 days, improving partner satisfaction (NPS +20).",
            "Secured $0.5M+ funding for nationwide expansion by aligning stakeholders on a user-centric roadmap, scaling to 15 cities with flat operational costs."
          ]
        },
        {
          title: "Senior Product Manager",
          duration: "Sep 2020 – Feb 2022 (18mo.)",
          details: [
            "Spearheaded key strategic projects, working directly with SnappFood's Chairman of the Board",
            "Built a Growth Product Strategy team (5 members) that accelerated KPI achievement by 60%.",
            "Launched Cash-on-Delivery SaaS for unbanked users, increasing transaction success rates by 5% and retention by 20% (4.6/5 satisfaction score).",
            "Co-designed Iraqi delivery platform (10K+ monthly orders), integrating cash payments and regional cuisine.",
            "Designed delivery price segmentation using AI, reducing annual logistics costs by 20% while maintaining service quality."
          ]
        },
        {
          title: "Product Manager",
          duration: "Sep 2018 – Aug 2020 (2ys)",
          details: [
            "Automated seller onboarding using ML algorithms, unifying 60K+ product listings (30% faster search) and slashing onboarding time from 30 days to 1 week.",
            "Expanded online supermarkets to 10 cities during COVID-19, serving 500K+ households (40% low-income) via AI-driven route optimization, cutting delivery costs by 15%.",
            "Introduced in-app advertising product, enabling vendors to bid on service-area promotions, driving a 15% increase in vendor engagement."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-blue-dark">Work Experience</h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 300}ms` }}>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-portfolio-blue">{exp.company}</h3>
                  <div className="flex items-center gap-2">
                    {exp.location && <span className="text-gray-500">{exp.location}</span>}
                  </div>
                  <span className="text-portfolio-gray-dark font-medium">{exp.period}</span>
                  <p className="text-gray-600 mt-2 text-sm">{exp.description}</p>
                </div>
                
                <div className="md:w-2/3 pl-0 md:pl-8 border-l-0 md:border-l border-gray-200">
                  <div className="space-y-10">
                    {exp.positions.map((position, posIndex) => (
                      <div key={posIndex} className="timeline-item pl-8">
                        <div className="timeline-dot bg-portfolio-blue"></div>
                        <h4 className="text-lg font-bold mb-1">{position.title}</h4>
                        <p className="text-gray-500 mb-3">{position.duration}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {position.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
