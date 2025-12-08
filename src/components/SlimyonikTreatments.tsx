import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, FileDown, Wind, Zap, Heart, Activity, Droplets } from "lucide-react";

const massageTypes = [
  { icon: Wind, name: "Slim Massage", description: "Für effektive Körperformung" },
  { icon: Droplets, name: "Cellulite Massage", description: "Gegen Orangenhaut" },
  { icon: Heart, name: "Relax Massage", description: "Für tiefe Entspannung" },
  { icon: Activity, name: "Sport Massage", description: "Regeneration für Sportler" },
  { icon: Zap, name: "Lymph Massage", description: "Aktiviert das Lymphsystem" },
  { icon: Zap, name: "Laser-Lipolyse RF", description: "High-Tech Fettreduktion" },
];

const packages = [
  {
    name: "Einzelbehandlung",
    price: "55 €",
    originalPrice: null,
    description: "Perfekt zum Kennenlernen.",
    bonus: null,
  },
  {
    name: "Basic-Kur (10er Kur)",
    price: "499 €",
    originalPrice: "550 €",
    description: "Ideal für sichtbare Ergebnisse.",
    bonus: "Ein Behandlungsgutschein für Familie und Freunde",
  },
  {
    name: "Professional-Kur (12er Kur)",
    price: "599 €",
    originalPrice: "660 €",
    description: "Maximale Wirkung für langfristige Erfolge.",
    bonus: "Ein Behandlungsgutschein für Familie und Freunde und ein kostenloses Produkt dazu",
    featured: true,
  },
];

export const SlimyonikTreatments = () => {
  return (
    <section id="slimyonik" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Körperbehandlung
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
            Slimyonik Air Bodystyler
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Erleben Sie effektive Körperformung mit tiefenwirksamen Ergebnissen. 
            Wählen Sie aus acht individuell anpassbaren Programmen für Ihre persönlichen Ziele.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            + Sauerstoffinhalation für maximale Regeneration
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Sicher</h3>
              <p className="text-muted-foreground text-sm">
                Medizinisch zugelassen, individuell anpassbar und entspannend
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Ganzheitlich</h3>
              <p className="text-muted-foreground text-sm">
                Behandlung von innen und außen für nachhaltige Ergebnisse
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Vielseitig</h3>
              <p className="text-muted-foreground text-sm">
                Bei Cellulite, müden Beinen, zur Umfangsreduktion und Hautstraffung
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Massage Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {massageTypes.map((massage, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all group">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <massage.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{massage.name}</h3>
                  <p className="text-sm text-muted-foreground">{massage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Packages */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold">Behandlungspakete</h3>
          <p className="text-muted-foreground mt-2">Wählen Sie das passende Paket für Ihre Ziele</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`border-2 ${pkg.featured ? "border-primary shadow-lg relative" : ""}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-serif">{pkg.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-muted-foreground line-through ml-2">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                {pkg.bonus && (
                  <div className="flex items-start gap-2 text-left bg-secondary/50 p-3 rounded-lg">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Bonus: {pkg.bonus}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Vereinbaren Sie jetzt Ihre Slimyonik-Behandlung und spüren Sie den Unterschied!
          </p>
          <Button size="lg" variant="outline" className="border-2" asChild>
            <a href="/Preisliste_Shirea.pdf" download="Preisliste_Shirea.pdf">
              <FileDown className="mr-2 h-5 w-5" />
              Slimyonik Produkte (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
