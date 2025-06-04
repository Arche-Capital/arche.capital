
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const isMobile = useIsMobile();
  
  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    let subscribeUrl = "https://capital.us15.list-manage.com/subscribe?u=d2aecfa5b269d4b5adde0d8b9&id=893697b209";
    
    if (email) {
      subscribeUrl += `&MERGE0=${encodeURIComponent(email)}`;
    }
    
    window.open(subscribeUrl, "_blank");
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          {!isMobile && (
            <h1 className="text-3xl md:text-5xl font-medium text-center">
              Arche Capital
            </h1>
          )}
          
          <p className="text-xl md:text-2xl mt-8 text-center max-w-3xl mx-auto">
            Early stage Web3 VC focusing on the convergence of financial services, blockchain and AI
          </p>
        </div>
        
        {/* Main content - Single column layout */}
        <div className="flex flex-col gap-12 mt-16 mb-16">
          {/* Text content - Full width */}
          <div className="w-full">
            <div className="text-lg">
              <p>
                We believe web3’s permissionless, open, financial infrastructure is the inevitable new foundation for global finance. At Arche Capital we are thesis-driven, long-term investors who seek to invest at the earliest stages in businesses and protocols at the forefront of this global shift.
              </p>
            </div>
          </div>
          
          {/* Investment Focus Areas - Full width grid with reduced height */}
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">Investment Focus Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Decentralized protocols */}
              <div className="bg-gray-100 p-4 rounded-md border-t-4 border-arche-orange">
                <h3 className="text-xl font-bold mb-3">Decentralized protocols</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Base layer 1s, layer 2s</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>DeFi</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Modular blockchains</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Interoperability layers</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Verifiable computer/coprocessors</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Resource networks</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Decentralized AI/Machine Learning incentivized networks</span>
                  </li>
                </ul>
              </div>
              
              {/* Novel cryptography */}
              <div className="bg-gray-100 p-4 rounded-md border-t-4 border-arche-orange">
                <h3 className="text-xl font-bold mb-3">Novel cryptography</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Custody solutions</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Security, privacy, confidentiality</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Zero Knowledge cryptography</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Cryptographic incentive systems</span>
                  </li>
                </ul>
              </div>
              
              {/* Infrastructure services */}
              <div className="bg-gray-100 p-4 rounded-md border-t-4 border-arche-orange">
                <h3 className="text-xl font-bold mb-3">Infrastructure services</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Staking & sequencers</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Stablecoins, payments & credit</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Data & Oracles</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Trading, clearing, exchanges</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Prime brokerage & insurance</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>Asset management</span>
                  </li>
                  <li className="flex">
                    <span className="text-arche-orange mr-2">▶</span>
                    <span>RWA & Tokenization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup at the bottom */}
        <div className="max-w-lg mx-auto mt-12">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm mb-4">Sign up for the newsletter</p>
            <div className="flex flex-col md:flex-row w-full gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                className="bg-arche-orange text-white hover:bg-arche-orange/90 transition-colors"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
