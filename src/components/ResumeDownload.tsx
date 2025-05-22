
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownload = () => {
  const downloadResume = () => {
    // Create a blob with a text version of the resume
    const resumeText = `Sahand Sorouri
Senior Product Manager
Dubai, UAE, Open to relocate· sahand.sorouri@gmail.com
+971 52 605 8752· linkedin.com/in/sahand-sorouri

Customer-Driven Senior Product Manager with over 6 years of experience driving digital product innovation and
monetization in high-growth environments. Specializes in using data-driven insights, rigorous experimentation, and cross-
functional collaboration to optimize conversion funnels, retention, and revenue expansion. Proven ability to define actionable
product roadmaps that enhance user engagement and subscription growth for both B2B and B2C markets. Passionate about
leveraging user psychology and market analytics to deliver compelling, intuitive experiences that drive monetization.

Work Experience

Nextop Tech Company Dubai, UAE 2024 - 2025 [1 year]
Cryptocurrency Financial Company, Specializing in Crypto, B2B, B2C, Web & Mobile
Senior Product Manager, TopChange Product May 2024 – Apr 2025 (1y)
Leading Middle Eastern Crypto Platform: 2M+ transactions/month, 1M+ active users
• Launched beginner-friendly crypto trading tools, increasing revenue by 50%.
• Reduced onboarding friction by 35% through simplified UI and real-time analytics.
• Redesigned platform UI/UX based on customer feedback loops, boosting engagement by 25% and achieving
a 4.8/5 user satisfaction score.
• Expanded MENA market presence by 30% through localized tokenomics (staking, yield farming), attracting
50K+ retail traders.

SnappFood Company 2018 - 2023 [5 years]
eCommerce Marketplace, Food Tech, B2B, B2C, Web & Mobile: 10M+ monthly transactions, 4M MAU, 80K partners, 2K employees
Head of Product, QBAR Startup (Company's Initiative) Mar 2022 – Aug 2023 (18mo.)
QR-facilitator: 1M+ monthly visitors, 3K+ B2B subscriptions
• Built and led a 20-member cross-functional team, reducing time-to-market by 25% through agile workflows
and weekly user feedback.
• Automated CRM processes to slash B2B partner onboarding from 30 days to 3 days, improving partner satis-
faction (NPS +20).
• Secured $0.5M+ funding for nationwide expansion by aligning stakeholders on a user-centric roadmap, scaling
to 15 cities with flat operational costs.

Senior Product Manager Sep 2020 – Feb 2022 (18mo.)
Spearheaded key strategic projects, working directly with SnappFood's Chairman of the Board
• Built a Growth Product Strategy team (5 members) that accelerated KPI achievement by 60%.
• Launched Cash-on-Delivery SaaS for unbanked users, increasing transaction success rates by 5% and retention
by 20% (4.6/5 satisfaction score).
• Co-designed Iraqi delivery platform (10K+ monthly orders), integrating cash payments and regional cuisine.
• Designed delivery price segmentation using AI, reducing annual logistics costs by 20% while maintaining
service quality.

Product Manager Sep 2018 – Aug 2020 (2ys)
• Automated seller onboarding using ML algorithms, unifying 60K+ product listings (30% faster search) and
slashing onboarding time from 30 days to 1 week.
• Expanded online supermarkets to 10 cities during COVID-19, serving 500K+ households (40% low-income)
via AI-driven route optimization, cutting delivery costs by 15%.
• Introduced in-app advertising product, enabling vendors to bid on service-area promotions, driving a 15% in-
crease in vendor engagement.

Customer-Centric Skills: User Journey Mapping· VoC Analysis· UX Research· User-Centered Design
Technical Expertise: Blockchain (Solidity, MetaMask)· DeFi· Smart Contracts· SQL/Python· Agile· Jira/Figma
Business Leadership: Product Lifecycle· Roadmap Development· Stakeholder Management· Compliance Frameworks

Education
Sharif University of Technology (2018)
Bachelor of Electrical Engineering
Ranked Top 0.003% Nationally (9th out of
300,000+ applicants)· Coursework: Product Design, Business Analytics

Interests
Artificial Intelligence
Chess and Strategic Games
Bouldering (Rock Climbing)
Global Market Trend Analysis
Community Leadership & Nonprofits

Certificates
AI for Product Management
Aha! Product Management
DeFi & Tokenomics (In Progress)
Data Analysis
Statistics`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a link and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sahand_Sorouri_Resume.txt';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  };

  return (
    <section className="py-16 bg-portfolio-blue">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Download My Resume</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Looking for a detailed overview of my experience and skills? Download my resume for a comprehensive look at my professional journey.
        </p>
        <Button 
          onClick={downloadResume}
          className="bg-white text-portfolio-blue hover:bg-portfolio-blue-light hover:text-portfolio-blue-dark flex items-center gap-2 mx-auto"
        >
          <Download size={18} />
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default ResumeDownload;
