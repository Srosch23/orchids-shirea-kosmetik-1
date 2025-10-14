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
    title: "Spezialbehandlung bei Hyperpigmentierung",
    duration: "ca. 60 Min.",
    price: "ab 65 €",
    description: "Diese zielgerichtete Behandlung hellt bestehende Hyperpigmentierungen effektiv auf und beugt der Entstehung neuer Pigmentflecken vor. Durch Zellerneuerung und intensive Feuchtigkeitspflege erzielen wir ein sichtbar strahlendes und gleichmäßiges Hautbild.",
    benefits: ["Ebenmäßiger Teint", "Aufhellung von Pigmentflecken", "Intensive Feuchtigkeitspflege"],
  },
  {
    title: "Sensitive Balance Behandlung",
    duration: "ca. 70 Min.",
    price: "ab 70 €",
    description: "Diese Behandlung ist besonders wohltuend für sehr empfindliche und gereizte Haut. Die innovative BioCell-Maske beruhigt, stärkt die Hautbarriere, verbessert den Feuchtigkeitshaushalt und bringt die Haut zurück in ihr natürliches Gleichgewicht.",
    benefits: ["Beruhigt gereizte Haut", "Stärkt Hautbarriere", "Verbessert Feuchtigkeitshaushalt"],
  },
  {
    title: "Detox-Behandlung",
    duration: "ca. 70 Min.",
    price: "ab 70 €",
    description: "Die Detox-Behandlung unterstützt die Haut dabei, Schadstoffe zu lösen und die Zellerneuerung zu aktivieren. Sie verleiht Ihrer Haut Frische, Energie und ein gesundes Strahlen.",
    benefits: ["Entschlackung", "Zellerneuerung", "Revitalisierung"],
  },
  {
    title: "Anti-Aging-Behandlung",
    duration: "ca. 60 Min.",
    price: "ab 55 €",
    description: "Verwöhnen Sie Ihre Haut mit der luxuriösen Anti-Aging-Behandlung! Hochwirksame Hyaluron- und Vitamin-Komplexe polstern die Haut von innen auf, glätten feine Linien und schenken Ihnen ein sichtbar jüngeres, strafferes und pralleres Hautbild.",
    benefits: ["Straffere Haut", "Glättung von Linien", "Pralleres Hautbild"],
  },
  {
    title: "Mikrodermabrasion",
    duration: "ca. 60 Min.",
    price: "ab 99 €",
    description: "Mikrodermabrasion ist eine hochwirksame Methode zur gezielten Abtragung der obersten Hautschicht mittels feiner Kristalle. Nach der Behandlung erscheint die Haut sofort frischer und strahlender und ist optimal aufnahmefähig für nachfolgende Pflegeprodukte.",
    benefits: ["Glättet feine Linien und Fältchen", "Verfeinert Poren nachhaltig", "Mildert Pigmentflecken und Aknenarben"],
  },
  {
    title: "Microneedling",
    duration: "ca. 60 Min.",
    price: "ab 120 €",
    description: "Entdecken Sie Microneedling, die innovative Methode für eine Haut, die sich von innen heraus erneuert. Durch präzise Mikro-Impulse wird Ihre natürliche Kollagen- und Elastinproduktion sanft angeregt.",
    benefits: ["Straffere Haut und verbesserte Elastizität", "Reduzierung von Linien, Fältchen und Narben", "Ebenmäßigerer Teint", "Verfeinertes, vitales Hautbild"],
  },
  {
    title: "Wimpernlifting",
    duration: "ca. 45 Min.",
    price: "ab 59 €",
    description: "Für einen perfekten Augenaufschlag – ganz ohne Mascara oder künstliche Wimpern. Die Naturwimpern werden sanft nach oben gebogen und professionell fixiert.",
    benefits: ["Langanhaltender Schwung (6-8 Wochen)", "Ausdrucksstarker Blick", "Schonend für die Naturwimpern"],
  },
  {
    title: "Augenbrauenlifting",
    duration: "ca. 45 Min.",
    price: "ab 65 €",
    description: "Für volle, perfekt geformte Brauen. Die Härchen werden in die gewünschte Form gebracht und dauerhaft fixiert – für einen langanhaltend gepflegten Look.",
    benefits: ["Perfekte Form", "Langanhaltend", "Natürlicher Look"],
  },
  {
    title: "Waxing",
    duration: "ab 15 Min.",
    price: "ab 15 €",
    description: "Klassische Haarentfernung mit warmem Wachs – effektiv, schnell und gründlich für wochenlang glatte Haut.",
    benefits: ["Effektiv und schnell", "Wochenlang glatte Haut", "Gründliche Entfernung"],
  },
  {
    title: "Sugaring",
    duration: "ab 15 Min.",
    price: "ab 18 €",
    description: "Besonders hautschonende Methode durch natürliche Zuckerpaste – ideal auch für empfindliche Hauttypen. Seidig glatte Haut ohne lästige Stoppeln.",
    benefits: ["Besonders hautschonend", "Natürliche Zuckerpaste", "Ideal für empfindliche Haut"],
  },
  {
    title: "Klassische Massage",
    duration: "ab 30 Min.",
    price: "ab 30 €",
    description: "Löst effektiv Muskelverspannungen, fördert die Durchblutung und sorgt für tiefe körperliche Entspannung.",
    benefits: ["Löst Verspannungen", "Fördert Durchblutung", "Tiefe Entspannung"],
  },
  {
    title: "Aromaölmassage",
    duration: "ab 30 Min.",
    price: "ab 35 €",
    description: "Ätherische Öle harmonisieren Körper und Geist, reduzieren Stress und revitalisieren Ihre Sinne.",
    benefits: ["Harmonisiert Körper & Geist", "Stressreduktion", "Revitalisierend"],
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
