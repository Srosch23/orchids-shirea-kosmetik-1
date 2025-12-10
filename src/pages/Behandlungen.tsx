import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { 
  Check, AlertTriangle, Calendar, Clock, Euro, ArrowLeft,
  Sparkles, Zap, Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const treatmentData: Record<string, {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  description: string;
  process: string[];
  benefits: string[];
  contraindications?: string[];
  faq: { question: string; answer: string }[];
  image?: string;
}> = {
  "klassische-gesichtsbehandlung": {
    title: "Klassische Gesichtsbehandlung",
    duration: "ca. 60 Min.",
    price: "ab 65 €",
    description: "Entdecken Sie die wahre Strahlkraft Ihrer Haut mit der klassischen Gesichtsbehandlung! Eine präzise Hautanalyse gewährleistet eine auf Ihre Bedürfnisse abgestimmte Pflege, die Ihren Teint zum Leuchten bringt.",
    process: [
      "Ausführliche Hautanalyse und Beratung",
      "Gründliche Reinigung und sanftes Peeling",
      "Tiefenreinigung und ggf. Ausreinigung",
      "Maske passend zu Ihrem Hauttyp",
      "Abschlusspflege mit hochwertigen Seren und Cremes",
    ],
    benefits: [
      "Gründliche Tiefenreinigung",
      "Verbessertes Hautbild",
      "Tiefenentspannung",
      "Individuell angepasste Pflege",
      "Strahlender Teint",
    ],
    faq: [
      { question: "Wie oft sollte ich die Behandlung machen?", answer: "Für optimale Ergebnisse empfehlen wir eine Behandlung alle 4-6 Wochen." },
      { question: "Für welche Hauttypen geeignet?", answer: "Die klassische Gesichtsbehandlung ist für alle Hauttypen geeignet und wird individuell angepasst." },
    ],
  },
  "byonik-anti-aging": {
    title: "BYONIK® Anti-Aging",
    subtitle: "Innovative Lasertherapie",
    duration: "75 Min.",
    price: "169 €",
    description: "Erleben Sie die einzigartige BYONIK® Methode – eine innovative pulsgesteuerte Laserbehandlung, die Ihre Haut in perfekter Harmonie mit Ihrem Herzschlag revitalisiert. Der Kaltlaser arbeitet synchron mit Ihrem natürlichen Rhythmus und transportiert hochkonzentrierte Wirkstoffe tief in die Haut.",
    process: [
      "Hautanalyse und Vorbereitung",
      "Auftragen der BYONIK® Hyaluron-Gele",
      "Pulsgesteuerte Laserbehandlung",
      "Tiefenwirksame Wirkstoffeinschleusung",
      "Abschlusspflege für langanhaltende Ergebnisse",
    ],
    benefits: [
      "Tiefenwirksame Hautverjüngung",
      "Sofortige Straffung und Lifting-Effekt",
      "Verbesserte Durchblutung und Sauerstoffversorgung",
      "Anregung der Kollagenproduktion",
      "Reduzierung von Falten und feinen Linien",
      "Verfeinerung des Hautbildes",
      "Strahlender, frischer Teint",
      "Schmerzfrei und ohne Ausfallzeit",
    ],
    contraindications: [
      "Schwangerschaft und Stillzeit",
      "Akute Hautinfektionen oder Entzündungen",
      "Offene Wunden im Behandlungsbereich",
      "Einnahme von Blutverdünnern",
      "Epilepsie",
      "Herzschrittmacher",
    ],
    faq: [
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die BYONIK® Behandlung ist völlig schmerzfrei und sehr entspannend." },
      { question: "Wie schnell sehe ich Ergebnisse?", answer: "Erste Ergebnisse sind sofort sichtbar. Für optimale Langzeitergebnisse empfehlen wir eine Kur von 4-6 Behandlungen." },
      { question: "Gibt es Ausfallzeiten?", answer: "Nein, Sie können direkt nach der Behandlung Ihren normalen Aktivitäten nachgehen." },
    ],
  },
  "slimyonik": {
    title: "Slimyonik Air Bodystyler",
    subtitle: "Effektive Körperformung mit tiefenwirksamen Ergebnissen",
    duration: "45 Min.",
    price: "55 €",
    description: "Erleben Sie effektive Körperformung mit tiefenwirksamen Ergebnissen und wählen Sie aus acht individuell anpassbaren Programmen für Ihre persönlichen Ziele. Der Slimyonik Air Bodystyler ist medizinisch zugelassen, individuell anpassbar und sorgt für eine entspannende Behandlung. Die ganzheitliche Methode behandelt von innen und außen für nachhaltige Ergebnisse – vielseitig einsetzbar bei Cellulite, müden Beinen, zur Umfangsreduktion und Hautstraffung.",
    process: [
      "Ausführliche Beratung und Programmauswahl",
      "Anlegen des speziellen Bodystyler-Anzugs",
      "Individuell angepasste Druckwellenbehandlung",
      "Optional: Sauerstoffinhalation zur Verstärkung",
      "Entspannende Nachruhe",
      "Abschließende Beratung zu Folgeanwendungen",
    ],
    benefits: [
      "Medizinisch zugelassen und sicher",
      "Individuell anpassbar an Ihre Ziele",
      "Entspannend und wohltuend",
      "Ganzheitliche Behandlung von innen und außen",
      "Nachhaltige Ergebnisse",
      "Effektive Cellulite-Reduktion",
      "Umfangsreduktion und Körperformung",
      "Hautstraffung und Festigung",
      "Aktivierung des Lymphsystems",
      "Verbesserung der Durchblutung",
      "Hilfe bei müden, schweren Beinen",
      "Tiefe Entspannung und Wohlbefinden",
    ],
    contraindications: [
      "Akute Venenentzündung",
      "Thrombose oder Thromboseverdacht",
      "Akute entzündliche oder fieberhafte Erkrankungen",
      "Geschwollene Lymphknoten",
      "Krebserkrankungen",
      "Nierenerkrankungen",
      "Arterielle Durchblutungsstörungen",
      "Wundrose, offene Wunden",
      "Epilepsie",
      "Bei Herz- oder Nierenvorerkrankungen fragen Sie bitte Ihren Arzt",
    ],
    faq: [
      { question: "Wann ist Slimyonik die richtige Wahl für mich?", answer: "Slimyonik ist ideal bei: Fettabbau, Umfangsreduktion, Hautstraffung, Prävention und Reduktion von Cellulite, Lipödemen, Lymphödemen, Wassereinlagerungen, Entstauung des Bindegewebes, Regeneration nach dem Sport, Ermüdungszuständen, Sportmassage zum Abbau entstandener Säuren (Detox), Entspannung & Stressabbau, sowie vor & nach Liposuktion, Kavitation, niederfrequentem Ultraschall, Kryolipolyse, Lypolight, Radiofrequenz und Coolwaves." },
      { question: "Welche Programme gibt es?", answer: "Wir bieten sechs verschiedene Programme: Slim Massage für Körperformung, Cellulite Massage zur Hautstraffung, Relax Massage zur Entspannung, Sport Massage für Regeneration, Lymph Massage zur Entschlackung und Laser-Lipolyse RF für intensive Behandlungen." },
      { question: "Wie viele Behandlungen brauche ich?", answer: "Für sichtbare Ergebnisse empfehlen wir die Basic-Kur mit 10 Behandlungen oder die Professional-Kur mit 12 Behandlungen. Eine Einzelbehandlung ist perfekt zum Kennenlernen." },
      { question: "Welche Behandlungspakete bieten Sie an?", answer: "Einzelbehandlung: 55 € – perfekt zum Kennenlernen. Basic-Kur (10 Behandlungen): 499 € statt 550 € inkl. Behandlungsgutschein für Familie und Freunde – ideal für sichtbare Ergebnisse. Professional-Kur (12 Behandlungen): 599 € statt 660 € inkl. Behandlungsgutschein und kostenlosem Produkt – maximale Wirkung für langfristige Erfolge." },
      { question: "Was ist die Slim Massage?", answer: "Die Slim Massage ist speziell auf Körperformung und Fettreduktion ausgelegt. Sie aktiviert den Stoffwechsel und unterstützt den Abbau von Fettdepots." },
      { question: "Was bewirkt die Cellulite Massage?", answer: "Die Cellulite Massage verbessert die Hautstruktur, strafft das Bindegewebe und reduziert sichtbar das Erscheinungsbild von Cellulite." },
      { question: "Wie wirkt die Relax Massage?", answer: "Die Relax Massage bietet tiefe Entspannung, baut Stress ab und sorgt für ein ganzheitliches Wohlgefühl." },
      { question: "Für wen ist die Sport Massage geeignet?", answer: "Die Sport Massage ist ideal für Sportler zur Regeneration, zum Abbau von Muskelkater und entstandener Säuren (Detox)." },
      { question: "Was macht die Lymph Massage?", answer: "Die Lymph Massage aktiviert das Lymphsystem, fördert die Entschlackung und hilft bei Wassereinlagerungen und Schwellungen." },
      { question: "Was ist Laser-Lipolyse RF?", answer: "Die Laser-Lipolyse RF kombiniert die Druckwellentherapie mit Radiofrequenz-Technologie für eine intensivierte Fettreduktion und Hautstraffung." },
    ],
  },
  "wimpernlifting": {
    title: "Wimpernlifting",
    subtitle: "Natürlich geschwungene Wimpern",
    duration: "45 Min.",
    price: "ab 59 €",
    description: "Verleihen Sie Ihren natürlichen Wimpern einen wunderschönen Schwung – ganz ohne künstliche Extensions. Das Wimpernlifting hebt und formt Ihre eigenen Wimpern sanft nach oben, sodass Ihr Blick sofort offener und wacher wirkt. Ein traumhafter Effekt, der bis zu 8 Wochen anhält.",
    process: [
      "Reinigung der Wimpern und Augenpartie",
      "Auswahl der passenden Lifting-Größe",
      "Sanftes Auftragen des Lifting-Serums",
      "Fixierung der neuen Wimpernform",
      "Optional: Wimpernfärbung für mehr Intensität",
      "Pflegende Abschlussbehandlung",
    ],
    benefits: [
      "Sofort sichtbarer Schwung und Länge",
      "Offener, wacher Blick",
      "Kein tägliches Wimpernzangen-Styling nötig",
      "Wasserfest und alltagstauglich",
      "Natürliches Ergebnis ohne Kleber",
      "Hält bis zu 8 Wochen",
    ],
    faq: [
      { question: "Wie lange hält das Wimpernlifting?", answer: "Das Ergebnis hält je nach Wimpernzyklus 6-8 Wochen." },
      { question: "Kann ich danach Mascara verwenden?", answer: "Ja, nach 24 Stunden können Sie wie gewohnt Mascara auftragen – das Ergebnis wird sogar noch intensiver." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die Behandlung ist völlig schmerzfrei und sehr entspannend." },
    ],
  },
  "augenbrauenlifting": {
    title: "Augenbrauenlifting",
    subtitle: "Perfekt geformte Brauen",
    duration: "30 Min.",
    price: "ab 39 €",
    description: "Definierte, gepflegte Augenbrauen verleihen Ihrem Gesicht Ausdruck und Struktur. Mit dem Augenbrauenlifting bringen wir Ihre Brauen in eine perfekte, natürlich wirkende Form. Die Härchen werden sanft angehoben und fixiert – für einen soften, fedrigen Look, der mehrere Wochen hält.",
    process: [
      "Beratung zur gewünschten Brauenform",
      "Reinigung der Augenbrauenpartie",
      "Auftragen des Lifting-Serums",
      "Formgebung und Fixierung der Härchen",
      "Optional: Färbung für intensivere Farbe",
      "Pflegende Abschlussbehandlung",
    ],
    benefits: [
      "Natürlich volle, definierte Brauen",
      "Langanhaltendes Styling ohne tägliches Bürsten",
      "Fedrig-weicher Brow-Lamination-Effekt",
      "Ideal für widerspenstige Härchen",
      "Betont die natürliche Brauenform",
      "Hält bis zu 6 Wochen",
    ],
    faq: [
      { question: "Wie lange hält das Augenbrauenlifting?", answer: "Das Ergebnis hält etwa 4-6 Wochen, abhängig vom Haarwachstum." },
      { question: "Kann ich meine Brauen danach schminken?", answer: "Ja, nach 24 Stunden können Sie Ihre Brauen wie gewohnt mit Gel oder Puder stylen." },
    ],
  },
  "wimpern-brauen-kombi": {
    title: "Wimpern- & Brauenlifting Kombi",
    subtitle: "Komplett-Paket für den perfekten Blick",
    duration: "60 Min.",
    price: "ab 89 €",
    description: "Gönnen Sie sich das perfekte Verwöhn-Paket für Ihre Augenpartie. Mit der Kombination aus Wimpern- und Augenbrauenlifting erhalten Sie einen strahlenden, ausdrucksstarken Blick – alles in einer entspannten Behandlung. Ideal für alle, die einen natürlich-gepflegten Look ohne tägliches Styling wünschen.",
    process: [
      "Reinigung der gesamten Augenpartie",
      "Wimpernlifting mit passender Größenwahl",
      "Fixierung und Pflege der Wimpern",
      "Augenbrauenlifting und Formgebung",
      "Optional: Färbung von Wimpern und Brauen",
      "Pflegende Abschlussbehandlung",
    ],
    benefits: [
      "Harmonisches Gesamtergebnis für die Augenpartie",
      "Zeit- und kostenersparend im Vergleich zu Einzelbehandlungen",
      "Offener, wacher und gepflegter Blick",
      "Kein tägliches Styling nötig",
      "Natürlicher, ausdrucksstarker Look",
      "Langanhaltendes Ergebnis bis zu 8 Wochen",
    ],
    faq: [
      { question: "Spare ich bei der Kombi-Behandlung?", answer: "Ja, die Kombination ist günstiger als beide Behandlungen einzeln zu buchen." },
      { question: "Wie lange dauert die gesamte Behandlung?", answer: "Die Kombi-Behandlung dauert etwa 60 Minuten – genug Zeit zum Entspannen." },
    ],
  },
  "waxing": {
    title: "Waxing",
    subtitle: "Glatte Haut mit Warmwachs",
    duration: "variabel",
    price: "ab 15 €",
    description: "Genießen Sie seidig glatte Haut mit unserer professionellen Waxing-Behandlung. Mit hochwertigem Warmwachs entfernen wir unerwünschte Haare sanft und gründlich. Das Ergebnis: wochenlang glatte, gepflegte Haut ohne tägliche Rasur. Ideal für verschiedene Körperzonen – von Beinen bis zum Gesicht.",
    process: [
      "Hautanalyse und Vorbereitung der Zone",
      "Reinigung und Desinfektion",
      "Auftragen des warmen Wachses",
      "Schnelle, präzise Haarentfernung",
      "Entfernung von Wachsrückständen",
      "Beruhigende Pflege mit kühlendem Gel",
    ],
    benefits: [
      "Glatte Haut für 3-4 Wochen",
      "Haare wachsen feiner und weicher nach",
      "Keine Stoppeln wie bei der Rasur",
      "Hautpeeling-Effekt inklusive",
      "Für viele Körperzonen geeignet",
      "Schnelle Behandlung mit langem Ergebnis",
    ],
    faq: [
      { question: "Wie lang müssen die Haare sein?", answer: "Die Haare sollten mindestens 0,5 cm lang sein für ein optimales Ergebnis." },
      { question: "Ist Waxing schmerzhaft?", answer: "Der Schmerz ist kurz und erträglich. Mit regelmäßigen Behandlungen wird es weniger empfindlich." },
      { question: "Welche Zonen können behandelt werden?", answer: "Wir bieten Waxing für Beine, Arme, Achseln, Gesicht, Bikinizone und weitere Bereiche an." },
    ],
  },
  "sugaring": {
    title: "Sugaring",
    subtitle: "Sanfte Haarentfernung mit Zuckerpaste",
    duration: "variabel",
    price: "ab 15 €",
    description: "Entdecken Sie die sanfteste Art der Haarentfernung: Sugaring. Diese traditionelle Methode nutzt eine rein natürliche Zuckerpaste, die besonders hautschonend arbeitet. Perfekt für empfindliche Haut und sensible Bereiche. Die Haare werden in Wuchsrichtung entfernt – für weniger Irritationen und ein samtweiches Ergebnis.",
    process: [
      "Hautanalyse und Beratung",
      "Reinigung und Vorbereitung der Haut",
      "Auftragen der natürlichen Zuckerpaste",
      "Sanftes Entfernen in Wuchsrichtung",
      "Gründliche Nachreinigung",
      "Beruhigende, pflegende Nachbehandlung",
    ],
    benefits: [
      "100% natürliche Inhaltsstoffe",
      "Besonders sanft zu empfindlicher Haut",
      "Weniger eingewachsene Haare",
      "Peeling-Effekt für samtige Haut",
      "Hypoallergen und für Allergiker geeignet",
      "Langanhaltend glatte Haut bis zu 4 Wochen",
    ],
    faq: [
      { question: "Was ist der Unterschied zum Waxing?", answer: "Sugaring ist sanfter, verwendet nur natürliche Zutaten und entfernt die Haare in Wuchsrichtung, was weniger schmerzhaft ist." },
      { question: "Ist Sugaring für empfindliche Haut geeignet?", answer: "Ja, Sugaring ist ideal für empfindliche Haut, da die Paste nur an den Haaren haftet, nicht an der Haut." },
    ],
  },
  "klassische-massage": {
    title: "Klassische Massage",
    subtitle: "Entspannung pur",
    duration: "30–60 Min.",
    price: "ab 45 €",
    description: "Lassen Sie den Alltag hinter sich und gönnen Sie sich eine wohltuende klassische Massage. Mit gezielten Grifftechniken lösen wir Verspannungen, fördern die Durchblutung und schenken Ihnen tiefe Entspannung. Ob Rücken, Nacken oder Ganzkörper – diese Massage ist Balsam für Körper und Seele.",
    process: [
      "Kurze Beratung zu Problemzonen",
      "Bequeme Lagerung auf der Massageliege",
      "Auftragen von warmem Massageöl",
      "Gezielte Massagegriffe für Ihre Bedürfnisse",
      "Lockerung von Verspannungen und Triggerpunkten",
      "Entspannende Ausklangphase",
    ],
    benefits: [
      "Lösung von Muskelverspannungen",
      "Verbesserung der Durchblutung",
      "Stressabbau und tiefe Entspannung",
      "Förderung des allgemeinen Wohlbefindens",
      "Linderung von Kopf- und Nackenschmerzen",
      "Stärkung des Immunsystems",
    ],
    faq: [
      { question: "Welche Dauer empfehlen Sie?", answer: "Für eine gezielte Behandlung einzelner Bereiche reichen 30 Minuten. Für Ganzkörper-Entspannung empfehlen wir 60 Minuten." },
      { question: "Wie oft sollte ich zur Massage kommen?", answer: "Bei regelmäßigen Verspannungen empfehlen wir alle 2-4 Wochen eine Behandlung." },
    ],
  },
  "aromaoelmassage": {
    title: "Aromaölmassage",
    subtitle: "Wellness für alle Sinne",
    duration: "45 Min.",
    price: "ab 55 €",
    description: "Tauchen Sie ein in eine Welt der Düfte und Entspannung. Unsere Aromaölmassage verbindet sanfte Massagegriffe mit der Kraft ätherischer Öle. Je nach Stimmung und Bedürfnis wählen wir das passende Aromaöl – ob beruhigend, energetisierend oder ausgleichend. Ein ganzheitliches Erlebnis für Körper und Geist.",
    process: [
      "Auswahl des passenden Aromaöls",
      "Einstimmung mit Duftinhalation",
      "Sanfte, fließende Massagegriffe",
      "Einarbeitung der ätherischen Öle",
      "Ganzkörper-Entspannungsmassage",
      "Ruhige Nachruhe zum Nachspüren",
    ],
    benefits: [
      "Tiefenentspannung für Körper und Geist",
      "Aromatherapie-Wirkung der ätherischen Öle",
      "Stimmungsaufhellend und stresslindernd",
      "Pflege und Nährung der Haut",
      "Förderung von innerem Gleichgewicht",
      "Ganzheitliches Wellness-Erlebnis",
    ],
    faq: [
      { question: "Welche Aromaöle werden verwendet?", answer: "Wir nutzen hochwertige ätherische Öle wie Lavendel, Rose, Eucalyptus oder Zitrus – je nach Ihren Wünschen." },
      { question: "Ist die Massage auch bei Allergien möglich?", answer: "Ja, bitte teilen Sie uns Allergien mit. Wir wählen dann ein passendes, hautverträgliches Öl." },
    ],
  },
  "byonik-eye-revolution": {
    title: "BYONIK® Eye Revolution",
    subtitle: "Intensive Augenpflege mit Lasertechnologie",
    duration: "25 Min.",
    price: "79 €",
    description: "Schenken Sie Ihrer empfindlichen Augenpartie die Aufmerksamkeit, die sie verdient. Die BYONIK® Eye Revolution ist eine hochwirksame Laserbehandlung, die speziell für die zarte Haut rund um die Augen entwickelt wurde. Feine Linien, Schwellungen und dunkle Augenringe werden sichtbar reduziert – für einen wachen, strahlenden Blick.",
    process: [
      "Sanfte Reinigung der Augenpartie",
      "Auftragen des speziellen BYONIK® Augen-Gels",
      "Pulsgesteuerte Laserbehandlung der Augenzone",
      "Einschleusung hochwertiger Wirkstoffe",
      "Kühlende, abschwellende Maske",
      "Abschlusspflege mit Augencreme",
    ],
    benefits: [
      "Reduktion von Augenringen und Schwellungen",
      "Glättung feiner Linien und Krähenfüße",
      "Straffung der empfindlichen Augenpartie",
      "Aufhellung dunkler Schatten",
      "Sofort sichtbare Frische",
      "Schmerzfrei und ohne Ausfallzeit",
    ],
    contraindications: [
      "Akute Augeninfektionen",
      "Frische Augenoperationen",
      "Schwangerschaft und Stillzeit",
      "Einnahme von Blutverdünnern",
    ],
    faq: [
      { question: "Ist die Behandlung für empfindliche Augen geeignet?", answer: "Ja, die Behandlung ist sehr sanft und speziell für die empfindliche Augenpartie entwickelt." },
      { question: "Wie oft sollte ich die Behandlung wiederholen?", answer: "Für optimale Ergebnisse empfehlen wir eine Kur von 4-6 Behandlungen im Abstand von 1-2 Wochen." },
      { question: "Kann ich danach Make-up auftragen?", answer: "Wir empfehlen, 24 Stunden auf Augen-Make-up zu verzichten, um die Wirkstoffe optimal einwirken zu lassen." },
    ],
  },
  "byonik-lift-fresh-up": {
    title: "BYONIK® Lift Fresh-Up | Gesicht",
    subtitle: "Schnelle Erfrischung mit Laser",
    duration: "60 Min.",
    price: "149 €",
    description: "Die perfekte Behandlung für zwischendurch: Das BYONIK® Lift Fresh-Up ist Ihre Express-Lösung für sofortige Frische und Strahlkraft. In 60 Minuten schenken wir Ihrer Haut einen sichtbaren Boost – ideal vor wichtigen Terminen, Events oder einfach, um sich selbst etwas Gutes zu tun.",
    process: [
      "Schnelle Hautreinigung",
      "Auftragen des BYONIK® Hyaluron-Gels",
      "Gezielte Laserbehandlung der Gesichtszonen",
      "Wirkstoff-Aktivierung für sofortigen Glow",
      "Leichte Abschlusspflege",
    ],
    benefits: [
      "Sofortiger Frische-Kick",
      "Strahlender Teint in Minuten",
      "Ideal vor besonderen Anlässen",
      "Keine Ausfallzeit",
      "Schnelle Durchführung in der Mittagspause",
      "Sichtbarer Lifting-Effekt",
    ],
    faq: [
      { question: "Wie schnell sehe ich Ergebnisse?", answer: "Die Ergebnisse sind sofort nach der Behandlung sichtbar – perfekt für spontane Termine." },
      { question: "Wie lange hält der Effekt?", answer: "Der Frische-Effekt hält mehrere Tage an und kann durch regelmäßige Behandlungen verlängert werden." },
      { question: "Kann ich die Behandlung in der Mittagspause machen?", answer: "Absolut! Die 30-minütige Behandlung ist perfekt für einen schnellen Beauty-Boost zwischendurch." },
    ],
  },
  "byonik-gesicht-hals-dekollete": {
    title: "BYONIK® Anti-Aging | Gesicht, Hals und Dekolleté",
    subtitle: "Ganzheitliche Anti-Aging Behandlung",
    duration: "120 Min.",
    price: "269 €",
    description: "Erleben Sie die umfassendste BYONIK® Behandlung für ein harmonisches Gesamtbild. Diese Premium-Behandlung vereint Gesicht, Hals und Dekolleté in einer luxuriösen Session. Die pulsgesteuerte Lasertechnologie revitalisiert alle Zonen gleichmäßig – für ein ebenmäßiges, jugendliches Erscheinungsbild ohne sichtbare Übergänge.",
    process: [
      "Ausführliche Hautanalyse aller Zonen",
      "Tiefenreinigung von Gesicht, Hals und Dekolleté",
      "Auftragen der BYONIK® Hyaluron-Gele",
      "Pulsgesteuerte Laserbehandlung aller Bereiche",
      "Intensive Wirkstoffeinschleusung",
      "Luxuriöse Abschlusspflege mit Massage",
    ],
    benefits: [
      "Einheitliches, verjüngtes Hautbild",
      "Keine sichtbaren Übergänge zwischen Zonen",
      "Intensive Straffung und Festigung",
      "Langanhaltende Hydratation",
      "Reduktion von Falten und Pigmentflecken",
      "Luxuriöses Wellness-Erlebnis",
    ],
    contraindications: [
      "Schwangerschaft und Stillzeit",
      "Akute Hautinfektionen",
      "Offene Wunden im Behandlungsbereich",
      "Herzschrittmacher",
      "Einnahme von Blutverdünnern",
    ],
    faq: [
      { question: "Warum sollte ich Hals und Dekolleté mitbehandeln?", answer: "Diese Zonen zeigen oft als erstes Alterserscheinungen. Eine gemeinsame Behandlung sorgt für ein harmonisches Gesamtbild." },
      { question: "Wie viele Behandlungen sind empfehlenswert?", answer: "Wir empfehlen eine Kur von 4-6 Behandlungen für optimale, langanhaltende Ergebnisse." },
      { question: "Kann ich danach in die Sonne?", answer: "Wir empfehlen 48 Stunden Sonnenschutz und keine intensive Sonneneinstrahlung für beste Ergebnisse." },
    ],
  },
  "detox-behandlung": {
    title: "Detox-Behandlung",
    subtitle: "Tiefenreinigung für reine Haut",
    duration: "60 Min.",
    price: "ab 75 €",
    description: "Befreien Sie Ihre Haut von Umweltgiften, Unreinheiten und Stress. Unsere Detox-Behandlung ist eine intensive Tiefenreinigung, die Ihre Haut von innen heraus erneuert. Durch spezielle Wirkstoffe und Techniken werden Schlacken ausgeleitet, Poren verfeinert und der natürliche Glow Ihrer Haut wiederhergestellt.",
    process: [
      "Hautanalyse und Beratung",
      "Tiefenreinigung mit Detox-Produkten",
      "Sanftes Enzym- oder Fruchtsäurepeeling",
      "Ausreinigung und Porenreinigung",
      "Entgiftende Maske mit Aktivkohle oder Heilerde",
      "Feuchtigkeitsspendende Abschlusspflege",
    ],
    benefits: [
      "Entfernung von Giftstoffen und Unreinheiten",
      "Verfeinerte Poren",
      "Klarer, strahlender Teint",
      "Verbesserte Sauerstoffversorgung der Haut",
      "Reduktion von Mitessern und Pickeln",
      "Frisches, gereinigtes Hautgefühl",
    ],
    faq: [
      { question: "Für welchen Hauttyp ist die Detox-Behandlung geeignet?", answer: "Besonders empfehlenswert für unreine, müde oder gestresste Haut – aber auch als regelmäßige Tiefenreinigung für jeden Hauttyp." },
      { question: "Wie oft sollte ich eine Detox-Behandlung machen?", answer: "Je nach Hauttyp empfehlen wir alle 4-8 Wochen eine Behandlung zur Hautentgiftung." },
      { question: "Kann meine Haut danach gerötet sein?", answer: "Eine leichte Rötung ist normal und klingt innerhalb weniger Stunden ab." },
    ],
  },
  "hyperpigmentierung": {
    title: "Hyperpigmentierung",
    subtitle: "Behandlung von Pigmentflecken",
    duration: "60 Min.",
    price: "ab 85 €",
    description: "Verabschieden Sie sich von ungleichmäßigem Teint und störenden Pigmentflecken. Unsere spezialisierte Behandlung zielt gezielt auf Hyperpigmentierung – sei es durch Sonne, Hormone oder Hautalterung. Mit hochwirksamen Aufhellungswirkstoffen und modernsten Techniken bringen wir Ihren Teint wieder ins Gleichgewicht.",
    process: [
      "Detaillierte Hautanalyse der Pigmentierung",
      "Sanfte, gründliche Reinigung",
      "Aufhellungsserum mit konzentrierten Wirkstoffen",
      "Optional: Spezialbehandlung mit Laser oder Peeling",
      "Intensivmaske zur Pigmentregulierung",
      "Abschluss mit UV-Schutz und Pflegecreme",
    ],
    benefits: [
      "Sichtbare Aufhellung von Pigmentflecken",
      "Ebenmäßigerer Hautton",
      "Vorbeugung neuer Pigmentierung",
      "Strahlender, einheitlicher Teint",
      "Langfristige Verbesserung bei regelmäßiger Anwendung",
      "Professionelle Beratung zur Heimpflege",
    ],
    faq: [
      { question: "Wie entstehen Pigmentflecken?", answer: "Pigmentflecken können durch Sonne, hormonelle Veränderungen, Hautalterung oder Entzündungen entstehen." },
      { question: "Wie viele Behandlungen brauche ich?", answer: "Je nach Intensität der Pigmentierung empfehlen wir 4-8 Behandlungen im Abstand von 2-4 Wochen." },
      { question: "Muss ich Sonnenschutz verwenden?", answer: "Ja, konsequenter Sonnenschutz ist essentiell für den Behandlungserfolg und zur Vorbeugung neuer Flecken." },
    ],
  },
  "sensitive-balance": {
    title: "Sensitive Balance Behandlung",
    subtitle: "Beruhigende & stärkende Pflege für empfindliche Haut",
    duration: "ca. 70 Min.",
    price: "auf Anfrage",
    description: "Diese Behandlung ist besonders wohltuend für sehr empfindliche und gereizte Haut. Die innovative BioCell-Maske beruhigt, stärkt die Hautbarriere, verbessert den Feuchtigkeitshaushalt und bringt die Haut zurück in ihr natürliches Gleichgewicht. Fühlen Sie sich wieder wohl in Ihrer Haut!",
    process: [
      "Sanfte Hautreinigung mit beruhigenden Produkten",
      "Hautanalyse zur Bestimmung der Empfindlichkeit",
      "Beruhigendes Serum zur Irritationslinderung",
      "Auftragen der innovativen BioCell-Maske",
      "Einwirkzeit zur Regeneration der Hautbarriere",
      "Abschlusspflege mit feuchtigkeitsspendenden Wirkstoffen",
    ],
    benefits: [
      "Beruhigung irritierter und gereizter Haut",
      "Stärkung der natürlichen Hautbarriere",
      "Verbesserung des Feuchtigkeitshaushalts",
      "Wiederherstellung des natürlichen Hautgleichgewichts",
      "Reduktion von Rötungen und Empfindlichkeiten",
      "Sofortiges Wohlgefühl und Komfort",
      "Langanhaltende Beruhigung",
    ],
    faq: [
      { question: "Für wen ist diese Behandlung geeignet?", answer: "Die Sensitive Balance Behandlung ist ideal für Menschen mit sehr empfindlicher, irritierter oder gereizter Haut, die Beruhigung und Stärkung benötigt." },
      { question: "Was ist die BioCell-Maske?", answer: "Die BioCell-Maske ist eine innovative Maske, die speziell entwickelt wurde, um die Hautbarriere zu stärken und den Feuchtigkeitshaushalt zu verbessern." },
      { question: "Wie oft sollte ich diese Behandlung machen?", answer: "Bei anhaltenden Hautproblemen empfehlen wir eine regelmäßige Behandlung alle 4-6 Wochen. Bei akuten Irritationen kann auch häufiger behandelt werden." },
      { question: "Ist die Behandlung für Rosacea geeignet?", answer: "Ja, die sanfte Formulierung ist auch für Haut mit Rosacea-Neigung geeignet und kann Rötungen und Reizungen lindern." },
    ],
  },
  "microneedling": {
    title: "Microneedling",
    subtitle: "Hauterneuerung durch Kollagenstimulation",
    duration: "60 Min.",
    price: "ab 149 €",
    description: "Aktivieren Sie die natürliche Regenerationskraft Ihrer Haut mit Microneedling. Feine Mikronadeln erzeugen kontrollierte Mikroverletzungen, die die Kollagen- und Elastinproduktion anregen. Das Ergebnis: festere, glattere und jugendlicher wirkende Haut – ganz ohne invasive Eingriffe.",
    process: [
      "Gründliche Reinigung und Desinfektion",
      "Auftragen einer betäubenden Creme (optional)",
      "Präzise Microneedling-Behandlung",
      "Einschleusung von Hyaluron oder Vitaminseren",
      "Beruhigende Maske",
      "Kühlende Abschlusspflege",
    ],
    benefits: [
      "Anregung der körpereigenen Kollagenproduktion",
      "Verbesserung von Narben und Aknenarben",
      "Verfeinerung des Hautbildes",
      "Reduktion von feinen Linien",
      "Straffere, elastischere Haut",
      "Verbesserte Wirkstoffaufnahme",
    ],
    contraindications: [
      "Aktive Akne oder Hautinfektionen",
      "Blutverdünnende Medikamente",
      "Schwangerschaft",
      "Frische Sonnenbräune",
      "Neigung zu Keloidnarben",
    ],
    faq: [
      { question: "Ist Microneedling schmerzhaft?", answer: "Durch die betäubende Creme ist die Behandlung gut auszuhalten. Sie spüren ein leichtes Kribbeln." },
      { question: "Wie lange ist die Ausfallzeit?", answer: "Die Haut kann 1-3 Tage gerötet sein. Make-up sollte 24 Stunden vermieden werden." },
      { question: "Wann sehe ich Ergebnisse?", answer: "Erste Verbesserungen zeigen sich nach 2-4 Wochen. Optimale Ergebnisse nach 3-6 Behandlungen." },
    ],
  },
  "mikrodermabrasion": {
    title: "Mikrodermabrasion",
    subtitle: "Mechanisches Peeling für strahlende Haut",
    duration: "45 Min.",
    price: "ab 69 €",
    description: "Enthüllen Sie die frische, strahlende Haut unter der Oberfläche. Die Mikrodermabrasion ist ein schonendes mechanisches Peeling, das abgestorbene Hautzellen sanft entfernt und die Zellerneuerung anregt. Ihre Haut wird glatter, ebenmäßiger und nimmt Pflegeprodukte deutlich besser auf.",
    process: [
      "Gründliche Hautreinigung",
      "Sanfte Mikrodermabrasion mit Kristallen oder Diamant",
      "Absaugung abgetragener Hautzellen",
      "Beruhigende Maske",
      "Feuchtigkeitspflege und Sonnenschutz",
    ],
    benefits: [
      "Sofort glattere, weichere Haut",
      "Verfeinertes Hautbild",
      "Reduktion von feinen Linien",
      "Verbesserung von Narben und Pigmentflecken",
      "Bessere Aufnahme von Pflegeprodukten",
      "Keine Ausfallzeit",
    ],
    faq: [
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, Sie spüren nur ein leichtes Kratzen. Die Behandlung ist sehr angenehm." },
      { question: "Wie oft sollte ich Mikrodermabrasion machen?", answer: "Für optimale Ergebnisse empfehlen wir alle 2-4 Wochen eine Behandlung." },
      { question: "Kann ich danach Make-up auftragen?", answer: "Wir empfehlen, 24 Stunden auf Make-up zu verzichten, damit die Haut sich erholen kann." },
    ],
  },
  "bb-glow": {
    title: "BB-Glow",
    subtitle: "Semi-permanente Foundation für strahlende Haut",
    duration: "60 Min.",
    price: "ab 99 €",
    description: "BB-Glow ist eine innovative Behandlung, die Ihrer Haut einen natürlichen, makellosen Teint verleiht – ganz ohne tägliches Make-up. Mittels Microneedling werden spezielle BB-Seren mit hautpflegenden Wirkstoffen und Pigmenten in die Haut eingearbeitet. Das Ergebnis: Ein ebenmäßiger, strahlender Teint, der Unreinheiten, Rötungen und kleine Makel kaschiert.",
    process: [
      "Ausführliche Hautanalyse und Farbberatung",
      "Gründliche Reinigung und sanftes Peeling",
      "Auftragen eines Betäubungsgels",
      "BB-Glow Behandlung mittels Microneedling",
      "Einarbeitung des BB-Serums in passender Nuance",
      "Beruhigende Maske zur Regeneration",
      "Abschlusspflege mit Hyaluron und Vitaminen",
    ],
    benefits: [
      "Sofort ebenmäßiger, strahlender Teint",
      "Kaschiert Unreinheiten und Rötungen",
      "Minimiert das Erscheinungsbild von Poren",
      "Aufhellende Wirkung bei Pigmentflecken",
      "Semi-permanentes Ergebnis für mehrere Wochen",
      "Reduziert den Bedarf an täglichem Make-up",
      "Stimuliert die Kollagenproduktion",
      "Intensive Feuchtigkeit und Pflege",
    ],
    contraindications: [
      "Aktive Akne oder Hautinfektionen",
      "Offene Wunden oder Entzündungen",
      "Schwangerschaft und Stillzeit",
      "Blutverdünnende Medikamente",
      "Neigung zu Keloidnarben",
      "Herpes-Infektion im Behandlungsbereich",
      "Frische Sonnenbräune oder Sonnenbrand",
    ],
    faq: [
      { question: "Wie lange hält das Ergebnis?", answer: "Das BB-Glow Ergebnis hält je nach Hauttyp und Pflege zwischen 4-8 Wochen. Mit regelmäßigen Auffrischungen kann der Effekt verlängert werden." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Durch das Betäubungsgel ist die Behandlung sehr gut auszuhalten. Sie spüren lediglich ein leichtes Kribbeln." },
      { question: "Wie viele Behandlungen werden empfohlen?", answer: "Für ein optimales Ergebnis empfehlen wir 3-5 Behandlungen im Abstand von 2-4 Wochen. Danach reichen Auffrischungen alle 4-8 Wochen." },
      { question: "Kann ich danach Make-up auftragen?", answer: "Wir empfehlen, 24-48 Stunden auf Make-up zu verzichten, damit die Haut sich regenerieren kann und die Wirkstoffe optimal einziehen." },
      { question: "Für wen ist BB-Glow geeignet?", answer: "BB-Glow ist ideal für alle, die einen natürlichen, ebenmäßigen Teint ohne tägliches Schminken wünschen – besonders bei müder Haut, Unreinheiten, Rötungen oder ungleichmäßigem Hautton." },
      { question: "Gibt es eine Ausfallzeit?", answer: "Die Haut kann 1-2 Tage leicht gerötet sein. Sie können aber Ihren normalen Aktivitäten nachgehen." },
    ],
  },
  "anti-aging-behandlung": {
    title: "Anti-Aging Behandlung",
    subtitle: "Intensive Hautverjüngung",
    duration: "75 Min.",
    price: "ab 95 €",
    description: "Drehen Sie die Zeit zurück mit unserer umfassenden Anti-Aging Behandlung. Hochkonzentrierte Wirkstoffe, innovative Techniken und luxuriöse Pflege vereinen sich zu einem kraftvollen Verjüngungserlebnis. Ihre Haut wird sichtbar gestrafft, geglättet und erhält neue Vitalität und Ausstrahlung.",
    process: [
      "Ausführliche Anti-Aging Hautanalyse",
      "Tiefenreinigung und sanftes Peeling",
      "Konzentriertes Anti-Aging Serum mit Hyaluron & Peptiden",
      "Spezial-Massage zur Straffung der Gesichtskonturen",
      "Intensive Anti-Falten Maske",
      "Luxuriöse Abschlusspflege mit Lifting-Effekt",
    ],
    benefits: [
      "Sichtbare Faltenreduktion",
      "Gestraffte Gesichtskonturen",
      "Verbesserte Hautelastizität",
      "Intensive Feuchtigkeitsversorgung",
      "Strahlender, jugendlicher Teint",
      "Langanhaltende Ergebnisse",
    ],
    faq: [
      { question: "Ab welchem Alter ist Anti-Aging sinnvoll?", answer: "Präventives Anti-Aging kann ab Mitte 20 beginnen. Intensive Behandlungen empfehlen wir ab 35+." },
      { question: "Wie oft sollte ich die Behandlung wiederholen?", answer: "Für nachhaltige Ergebnisse empfehlen wir alle 4-6 Wochen eine Behandlung." },
      { question: "Welche Produkte sollte ich zu Hause verwenden?", answer: "Wir beraten Sie gerne zu einer passenden Heimpflege mit Retinol, Hyaluron und Vitamin C." },
    ],
  },
  "byonik-anti-aging-hals": {
    title: "BYONIK® Anti-Aging | Gesicht und Halskontur",
    subtitle: "Umfassende Laserbehandlung für Gesicht und Hals",
    duration: "90 Min.",
    price: "199 €",
    description: "Erweitern Sie die Wirkung der BYONIK® Anti-Aging Behandlung auf die empfindliche Halspartie. Diese Behandlung kombiniert die pulsgesteuerte Lasertechnologie mit speziellen Wirkstoffen, um Falten und Erschlaffung im Gesicht und am Hals gleichzeitig zu behandeln – für ein harmonisches, verjüngtes Erscheinungsbild.",
    process: [
      "Hautanalyse von Gesicht und Hals",
      "Gründliche Reinigung beider Zonen",
      "Auftragen der BYONIK® Hyaluron-Gele",
      "Pulsgesteuerte Laserbehandlung Gesicht",
      "Pulsgesteuerte Laserbehandlung Halskontur",
      "Intensive Wirkstoffeinschleusung",
      "Straffende Abschlusspflege",
    ],
    benefits: [
      "Gleichmäßige Verjüngung von Gesicht und Hals",
      "Straffung der Halskontur",
      "Reduktion von Falten und feinen Linien",
      "Verbesserung der Hautelastizität",
      "Keine sichtbaren Übergänge",
      "Langanhaltende Ergebnisse",
      "Schmerzfrei und ohne Ausfallzeit",
    ],
    contraindications: [
      "Schwangerschaft und Stillzeit",
      "Akute Hautinfektionen",
      "Offene Wunden im Behandlungsbereich",
      "Herzschrittmacher",
      "Einnahme von Blutverdünnern",
    ],
    faq: [
      { question: "Warum sollte ich den Hals mitbehandeln?", answer: "Der Hals zeigt oft als erstes Zeichen der Hautalterung. Eine gemeinsame Behandlung sorgt für ein harmonisches Gesamtbild ohne sichtbare Übergänge." },
      { question: "Wie viele Behandlungen sind empfehlenswert?", answer: "Für optimale Ergebnisse empfehlen wir eine Kur von 4-6 Behandlungen im Abstand von 1-2 Wochen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die BYONIK® Behandlung ist völlig schmerzfrei und sehr entspannend." },
    ],
  },
  "byonik-skin-lightening": {
    title: "BYONIK® Skin Lightening",
    subtitle: "Behandlung bei erhöhter Pigmentation",
    duration: "75 Min.",
    price: "179 €",
    description: "Verabschieden Sie sich von störenden Pigmentflecken und ungleichmäßigem Teint. Die BYONIK® Skin Lightening Behandlung kombiniert die pulsgesteuerte Lasertechnologie mit speziellen aufhellenden Wirkstoffen, um Pigmentierungen sanft und effektiv zu reduzieren.",
    process: [
      "Detaillierte Analyse der Pigmentierung",
      "Sanfte Reinigung der Behandlungszonen",
      "Auftragen des speziellen BYONIK® Lightening-Gels",
      "Pulsgesteuerte Laserbehandlung",
      "Tiefenwirksame Einschleusung aufhellender Wirkstoffe",
      "Beruhigende Maske",
      "Abschluss mit UV-Schutz",
    ],
    benefits: [
      "Reduktion von Pigmentflecken und Altersflecken",
      "Aufhellung von Sonnenschäden",
      "Ebenmäßigerer Hautton",
      "Strahlender, gleichmäßiger Teint",
      "Vorbeugung neuer Pigmentierung",
      "Sanft und hautschonend",
      "Sichtbare Ergebnisse nach wenigen Behandlungen",
    ],
    contraindications: [
      "Schwangerschaft und Stillzeit",
      "Aktive Hautinfektionen",
      "Frische Sonnenbräune",
      "Einnahme photosensibilisierender Medikamente",
    ],
    faq: [
      { question: "Wie entstehen Pigmentflecken?", answer: "Pigmentflecken entstehen durch UV-Strahlung, hormonelle Veränderungen, Hautalterung oder Entzündungen." },
      { question: "Wie viele Behandlungen brauche ich?", answer: "Je nach Intensität der Pigmentierung empfehlen wir 4-8 Behandlungen im Abstand von 2 Wochen." },
      { question: "Muss ich danach Sonnenschutz verwenden?", answer: "Ja, konsequenter Sonnenschutz ist essentiell für den Behandlungserfolg und zur Vorbeugung neuer Pigmentierung." },
    ],
  },
  "byonik-ecto-repair": {
    title: "BYONIK® Ecto Repair",
    subtitle: "Für neurosensitive Haut & Akne",
    duration: "60 Min.",
    price: "139 €",
    description: "Die BYONIK® Ecto Repair Behandlung ist speziell für empfindliche, neurosensitive Haut und Akne-geplagte Haut entwickelt. Die beruhigenden Wirkstoffe in Kombination mit der sanften Lasertechnologie stärken die Hautbarriere, reduzieren Entzündungen und beruhigen gereizte Haut.",
    process: [
      "Sanfte Hautanalyse",
      "Schonende Reinigung mit beruhigenden Produkten",
      "Auftragen des BYONIK® Ecto-Repair-Gels",
      "Sanfte pulsgesteuerte Laserbehandlung",
      "Einschleusung entzündungshemmender Wirkstoffe",
      "Beruhigende Abschlussmaske",
      "Pflegende Creme für sensible Haut",
    ],
    benefits: [
      "Beruhigung gereizter und empfindlicher Haut",
      "Reduktion von Rötungen und Entzündungen",
      "Stärkung der Hautbarriere",
      "Verbesserung bei Akne und Unreinheiten",
      "Linderung bei Neurodermitis-Neigung",
      "Sanft und gut verträglich",
      "Sofortige Beruhigung",
    ],
    faq: [
      { question: "Ist die Behandlung für Akne geeignet?", answer: "Ja, die Behandlung ist speziell für Akne-Haut entwickelt und kann Entzündungen reduzieren und das Hautbild verbessern." },
      { question: "Kann ich die Behandlung bei Rosacea machen?", answer: "Ja, die sanfte Formulierung ist auch für Rosacea-Haut geeignet und kann Rötungen lindern." },
      { question: "Wie oft sollte ich die Behandlung wiederholen?", answer: "Bei akuten Problemen empfehlen wir wöchentliche Behandlungen, danach alle 2-4 Wochen zur Erhaltung." },
    ],
  },
  "byonik-clean-beauty": {
    title: "BYONIK® Clean Beauty",
    subtitle: "Laserbehandlung ohne Duftstoffe",
    duration: "60 Min.",
    price: "129 €",
    description: "Die BYONIK® Clean Beauty Behandlung ist die perfekte Wahl für alle, die auf Duftstoffe empfindlich reagieren. Diese Behandlung verwendet ausschließlich duftstofffreie Produkte und bietet trotzdem die volle Wirkung der pulsgesteuerten Lasertechnologie.",
    process: [
      "Hautanalyse und Beratung",
      "Reinigung mit duftstofffreien Produkten",
      "Auftragen des duftstofffreien BYONIK® Gels",
      "Pulsgesteuerte Laserbehandlung",
      "Wirkstoffeinschleusung",
      "Beruhigende Maske ohne Duftstoffe",
      "Duftstofffreie Abschlusspflege",
    ],
    benefits: [
      "Ideal für duftstoffempfindliche Haut",
      "Keine Reizung durch Parfümstoffe",
      "Volle BYONIK® Wirkung",
      "Hautverjüngung und Straffung",
      "Geeignet für Allergiker",
      "Verbesserung der Hautstruktur",
      "Entspannend und wohltuend",
    ],
    faq: [
      { question: "Für wen ist diese Behandlung geeignet?", answer: "Für alle, die auf Duftstoffe empfindlich reagieren, Allergiker oder Menschen, die einfach eine duftstofffreie Pflege bevorzugen." },
      { question: "Sind die Ergebnisse genauso gut wie bei der Standard-Behandlung?", answer: "Ja, die Wirksamkeit ist identisch – nur ohne Duftstoffe." },
      { question: "Welche Inhaltsstoffe werden verwendet?", answer: "Wir verwenden ausschließlich geprüfte, duftstofffreie Hyaluron-Gele und Pflegeprodukte." },
    ],
  },
  "byonik-pore-refining": {
    title: "BYONIK® Pore Refining Algae Massage",
    subtitle: "Detox-Spezial mit Algenmaske",
    duration: "60 Min.",
    price: "139 €",
    description: "Entgiften Sie Ihre Haut mit dieser einzigartigen Kombination aus BYONIK® Lasertechnologie und entschlackender Algenmaske. Die Pore Refining Behandlung reinigt die Poren tiefenwirksam, entfernt Giftstoffe und verleiht Ihrer Haut einen frischen, klaren Teint.",
    process: [
      "Gründliche Hautanalyse",
      "Tiefenreinigung der Poren",
      "Auftragen des BYONIK® Detox-Gels",
      "Pulsgesteuerte Laserbehandlung",
      "Luxuriöse Algenmassage",
      "Entschlackende Algenmaske",
      "Porenverfeinernde Abschlusspflege",
    ],
    benefits: [
      "Tiefenreinigung und Entgiftung",
      "Verfeinerte Poren",
      "Klarer, frischer Teint",
      "Entfernung von Unreinheiten",
      "Aktivierung des Lymphsystems",
      "Entspannende Massage-Wirkung",
      "Verbessertes Hautbild",
    ],
    faq: [
      { question: "Wie wirkt die Algenmaske?", answer: "Algen sind reich an Mineralien und Spurenelementen. Sie entgiften die Haut, straffen das Gewebe und spenden intensive Feuchtigkeit." },
      { question: "Ist die Behandlung für ölige Haut geeignet?", answer: "Ja, besonders für ölige und zu Unreinheiten neigende Haut ist diese Behandlung ideal." },
      { question: "Wie oft sollte ich die Detox-Behandlung machen?", answer: "Wir empfehlen eine Behandlung alle 4-6 Wochen als regelmäßige Hautreinigung." },
    ],
  },
  "byonik-hand-kiss": {
    title: "BYONIK® Hand Kiss",
    subtitle: "Anti-Aging für gepflegte Hände",
    duration: "45 Min.",
    price: "129 €",
    description: "Ihre Hände verdienen genauso viel Aufmerksamkeit wie Ihr Gesicht! Die BYONIK® Hand Kiss Behandlung verjüngt und pflegt Ihre Hände mit der innovativen pulsgesteuerten Lasertechnologie. Altersflecken werden reduziert, die Haut wird gestrafft und Ihre Hände erstrahlen in neuem Glanz.",
    process: [
      "Sanfte Reinigung der Hände",
      "Peeling zur Hauterneuerung",
      "Auftragen des BYONIK® Hyaluron-Gels",
      "Pulsgesteuerte Laserbehandlung",
      "Intensive Wirkstoffeinschleusung",
      "Pflegende Handmaske",
      "Luxuriöse Handmassage und Abschlusspflege",
    ],
    benefits: [
      "Reduktion von Altersflecken",
      "Straffere, jugendlichere Hände",
      "Verbesserung der Hautstruktur",
      "Intensive Feuchtigkeitsversorgung",
      "Weichere, glattere Haut",
      "Sichtbare Verjüngung",
      "Gepflegtes Erscheinungsbild",
    ],
    faq: [
      { question: "Warum sollte ich meine Hände behandeln lassen?", answer: "Die Hände zeigen oft das wahre Alter, da sie ständig der Sonne und Umwelteinflüssen ausgesetzt sind. Eine regelmäßige Behandlung hält sie jung und gepflegt." },
      { question: "Wie viele Behandlungen sind nötig?", answer: "Für sichtbare Ergebnisse empfehlen wir 3-5 Behandlungen im Abstand von 2 Wochen." },
      { question: "Kann ich danach normale Aktivitäten ausführen?", answer: "Ja, es gibt keine Ausfallzeit. Wir empfehlen jedoch, 24 Stunden Sonnenschutz für die Hände zu verwenden." },
    ],
  },
  "byonik-shapely-arms": {
    title: "BYONIK® Shapely Arms",
    subtitle: "Straffung für schöne Arme",
    duration: "45 Min.",
    price: "129 €",
    description: "Straffen und verjüngen Sie die Haut Ihrer Arme mit der BYONIK® Shapely Arms Behandlung. Diese spezielle Anwendung konzentriert sich auf die oft vernachlässigte Armpartie und bekämpft Erschlaffung, trockene Haut und erste Alterserscheinungen.",
    process: [
      "Hautanalyse der Armpartie",
      "Sanfte Reinigung",
      "Auftragen des straffenden BYONIK® Gels",
      "Pulsgesteuerte Laserbehandlung der Arme",
      "Wirkstoffeinschleusung für Elastizität",
      "Straffende Massage",
      "Pflegende Abschlusspflege",
    ],
    benefits: [
      "Straffere Armhaut",
      "Verbesserung der Hautelastizität",
      "Reduktion von Erschlaffung",
      "Glattere, weichere Haut",
      "Verbessertes Hautbild",
      "Mehr Selbstbewusstsein bei ärmelloser Kleidung",
      "Langanhaltende Ergebnisse",
    ],
    faq: [
      { question: "Für wen ist diese Behandlung geeignet?", answer: "Für alle, die unter Hauterschlaffung an den Armen leiden oder die Armhaut straffen und pflegen möchten." },
      { question: "Wie viele Behandlungen brauche ich?", answer: "Wir empfehlen eine Kur von 4-6 Behandlungen für optimale Straffungsergebnisse." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die Behandlung ist völlig schmerzfrei und angenehm." },
    ],
  },
  "byonik-show-your-legs": {
    title: "BYONIK® Show your Legs",
    subtitle: "Beinpflege für strahlend schöne Beine",
    duration: "60 Min.",
    price: "169 €",
    description: "Zeigen Sie Ihre Beine mit Stolz! Die BYONIK® Show your Legs Behandlung pflegt, strafft und verjüngt die Haut Ihrer Beine. Ob Cellulite, trockene Haut oder erste Alterserscheinungen – diese Behandlung bringt Ihre Beine zum Strahlen.",
    process: [
      "Hautanalyse der Beinpartie",
      "Gründliche Reinigung",
      "Peeling für samtig weiche Haut",
      "Auftragen des BYONIK® Straffungs-Gels",
      "Pulsgesteuerte Laserbehandlung",
      "Intensive Wirkstoffeinschleusung",
      "Straffende Beinmassage",
      "Luxuriöse Abschlusspflege",
    ],
    benefits: [
      "Straffere, glattere Beinhaut",
      "Reduktion von Cellulite-Erscheinungen",
      "Verbesserung der Hautstruktur",
      "Intensive Feuchtigkeitsversorgung",
      "Samtig weiche Haut",
      "Mehr Selbstbewusstsein",
      "Langanhaltend gepflegte Beine",
    ],
    faq: [
      { question: "Hilft die Behandlung gegen Cellulite?", answer: "Die Behandlung kann das Erscheinungsbild von Cellulite verbessern und die Haut straffen. Für optimale Ergebnisse empfehlen wir regelmäßige Behandlungen." },
      { question: "Wie viele Behandlungen sind empfehlenswert?", answer: "Für sichtbare Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 1-2 Wochen." },
      { question: "Kann ich die Behandlung im Sommer machen?", answer: "Ja, aber vermeiden Sie intensive Sonneneinstrahlung 48 Stunden vor und nach der Behandlung." },
    ],
  },
  "byonik-clean-smooth": {
    title: "BYONIK® Clean & Smooth",
    subtitle: "Express-Behandlung für reine Haut",
    duration: "30 Min.",
    price: "99 €",
    description: "Die BYONIK® Clean & Smooth Behandlung ist Ihre schnelle Lösung für reine, glatte Haut. In nur 30 Minuten reinigt und glättet diese Express-Behandlung Ihre Haut tiefenwirksam – perfekt für einen schnellen Beauty-Boost in der Mittagspause.",
    process: [
      "Schnelle Reinigung",
      "Auftragen des BYONIK® Gels",
      "Gezielte Laserbehandlung",
      "Porenverfeinernde Wirkstoffeinschleusung",
      "Leichte Abschlusspflege",
    ],
    benefits: [
      "Schnelle Behandlung in 30 Minuten",
      "Sofort reinere Haut",
      "Verfeinerte Poren",
      "Glatter, frischer Teint",
      "Ideal für zwischendurch",
      "Keine Ausfallzeit",
      "Sofort sichtbare Ergebnisse",
    ],
    faq: [
      { question: "Für wen ist diese Behandlung ideal?", answer: "Für alle, die wenig Zeit haben aber trotzdem eine effektive Behandlung wünschen – perfekt für die Mittagspause." },
      { question: "Wie oft kann ich die Behandlung machen?", answer: "Die Clean & Smooth Behandlung kann alle 1-2 Wochen durchgeführt werden." },
      { question: "Kann ich danach Make-up auftragen?", answer: "Ja, Sie können direkt nach der Behandlung Make-up auftragen und Ihren Tag fortsetzen." },
    ],
  },
};

// Default treatment for unknown slugs
const defaultTreatment: {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  description: string;
  process: string[];
  benefits: string[];
  contraindications?: string[];
  faq: { question: string; answer: string }[];
  image?: string;
} = {
  title: "Behandlung",
  duration: "variabel",
  price: "auf Anfrage",
  description: "Entdecken Sie unsere professionellen Behandlungen für Ihre Schönheit und Ihr Wohlbefinden.",
  process: [
    "Beratungsgespräch",
    "Individuelle Behandlung",
    "Abschlusspflege",
  ],
  benefits: [
    "Professionelle Durchführung",
    "Hochwertige Produkte",
    "Individuelle Betreuung",
  ],
  faq: [],
};

const Behandlungen = () => {
  const { slug } = useParams();
  const treatment = slug && treatmentData[slug] ? treatmentData[slug] : defaultTreatment;

  return (
    <MainLayout>
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to="/leistungen"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zu Leistungen
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div>
                {treatment.subtitle && (
                  <span className="text-sm uppercase tracking-wider text-primary font-medium">
                    {treatment.subtitle}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-serif font-bold">
                  {treatment.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card border-2 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">{treatment.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-card border-2 rounded-lg px-4 py-2">
                <Euro className="w-5 h-5 text-primary" />
                <span className="font-medium">{treatment.price}</span>
              </div>
            </div>

            {treatment.image && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {treatment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
              Ablauf der Behandlung
            </h2>
            <div className="space-y-4">
              {treatment.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Contraindications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-serif">
                    <Check className="w-6 h-6 text-primary" />
                    Vorteile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {treatment.contraindications && (
                <Card className="border-2 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-serif">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                      Nicht geeignet bei
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {treatment.contraindications.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {treatment.faq.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                Häufige Fragen
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {treatment.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Bereit für Ihre Behandlung?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Vereinbaren Sie jetzt Ihren persönlichen Termin.
            </p>
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Behandlungen;