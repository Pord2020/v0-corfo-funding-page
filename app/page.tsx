import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Target, TrendingUp, Users, Zap, Award, Network, FileCheck, MapPin, Phone, Mail } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-2">
            <Image src="/witi-logo.svg" alt="WiTI Logo" width={130} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#metodologia" className="text-sm font-medium hover:text-primary transition-colors">
              Nuestra Metodología
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a
                href="https://wa.me/56975379882?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20fondos%20CORFO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversemos
              </a>
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Potencia tu Empresa con Financiamiento CORFO
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                Acompañamiento integral desde la postulación hasta la ejecución exitosa de tu proyecto con fondos CORFO
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a
                    href="https://m20y7fw1hlw.typeform.com/to/r1rGutdL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comenzar Ahora
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#metodologia">Conocer Metodología</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Servicio Section */}
        <section id="servicios" className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Acceso a Financiamiento</h2>
                <p className="text-xl text-muted-foreground font-semibold">Fondos CORFO y privados</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Te ayudamos a obtener financiamiento no dilutivo y privado para tu proyecto tecnológico. Desde la
                  estrategia hasta la postulación, gestión de fondos CORFO, inversores ángeles y VCs. Maximizamos tus
                  probabilidades de adjudicación.
                </p>
              </div>

              {/* Beneficios Clave */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">Beneficios Clave para tu Negocio</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Beneficio 1 */}
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Capital No Dilutivo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        CORFO financia hasta $220M CLP sin perder equity. Ideal pre-Series A
                      </p>
                    </CardContent>
                  </Card>

                  {/* Beneficio 2 */}
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Tasa de Éxito Alta</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nuestros clientes tienen &gt;75% de adjudicación
                      </p>
                    </CardContent>
                  </Card>

                  {/* Beneficio 3 */}
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Network className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Red de Aliados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Acceso a nuestra red de aliados, que permiten obtener reducción de costos en TI, acceso a redes
                        de clientes corporativos, financiamiento y más
                      </p>
                    </CardContent>
                  </Card>

                  {/* Beneficio 4 */}
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <FileCheck className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Gestión End-to-End</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nos encargamos de todo: postulación, gestión, reportería y rendición
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Instrumentos CORFO */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">Instrumentos CORFO que Gestionamos</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Instrumento 1 */}
                  <Card className="border-2">
                    <CardHeader>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">$15M</div>
                        <div className="text-sm text-muted-foreground">CLP</div>
                        <CardTitle className="text-xl">Semilla Inicia</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Validación de modelo de negocio y desarrollo MVP (9-12 meses)
                      </p>
                    </CardContent>
                  </Card>

                  {/* Instrumento 2 */}
                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">$180M</div>
                        <div className="text-sm text-muted-foreground">CLP</div>
                        <CardTitle className="text-xl">Crea y Valida I+D</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Desarrollo de productos tecnológicos con componente de I+D (12-24 meses)
                      </p>
                    </CardContent>
                  </Card>

                  {/* Instrumento 3 */}
                  <Card className="border-2">
                    <CardHeader>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">$15M - $75M</div>
                        <div className="text-sm text-muted-foreground">CLP</div>
                        <CardTitle className="text-xl">Línea Startup Chile</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Desde una idea a proyectos consolidados (12-24 meses)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Entregables del Servicio */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Entregables del Servicio</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Entregable 1 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Diagnóstico de Elegibilidad
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Análisis completo de tu proyecto vs. requisitos de cada instrumento
                      </p>
                    </CardContent>
                  </Card>

                  {/* Entregable 2 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Estrategia de Financiamiento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Mix óptimo CORFO + privado según etapa, sector y necesidades de capital
                      </p>
                    </CardContent>
                  </Card>

                  {/* Entregable 3 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Expediente Completo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Caso técnico-económico, presupuesto, plan de trabajo, cartas de apoyo, etc.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Entregable 4 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Postulación & Seguimiento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gestión completa en plataforma CORFO y respuesta a observaciones
                      </p>
                    </CardContent>
                  </Card>

                  {/* Entregable 5 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Gestión Post-Adjudicación
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Administración, reportería, rendición y auditorías hasta cierre del proyecto
                      </p>
                    </CardContent>
                  </Card>

                  {/* Entregable 6 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        Conexión con Inversores
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Introducción a nuestra red para complementar con capital privado si aplica
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología Section */}
        <section id="metodologia" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestra Metodología</h2>
              <p className="text-lg text-muted-foreground">
                Un proceso estructurado en 5 fases para garantizar el éxito de tu proyecto CORFO
              </p>
            </div>

            <div className="mx-auto max-w-5xl space-y-8">
              {/* Fase 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="shrink-0">Fase 1</Badge>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">Diagnóstico & Admisibilidad</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Realizamos un análisis profundo de tu empresa y proyecto para identificar el fondo CORFO más
                        adecuado según tus necesidades, capacidades y objetivos estratégicos.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué Hacemos:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Evaluación de admisibilidad técnica y financiera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Análisis de capacidad de contrapartida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Identificación de brechas y fortalezas del proyecto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Recomendación de línea CORFO óptima</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entregables:</h4>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• Informe de diagnóstico empresarial</li>
                      <li>• Matriz de elegibilidad CORFO</li>
                      <li>• Plan de acción preliminar</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Fase 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="shrink-0">Fase 2</Badge>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">Formulación del Proyecto</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Desarrollamos una propuesta sólida y competitiva que maximiza tus probabilidades de
                        adjudicación, alineada con los criterios de evaluación CORFO.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué Hacemos:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Diseño de la solución técnica del proyecto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Estructuración del modelo de negocio y financiero</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Definición de indicadores y metas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Preparación de documentación de respaldo</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entregables:</h4>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• Propuesta técnica completa</li>
                      <li>• Modelo financiero y presupuesto detallado</li>
                      <li>• Carta Gantt del proyecto</li>
                      <li>• Documentos de respaldo técnico</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Fase 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="shrink-0">Fase 3</Badge>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">Postulación</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Gestionamos todo el proceso de postulación, asegurando que cada requisito se cumpla
                        correctamente y tu propuesta destaque entre las demás.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué Hacemos:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Redacción y ajuste de formularios CORFO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Coordinación de documentación legal y financiera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Revisión de admisibilidad pre-envío</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Gestión de envío y seguimiento</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entregables:</h4>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• Formulario CORFO completo</li>
                      <li>• Set de documentos anexos</li>
                      <li>• Checklist de requisitos cumplidos</li>
                      <li>• Comprobante de postulación</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Fase 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="shrink-0">Fase 4</Badge>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">Adjudicación y Puesta en Marcha</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Te acompañamos en la firma del convenio y preparamos todo lo necesario para iniciar la ejecución
                        del proyecto de manera exitosa.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué Hacemos:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Revisión y negociación de convenio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Gestión de garantías y seguros requeridos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Preparación de plan de ejecución detallado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Configuración de sistemas de seguimiento</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entregables:</h4>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• Convenio firmado con CORFO</li>
                      <li>• Garantías y seguros gestionados</li>
                      <li>• Plan operativo de ejecución</li>
                      <li>• Cronograma de hitos y desembolsos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Fase 5 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="shrink-0">Fase 5</Badge>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">Ejecución, Seguimiento y Rendición</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Brindamos soporte continuo durante toda la ejecución, asegurando el cumplimiento de hitos, la
                        correcta rendición de gastos y la maximización de resultados.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué Hacemos:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Monitoreo de avance y cumplimiento de hitos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Gestión de modificaciones cuando sea necesario</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Preparación de informes técnicos y financieros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Coordinación de rendiciones de gastos</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entregables:</h4>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• Informes de avance periódicos</li>
                      <li>• Rendiciones de gasto aprobadas</li>
                      <li>• Documentación de respaldo organizada</li>
                      <li>• Informe final del proyecto</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ¿Qué Ganas con WiTI? Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué Ganas con WiTI?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-5xl">
              {/* Pilar 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Estrategia de Postulación</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Maximizamos tus probabilidades de éxito identificando el fondo ideal y construyendo una propuesta
                    competitiva alineada con los criterios de evaluación CORFO.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Planificación Técnica</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Desarrollamos un roadmap detallado con arquitectura sólida, asegurando que tu proyecto sea
                    técnicamente viable y cumpla con todos los estándares requeridos.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Ejecución Garantizada</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Gestionamos cada etapa del proyecto con metodologías ágiles y control de calidad continuo,
                    garantizando la entrega de hitos en tiempo y forma.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Soporte Continuo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Te acompañamos durante toda la vida del proyecto: desde la postulación hasta la rendición final,
                    resolviendo imprevistos y asegurando el cumplimiento normativo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Typeform Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Agendemos una reunión</h2>
              <div data-tf-live="01KADX3EPRNWGGHR4JXVKBNJ6W"></div>
              <Script src="//embed.typeform.com/next/embed.js" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-20 bg-muted/50">
          <div className="container">
            <Card className="mx-auto max-w-3xl border-2 border-primary/20 bg-card">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-3xl md:text-4xl">¿Listo para Acceder a Fondos CORFO?</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Conversemos sobre tu proyecto y cómo podemos ayudarte a conseguir el financiamiento que necesitas.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 border-none" asChild>
                  <a
                    href="https://wa.me/56975379882?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20fondos%20CORFO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablemos por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="#inicio" className="flex items-center gap-2">
                <Image src="/witi-logo.svg" alt="WiTI Logo" width={130} height={40} className="h-8 w-auto" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Tecnología pensada para innovar
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Oficinas</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-lg">🇨🇱</span>
                  <span>Huérfanos 1160, Of. 1101, Santiago, Chile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🇺🇾</span>
                  <span>Paraguay 2141, Of. 405, Montevideo, Uruguay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🇨🇴</span>
                  <span>Carrera 16 93 A 16 Of. 203 204 Bogotá, Colombia</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contacto</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="https://wa.me/56975379882" className="hover:text-primary transition-colors">+56 9 7537 9882</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:startups@witi.cl" className="hover:text-primary transition-colors">startups@witi.cl</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2025 WiTI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
