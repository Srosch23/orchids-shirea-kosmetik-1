import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Oliver",
    text: "Ich hatte einen sehr angenehmen Termin bei Shirea. Sie ist äußerst höflich, hat mich zu allem gut beraten und mir immer kurz erklärt was als nächstes passiert. Die Atmosphäre war ruhig und die Musik entspannend. Mir hat es an nichts gefehlt und ich bin sehr froh die Behandlung gebucht zu haben.",
    rating: 5,
  },
  {
    name: "Anastasiia",
    text: "Ich habe Wimpernlifting bei Shahira gemacht und bin äußert zufrieden! Die tolle Beratung und fürsorgliche Begleitung haben mich überzeugt, werde gerne weitere Behandlungen in Anspruch nehmen! Danke liebe Shahira!",
    rating: 5,
  },
  {
    name: "Hannah",
    text: "Wunderschön gemacht, meine Augenbrauen sind genau so geworden, wie ich es mir gewünscht habe. Ich bin sehr zufrieden und freue mich schon auf den nächsten Besuch.",
    rating: 5,
  },
  {
    name: "Marina",
    text: "Sehr professionelle Beratung und Behandlung. Ich fühlte mich von Anfang an sehr gut aufgehoben. Das Ergebnis ist fantastisch!",
    rating: 5,
  },
  {
    name: "Lisa",
    text: "Absolute Empfehlung! Shirea nimmt sich viel Zeit und geht auf alle Wünsche ein. Die Behandlung war super angenehm.",
    rating: 5,
  },
  {
    name: "Sarah",
    text: "Sehr zufrieden mit dem Service und der Qualität. Ich komme definitiv wieder!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        
          <div 
            ref={scrollContainerRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="p-6 relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic text-sm">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        

      </div>
    </section>
  );
};