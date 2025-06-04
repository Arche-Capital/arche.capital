
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Category = "ALL" | "INFRA" | "ZKP" | "FINTECH" | "DeAI";

interface Company {
  name: string;
  logo: string; // Path to logo image
  category: Category | string; // Allow string to accommodate ALL category filter
}

// Updated companies with the new logos from the uploaded folder
const companies: Company[] = [
  { name: "Kintsu", logo: "InfraLogos/KintsuLogo.png", category: "INFRA" },
  { name: "Solayer", logo: "/InfraLogos/SolayerLogo.png", category: "INFRA" },
  { name: "Alluvial", logo: "/InfraLogos/AlluvialLogo.png", category: "INFRA" },
  { name: "Squid Router", logo: "/InfraLogos/SquidRouterLogo.png", category: "INFRA" },
  { name: "Dora", logo: "/InfraLogos/DoraLogo.png", category: "INFRA" },
  { name: "Zealy", logo: "InfraLogos/ZealyLogo.png", category: "INFRA" },
  { name: "Cometh", logo: "/InfraLogos/ComethLogo.png", category: "INFRA" },
  { name: "Switchboard", logo: "InfraLogos/SwitchBoardLogo.png", category: "INFRA" },
  { name: "Risc Zero", logo: "/ZKPLogos/RiscZeroLogo.png", category: "ZKP" },
  { name: "Bermuda", logo: "/ZKPLogos/BermudaLogo.png", category: "ZKP" },
  { name: "Kakarot", logo: "/ZKPLogos/KakarotLogo.png", category: "ZKP" },
  { name: "Foundation", logo: "/FintechLogos/FoundationLogo.png", category: "FINTECH" },
  { name: "Limited", logo: "/FintechLogos/LimitedLogo.png", category: "FINTECH" },
  { name: "Hexagate - Exited", logo: "/FintechLogos/HexagateLogo.png", category: "FINTECH" },
  { name: "Aboslute Labs", logo: "/FintechLogos/AbsoluteLabsLogo.png", category: "FINTECH" },
  { name: "Chainalysis", logo: "/FintechLogos/ChainalysisLogo.png", category: "FINTECH" },
  { name: "SonarX", logo: "/FintechLogos/SonarXLogo.png", category: "FINTECH" },
  { name: "Bitmind", logo: "/DeAILogos/BitmindLogo.png", category: "DeAI" },
  { name: "Naptha AI", logo: "/DeAILogos/NapthaAILogo.png", category: "DeAI" },
  { name: "Taofu", logo: "/DeAILogos/TAOFU.png", category: "DeAI" },
  { name: "Inference Labs", logo: "/DeAILogos/InferenceLabsLogo.png", category: "DeAI" }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const categories: Category[] = ["ALL", "INFRA", "ZKP", "FINTECH", "DeAI"];
  const isMobile = useIsMobile();
  
  // Filter for ALL category or specific category
  const filteredCompanies = activeCategory === "ALL" 
    ? companies 
    : companies.filter(company => company.category === activeCategory);

  // Determine the grid columns based on number of companies
  const getGridColumns = () => {
    const count = filteredCompanies.length;
    if (isMobile) return "grid-cols-2";
    
    // For desktop, determine optimal layout
    if (count <= 3) return "grid-cols-3";
    if (count <= 4) return "grid-cols-4";
    if (count <= 10) return "grid-cols-5";
    return "grid-cols-5";
  };

  return (
    <section className="min-h-[45vh] flex flex-col justify-center items-center px-4 py-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
        Portfolio
        <div className="h-1 w-20 bg-arche-orange mx-auto mt-2"></div>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all",
              activeCategory === category 
                ? "bg-black text-white" 
                : "bg-gray-100 text-black hover:bg-gray-200"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={`grid ${getGridColumns()} gap-8 w-full max-w-5xl mx-auto justify-center`}>
        {filteredCompanies.map((company) => (
          <div key={company.name} className="flex flex-col items-center">
            <div className="w-36 h-36 bg-white flex items-center justify-center mb-3 overflow-hidden rounded-md">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <span className="text-xs font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
