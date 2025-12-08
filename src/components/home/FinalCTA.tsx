import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Bereit für Ihre Verwandlung?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
            Beginnen Sie Ihre Reise zu strahlender Schönheit
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und erleben Sie 
            professionelle Hautpflege in entspannter Atmosphäre.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://buchung.treatwell.de/ort/496665/menue/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt online buchen
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
              asChild
            >
              <a href="tel:+4917620294745">
                <Phone className="mr-2 h-5 w-5" />
                +49 176 20294745
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
