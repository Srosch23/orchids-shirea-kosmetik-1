import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const priceCategories = [
  {
    title: "Gesichtsbehandlungen",
    price: "ab 45 €",
    description: "Klassische bis spezielle Behandlungen",
  },
  {
    title: "Mikrodermabrasion & Microneedling",
    price: "ab 99 €",
    description: "Innovative Hautbehandlungen",
  },
  {
    title: "Wimpern- & Augenbrauenlifting",
    price: "ab 59 €",
    description: "Ausdrucksstarke Augen",
  },
  {
    title: "Haarentfernung",
    price: "ab 15 €",
    description: "Waxing & Sugaring",
  },
  {
    title: "Wellness & Massagen",
    price: "ab 30 €",
    description: "Entspannung für Körper & Geist",
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Preise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Behandlungspreise
          </h2>
          <p className="text-muted-foreground text-lg">
            Alle Preise verstehen sich als Startpreise – Die finale Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {priceCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="text-2xl font-serif">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  {category.price}
                </div>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
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
