
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Category = "ALL" | "INFRA" | "ZKP" | "FINTECH" | "DeAI" | "LIQUID";

interface Company {
  name: string;
  logo: string; // Path to logo image
  category: Category | string; // Allow string to accommodate ALL category filter
  url?: string;
}

// Updated companies with the new logos from the uploaded folder
const companies: Company[] = [
{ name: "Kintsu", logo: "InfraLogos/KintsuLogo.png", category: "INFRA", url: "https://kintsu.xyz" },
{ name: "Solayer", logo: "/InfraLogos/SolayerLogo.png", category: "INFRA", url: "https://solayer.org" },
{ name: "Alluvial", logo: "/InfraLogos/AlluvialLogo.png", category: "INFRA", url: "https://alluvial.finance" },
{ name: "Squid Router", logo: "/InfraLogos/SquidRouterLogo.png", category: "INFRA", url: "https://squidrouter.com" },
{ name: "Dora", logo: "/InfraLogos/DoraLogo.png", category: "INFRA", url: "https://www.ondora.xyz/" },
{ name: "Zealy", logo: "InfraLogos/ZealyLogo.png", category: "INFRA", url: "https://zealy.io" },
{ name: "Cometh", logo: "/InfraLogos/ComethLogo.png", category: "INFRA", url: "https://cometh.io" },
{ name: "Switchboard", logo: "InfraLogos/SwitchBoardLogo.png", category: "INFRA", url: "https://switchboard.xyz" },
{ name: "Glacis", logo: "InfraLogos/GlacisLogo.png", category: "INFRA", url: "https://glacislabs.com" },
{ name: "Zama", logo: "InfraLogos/ZamaLogo.png", category: "INFRA", url: "https://www.zama.org/" },
{ name: "Risc Zero", logo: "/ZKPLogos/RiscZeroLogo.png", category: "ZKP", url: "https://risczero.com" },
{ name: "Bermuda", logo: "/ZKPLogos/BermudaLogo.png", category: "ZKP", url: "https://bermudabay.xyz/" },
{ name: "Kakarot - Acquired", logo: "/ZKPLogos/KakarotLogo.png", category: "ZKP", url: "https://kakarot.org" },
{ name: "Foundation", logo: "/FintechLogos/FoundationLogo.png", category: "FINTECH", url: "https://foundation.xyz" },
{ name: "Limited", logo: "/FintechLogos/LimitedLogo.png", category: "FINTECH", url: "https://www.limitedapp.com" },
{ name: "Hexagate - Acquired", logo: "/FintechLogos/HexagateLogo.png", category: "FINTECH", url: "https://hexagate.com" },
{ name: "Aboslute Labs", logo: "/FintechLogos/AbsoluteLabsLogo.png", category: "FINTECH", url: "https://absolutelabs.io/" },
{ name: "Chainalysis", logo: "/FintechLogos/ChainalysisLogo.png", category: "FINTECH", url: "https://chainalysis.com" },
{ name: "SonarX", logo: "/FintechLogos/SonarXLogo.png", category: "FINTECH", url: "https://sonarx.com" },
{ name: "Heron", logo: "FintechLogos/HeronLogo.png", category: "FINTECH", url: "https://tryheron.com" },
{ name: "Bitmind", logo: "/DeAILogos/BitmindLogo.png", category: "DeAI", url: "https://bitmind.ai" },
{ name: "Naptha AI", logo: "/DeAILogos/NapthaAILogo.png", category: "DeAI", url: "https://naptha.ai" },
{ name: "Taofu", logo: "/DeAILogos/TAOFU.png", category: "DeAI", url: "https://taofu.xyz" },
{ name: "Inference Labs", logo: "/DeAILogos/InferenceLabsLogo.png", category: "DeAI", url: "https://inferencelabs.com/" },
{ name: "SharpLink - SBET", logo: "/LiquidLogos/SharplinkLogo.png", category: "LIQUID", url: "https://sharplink.com" },
{ name: "xTAO", logo: "/LiquidLogos/xTAOLogo.png", category: "LIQUID", url: "https://www.xtao.co/" },
{ name: "Oranje", logo: "/LiquidLogos/OranjeLogo.png", category: "LIQUID", url: "https://www.oranjebtc.com/" },
{ name: "BNC - ex Vape", logo: "/LiquidLogos/VapeLogo.png", category: "LIQUID", url: "https://www.ceaindustries.com/" }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const categories: Category[] = ["ALL", "INFRA", "ZKP", "FINTECH", "DeAI", "LIQUID"];
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
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={company.url ? "hover:opacity-70 transition-opacity duration-200" : "pointer-events-none"}
            >
              <div className="w-36 h-36 bg-white flex items-center justify-center mb-3 overflow-hidden rounded-md">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </a>
            <span className="text-xs font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
