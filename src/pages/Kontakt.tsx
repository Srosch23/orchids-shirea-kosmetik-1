import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Calendar, ArrowLeft, Facebook
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Kontakt = () => {
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
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">
              Vereinbaren Sie Ihren Termin
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kontaktieren Sie mich gerne – ich berate Sie persönlich und freue mich auf unser Gespräch!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">Kontaktdaten</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a href="tel:+4915565510880" className="text-muted-foreground hover:text-primary transition-colors">
                        +49 15565 510880
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a href="mailto:kontakt@shirea-kosmetik.de" className="text-muted-foreground hover:text-primary transition-colors">
                        kontakt@shirea-kosmetik.de
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Sonnenstraße+4+80331+München" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Sonnenstraße 4<br />
                          80331 München
                        </a>
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          Sie finden mein Studio in der Rosalia Beauty Studio.
                        </p>
                      </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                        <div>
                          <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                          <div className="space-y-1 text-muted-foreground text-sm">
                            <p>Montag, Dienstag & Donnerstag: 15:00 – 20:00 Uhr</p>
                            <p>Freitag & Samstag: 10:00 – 20:00 Uhr</p>
                            <p>Mittwoch & Sonntag: geschlossen</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 italic">
                            Individuelle Terminvereinbarungen außerhalb der Öffnungszeiten sind nach Absprache möglich.
                          </p>
                        </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
              <div className="flex flex-wrap gap-3 pt-8 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                    <a href="https://wa.me/4915565510880" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2"
                  asChild
                >
                  <a href="https://www.facebook.com/share/17YSECAhz3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2"
                  asChild
                >
                  <a href="https://www.instagram.com/shirea_kosmetik/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">So finden Sie uns</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5775!2d11.5525!3d48.1372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f36e4c4c75%3A0x6f68f8c3c7b9d4c7!2sSonnenstra%C3%9Fe%204%2C%2080331%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1702000000000!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SHIREÁ Kosmetik München"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Schnell einen Termin buchen?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Kontaktieren Sie mich über WhatsApp für eine schnelle Terminvereinbarung.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="https://wa.me/4915565510880" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
    </MainLayout>
  );
};

export default Kontakt;