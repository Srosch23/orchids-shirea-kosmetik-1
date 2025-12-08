import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Heart, Zap, Sparkles, Droplets } from "lucide-react";

const byonikBenefits = [
  "Tiefenwirksame Hautverjüngung",
  "Sofortige Straffung und Lifting-Effekt",
  "Verbesserte Durchblutung und Sauerstoffversorgung",
  "Anregung der Kollagenproduktion",
  "Reduzierung von Falten und feinen Linien",
  "Verfeinerung des Hautbildes",
  "Strahlender, frischer Teint",
  "Feuchtigkeitsversorgung",
  "Milderung von Couperose/Teleangiektasien",
  "Regeneration und Neubildung von Blutgefäßen",
  "Regulieren der unreinen Haut",
  "Freisetzung der elastinen Fasern, Biolifting",
];

const contraindications = [
  "Schwangerschaft und Stillzeit",
  "Akute Hautinfektionen oder Entzündungen",
  "Offene Wunden im Behandlungsbereich",
  "Einnahme von Blutverdünnern",
  "Epilepsie",
  "Herzschrittmacher",
  "Aktive Herpes-Infektion",
  "Krebserkrankungen",
];

const byonikPrices = [
  { name: "BYONIK® Anti-Aging | Gesicht", duration: "75 Min.", price: "169 €" },
  { name: "BYONIK® Anti-Aging | Gesicht und Halskontur", duration: "90 Min.", price: "199 €" },
  { name: "BYONIK® Anti-Aging | Gesicht, Hals und Dekolleté", duration: "120 Min.", price: "269 €" },
  { name: "BYONIK® Lift Fresh-Up | Gesicht", duration: "60 Min.", price: "149 €" },
  { name: "BYONIK® Skin Lightening | bei erhöhter Pigmentation", duration: "75 Min.", price: "179 €" },
  { name: "BYONIK® Ecto Repair | Neurosensitive Haut & Akne", duration: "60 Min.", price: "139 €" },
  { name: "BYONIK® Clean Beauty | ohne Duftstoffe", duration: "60 Min.", price: "129 €" },
  { name: "BYONIK® Pore Refining Algae Massage | Detox-Spezial", duration: "60 Min.", price: "139 €" },
  { name: "BYONIK® Eye Revolution", duration: "25 Min.", price: "79 €" },
  { name: "BYONIK® Hand Kiss", duration: "45 Min.", price: "129 €" },
  { name: "BYONIK® Shapely Arms", duration: "45 Min.", price: "129 €" },
  { name: "BYONIK® Show your Legs", duration: "60 Min.", price: "169 €" },
  { name: "BYONIK® Clean & Smooth", duration: "30 Min.", price: "99 €" },
];

export const ByonikTreatments = () => {
  return (
    <section id="byonik" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Innovative Technologie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
            BYONIK® Puls Triggered Laser
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Erleben Sie die einzigartige BYONIK® Methode, eine innovative pulsgesteuerte Laserbehandlung, 
            die Ihre Haut in perfekter Harmonie mit Ihrem Herzschlag revitalisiert. Der Kaltlaser arbeitet 
            synchron mit Ihrem natürlichen Rhythmus und transportiert hochkonzentrierte Wirkstoffe tief in die Haut.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Schmerzfrei</h3>
              <p className="text-muted-foreground text-sm">Völlig schmerzfrei, ohne Ausfallzeit</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sofortige Wirkung</h3>
              <p className="text-muted-foreground text-sm">Sichtbar jüngeres Hautbild</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-8 pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Für jeden Hauttyp</h3>
              <p className="text-muted-foreground text-sm">Individuell abgestimmt</p>
            </CardContent>
          </Card>
        </div>

        {/* Hyaluron Gels Info */}
        <Card className="border-2 max-w-4xl mx-auto mb-16">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  Hochkonzentrierte BYONIK® Hyaluron-Gele
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die BYONIK® Methode arbeitet mit patentierten und zertifizierten Hyaluron-Gelen in höchster Konzentration. 
                  Diese innovativen Wirkstoffe werden durch die pulsgesteuerte Lasertechnologie tief in die Haut transportiert 
                  und entfalten dort ihre maximale Wirkung. Die hochkonzentrierten Hyaluron-Gele spenden intensive Feuchtigkeit, 
                  polstern die Haut von innen auf und sorgen für ein sichtbar strafferes, jugendlicheres Hautbild.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits and Contraindications */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-serif">
                <Check className="w-6 h-6 text-primary" />
                Wirkung und Vorteile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                {byonikBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-serif">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Wann nicht geeignet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                {contraindications.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Price Table */}
        <Card className="border-2 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">Behandlungspreise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {byonikPrices.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                  <p className="font-semibold text-primary text-lg">{item.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
