import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ihre Reise zu strahlender Schönheit beginnt hier
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Ihre Expertin für natürliche Schönheit
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ich freue mich darauf, Sie auf Ihrem Weg zu gesunder, strahlender Haut zu begleiten. Entdecken Sie die Welt von Shireá und lassen Sie Ihre natürliche Schönheit erstrahlen.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://buchung.treatwell.de/ort/496665/menue/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin vereinbaren
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
              asChild
            >
              <a href="https://www.google.com/search?q=Shirea+Kosmetik+München" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5" />
                Google bewerten & 5€ sparen
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
