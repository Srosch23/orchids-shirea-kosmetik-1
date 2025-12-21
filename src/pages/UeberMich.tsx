import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles, Shield, Leaf, Calendar, Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const shahiraImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Schahira2-1765402476052.jpeg";
const treatmentRoomUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Behandlungsraumlichkeiten-1765401998220.jpeg";

const qualifications = [
  {
    category: "Ausbildungen & Grundqualifikationen",
    items: [
      "Staatlich anerkannte Fachkosmetikerin",
      "Zertifizierte Visagistin",
    ],
  },
  {
    category: "Spezialisierungen im Bereich Haut & Anti-Aging",
    items: [
      "Zertifizierte Expertin für Micro-Needling & Mikrodermabrasion",
    ],
  },
    {
      category: "Augenbrauen- & Wimpernstyling",
      items: [
        "Brow Lifting / Lash Lifting zertifiziert",
        "Professionelle Techniken im Färben, Formen & Stylen von Augenbrauen",
        "Präzisions-Haarentfernung (Waxing)",
      ],
    },
  {
    category: "Spezialbehandlungen",
    items: [
      "BYONIK®️ Lasertherapie zertifiziert",
      "Slimyonik Air Bodystyler Expertin",
    ],
  },
  {
    category: "Professionelle Zusatzkompetenzen",
    items: [
      "Regelmäßige Weiterbildungen in modernen Behandlungsmethoden",
      "Hygienemanagement nach aktuellen Richtlinien",
    ],
  },
];

const philosophy = [
  {
    icon: Heart,
    title: "Individuelle Betreuung",
    description: "Jede Behandlung wird persönlich auf Ihre Hautbedürfnisse und Wünsche abgestimmt.",
  },
  {
    icon: Sparkles,
    title: "Hochwertige Produkte",
    description: "Wir arbeiten ausschließlich mit premium Produkten für bestmögliche Ergebnisse.",
  },
  {
    icon: Shield,
    title: "Professionelle Standards",
    description: "Höchste Hygienestandards und modernste Behandlungsmethoden für Ihre Sicherheit.",
  },
  {
    icon: Leaf,
    title: "Natürliche Schönheit",
    description: "Unser Ziel ist es, Ihre natürliche Schönheit zu unterstreichen und zu fördern.",
  },
];

const UeberMich = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <img 
                  src={shahiraImage} 
                  alt="Schahira Scharar - Staatlich anerkannte Fachkosmetikerin"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <span className="text-sm uppercase tracking-wider text-primary font-medium">
                  Ihre Expertin
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
                  Schahira Scharar
                </h1>
                <p className="text-xl text-muted-foreground">
                  Staatlich anerkannte Fachkosmetikerin
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Herzlich willkommen! Ich bin Schahira Scharar, Ihre Expertin für professionelle 
                  Hautpflege und Wohlbefinden im Herzen von München.
                </p>
                <p>
                  Als staatlich anerkannte Fachkosmetikerin mit langjähriger Erfahrung habe ich es mir zur 
                  Aufgabe gemacht, die natürliche Schönheit meiner Kundinnen und Kunden zu unterstreichen 
                  und ihre Haut nachhaltig zu pflegen.
                </p>
                <p>
                  In meinem Studio erwartet Sie eine ruhige, stilvolle Atmosphäre, in der Sie entspannen 
                  und sich verwöhnen lassen können. Jede Behandlung wird individuell auf Ihre 
                  Hautbedürfnisse abgestimmt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-wider text-primary font-medium">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                Qualifikationen & Zertifikate
              </h2>
            </div>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-serif font-semibold mb-6">
                      Ausbildung & Zertifizierungen
                    </h3>
                    <div className="space-y-6">
                      {qualifications.map((category, catIndex) => (
                        <div key={catIndex}>
                          <h4 className="font-semibold text-foreground mb-3">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Meine Philosophie
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              Warum Sie sich bei mir wohlfühlen
            </h2>
            <p className="text-muted-foreground text-lg">
              Ihr Wohlbefinden steht bei mir an erster Stelle. Jeder Besuch soll für Sie 
              ein Moment der Entspannung und Selbstfürsorge sein.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <span className="text-sm uppercase tracking-wider text-primary font-medium">
                  Das Studio
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
                  Eine Oase der Entspannung
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mein Studio im Herzen von München bietet Ihnen einen Rückzugsort vom Alltag. 
                In ruhiger, stilvoller Atmosphäre können Sie sich entspannen und verwöhnen lassen.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Die hochwertige Ausstattung und das durchdachte Ambiente sorgen dafür, dass Sie 
                sich vom ersten Moment an wohlfühlen. Hier steht Ihre Schönheit und Ihr Wohlbefinden 
                im Mittelpunkt.
              </p>
              

            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={treatmentRoomUrl} 
                alt="SHIREÁ Beauty Space - Behandlungsraum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UeberMich;