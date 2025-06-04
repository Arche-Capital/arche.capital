
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // Adjusted offset for better scrolling
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-arche font-space">
      <Navigation 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          portfolio: () => scrollToSection(portfolioRef),
          team: () => scrollToSection(teamRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      
      <main>
        <div ref={aboutRef}>
          <HeroSection />
        </div>
        
        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        
        <div ref={teamRef}>
          <TeamSection />
        </div>
        
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
