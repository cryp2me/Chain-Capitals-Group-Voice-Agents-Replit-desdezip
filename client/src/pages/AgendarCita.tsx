import { ArrowLeft, Calendar, Mail, Phone, User, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const AgendarCita = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos el envío del formulario
    setTimeout(() => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo en breve.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>
        
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Agenda una <span className="text-gradient-ai">Cita</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">
                <User className="w-4 h-4 inline mr-2" />
                Nombre completo *
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="transition-all duration-300 focus:shadow-glow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="transition-all duration-300 focus:shadow-glow"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="telefono">
                <Phone className="w-4 h-4 inline mr-2" />
                Teléfono *
              </Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+34 600 000 000"
                required
                className="transition-all duration-300 focus:shadow-glow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">
                <Building2 className="w-4 h-4 inline mr-2" />
                Sector *
              </Label>
              <Select name="sector" required>
                <SelectTrigger className="transition-all duration-300 focus:shadow-glow">
                  <SelectValue placeholder="Selecciona tu sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinica-dental">Clínica Dental</SelectItem>
                  <SelectItem value="medicina-estetica">Medicina Estética</SelectItem>
                  <SelectItem value="inmobiliaria">Inmobiliaria</SelectItem>
                  <SelectItem value="restaurante-hotel">Restaurante/Hotel</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">
              Empresa
            </Label>
            <Input
              id="empresa"
              name="empresa"
              placeholder="Nombre de tu empresa (opcional)"
              className="transition-all duration-300 focus:shadow-glow"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos sobre tu proyecto y tus necesidades..."
              rows={5}
              className="transition-all duration-300 focus:shadow-glow resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="flex-1 text-lg py-6 rounded-full shadow-glow hover:shadow-soft transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Al enviar este formulario, aceptas nuestra{" "}
            <Link to="/politica-privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AgendarCita;
