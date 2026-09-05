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
    name: "Tamara",
    text: "Absolut zu empfehlen! Ich habe eine eingehende Beratung erhalten, die einzelnen Schritte wurden mit mir besprochen und meiner Meinung nach wurde sehr ordentlich und hygienisch gearbeitet.",
    rating: 5,
  },
  {
    name: "Alina",
    text: "Ich habe mir bereits zum dritten Mal bei Shirea Kosmetik die Augenbrauen machen lassen. Ich bevorzuge natürliche Augenbrauen. Schahira setzt meine Vorstellungen perfekt um.",
    rating: 5,
  },
  {
    name: "Klara",
    text: "Es war wirklich eine tolle Behandlung und ich komme gerne wieder, sehr zu empfehlen.",
    rating: 5,
  },
];

const testimonialPages = Array.from(
  { length: Math.ceil(testimonials.length / 3) },
  (_, page) => testimonials.slice(page * 3, page * 3 + 3),
);

const ratingSources = [
  {
    label: "Google",
    rating: "5,0",
    count: 56,
    url: "https://maps.google.com/?q=Shirea-Kosmetik,+Sonnenstra%C3%9Fe+4,+M%C3%BCnchen",
  },
  {
    label: "Treatwell",
    rating: "4,9",
    count: 39,
    url: "https://www.treatwell.de/ort/shirea-kosmetik/",
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
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {ratingSources.map((source) => (
              <a
                key={source.label}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:border-primary transition-colors"
              >
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </span>
                <span>
                  {source.rating} / 5 bei {source.label}
                  <span className="text-muted-foreground"> · {source.count} Bewertungen</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialPages.map((page, pageIndex) => (
              <div key={pageIndex} className="grid md:grid-cols-3 gap-6 min-w-full snap-start flex-shrink-0">
                {page.map((testimonial, index) => (
                    <Card 
                      key={index}
                      className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg relative overflow-hidden max-w-[400px]"
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
            ))}
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            ← Wischen für mehr Bewertungen →
          </div>
        

      </div>
    </section>
  );
};