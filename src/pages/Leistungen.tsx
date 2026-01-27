import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, Eye, Droplets, Heart, Zap, ArrowRight, Calendar,
  Check, ArrowLeft, Wand2, Activity
} from "lucide-react";

const categories = [
  {
    id: "gesicht",
    icon: Sparkles,
    title: "Gesichtsbehandlungen",
    description: "Von klassischen Anwendungen bis hin zu innovativen Methoden für strahlende Haut.",
        treatments: [
          { name: "Klassisch", link: "/behandlungen/klassische-gesichtsbehandlung" },
          { name: "Luxus", link: "/behandlungen/anti-aging-behandlung" },
          { name: "Anti Aging", link: "/behandlungen/anti-aging-behandlung" },
          { name: "Akne manuelle Reinigung und Seboregulation", link: "/behandlungen/hyperpigmentierung" },
          { name: "Trockene Haut", link: "/behandlungen/detox-behandlung" },
          { name: "Sensitive Balance", link: "/behandlungen/anti-aging-behandlung" },
          { name: "Hyaluron Plus – Intensive Feuchtigkeitsbehandlung", link: "/behandlungen/detox-behandlung" },
          { name: "Anti-Redness-Behandlung: (für Haut mit Couperose & Rosazea)", link: "/behandlungen/hyperpigmentierung" },
        ],
  },
  {
    id: "innovative",
    icon: Wand2,
    title: "Innovative Hautbehandlungen",
    description: "Modernste Technologien für intensive Hauterneuerung und sichtbare Ergebnisse.",
    treatments: [
      { name: "Microdermabrasion", link: "/behandlungen/mikrodermabrasion" },
      { name: "Microneedling", link: "/behandlungen/microneedling" },
      { name: "BB-Glow", link: "/behandlungen/bb-glow" },
    ],
  },
  {
    id: "byonik",
    icon: Zap,
      title: "BYONIK® Laser Behandlungen",
      description: "Innovative pulsgesteuerte Laserbehandlung für tiefenwirksame Hautverjüngung.",
      treatments: [
        { name: "BYONIK® Lift PTL Facial | Gesicht", link: "/behandlungen/byonik-anti-aging" },
        { name: "BYONIK® Lift PTL Facial - DELUXE | Gesicht und Halskontur", link: "/behandlungen/byonik-anti-aging-hals" },
        { name: "BYONIK® Lift PTL Facial - SUPERIOR | Gesicht, Hals und Dekolleté", link: "/behandlungen/byonik-gesicht-hals-dekollete" },
        { name: "BYONIK® Lift Fresh-Up | Gesicht", link: "/behandlungen/byonik-lift-fresh-up" },
        { name: "BYONIK® Skin Lightening | bei erhöhter Pigmentation", link: "/behandlungen/byonik-skin-lightening" },
        { name: "BYONIK® Ecto Repair | Neurosensitive Haut & Akne", link: "/behandlungen/byonik-ecto-repair" },
        { name: "BYONIK® Clean Beauty | ohne Duftstoffe", link: "/behandlungen/byonik-clean-beauty" },
        { name: "BYONIK® Pore Refining Algae Massage | Detox-Spezial", link: "/behandlungen/byonik-pore-refining" },
        { name: "BYONIK® Eye Revolution", link: "/behandlungen/byonik-eye-revolution" },
        { name: "BYONIK® Hand Kiss", link: "/behandlungen/byonik-hand-kiss" },
        { name: "BYONIK® Shapely Arms", link: "/behandlungen/byonik-shapely-arms" },
        { name: "BYONIK® Show your Legs", link: "/behandlungen/byonik-show-your-legs" },
        { name: "BYONIK® Clean & Smooth", link: "/behandlungen/byonik-clean-smooth" },
      ],
  },
  {
    id: "slimyonik",
    icon: Activity,
    title: "Slimyonik Air Bodystyler + Sauerstoffinhalation",
    description: "Effektive Körperformung mit tiefenwirksamen Ergebnissen.",
    treatments: [
      { name: "Einzelbehandlung", link: "/behandlungen/slimyonik" },
    ],
  },
  {
    id: "augen",
    icon: Eye,
    title: "Wimpern & Brauen",
    description: "Für einen ausdrucksstarken Blick mit professionellem Lifting.",
    treatments: [
      { name: "Wimpernlifting", link: "/behandlungen/wimpernlifting" },
      { name: "Augenbrauenlifting", link: "/behandlungen/augenbrauenlifting" },
      { name: "Wimpern färben", link: "/behandlungen/wimpern-brauen-kombi" },
      { name: "Augenbrauen formen", link: "/behandlungen/wimpern-brauen-kombi" },
      { name: "Augenbrauen färben", link: "/behandlungen/wimpern-brauen-kombi" },
      { name: "Augenbrauen formen & färben", link: "/behandlungen/wimpern-brauen-kombi" },
      { name: "Komplett Paket", link: "/behandlungen/wimpern-brauen-kombi" },
      { name: "Henna Brow", link: "/behandlungen/wimpern-brauen-kombi" },
    ],
  },
  {
    id: "haarentfernung",
    icon: Droplets,
    title: "Haarentfernung",
    description: "Sanfte und effektive Methoden für langanhaltend glatte Haut.",
      treatments: [
        { name: "Waxing Arme komplett", link: "/behandlungen/waxing" },
        { name: "Waxing Beine komplett", link: "/behandlungen/waxing" },
        { name: "Waxing Achseln", link: "/behandlungen/waxing" },
        { name: "Waxing Intim Komplett", link: "/behandlungen/waxing" },
      ],
  },
      {
        id: "wellness",
        icon: Heart,
        title: "Massagen",
        description: "Entspannung für Körper und Seele mit wohltuenden Behandlungen.",
          treatments: [
            { name: "Kopf-, Schulter-, Nackenmassage", link: "/behandlungen/klassische-massage" },
            { name: "Klassische Massage", link: "/behandlungen/klassische-massage" },
            { name: "Ganzkörpermassage", link: "/behandlungen/klassische-massage" },
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
                      <h3 className="text-lg font-serif font-semibold mb-4 group-hover:text-primary transition-colors">
                        {treatment.name}
                      </h3>
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
                  <Link to="/kontakt">
                    <Calendar className="mr-2 h-5 w-5" />
                    Jetzt Termin buchen
                  </Link>
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