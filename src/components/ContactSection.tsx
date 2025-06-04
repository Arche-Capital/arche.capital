
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleContact = () => {
    window.location.href = "mailto:info@arche.capital";
  };

  return (
    <section className="min-h-[30vh] flex flex-col justify-center items-center px-4 py-10">

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
        
      <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
        Contact
        <div className="h-1 w-20 bg-arche-orange mx-auto mt-2"></div>
      </h2>
      
      <Button
        onClick={handleContact}
        className="px-10 py-4 bg-arche text-white text-xl font-medium hover:bg-arche-orange transition-colors duration-300 rounded-lg"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default ContactSection;
