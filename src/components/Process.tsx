import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Sparkles, Heart, Calendar } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Beratungsgespräch",
    description: "Ausführliche Hautanalyse und individuelle Beratung für die optimale Behandlung.",
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Maßgeschneiderte Behandlung",
    description: "Professionelle Durchführung mit hochwertigen Produkten und modernster Technik.",
  },
  {
    number: "3",
    icon: Heart,
    title: "Nachbetreuung",
    description: "Pflegetipps und Empfehlungen für langanhaltende Ergebnisse zu Hause.",
  },
  {
    number: "4",
    icon: Calendar,
    title: "Langfristige Betreuung",
    description: "Regelmäßige Termine für kontinuierliche Hautpflege und optimale Ergebnisse.",
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Unser Prozess
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Ihr Weg zu strahlender Schönheit
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <CardContent className="p-8 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6 text-2xl font-serif font-bold">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 ml-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
