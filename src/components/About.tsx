import shahiraImage from "@/assets/shahira-portrait.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img 
                src={shahiraImage} 
                alt="Schahira Scharar - Staatlich anerkannte Fachkosmetikerin"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="text-sm uppercase tracking-wider text-primary font-medium">
                Ihre Expertin
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
                Ihre Expertin für strahlende Schönheit
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mein Name ist <span className="font-semibold text-foreground">Schahira Scharar</span>. 
                Als staatlich anerkannte Fachkosmetikerin mit langjähriger Erfahrung habe ich es mir zur 
                Aufgabe gemacht, die natürliche Schönheit meiner Kundinnen und Kunden zu unterstreichen 
                und ihre Haut nachhaltig zu pflegen.
              </p>
              
              <p>
                In meinem Studio erwartet Sie eine ruhige, stilvolle Atmosphäre, in der Sie entspannen 
                und sich verwöhnen lassen können. Jede Behandlung wird individuell auf Ihre 
                Hautbedürfnisse abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};