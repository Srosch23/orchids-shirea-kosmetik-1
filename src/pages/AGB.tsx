import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AGB() {
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
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          
          <div className="mb-6">
              <p className="text-muted-foreground">
                <strong>Shireá – Kosmetikstudio</strong><br />
                Inhaberin: Schahira Scharar<br />
                Adresse: Sonnenstraße 4, 80331 München
              </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">1. Geltungsbereich</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese AGB gelten für alle Dienstleistungen und Behandlungen, die im Kosmetikstudio Shireá angeboten werden, sowie für alle Online- oder Telefonbuchungen von Terminen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">2. Vertragsabschluss</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Vertrag kommt zustande, sobald der Kunde einen Termin verbindlich gebucht und eine Bestätigung erhalten hat. Buchungen können telefonisch, per E-Mail oder über unsere Online-Terminplattform erfolgen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">3. Leistungen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Shireá bietet kosmetische Behandlungen an, deren Umfang und Dauer im jeweiligen Angebot beschrieben sind. Änderungen oder Sonderwünsche können individuell vereinbart werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">4. Preise und Zahlung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Alle Preise verstehen sich in Euro und inklusive der gesetzlichen Mehrwertsteuer, soweit nicht anders angegeben. Zahlung erfolgt nach der Behandlung in bar, per EC-/Kreditkarte oder per Überweisung, sofern vorher vereinbart.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">5. Terminabsage und -verschiebung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Termine sollten mindestens 24 Stunden vorher abgesagt oder verschoben werden. Bei verspäteter Absage oder Nichterscheinen behalten wir uns vor, 50 % des Behandlungspreises als Ausfallgebühr zu berechnen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">6. Pflichten des Kunden</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kunden müssen wahrheitsgemäß Angaben zu Allergien, Hautproblemen oder gesundheitlichen Einschränkungen machen. Kunden sollen pünktlich erscheinen, um die gebuchte Behandlungszeit voll auszuschöpfen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">7. Haftung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Das Kosmetikstudio haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten entstehen. Für leichte Fahrlässigkeit wird nur bei Verletzung wesentlicher Vertragspflichten gehaftet. Für gesundheitliche Reaktionen auf kosmetische Produkte oder Behandlungstechniken haftet das Studio nur bei Verschulden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">8. Datenschutz</h2>
            <p className="text-muted-foreground leading-relaxed">
              Personenbezogene Daten werden nach den gesetzlichen Vorschriften der DSGVO verarbeitet. Siehe dazu unsere <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">9. Schlussbestimmungen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Gerichtsstand ist, soweit gesetzlich zulässig, München.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}