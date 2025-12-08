import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const priceCategories = [
  {
    title: "Gesichtsbehandlungen",
    popular: "Anti-Aging Behandlung",
    treatments: [
      { name: "Klassische Gesichtsbehandlung", duration: "60 Min.", price: "65 €" },
      { name: "Spezialbehandlung Hyperpigmentierung", duration: "70 Min.", price: "89 €" },
      { name: "Sensitive Balance Behandlung", duration: "70 Min.", price: "85 €" },
      { name: "Detox-Behandlung", duration: "70 Min.", price: "79 €" },
      { name: "Anti-Aging-Behandlung", duration: "70 Min.", price: "85 €", featured: true },
    ],
  },
  {
    title: "Innovative Hautbehandlungen",
    treatments: [
      { name: "Mikrodermabrasion", duration: "45 Min.", price: "99 €" },
      { name: "Microneedling Gesicht", duration: "60 Min.", price: "129 €" },
      { name: "Microneedling Gesicht & Hals", duration: "75 Min.", price: "159 €" },
    ],
  },
  {
    title: "BYONIK® Laser",
    popular: "BYONIK® Anti-Aging",
    treatments: [
      { name: "BYONIK® Anti-Aging | Gesicht", duration: "75 Min.", price: "169 €", featured: true },
      { name: "BYONIK® Anti-Aging | Gesicht & Hals", duration: "90 Min.", price: "199 €" },
      { name: "BYONIK® Anti-Aging | Gesicht, Hals & Dekolleté", duration: "120 Min.", price: "269 €" },
      { name: "BYONIK® Lift Fresh-Up", duration: "60 Min.", price: "149 €" },
      { name: "BYONIK® Skin Lightening", duration: "75 Min.", price: "179 €" },
      { name: "BYONIK® Ecto Repair", duration: "60 Min.", price: "139 €" },
      { name: "BYONIK® Eye Revolution", duration: "25 Min.", price: "79 €" },
      { name: "BYONIK® Hand Kiss", duration: "45 Min.", price: "129 €" },
    ],
  },
  {
    title: "Wimpern & Augenbrauen",
    treatments: [
      { name: "Wimpernlifting inkl. Färben", duration: "60 Min.", price: "69 €" },
      { name: "Augenbrauenlifting inkl. Färben", duration: "45 Min.", price: "49 €" },
      { name: "Wimpern- & Brauenlifting Kombi", duration: "75 Min.", price: "99 €" },
      { name: "Wimpern färben", duration: "15 Min.", price: "15 €" },
      { name: "Augenbrauen färben", duration: "15 Min.", price: "12 €" },
      { name: "Augenbrauen zupfen", duration: "15 Min.", price: "12 €" },
    ],
  },
  {
    title: "Haarentfernung",
    treatments: [
      { name: "Waxing Gesicht", duration: "15 Min.", price: "ab 15 €" },
      { name: "Waxing Achseln", duration: "15 Min.", price: "18 €" },
      { name: "Waxing Bikinizone", duration: "20 Min.", price: "ab 25 €" },
      { name: "Waxing Beine komplett", duration: "45 Min.", price: "45 €" },
      { name: "Sugaring (verschiedene Zonen)", duration: "variabel", price: "ab 15 €" },
    ],
  },
  {
    title: "Wellness & Massage",
    treatments: [
      { name: "Klassische Massage 30 Min.", duration: "30 Min.", price: "45 €" },
      { name: "Klassische Massage 60 Min.", duration: "60 Min.", price: "75 €" },
      { name: "Aromaölmassage", duration: "45 Min.", price: "65 €" },
    ],
  },
  {
    title: "Slimyonik Air Bodystyler",
    popular: "Professional-Kur",
    treatments: [
      { name: "Einzelbehandlung", duration: "45 Min.", price: "55 €" },
      { name: "Basic-Kur (10 Behandlungen)", duration: "je 45 Min.", price: "499 €", note: "statt 550 €" },
      { name: "Professional-Kur (12 Behandlungen)", duration: "je 45 Min.", price: "599 €", note: "statt 660 €", featured: true },
    ],
  },
];

const Preise = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Transparente Preise
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
              Preisübersicht
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Alle Preise verstehen sich als Richtwerte – die finale Behandlung wird 
              individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-2 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-2xl font-serif">
                      {category.title}
                    </CardTitle>
                    {category.popular && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        <Star className="w-3 h-3 mr-1 fill-primary" />
                        Beliebt: {category.popular}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {category.treatments.map((treatment, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors ${treatment.featured ? 'bg-primary/5' : ''}`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-medium">{treatment.name}</p>
                            {treatment.featured && (
                              <Badge className="bg-primary text-primary-foreground text-xs">
                                Empfohlen
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>{treatment.duration}</span>
                            {treatment.note && (
                              <span className="text-primary font-medium">({treatment.note})</span>
                            )}
                          </div>
                        </div>
                        <p className="font-semibold text-primary text-lg whitespace-nowrap">
                          {treatment.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download & CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Detaillierte Preisliste
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Laden Sie unsere vollständige Preisliste als PDF herunter oder buchen Sie 
              direkt Ihren Wunschtermin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="border-2" asChild>
                <a href="/Preisliste_Shirea.pdf" download="Preisliste_Shirea.pdf">
                  <FileDown className="mr-2 h-5 w-5" />
                  Preisliste herunterladen
                </a>
              </Button>
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
        </div>
      </section>
    </MainLayout>
  );
};

export default Preise;
