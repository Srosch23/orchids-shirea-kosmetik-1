import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";
import { Sparkles, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                FACIAL & BEAUTY SPACE BY SCHAHIRA
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-foreground leading-tight">
              SHIREÁ
            </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            Entdecken Sie Ihre natürliche Schönheit in einer Oase der Entspannung und professionellen Hautpflege.
          </p>
          
          <div className="flex flex-wrap gap-4">
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
              className="border-2 hover:bg-accent/10"
              asChild
            >
              <Link to="/leistungen">
                Leistungen entdecken
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};