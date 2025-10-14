import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import treatmentRoom from "@/assets/treatment-room.jpg";

export const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Vereinbaren Sie jetzt Ihren Termin
          </h2>
          <p className="text-muted-foreground text-lg">
            Ich freue mich auf Ihre Nachricht und bin gerne für Sie da!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a href="tel:+4917620294745" className="text-muted-foreground hover:text-primary transition-colors">
                      +49 176 20294745
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
                      href="https://www.google.com/maps/search/?api=1&query=SHIREÁ,+Klenzestraße+57+c,+80469+München" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Klenzestraße 57 c<br />
                      80469 München
                    </a>
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
                      <p>Freitag & Samstag: 09:00 – 18:00 Uhr</p>
                      <p>Dienstag & Donnerstag: nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="https://wa.me/4917620294745" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 border-2"
                asChild
              >
                <a href="https://www.instagram.com/shirea_cosmetics" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={treatmentRoom} 
                alt="SHIREÁ Beauty Space München"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Besuchen Sie uns
                </h3>
                <p className="text-white/90">
                  Entspannen Sie in unserer stilvollen Atmosphäre
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
