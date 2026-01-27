import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Instagram, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const studioImages = [
  { 
    src: "/galerie/behandlungsraum.jpg", 
    alt: "Behandlungsraum", 
    category: "Studio" 
  },
  { 
    src: "/galerie/flyer.jpg", 
    alt: "SHIREA Flyer", 
    category: "Studio" 
  },
  { 
    src: "/galerie/studio-raum.jpg", 
    alt: "Behandlungsräumlichkeiten", 
    category: "Studio" 
  },
  { 
    src: "/galerie/raumlichkeiten.jpg", 
    alt: "Räumlichkeiten", 
    category: "Studio" 
  },
  { 
    src: "/galerie/byonik.jpg", 
    alt: "BYONIK Gerät", 
    category: "BYONIK" 
  },
  { 
    src: "/galerie/gesichtsbehandlung-nahaufnahme.jpg", 
    alt: "Professionelle Gesichtsbehandlung", 
    category: "BYONIK" 
  },
  { 
    src: "/galerie/byonik-be-young.jpg", 
    alt: "BYONIK Be Young Behandlung", 
    category: "BYONIK" 
  },
  { 
    src: "/galerie/byonik-laser-wirkung.jpg", 
    alt: "BYONIK Laser - Studienbelegte Wirkung", 
    category: "BYONIK" 
  },
  { 
    src: "/galerie/byonik-intensiv-wirksam.jpg", 
    alt: "BYONIK - Intensiv wirksam in allen Hautschichten", 
    category: "BYONIK" 
  },
  { 
    src: "/galerie/slimyonik-fett.jpg", 
    alt: "Slimyonik Fettverbrennung", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-gerat.jpg", 
    alt: "Slimyonik Gerät", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-anwendung.jpg", 
    alt: "Slimyonik Anwendung", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-behandlung.jpg", 
    alt: "Slimyonik Behandlung", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-air.jpg", 
    alt: "Slimyonik Air Bodystyler", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-bodyforming.jpg", 
    alt: "Bequemes Bodyforming - Ganz entspannt und ohne Stress", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-anwendungen.jpg", 
    alt: "Slimyonik - Zahlreiche Anwendungen", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/slimyonik-body-contouring.jpg", 
    alt: "Body Contouring & Wellbeing - Wissenschaftlich fundiert", 
    category: "Slimyonik" 
  },
  { 
    src: "/galerie/vorher-nachher-gesicht.jpg", 
    alt: "Vorher-Nachher: Hautstraffung", 
    category: "Vorher-Nachher" 
  },
  { 
    src: "/galerie/vorher-nachher-augen.jpg", 
    alt: "Vorher-Nachher: Augenbereich", 
    category: "Vorher-Nachher" 
  },
  { 
    src: "/galerie/dr-schrammek.jpg", 
    alt: "Dr. Schrammek Produkte", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/kosmetik-produkte.jpg", 
    alt: "Byonik Kosmetik-Produkte", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/anti-aging.jpg", 
    alt: "Anti-Aging Produkte", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/slimyonik-produkte.jpg", 
    alt: "Slimyonik Produkte", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/norel-produkte-sortiment.jpg", 
    alt: "NOREL Produktsortiment", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/body-contour-gel.jpg", 
    alt: "Body Contour Gel - Verbesserte Rezeptur", 
    category: "Produkte" 
  },
  { 
    src: "/galerie/video-behandlung-rotlicht.mp4", 
    alt: "BYONIK Laser Behandlung", 
    title: "BYONIK Laser Behandlung",
    category: "Videos",
    type: "video"
  },
  { 
    src: "/galerie/video-byonik-image.mp4", 
    alt: "BYONIK Image Film", 
    title: "BYONIK Image Film",
    category: "Videos",
    type: "video"
  },
  { 
    src: "/galerie/video-slimyonik-erklaerung.mp4", 
    alt: "Slimyonik Air Funktionsweise", 
    title: "Slimyonik Air Funktionsweise",
    category: "Videos",
    type: "video"
  },
];

const categories = ["Alle", "Studio", "BYONIK", "Slimyonik", "Vorher-Nachher", "Produkte", "Videos"];

const Galerie = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredImages = activeCategory === "Alle" 
    ? studioImages 
    : studioImages.filter(img => img.category === activeCategory);

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
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="border-2"
                >
                  {category}
                </Button>
              ))}
            </div>
            
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                    <Card key={index} className="border-2 overflow-hidden group">
                      {image.type === 'video' && image.title && (
                        <div className="p-4 border-b bg-secondary/30">
                          <h3 className="font-serif font-semibold text-lg">{image.title}</h3>
                        </div>
                      )}
                      <div className="aspect-square relative overflow-hidden bg-black">
                        {image.type === 'video' ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-900">
                             {image.src !== '#' ? (
                                <video 
                                  src={image.src} 
                                  controls
                                  className="w-full h-full object-cover"
                                />
                             ) : (
                                <div className="text-white text-center p-4">
                                  <p>Video folgt</p>
                                  <p className="text-xs text-gray-400 mt-2">{image.alt}</p>
                                </div>
                             )}
                          </div>
                        ) : (
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        {image.type !== 'video' && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                              <p className="text-sm font-medium">{image.category}</p>
                              <p className="text-lg font-serif">{image.alt}</p>
                            </div>
                          </>
                        )}
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
                href="https://www.instagram.com/shirea_kosmetik/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @shirea_kosmetik folgen
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