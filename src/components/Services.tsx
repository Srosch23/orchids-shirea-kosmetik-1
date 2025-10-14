import { Sparkles, Eye, Droplets, Heart, FileDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Gesichtsbehandlungen",
    description: "Von klassischen Anwendungen bis hin zu modernen Methoden wie Mikrodermabrasion, Microneedling.",
  },
  {
    icon: Eye,
    title: "Augen & Wimpern",
    description: "Für einen ausdrucksstarken Blick mit Wimpernlifting und Augenbrauenlifting.",
  },
  {
    icon: Droplets,
    title: "Haarentfernung",
    description: "Sanft und effektiv mit professionellem Waxing und Sugaring.",
  },
  {
    icon: Heart,
    title: "Wellness & Pflege",
    description: "Wohltuende Massagen, die Körper und Seele in Einklang bringen.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Beauty-Services im Überblick
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2"
            asChild
          >
            <a href="https://cdn.gamma.app/p904rbteeuhbiao/253607b7bcc344178e3f4216fecda112/original/Brown-Modern-Interior-Trifold-Brochure-8.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown className="mr-2 h-5 w-5" />
              Detaillierte Preisliste als PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
