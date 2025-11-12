import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
const PoliticaCookies = () => {
  return <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-muted-foreground">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) 
              cuando visita nuestro sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias 
              durante un período de tiempo, para mejorar su experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies Técnicas (Necesarias)</h3>
                <p className="text-muted-foreground">
                  Son esenciales para el funcionamiento del sitio web. Sin estas cookies, el sitio web no puede 
                  funcionar correctamente. No requieren consentimiento previo.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies de Análisis</h3>
                <p className="text-muted-foreground">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando y 
                  reportando información de forma anónima.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies de Funcionalidad</h3>
                <p className="text-muted-foreground">
                  Permiten que el sitio web recuerde las elecciones que hace (como su idioma o región) y 
                  proporcionen características mejoradas y más personales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies de Marketing</h3>
                <p className="text-muted-foreground">
                  Se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios 
                  que sean relevantes y atractivos para el usuario individual.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Cookies de Terceros</h2>
            <p className="text-muted-foreground">
              Algunos de nuestros socios pueden establecer cookies en su dispositivo cuando visita nuestro sitio web. 
              Estas cookies de terceros pueden incluir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
              <li>Google Analytics (análisis de tráfico web)</li>
              <li>Herramientas de redes sociales</li>
              <li>Servicios de publicidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Gestión y Desactivación de Cookies</h2>
            <p className="text-muted-foreground mb-2">
              Puede gestionar o desactivar las cookies en cualquier momento a través de la configuración de su navegador:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestión de cookies</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Tenga en cuenta que desactivar las cookies puede afectar a la funcionalidad del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Consentimiento</h2>
            <p className="text-muted-foreground">
              Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política. 
              Si no está de acuerdo con el uso de cookies, puede configurar su navegador para rechazarlas o 
              abandonar el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Duración de las Cookies</h2>
            <p className="text-muted-foreground mb-2">Las cookies pueden ser:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Cookies de sesión:</strong> Se eliminan automáticamente cuando cierra el navegador</li>
              <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período determinado o hasta que las elimine manualmente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Actualizaciones de la Política de Cookies</h2>
            <p className="text-muted-foreground">
              Podemos actualizar esta política de cookies periódicamente para reflejar cambios en nuestras prácticas 
              o por otras razones operativas, legales o regulatorias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Más Información</h2>
            <p className="text-muted-foreground">Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en info@chaincapitalsgroup.com.</p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </div>
    </div>;
};
export default PoliticaCookies;