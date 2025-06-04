
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const isMobile = useIsMobile();
  
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
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
