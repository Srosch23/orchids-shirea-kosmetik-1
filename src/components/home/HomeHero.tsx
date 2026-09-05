import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const heroPortrait =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Schahira2-1765402476052.jpeg";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Portrait – full-bleed background on mobile, right-hand panel next to the text on larger screens */}
      <div className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[54%] lg:w-[48%]">
        <img
          src={heroPortrait}
          alt="Schahira Scharar – staatlich anerkannte Fachkosmetikerin"
          className="h-full w-full object-cover object-[68%_top] md:object-[center_top] scale-105 origin-top"
        />
        {/* Blend the portrait into the text area and keep it readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-background/80 md:bg-gradient-to-r md:from-background md:via-background/5 md:to-transparent md:via-20%" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-xl lg:max-w-2xl animate-fade-in [text-shadow:0_1px_14px_hsl(var(--background))] md:[text-shadow:none]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              FACIAL &amp; BEAUTY SPACE BY SCHAHIRA
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-foreground leading-tight">
            SHIREÁ
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-foreground/80 leading-relaxed">
            Entdecken Sie Ihre natürliche Schönheit in einer Oase der Entspannung und professionellen Hautpflege.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://wa.me/4915565510880" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Termin anfragen via WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-accent/10"
              asChild
            >
              <Link to="/leistungen">Leistungen entdecken</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
