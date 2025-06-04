
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleContact = () => {
    window.location.href = "mailto:info@arche.capital";
  };

  return (
    <section className="min-h-[30vh] flex flex-col justify-center items-center px-4 py-10">
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
