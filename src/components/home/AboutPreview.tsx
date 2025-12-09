import shahiraImage from "@/assets/shahira-portrait.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img 
                src={shahiraImage} 
                alt="Schahira Scharar - Staatlich anerkannte Fachkosmetikerin"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <span className="text-sm uppercase tracking-wider text-primary font-medium">
                Ihre Expertin
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
                Willkommen bei SHIREÁ
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mein Name ist <span className="font-semibold text-foreground">Schahira Scharar</span>. 
              Als staatlich anerkannte Fachkosmetikerin mit langjähriger Erfahrung habe ich es mir zur 
              Aufgabe gemacht, die natürliche Schönheit meiner Kundinnen und Kunden zu unterstreichen 
              und ihre Haut nachhaltig zu pflegen.
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Zertifiziert</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Individuell</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Hochwertig</p>
              </div>
            </div>
            
            <Button size="lg" variant="outline" className="border-2" asChild>
              <Link to="/ueber-mich">
                Mehr über mich
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};