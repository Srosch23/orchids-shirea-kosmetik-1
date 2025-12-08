import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria K.",
    treatment: "BYONIK® Anti-Aging",
    text: "Die Behandlung war unglaublich entspannend und die Ergebnisse haben mich begeistert. Meine Haut sieht so viel frischer und straffer aus!",
    rating: 5,
  },
  {
    name: "Sandra L.",
    treatment: "Klassische Gesichtsbehandlung",
    text: "Shahira nimmt sich wirklich Zeit für jeden Kunden. Die individuelle Beratung und die professionelle Behandlung sind einfach top!",
    rating: 5,
  },
  {
    name: "Julia M.",
    treatment: "Slimyonik",
    text: "Nach der Slimyonik-Kur fühle ich mich wie neu geboren. Die Atmosphäre im Studio ist so entspannend und einladend.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Kundenstimmen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Was unsere Kundinnen sagen
          </h2>
          <p className="text-muted-foreground text-lg">
            Echte Erfahrungen von zufriedenen Kundinnen
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-16 h-16" />
              </div>
              <CardContent className="p-8 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
