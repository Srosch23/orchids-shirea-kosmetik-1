import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

export const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image – zoomed in for a livelier look */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 origin-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-secondary/50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center [text-shadow:0_1px_16px_hsl(var(--background))]">
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
              <a href="https://wa.me/4915565510880" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>

            <Button size="lg" variant="outline" className="border-2" asChild>
              <a href="tel:+4915565510880">
                <Phone className="mr-2 h-5 w-5" />
                +49 15565 510880
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
