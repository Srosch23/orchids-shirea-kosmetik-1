import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const priceCategories = [
    {
      title: "Gesichtsbehandlungen",
      treatments: [
        { name: "Klassisch", duration: "60 Min.", price: "79 €", description: "Reinigung, Hautdiagnose, Peeling, Ausreinigung, Massage, Individuell abgestimmte Maske, Abschließende Pflege" },
        { name: "Luxus", duration: "90 Min.", price: "119 €", featured: true, description: "Reinigung, Hautdiagnose, sanftes Peeling, SkinScrubber, Ausreinigung, Augenbrauenkorrektur, Massage, hochwertige Wirkstoffampulle, Individuell abgestimmte Maske, Abschließende Pflege" },
        { name: "Anti Aging", duration: "60 Min.", price: "79 €", description: "Reinigung, Hautdiagnose, Peeling, Hyaluron + Vitamin Ampulle, tiefenwirksame Wirkstoffmaske, reichhaltige Abschlusspflege" },
        { name: "Unreine Haut", duration: "60 Min.", price: "79 €", description: "Reinigung, Hautdiagnose, Peeling, intensive Ausreinigung, Regenerationsmaske, Abschließende Pflege" },
        { name: "Trockene Haut", duration: "60 Min.", price: "79 €", description: "Reinigung, Hautdiagnose, Peeling, tiefenwirksame Wirkstoffmaske, Feuchtigkeitsampulle, Abschließende Pflege" },
      ],
    },
    {
      title: "Innovative Hautbehandlungen",
      treatments: [
        { name: "Microdermabrasion", duration: "60 Min.", price: "99 €", description: "Reinigung, Hautdiagnose, Peeling, Microdermabrasion, Intensivmaske, Abschlusspflege" },
        { name: "Microneedling", duration: "60 Min.", price: "ab 119 €", description: "Reinigung, Hautdiagnose, Peeling, Microneedling mit hochkonzentriertem Wirkstoffserum, Intensivmaske, Abschlusspflege" },
        { name: "BB-Glow", duration: "60 Min.", price: "99 €", description: "Reinigung, Hautdiagnose, Peeling, Ausreinigung, BB Glow, Intensivmaske, Abschlusspflege" },
      ],
    },
          {
            title: "BYONIK® Laser Behandlungen",
            promoNote: "Die unten genannten Preise sind BYONIK® Promo Preise",
            treatments: [
            { name: "BYONIK® Lift PTL Facial | Gesicht", duration: "60 Min.", price: "149 €", featured: true },
            { name: "BYONIK® Lift PTL Facial - DELUXE | Gesicht und Halskontur", duration: "75 Min.", price: "169 €" },
            { name: "BYONIK® Lift PTL Facial - SUPERIOR | Gesicht, Hals und Dekolleté", duration: "90 Min.", price: "199 €", featured: true },
            { name: "BYONIK® Lift Fresh-Up | Gesicht", duration: "40 Min.", price: "149 €" },
            { name: "BYONIK® Skin Lightening | bei erhöhter Pigmentation", duration: "60 Min.", price: "160 €" },
            { name: "BYONIK® Ecto Repair | Neurosensitive Haut & Akne", duration: "45 Min.", price: "139 €" },
            { name: "BYONIK® Clean Beauty | ohne Duftstoffe", duration: "45 Min.", price: "129 €" },
            { name: "BYONIK® Pore Refining Algae Massage | Detox-Spezial", duration: "45 Min.", price: "139 €" },
            { name: "BYONIK® Eye Revolution", duration: "25 Min.", price: "79 €" },
            { name: "BYONIK® Hand Kiss", duration: "45 Min.", price: "129 €" },
            { name: "BYONIK® Shapely Arms", duration: "45 Min.", price: "129 €" },
            { name: "BYONIK® Show your Legs", duration: "60 Min.", price: "169 €" },
            { name: "BYONIK® Clean & Smooth", duration: "30 Min.", price: "99 €" },
          ],
        },
  {
    title: "Slimyonik Air Bodystyler + Sauerstoffinhalation",
    treatments: [
      { name: "Einzelbehandlung", duration: "45 Min.", price: "55 €", description: "Perfekt zum Kennenlernen" },
      { name: "Basic-Kur (10er Kur)", duration: "", price: "499 €", note: "statt 550 €", featured: true, description: "Inkl. Behandlungsgutschein für Familie und Freunde. Ideal für sichtbare Ergebnisse." },
      { name: "Professional-Kur (12er Kur)", duration: "", price: "599 €", note: "statt 660 €", featured: true, description: "Inkl. Behandlungsgutschein und kostenlosem Produkt. Maximale Wirkung für langfristige Erfolge." },
    ],
  },
    {
      title: "Wimpern & Brauen",
      treatments: [
        { name: "Wimpernlifting", duration: "", price: "79 €" },
        { name: "Augenbrauenlifting", duration: "", price: "59 €" },
        { name: "Wimpern färben", duration: "", price: "15 €" },
        { name: "Augenbrauen formen", duration: "", price: "15 €" },
        { name: "Augenbrauen färben", duration: "", price: "15 €" },
        { name: "Augenbrauen formen & färben", duration: "", price: "25 €" },
        { name: "Komplett Paket (Brauen formen & färben, Wimpern färben)", duration: "", price: "38 €" },
        { name: "Henna Brow", duration: "", price: "38 €" },
      ],
    },
      {
        title: "Massagen",
        treatments: [
          { name: "Gesichtsmassage", duration: "15 Min.", price: "30 €" },
          { name: "Gesichts-, Nacken- & Dekolletémassage", duration: "30 Min.", price: "45 €" },
          { name: "Klassische Massage", duration: "60 Min.", price: "79 €" },
          { name: "Ganzkörpermassage", duration: "90 Min.", price: "119 €" },
        ],
      },
  {
    title: "Waxing",
    treatments: [
      { name: "Arme komplett", duration: "", price: "45 €" },
      { name: "Beine komplett", duration: "", price: "55 €" },
      { name: "Achseln", duration: "", price: "22 €" },
      { name: "Intim Komplett", duration: "", price: "38 €" },
    ],
  },

];

const Preise = () => {
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
                    </div>
                    {category.promoNote && (
                      <p className="text-sm text-primary font-medium mt-3 italic">
                        {category.promoNote}
                      </p>
                    )}
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

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Bereit für Ihre Behandlung?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Buchen Sie jetzt Ihren Wunschtermin online.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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