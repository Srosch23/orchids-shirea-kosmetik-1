import { Instagram, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">SHIREÁ</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Facial & Beauty Space by Shahira<br />
              Ihre Expertin für natürliche Schönheit und professionelle Hautpflege in München.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-background/80">
              <a href="tel:+4917620294745" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +49 176 20294745
              </a>
              <a href="mailto:kontakt@shirea-kosmetik.de" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                kontakt@shirea-kosmetik.de
              </a>
              <a href="https://www.instagram.com/shirea_cosmetics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background transition-colors">
                <Instagram className="w-4 h-4" />
                @shirea_cosmetics
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2 text-sm text-background/80">
              <a href="https://buchung.treatwell.de/ort/496665/menue/" target="_blank" rel="noopener noreferrer" className="block hover:text-background transition-colors">
                Online Buchen
              </a>
              <a href="https://shop.schrammek.de/?coupon-code=CS-31273" target="_blank" rel="noopener noreferrer" className="block hover:text-background transition-colors">
                Online-Shop
              </a>
              <a href="https://www.google.com/search?q=Shirea+Kosmetik+München" target="_blank" rel="noopener noreferrer" className="block hover:text-background transition-colors">
                Google Bewertung
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} SHIREÁ. Alle Rechte vorbehalten.
          </p>
          <p className="mt-2">
            Für eine optimale Terminplanung bitte Termine mindestens 48 Stunden im Voraus absagen.
          </p>
        </div>
      </div>
    </footer>
  );
};
