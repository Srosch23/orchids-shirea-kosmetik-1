import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Scissors, Droplets, Sparkles, Eye } from "lucide-react";

const massages = [
  {
    title: "Klassische Massage",
    description:
      "Löst effektiv Muskelverspannungen, fördert die Durchblutung und sorgt für tiefe körperliche Entspannung.",
    benefits: ["Löst Verspannungen", "Fördert Durchblutung", "Tiefe Entspannung"],
  },
  {
    title: "Aromaölmassage",
    description:
      "Ätherische Öle harmonisieren Körper und Geist, reduzieren Stress und revitalisieren Ihre Sinne.",
    benefits: ["Harmonisiert Körper & Geist", "Stressreduktion", "Revitalisierend"],
  },
];

const hairRemoval = [
  {
    title: "Waxing",
    description:
      "Klassische Haarentfernung mit warmem Wachs – effektiv, schnell und gründlich für wochenlang glatte Haut.",
    benefits: ["Effektiv und schnell", "Wochenlang glatte Haut", "Gründliche Entfernung"],
  },
  {
    title: "Sugaring",
    description:
      "Besonders hautschonende Methode durch natürliche Zuckerpaste – ideal auch für empfindliche Hauttypen.",
    benefits: ["Besonders hautschonend", "Natürliche Zuckerpaste", "Ideal für empfindliche Haut"],
  },
];

const eyeServices = [
  {
    title: "Wimpernlifting",
    description:
      "Für einen perfekten Augenaufschlag – ganz ohne Mascara oder künstliche Wimpern. Die Naturwimpern werden sanft nach oben gebogen und professionell fixiert.",
    benefits: ["Langanhaltender Schwung (6–8 Wochen)", "Ausdrucksstarker Blick", "Schonend für die Naturwimpern"],
  },
  {
    title: "Augenbrauenlifting",
    description:
      "Für volle, perfekt geformte Brauen. Die Härchen werden in die gewünschte Form gebracht und dauerhaft fixiert – für einen langanhaltend gepflegten Look.",
    benefits: ["Perfekte Form", "Langanhaltend", "Natürlicher Look"],
  },
];

export const WellnessServices = () => {
  return (
    <section id="wellness" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Wellness Massages */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Entspannung
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
              Wellness-Massagen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tauchen Sie ein in eine Welt der Entspannung und Regeneration, in der Körper und 
              Seele in Einklang gebracht werden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {massages.map((massage, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{massage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{massage.description}</p>
                  <ul className="space-y-2">
                    {massage.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hair Removal */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Glatte Haut
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
              Professionelle Haarentfernung
            </h2>
            <p className="text-muted-foreground text-lg">
              Seidig glatte Haut ohne lästige Stoppeln, wochenlang perfekte Glätte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hairRemoval.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Scissors className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eye Services */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Augen
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
              Ausdrucksstarke Augen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eyeServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
