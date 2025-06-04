
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationProps {
  onNavigate: {
    about: () => void;
    portfolio: () => void;
    team: () => void;
    contact: () => void;
  };
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (action: () => void) => {
    action();
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 flex items-center justify-between",
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">
          <img 
            src="/lovable-uploads/arche-logo.png" 
            alt="Arche Capital" 
            className={`h-10 md:h-12 w-auto`} // Reduced size on mobile
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavClick(onNavigate.about)}
            className="relative font-medium hover:text-arche-orange transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick(onNavigate.portfolio)}
            className="relative font-medium hover:text-arche-orange transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavClick(onNavigate.team)}
            className="relative font-medium hover:text-arche-orange transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => handleNavClick(onNavigate.contact)}
            className="relative font-medium hover:text-arche-orange transition-colors"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-arche focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden">
          <div className="flex flex-col space-y-6 items-center">
            <button 
              onClick={() => handleNavClick(onNavigate.about)}
              className="text-xl font-medium hover:text-arche-orange transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick(onNavigate.portfolio)}
              className="text-xl font-medium hover:text-arche-orange transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleNavClick(onNavigate.team)}
              className="text-xl font-medium hover:text-arche-orange transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick(onNavigate.contact)}
              className="text-xl font-medium hover:text-arche-orange transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
