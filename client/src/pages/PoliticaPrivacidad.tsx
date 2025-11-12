import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
const PoliticaPrivacidad = () => {
  return <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
            <p className="text-muted-foreground">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, 
              relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD) 
              y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), 
              informamos a los usuarios sobre nuestra política de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Responsable del Tratamiento</h2>
            <p className="text-muted-foreground text-left">
              Chain Capitals SL<br />
              Ctra Dolores - San Fulgencio<br />
              03150 Dolores, Alicante<br />
              CIF: B10698496<br />
              Email: info@chaincapitalsgroup.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datos Personales que Recopilamos</h2>
            <p className="text-muted-foreground mb-2">Los datos personales que podemos recopilar incluyen:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Datos de identificación (nombre, apellidos, DNI/NIF)</li>
              <li>Datos de contacto (dirección de correo electrónico, teléfono)</li>
              <li>Información comercial relacionada con los servicios solicitados</li>
              <li>Datos de navegación y cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Finalidad del Tratamiento</h2>
            <p className="text-muted-foreground mb-2">Sus datos serán tratados para:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Gestionar las solicitudes de información y contacto</li>
              <li>Prestar los servicios contratados</li>
              <li>Enviar comunicaciones comerciales (con su consentimiento previo)</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Legitimación</h2>
            <p className="text-muted-foreground">
              La base legal para el tratamiento de sus datos personales es el consentimiento del interesado, 
              la ejecución de un contrato o la aplicación de medidas precontractuales, y el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Conservación de los Datos</h2>
            <p className="text-muted-foreground">
              Los datos personales se conservarán mientras sean necesarios para las finalidades que motivaron su recogida, 
              y posteriormente durante el tiempo necesario para el cumplimiento de las obligaciones legales aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Derechos del Usuario</h2>
            <p className="text-muted-foreground mb-2">Puede ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Derecho de acceso a sus datos personales</li>
              <li>Derecho de rectificación de datos inexactos</li>
              <li>Derecho de supresión cuando los datos ya no sean necesarios</li>
              <li>Derecho de oposición al tratamiento</li>
              <li>Derecho de limitación del tratamiento</li>
              <li>Derecho a la portabilidad de los datos</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Para ejercer estos derechos, puede contactar con nosotros en info@chaincapitalsgroup.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Seguridad de los Datos</h2>
            <p className="text-muted-foreground">
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra 
              el acceso no autorizado, la pérdida, la destrucción o el daño.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cambios en la Política de Privacidad</h2>
            <p className="text-muted-foreground">
              Nos reservamos el derecho a modificar esta política de privacidad. Los cambios se publicarán en esta página 
              con su fecha de actualización.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </div>
    </div>;
};
export default PoliticaPrivacidad;