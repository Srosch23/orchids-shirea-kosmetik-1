import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Behandlungen", href: "#treatments" },
  { label: "BYONIK®", href: "#byonik" },
  { label: "Slimyonik", href: "#slimyonik" },
  { label: "Wellness", href: "#wellness" },
  { label: "Kontakt", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-2xl md:text-3xl font-serif font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SHIREÁ
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" className="ml-4" asChild>
              <a
                href="https://buchung.treatwell.de/ort/496665/menue/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt buchen
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full" asChild>
                  <a
                    href="https://buchung.treatwell.de/ort/496665/menue/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jetzt buchen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
