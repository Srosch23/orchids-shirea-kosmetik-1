import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { 
  Check, AlertTriangle, Calendar, Clock, Euro, ArrowLeft,
  Sparkles, Zap, Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const treatmentData: Record<string, {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  description: string;
  process: string[];
  benefits: string[];
  contraindications?: string[];
  faq: { question: string; answer: string }[];
}> = {
  "klassische-gesichtsbehandlung": {
    title: "Klassische Gesichtsbehandlung",
    duration: "ca. 60 Min.",
    price: "ab 65 €",
    description: "Entdecken Sie die wahre Strahlkraft Ihrer Haut mit der klassischen Gesichtsbehandlung! Eine präzise Hautanalyse gewährleistet eine auf Ihre Bedürfnisse abgestimmte Pflege, die Ihren Teint zum Leuchten bringt.",
    process: [
      "Ausführliche Hautanalyse und Beratung",
      "Gründliche Reinigung und sanftes Peeling",
      "Tiefenreinigung und ggf. Ausreinigung",
      "Maske passend zu Ihrem Hauttyp",
      "Abschlusspflege mit hochwertigen Seren und Cremes",
    ],
    benefits: [
      "Gründliche Tiefenreinigung",
      "Verbessertes Hautbild",
      "Tiefenentspannung",
      "Individuell angepasste Pflege",
      "Strahlender Teint",
    ],
    faq: [
      { question: "Wie oft sollte ich die Behandlung machen?", answer: "Für optimale Ergebnisse empfehlen wir eine Behandlung alle 4-6 Wochen." },
      { question: "Für welche Hauttypen geeignet?", answer: "Die klassische Gesichtsbehandlung ist für alle Hauttypen geeignet und wird individuell angepasst." },
    ],
  },
  "byonik-anti-aging": {
    title: "BYONIK® Anti-Aging",
    subtitle: "Innovative Lasertherapie",
    duration: "75 Min.",
    price: "169 €",
    description: "Erleben Sie die einzigartige BYONIK® Methode – eine innovative pulsgesteuerte Laserbehandlung, die Ihre Haut in perfekter Harmonie mit Ihrem Herzschlag revitalisiert. Der Kaltlaser arbeitet synchron mit Ihrem natürlichen Rhythmus und transportiert hochkonzentrierte Wirkstoffe tief in die Haut.",
    process: [
      "Hautanalyse und Vorbereitung",
      "Auftragen der BYONIK® Hyaluron-Gele",
      "Pulsgesteuerte Laserbehandlung",
      "Tiefenwirksame Wirkstoffeinschleusung",
      "Abschlusspflege für langanhaltende Ergebnisse",
    ],
    benefits: [
      "Tiefenwirksame Hautverjüngung",
      "Sofortige Straffung und Lifting-Effekt",
      "Verbesserte Durchblutung und Sauerstoffversorgung",
      "Anregung der Kollagenproduktion",
      "Reduzierung von Falten und feinen Linien",
      "Verfeinerung des Hautbildes",
      "Strahlender, frischer Teint",
      "Schmerzfrei und ohne Ausfallzeit",
    ],
    contraindications: [
      "Schwangerschaft und Stillzeit",
      "Akute Hautinfektionen oder Entzündungen",
      "Offene Wunden im Behandlungsbereich",
      "Einnahme von Blutverdünnern",
      "Epilepsie",
      "Herzschrittmacher",
    ],
    faq: [
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die BYONIK® Behandlung ist völlig schmerzfrei und sehr entspannend." },
      { question: "Wie schnell sehe ich Ergebnisse?", answer: "Erste Ergebnisse sind sofort sichtbar. Für optimale Langzeitergebnisse empfehlen wir eine Kur von 4-6 Behandlungen." },
      { question: "Gibt es Ausfallzeiten?", answer: "Nein, Sie können direkt nach der Behandlung Ihren normalen Aktivitäten nachgehen." },
    ],
  },
  "slimyonik": {
    title: "Slimyonik Air Bodystyler",
    subtitle: "Körperformung & Entspannung",
    duration: "45 Min.",
    price: "ab 55 €",
    description: "Erleben Sie effektive Körperformung mit tiefenwirksamen Ergebnissen. Der Slimyonik Air Bodystyler bietet acht individuell anpassbare Programme für Ihre persönlichen Ziele – von Cellulite-Behandlung bis zur Tiefenentspannung.",
    process: [
      "Beratung und Programmauswahl",
      "Anlegen des Bodystyler-Anzugs",
      "Individuell angepasste Druckwellenbehandlung",
      "Optional: Sauerstoffinhalation",
      "Nachruhe und Beratung",
    ],
    benefits: [
      "Effektive Cellulite-Reduktion",
      "Umfangsreduktion und Körperformung",
      "Hautstraffung",
      "Aktivierung des Lymphsystems",
      "Tiefe Entspannung",
      "Verbesserung der Durchblutung",
    ],
    faq: [
      { question: "Wie viele Behandlungen brauche ich?", answer: "Für sichtbare Ergebnisse empfehlen wir eine Kur von 10-12 Behandlungen." },
      { question: "Kann ich verschiedene Programme wählen?", answer: "Ja, wir haben 8 verschiedene Programme: Slim, Cellulite, Relax, Sport, Lymph Massage und mehr." },
    ],
  },
};

// Default treatment for unknown slugs
const defaultTreatment: {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  description: string;
  process: string[];
  benefits: string[];
  contraindications?: string[];
  faq: { question: string; answer: string }[];
} = {
  title: "Behandlung",
  duration: "variabel",
  price: "auf Anfrage",
  description: "Entdecken Sie unsere professionellen Behandlungen für Ihre Schönheit und Ihr Wohlbefinden.",
  process: [
    "Beratungsgespräch",
    "Individuelle Behandlung",
    "Abschlusspflege",
  ],
  benefits: [
    "Professionelle Durchführung",
    "Hochwertige Produkte",
    "Individuelle Betreuung",
  ],
  faq: [],
};

const Behandlungen = () => {
  const { slug } = useParams();
  const treatment = slug && treatmentData[slug] ? treatmentData[slug] : defaultTreatment;

  return (
    <MainLayout>
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to="/leistungen"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zu Leistungen
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div>
                {treatment.subtitle && (
                  <span className="text-sm uppercase tracking-wider text-primary font-medium">
                    {treatment.subtitle}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-serif font-bold">
                  {treatment.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card border-2 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">{treatment.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-card border-2 rounded-lg px-4 py-2">
                <Euro className="w-5 h-5 text-primary" />
                <span className="font-medium">{treatment.price}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {treatment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
              Ablauf der Behandlung
            </h2>
            <div className="space-y-4">
              {treatment.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Contraindications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-serif">
                    <Check className="w-6 h-6 text-primary" />
                    Vorteile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {treatment.contraindications && (
                <Card className="border-2 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-serif">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                      Nicht geeignet bei
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {treatment.contraindications.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {treatment.faq.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                Häufige Fragen
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {treatment.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Bereit für Ihre Behandlung?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Vereinbaren Sie jetzt Ihren persönlichen Termin.
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

export default Behandlungen;
