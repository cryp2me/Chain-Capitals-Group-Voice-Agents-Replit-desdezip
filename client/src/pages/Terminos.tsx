import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Términos y Condiciones</h1>
          
          <p className="text-muted-foreground mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground mb-4">
              Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones de uso, 
              todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de 
              todas las leyes locales aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso del Servicio</h2>
            <p className="text-muted-foreground mb-4">
              Nuestros servicios de agentes de voz están destinados a uso comercial legítimo. Te comprometes a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Utilizar el servicio de forma legal y ética</li>
              <li>No utilizar el servicio para actividades fraudulentas o ilegales</li>
              <li>Proporcionar información veraz y actualizada</li>
              <li>Mantener la confidencialidad de tus credenciales de acceso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propiedad Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo el contenido, marcas, logotipos y tecnología utilizada en este sitio son propiedad de 
              Agentes de Voz IA o de sus respectivos propietarios. No está permitida la reproducción, 
              distribución o uso no autorizado de ningún material sin permiso expreso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              Agentes de Voz IA no será responsable de ningún daño directo, indirecto, incidental, 
              consecuente o punitivo que resulte de:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>El uso o la imposibilidad de usar el servicio</li>
              <li>Errores u omisiones en el contenido</li>
              <li>Interrupciones o defectos en la transmisión</li>
              <li>Acceso no autorizado a nuestros sistemas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Modificaciones del Servicio</h2>
            <p className="text-muted-foreground mb-4">
              Nos reservamos el derecho de modificar, suspender o discontinuar el servicio en cualquier 
              momento sin previo aviso. No seremos responsables ante ti o terceros por cualquier modificación, 
              suspensión o discontinuación del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Precios y Pagos</h2>
            <p className="text-muted-foreground mb-4">
              Los precios de nuestros servicios están sujetos a cambios sin previo aviso. Todos los pagos 
              son procesados de forma segura. Te comprometes a proporcionar información de pago precisa y 
              a notificarnos de cualquier cambio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cancelación y Reembolsos</h2>
            <p className="text-muted-foreground mb-4">
              Puedes cancelar tu suscripción en cualquier momento. Los reembolsos se gestionarán de acuerdo 
              con nuestra política de reembolsos vigente en el momento de la contratación del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Ley Aplicable</h2>
            <p className="text-muted-foreground mb-4">
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España. 
              Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción 
              exclusiva de los tribunales españoles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modificaciones de los Términos</h2>
            <p className="text-muted-foreground mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. 
              Tu uso continuado del servicio después de dichos cambios constituye tu aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Si tienes preguntas sobre estos términos y condiciones, por favor contáctanos a través de 
              nuestro formulario de contacto o en la dirección proporcionada en nuestra política de privacidad.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terminos;
