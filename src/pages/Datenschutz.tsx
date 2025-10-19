import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Datenschutzerklärung
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">1. Verantwortliche Stelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Shireá – Kosmetikstudio</strong><br />
              Inhaberin: Schahira Scharar<br />
              Oslostraße 7<br />
              81829 München<br />
              Telefon: +49 0176 20294745<br />
              E-Mail: kontakt@shirea-kosmetik.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">2. Art und Zweck der Datenverarbeitung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir erheben und verarbeiten personenbezogene Daten, wenn Sie unsere Website besuchen, einen Termin online buchen, das Kontaktformular ausfüllen oder uns per E-Mail kontaktieren.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Zwecke der Verarbeitung:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Terminorganisation</li>
              <li>Beantwortung von Anfragen</li>
              <li>Vertragsdurchführung</li>
              <li>Sicherstellung der technischen Funktionsfähigkeit der Website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Rechtsgrundlagen:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Vorvertrag)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: IT-Sicherheit)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung für optionale Cookies/Newsletter)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">3. Cookies und Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Website verwendet technisch notwendige Cookies, um Grundfunktionen zu ermöglichen. Optionale Analyse- oder Marketing-Cookies setzen wir nur nach Ihrer ausdrücklichen Einwilligung ein. Diese können Sie über den Cookie-Banner widerrufen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">4. Weitergabe an Dritte</h2>
            <p className="text-muted-foreground leading-relaxed">
              Eine Weitergabe erfolgt nur, wenn dies gesetzlich erlaubt oder erforderlich ist, z. B. an unseren Webhoster/IT-Dienstleister (mit Auftragsverarbeitungsvertrag) oder an Steuerberatung/Buchhaltung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">5. Speicherdauer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">6. Ihre Rechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie haben folgende Rechte:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Recht auf Auskunft über gespeicherte Daten</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerruf erteilter Einwilligungen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Beschwerden richten Sie an die zuständige Aufsichtsbehörde des Bundeslands Bayern.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}