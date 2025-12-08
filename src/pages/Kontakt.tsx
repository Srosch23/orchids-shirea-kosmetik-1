import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Calendar,
  Send
} from "lucide-react";
import treatmentRoom from "@/assets/treatment-room.jpg";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:kontakt@shirea-kosmetik.de?subject=Kontaktanfrage von ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0ANachricht:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    toast({
      title: "E-Mail wird geöffnet",
      description: "Ihr E-Mail-Programm wird geöffnet, um die Anfrage zu senden.",
    });
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
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

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Kontaktdaten</h2>
              
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
                        href="https://www.google.com/maps/search/?api=1&query=Sonnenstraße+4+München" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Sonnenstraße 4<br />
                        80331 München
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
                        <p>Dienstag & Donnerstag: 14:00 – 19:00 Uhr</p>
                        <p>Freitag & Samstag: 10:00 – 19:00 Uhr</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 italic">
                        Bitte Termine mindestens 48 Stunden im Voraus absagen.
                      </p>
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

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Nachricht senden</h2>
              <Card className="border-2">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Ihr Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="ihre@email.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+49 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Ihre Nachricht *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Wie kann ich Ihnen helfen?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="mr-2 h-5 w-5" />
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4!2d11.5!3d48.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSonnenstra%C3%9Fe+NCwgODAzMzEgTcO8bmNoZW4!5e0!3m2!1sde!2sde!4v1234567890"
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
              Über Treatwell können Sie rund um die Uhr bequem online Ihren Wunschtermin buchen.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://buchung.treatwell.de/ort/496665/menue/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt online buchen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Kontakt;
