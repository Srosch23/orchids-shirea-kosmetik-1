import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, Eye, Droplets, Heart, Zap, ArrowRight, Calendar,
  Check, ArrowLeft, Wand2
} from "lucide-react";

const categories = [
  {
    id: "gesicht",
    icon: Sparkles,
    title: "Gesichtsbehandlungen",
    description: "Von klassischen Anwendungen bis hin zu innovativen Methoden für strahlende Haut.",
    treatments: [
      { name: "Klassische Gesichtsbehandlung", duration: "60 Min.", price: "ab 65 €", link: "/behandlungen/klassische-gesichtsbehandlung" },
      { name: "Anti-Aging Behandlung", duration: "75 Min.", price: "ab 95 €", link: "/behandlungen/anti-aging-behandlung" },
      { name: "Hyperpigmentierung", duration: "60 Min.", price: "ab 85 €", link: "/behandlungen/hyperpigmentierung" },
      { name: "Detox-Behandlung", duration: "60 Min.", price: "ab 75 €", link: "/behandlungen/detox-behandlung" },
      { name: "Sensitive Balance Behandlung", duration: "70 Min.", price: "auf Anfrage", link: "/behandlungen/sensitive-balance" },
    ],
  },
  {
    id: "innovative",
    icon: Wand2,
    title: "Innovative Hautbehandlungen",
    description: "Modernste Technologien für intensive Hauterneuerung und sichtbare Ergebnisse.",
    treatments: [
      { name: "Mikrodermabrasion", duration: "45 Min.", price: "ab 69 €", link: "/behandlungen/mikrodermabrasion" },
      { name: "Microneedling", duration: "60 Min.", price: "ab 149 €", link: "/behandlungen/microneedling" },
    ],
  },
  {
    id: "byonik",
    icon: Zap,
    title: "BYONIK® Laser",
    description: "Innovative pulsgesteuerte Laserbehandlung für tiefenwirksame Hautverjüngung.",
    treatments: [
      { name: "BYONIK® Anti-Aging | Gesicht", duration: "75 Min.", price: "169 €", link: "/behandlungen/byonik-anti-aging" },
      { name: "BYONIK® Anti-Aging | Gesicht und Halskontur", duration: "90 Min.", price: "199 €", link: "/behandlungen/byonik-anti-aging-hals" },
      { name: "BYONIK® Anti-Aging | Gesicht, Hals und Dekolleté", duration: "120 Min.", price: "269 €", link: "/behandlungen/byonik-gesicht-hals-dekollete" },
      { name: "BYONIK® Lift Fresh-Up | Gesicht", duration: "60 Min.", price: "149 €", link: "/behandlungen/byonik-lift-fresh-up" },
      { name: "BYONIK® Skin Lightening | bei erhöhter Pigmentation", duration: "75 Min.", price: "179 €", link: "/behandlungen/byonik-skin-lightening" },
      { name: "BYONIK® Ecto Repair | Neurosensitive Haut & Akne", duration: "60 Min.", price: "139 €", link: "/behandlungen/byonik-ecto-repair" },
      { name: "BYONIK® Clean Beauty | ohne Duftstoffe", duration: "60 Min.", price: "129 €", link: "/behandlungen/byonik-clean-beauty" },
      { name: "BYONIK® Pore Refining Algae Massage | Detox-Spezial", duration: "60 Min.", price: "139 €", link: "/behandlungen/byonik-pore-refining" },
      { name: "BYONIK® Eye Revolution", duration: "25 Min.", price: "79 €", link: "/behandlungen/byonik-eye-revolution" },
      { name: "BYONIK® Hand Kiss", duration: "45 Min.", price: "129 €", link: "/behandlungen/byonik-hand-kiss" },
      { name: "BYONIK® Shapely Arms", duration: "45 Min.", price: "129 €", link: "/behandlungen/byonik-shapely-arms" },
      { name: "BYONIK® Show your Legs", duration: "60 Min.", price: "169 €", link: "/behandlungen/byonik-show-your-legs" },
      { name: "BYONIK® Clean & Smooth", duration: "30 Min.", price: "99 €", link: "/behandlungen/byonik-clean-smooth" },
    ],
  },
  {
    id: "augen",
    icon: Eye,
    title: "Augen & Wimpern",
    description: "Für einen ausdrucksstarken Blick mit professionellem Lifting.",
    treatments: [
      { name: "Wimpernlifting", duration: "45 Min.", price: "ab 59 €", link: "/behandlungen/wimpernlifting" },
      { name: "Augenbrauenlifting", duration: "30 Min.", price: "ab 39 €", link: "/behandlungen/augenbrauenlifting" },
      { name: "Wimpern- & Brauenlifting Kombi", duration: "60 Min.", price: "ab 89 €", link: "/behandlungen/wimpern-brauen-kombi" },
    ],
  },
  {
    id: "haarentfernung",
    icon: Droplets,
    title: "Haarentfernung",
    description: "Sanfte und effektive Methoden für langanhaltend glatte Haut.",
    treatments: [
      { name: "Waxing (verschiedene Zonen)", duration: "variabel", price: "ab 15 €", link: "/behandlungen/waxing" },
      { name: "Sugaring (verschiedene Zonen)", duration: "variabel", price: "ab 15 €", link: "/behandlungen/sugaring" },
    ],
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Wellness & Massage",
    description: "Entspannung für Körper und Seele mit wohltuenden Behandlungen.",
    treatments: [
      { name: "Klassische Massage", duration: "30-60 Min.", price: "ab 45 €", link: "/behandlungen/klassische-massage" },
      { name: "Aromaölmassage", duration: "45 Min.", price: "ab 55 €", link: "/behandlungen/aromaoelmassage" },
      { name: "Slimyonik Air Bodystyler + Sauerstoffinhalation", duration: "45 Min.", price: "55 €", link: "/behandlungen/slimyonik" },
    ],
  },
];

const Leistungen = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero */}
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
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Unsere Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
              Professionelle Beauty-Behandlungen
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Entdecken Sie unser umfangreiches Angebot an hochwertigen Behandlungen. 
              Jede Anwendung wird individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, index) => (
        <section 
          key={category.id}
          id={category.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.treatments.map((treatment, i) => (
                  <Card 
                    key={i}
                    className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                        {treatment.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{treatment.duration}</span>
                        <span className="font-semibold text-primary text-base">{treatment.price}</span>
                      </div>
                      <Link 
                        to={treatment.link}
                        className="text-primary font-medium hover:underline inline-flex items-center gap-1 text-sm"
                      >
                        Details ansehen
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Nicht sicher, welche Behandlung passt?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Vereinbaren Sie ein kostenloses Beratungsgespräch und wir finden gemeinsam 
              die perfekte Behandlung für Ihre Bedürfnisse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link to="/preise">
                  Zur Preisübersicht
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Leistungen;