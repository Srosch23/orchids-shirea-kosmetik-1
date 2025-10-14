import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const treatments = [
  {
    title: "Klassische Gesichtsbehandlung",
    duration: "ca. 60 Min.",
    price: "ab 45 €",
    description: "Entdecken Sie die wahre Strahlkraft Ihrer Haut mit der klassischen Gesichtsbehandlung! Eine präzise Hautanalyse gewährleistet eine auf Ihre Bedürfnisse abgestimmte Pflege, die Ihren Teint zum Leuchten bringt.",
  },
  {
    title: "Anti-Aging-Behandlung",
    duration: "ca. 60 Min.",
    price: "ab 55 €",
    description: "Verwöhnen Sie Ihre Haut mit der luxuriösen Anti-Aging-Behandlung! Hochwirksame Hyaluron- und Vitamin-Komplexe polstern die Haut von innen auf, glätten feine Linien und schenken Ihnen ein sichtbar jüngeres, strafferes und pralleres Hautbild.",
  },
  {
    title: "Mikrodermabrasion",
    duration: "ca. 60 Min.",
    price: "ab 99 €",
    description: "Sanfte Hauterneuerung durch Abtragen der oberen Hautschichten mit feinen Kristallen. Glättet feine Linien, verfeinert Poren und mildert Pigmentflecken für einen strahlenden Teint.",
    benefits: ["Glättet feine Linien", "Verfeinert Poren", "Mildert Pigmentflecken"],
  },
  {
    title: "Microneedling",
    duration: "ca. 60 Min.",
    price: "ab 120 €",
    description: "Für eine sichtbar verjüngte Haut, die strahlt! Durch präzise Mikro-Impulse wird Ihre natürliche Kollagen- und Elastinproduktion sanft angeregt.",
    benefits: ["Straffere Haut", "Glattere Textur", "Ebenmäßiger Teint"],
  },
  {
    title: "Wimpernlifting",
    duration: "ca. 45 Min.",
    price: "ab 59 €",
    description: "Für einen perfekten Augenaufschlag – ganz ohne Mascara oder künstliche Wimpern. Die Naturwimpern werden sanft nach oben gebogen und professionell fixiert.",
    benefits: ["6-8 Wochen haltbar", "Ausdrucksstarker Blick", "Schonend"],
  },
  {
    title: "Wellness-Massagen",
    duration: "ab 30 Min.",
    price: "ab 30 €",
    description: "Tauchen Sie ein in eine Welt der Entspannung und Regeneration. Klassische Massage oder Aromaölmassage für ganzheitliche Erholung und neue Energie.",
  },
];

export const Treatments = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Behandlungen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Entdecken Sie Ihre perfekte Behandlung
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {treatments.map((treatment, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-6">
                <CardTitle className="text-2xl font-serif mb-2">
                  {treatment.title}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{treatment.duration}</span>
                  <span className="font-semibold text-primary text-lg">{treatment.price}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {treatment.description}
                </p>
                
                {treatment.benefits && (
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
