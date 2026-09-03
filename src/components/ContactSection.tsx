
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="min-h-[30vh] flex flex-col justify-center items-center px-4 py-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
        Contact
        <div className="h-1 w-20 bg-arche-orange mx-auto mt-2"></div>
      </h2>
      
      <Button
        asChild
        className="px-10 py-4 bg-arche text-white text-xl font-medium hover:bg-arche-orange transition-colors duration-300 rounded-lg"
      >
        <a href="mailto:info@arche.capital">Contact Us</a>
      </Button>
    </section>
  );
};

export default ContactSection;
