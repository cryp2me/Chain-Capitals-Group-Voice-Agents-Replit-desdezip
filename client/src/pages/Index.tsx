import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, Sparkles, Building2, UtensilsCrossed } from "lucide-react";
import VoiceMicButton from "@/components/VoiceMicButton";
import SectorCard from "@/components/SectorCard";
import { Link } from "wouter";
import ccgLogo from "@/assets/ccg-logo-new.png";

const Index = () => {
  const sectors = [
    {
      icon: Stethoscope,
      title: "Clínicas Dentales",
      description: "Automatiza la gestión de citas y consultas de tus pacientes con nuestros agentes de voz inteligentes."
    },
    {
      icon: Sparkles,
      title: "Medicina Estética",
      description: "Ofrece una experiencia premium con asistentes virtuales que atienden a tus clientes 24/7."
    },
    {
      icon: Building2,
      title: "Inmobiliarias",
      description: "Gestiona consultas de propiedades y agenda visitas automáticamente sin perder ninguna oportunidad."
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes y Hoteles",
      description: "Mejora la experiencia de tus huéspedes con reservas y atención al cliente automatizada."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={ccgLogo} alt="Chain Capitals Group Logo" className="w-10 h-10" />
            <h2 className="text-xl font-semibold text-gradient-ai">Chain Capitals Group</h2>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Agentes de Voz
            <br />
            <span className="text-gradient-ai">Inteligentes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforma la atención al cliente de tu negocio con tecnología de voz impulsada por IA
          </p>
          
          <div className="py-12">
            <VoiceMicButton />
          </div>
          
          <div className="pt-8">
            <Link to="/agendar-cita">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-soft transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Consultoría Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Soluciones Especializadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agentes de voz diseñados específicamente para tu sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                icon={sector.icon}
                title={sector.title}
                description={sector.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Habla con nuestro equipo y descubre cómo los agentes de voz pueden transformar tu negocio
          </p>
          <div className="pt-6">
            <Link to="/agendar-cita">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-soft transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Consultoría Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Agentes de Voz IA | Chain Capitals Group. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/politica-privacidad" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link 
                to="/politica-cookies" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Cookies
              </Link>
              <Link 
                to="/terminos" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
