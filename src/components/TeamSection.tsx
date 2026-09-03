import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  experience: {
    company: string;
    role: string;
  }[];
  achievements: string[];
  skills: string[];
  companyLogos: {
    image: string;
    name: string;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Vanessa Grellet",
    position: "Managing Partner",
    image: "/lovable-uploads/grellet.png",
    linkedin: "https://www.linkedin.com/in/vanessa-grellet-10852314",
    twitter: "https://x.com/VanessaGrellet_",
    experience: [
      { company: "Aglaé Ventures", role: "Managing Partner" },
      { company: "CoinFund", role: "Head of Portfolio" },
      { company: "ConsenSys", role: "Executive Director" },
      { company: "NYSE", role: "M&A, Director, Strategic Investments" },
      { company: "PwC", role: "Asset Management" }
    ],
    skills: [
      "LEGAL & REGULATION",
      "STRATEGY",
      "PRODUCT GTM",
      "TOKEN ECONOMICS",
      "MARKETING & COMMUNITY"
    ],
    achievements: [
      "Vanessa Grellet is Managing Partner at Arche Capital and a global executive with over 20 years of experience in financial services and technology. A former executive at ConsenSys, NYSE, and PwC, she serves on the board of the Enterprise Ethereum Alliance and holds degrees from Paris II Assas Law School and HEC Paris Business School."
    ],
    companyLogos: [
      { image: "/lovable-uploads/consensys_logo.png", name: "ConsenSys" },
      { image: "/lovable-uploads/nyse_logo.png", name: "NYSE" },
      { image: "/lovable-uploads/eea_logo.png", name: "EEA" },
      { image: "/lovable-uploads/pwc_logo.png", name: "PWC" },
      { image: "/lovable-uploads/coinfund_logo.png", name: "CoinFund" },
      { image: "/lovable-uploads/aglae_ventures_logo.png", name: "Aglae Ventures" },
    ]
  },
  {
    name: "William Wolf",
    position: "Managing Partner",
    image: "/lovable-uploads/wolf.png",
    linkedin: "https://www.linkedin.com/in/throughnothing",
    twitter: "https://x.com/throughnothing",
    experience: [
      { company: "Polychain", role: "Partner" },
      { company: "Tilt.com (acq. Airbnb)", role: "Founding Team" },
      { company: "YCombinator W'12 (Tilt.com)", role: "Technical Co-founder" },
      { company: "Webmail.us (acq. Rackspace)", role: "Early team" }
    ],
    skills: [
      "DISTRIBUTED SYSTEMS",
      "BUSINESS STRATEGY",
      "TOKEN ECONOMICS",
      "PRODUCT & TEAM",
      "PRODUCT GTM",
      "TOKEN LAUNCH"
      
    ],
    achievements: [
      "Will Wolf is a tech founder and engineering leader who has built and scaled teams of 30+ and developed Web2 payments apps. A Virginia Tech engineering graduate, he joined Polychain in 2018 as Head of Research, where he launched the Genesis Incubation Program and Polychain's first crypto school."
    ],
    companyLogos: [
      { image: "/lovable-uploads/tilt_logo.png", name: "Tilt" },
      { image: "/lovable-uploads/airbnb_logo.png", name: "Airbnb" },
      { image: "/lovable-uploads/rackspace_logo.png", name: "Rackspace" },
      { image: "/lovable-uploads/polychain_capital_logo.png", name: "Polychain Capital" }
    ]
  }
];

const SocialLinks = ({ member }: { member: TeamMember }) => {
  if (!member.linkedin && !member.twitter) return null;

  return (
    <div className="flex items-center justify-start gap-3 mt-2 text-sm">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-arche-orange"
        >
          LinkedIn
        </a>
      )}
      {member.twitter && (
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-arche-orange"
        >
          X
        </a>
      )}
    </div>
  );
};

const TeamSection = () => {
  const isMobile = useIsMobile();
  
  const getAchievementSummary = (achievements: string[]) => {
    return achievements.join(". ");
  };
  
  return (
    <section className="min-h-[45vh] flex flex-col justify-center items-center px-4 py-10 mt-[10%]">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
        Team
        <div className="h-1 w-20 bg-arche-orange mx-auto mt-2"></div>
      </h2>
      
      <div className="mt-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Member Name and Position */}
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.position}</p>
              </div>
              
              <div className={`flex ${isMobile ? "flex-row" : "flex-row"} gap-4`}>
                {/* Member Image - Reduced size by 20% */}
                <div className={`${isMobile ? "w-[28%]" : "w-[30%]"}`}>
                  <AspectRatio ratio={1/1} className="overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                
                {/* Experience and Skills */}
                <div className={`${isMobile ? "w-[70%]" : "w-[70%]"} flex flex-col justify-between`}>
                  {/* Experience - Adjusted font size */}
                  <div className="mb-4">
                    {member.experience.map((exp, i) => (
                      <div key={i} className="mb-1 text-xs md:text-sm">
                        <span className="font-bold">{exp.company}</span>
                        <span className="text-gray-400"> – {exp.role}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skills - Now full width on mobile */}
                  <div className="flex flex-wrap gap-1 mb-4 w-full">
                    {member.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        className="bg-arche-orange hover:bg-arche-orange text-white text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Achievements as a single text */}
              <div className="text-xs md:text-sm">
                <p>{getAchievementSummary(member.achievements)}</p>
              </div>

              <SocialLinks member={member} />
              
              {/* Company Logos - Reduced by 10% on mobile */}
              <div className="mt-2">
                <div className="flex flex-wrap gap-3">
                  {member.companyLogos.map((logo, i) => (
                    <div key={i} className={`${isMobile ? "w-[63px] h-[63px]" : "w-[70px] h-[70px]"} md:w-[66px] md:h-[66px] bg-white overflow-hidden`}>
                      <img 
                        src={logo.image} 
                        alt={`${logo.name}`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
