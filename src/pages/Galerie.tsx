import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import shahiraImage from "@/assets/shahira-portrait.jpg";
import { Calendar, Instagram, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const studioImages = [
  { src: treatmentRoom, alt: "Behandlungsraum", category: "Studio" },
  { src: heroImage, alt: "Entspannungsbereich", category: "Studio" },
  { src: shahiraImage, alt: "Schahira Scharar", category: "Team" },
];

const Galerie = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Einblicke
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
              Galerie
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Entdecken Sie unser Studio und erleben Sie die entspannte Atmosphäre, 
              in der wir Sie verwöhnen dürfen.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Atmosphäre */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Studio-Atmosphäre
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studioImages.map((image, index) => (
                <Card key={index} className="border-2 overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-sm font-medium">{image.category}</p>
                      <p className="text-lg font-serif">{image.alt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Mehr auf Instagram
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Folgen Sie uns auf Instagram für aktuelle Behandlungsergebnisse, 
              Vorher-Nachher-Bilder und exklusive Einblicke hinter die Kulissen.
            </p>
            <Button size="lg" variant="outline" className="border-2" asChild>
              <a 
                href="https://www.instagram.com/shirea_cosmetics" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @shirea_cosmetics folgen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Überzeugt?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Erleben Sie unsere Behandlungen und die entspannte Atmosphäre selbst.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://buchung.treatwell.de/ort/496665/menue/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Galerie;