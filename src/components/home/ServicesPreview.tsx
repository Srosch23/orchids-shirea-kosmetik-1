import { Sparkles, Eye, Droplets, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Gesichtsbehandlungen",
    description: "Von klassischen Anwendungen bis hin zu modernen Methoden wie Mikrodermabrasion, Microneedling und BYONIK® Laser.",
    link: "/leistungen#gesicht",
  },
  {
    icon: Eye,
    title: "Augen & Wimpern",
    description: "Für einen ausdrucksstarken Blick mit Wimpernlifting und Augenbrauenlifting.",
    link: "/leistungen#augen",
  },
  {
    icon: Droplets,
    title: "Haarentfernung",
    description: "Sanft und effektiv mit professionellem Waxing und Sugaring.",
    link: "/leistungen#haarentfernung",
  },
  {
    icon: Heart,
    title: "Wellness & Massage",
    description: "Wohltuende Massagen und Slimyonik-Behandlungen für Körper und Seele.",
    link: "/leistungen#wellness",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Beauty-Services im Überblick
          </h2>
          <p className="text-muted-foreground text-lg">
            Entdecken Sie unser vielfältiges Angebot an professionellen Behandlungen für Ihre Schönheit und Ihr Wohlbefinden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2" asChild>
            <Link to="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
