import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const treatments = [
  {
    title: "Klassische Gesichtsbehandlung",
    duration: "ca. 60 Min.",
    description: "Entdecken Sie die wahre Strahlkraft Ihrer Haut mit der klassischen Gesichtsbehandlung! Eine präzise Hautanalyse gewährleistet eine auf Ihre Bedürfnisse abgestimmte Pflege, die Ihren Teint zum Leuchten bringt.",
  },
  {
    title: "Spezialbehandlung bei Hyperpigmentierung",
    subtitle: "Für einen ebenmäßigen & strahlenden Teint",
    duration: "ca. 70 Min.",
    description: "Diese zielgerichtete Behandlung hellt bestehende Hyperpigmentierungen effektiv auf und beugt der Entstehung neuer Pigmentflecken vor. Durch Zellerneuerung und intensive Feuchtigkeitspflege erzielen wir ein sichtbar strahlendes und gleichmäßiges Hautbild.",
  },
  {
    title: "Sensitive Balance Behandlung",
    subtitle: "Beruhigende & stärkende Pflege für empfindliche, irritierte und gereizte Haut",
    duration: "ca. 70 Min.",
    description: "Diese Behandlung ist besonders wohltuend für sehr empfindliche und gereizte Haut. Die innovative BioCell-Maske beruhigt, stärkt die Hautbarriere, verbessert den Feuchtigkeitshaushalt und bringt die Haut zurück in ihr natürliches Gleichgewicht. Fühlen Sie sich wieder wohl in Ihrer Haut!",
  },
  {
    title: "Detox-Behandlung",
    subtitle: "Entschlackung & Revitalisierung für Ihre Haut",
    duration: "ca. 70 Min.",
    description: "Die Detox-Behandlung unterstützt die Haut dabei, Schadstoffe zu lösen und die Zellerneuerung zu aktivieren. Sie verleiht Ihrer Haut Frische, Energie und ein gesundes Strahlen.",
  },
  {
    title: "Anti-Aging-Behandlung",
    duration: "ca. 70 Min.",
    description: "Verwöhnen Sie Ihre Haut mit der luxuriösen Anti-Aging-Behandlung! Hochwirksame Hyaluron- und Vitamin-Komplexe polstern die Haut von innen auf, glätten feine Linien und schenken Ihnen ein sichtbar jüngeres, strafferes und pralleres Hautbild. Erleben Sie eine Verwandlung, die Sie lieben werden!",
  },
];

const innovativeTreatments = [
  {
    title: "Mikrodermabrasion",
    description: "Eine hochwirksame Methode zur gezielten Abtragung der obersten Hautschicht mittels feiner Kristalle. Die Haut erscheint sofort frischer und strahlender.",
    benefits: ["Glättet feine Linien und Fältchen", "Verfeinert Poren nachhaltig", "Mildert Pigmentflecken und Aknenarben"],
  },
  {
    title: "Microneedling",
    description: "Innovative Methode zur Hauterneuerung von innen. Präzise Mikro-Impulse regen die natürliche Kollagen- und Elastinproduktion an, für sichtbar jugendlichere Haut.",
    benefits: ["Straffere Haut und verbesserte Elastizität", "Reduzierung von Linien, Fältchen und Narben", "Milderung von Pigmentstörungen", "Verfeinertes, ebenmäßiges Hautbild"],
  },
];

export const Treatments = () => {
  return (
    <section id="treatments" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Gesichtsbehandlungen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Finden Sie die Behandlung, die zu Ihnen passt
          </h2>
        </div>
        
        {/* Classic Facial Treatments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {treatments.map((treatment, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-6">
                <CardTitle className="text-xl font-serif mb-1">
                  {treatment.title}
                </CardTitle>
                {treatment.subtitle && (
                  <p className="text-sm text-primary font-medium">{treatment.subtitle}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Behandlungsdauer: {treatment.duration}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovative Treatments */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Innovative Methoden
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mt-2">
            Innovative Hautbehandlungen
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {innovativeTreatments.map((treatment, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-xl font-serif">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {treatment.description}
                </p>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
