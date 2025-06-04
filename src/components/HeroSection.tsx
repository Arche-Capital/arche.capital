
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
        </div>
          
        {/* Newsletter signup at the bottom */}
        <div className="max-w-lg mx-auto mt-13">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm mb-5">Sign up for the newsletter</p>
            <div className="flex flex-col md:flex-row w-full gap-3">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="flex-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                className="bg-arche-orange text-white hover:bg-arche-orange/89 transition-colors"
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
