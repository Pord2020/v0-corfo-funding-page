import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CheckCircle2,
  DollarSign,
  Clock,
  Handshake,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Zap,
  Droplet,
  Recycle,
  Building2,
  Wheat,
  Bot,
  Waves,
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Semilla Inicia 2025: Hasta $17M para tu Startup | WiTI - Consultora CORFO",
  description:
    "Postula a Semilla Inicia 2025 con WiTI y obtén hasta $17 millones para tu emprendimiento. 90% de tasa de éxito. Asesoría gratuita. Entidad Patrocinadora CORFO.",
  keywords:
    "semilla inicia 2025, fondo corfo, subsidio emprendimiento chile, financiamiento startup, postular corfo, witi consultora",
}

const clusters = [
  {
    icon: Zap,
    title: "Transición Energética y Descarbonización",
    description: "Soluciones para reducir huella de carbono en procesos industriales",
    examples: "Hidrógeno verde, eficiencia energética, captura de CO2, tecnologías limpias",
    highlighted: "Mínimo 30 proyectos aprobados en esta área",
  },
  {
    icon: Droplet,
    title: "Gestión Hídrica y Resiliencia Climática",
    description: "Gestión eficiente del agua y adaptación al cambio climático",
    examples: "Riego inteligente, monitoreo hídrico, cultivos resistentes a sequías",
  },
  {
    icon: Recycle,
    title: "Economía Circular y Nuevos Materiales",
    description: "Reducir, reutilizar y valorizar residuos",
    examples: "Reciclaje avanzado, biomateriales, logística sostenible",
  },
  {
    icon: Building2,
    title: "Ciudades Sostenibles y Construcción Sustentable",
    description: "Infraestructura urbana sostenible",
    examples: "Movilidad eléctrica, eficiencia energética en edificación, urbanismo verde",
  },
  {
    icon: Wheat,
    title: "Alimentos Sostenibles y Agroindustria 4.0",
    description: "Innovación en producción y distribución de alimentos",
    examples: "Nuevos alimentos saludables, trazabilidad, automatización agrícola",
  },
  {
    icon: Bot,
    title: "Tecnologías Aplicadas a la Sostenibilidad",
    description: "IA, IoT y análisis de datos para sectores productivos",
    examples: "Monitoreo en tiempo real, algoritmos predictivos, automatización",
  },
  {
    icon: Waves,
    title: "Economía Azul y Desarrollo Marino-Costero",
    description: "Uso sostenible del espacio marino y costero",
    examples: "Acuicultura sostenible, biotecnología marina, pesca artesanal",
  },
  {
    icon: HeartPulse,
    title: "Soluciones Tecnológicas para la Salud",
    description: "Innovación en procesos clínicos y gestión sanitaria",
    examples: "Diagnóstico temprano con IA, teleatención, dispositivos médicos digitales",
  },
]

const faqs = [
  {
    question: "¿Cuánto dinero puedo obtener?",
    answer: "Hasta $15 millones base, o $17 millones si tu empresa está liderada por mujeres (10% adicional).",
  },
  {
    question: "¿Tengo que devolver el dinero?",
    answer: "No, Semilla Inicia es un subsidio no reembolsable. No tienes que devolver los fondos.",
  },
  {
    question: "¿Puedo postular si mi empresa ya tiene ventas?",
    answer: "No. Solo pueden postular empresas sin ingresos por ventas hasta el mes anterior a la postulación.",
  },
  {
    question: "¿Cuánto debo aportar yo?",
    answer: "25% del costo total del proyecto (puede ser en efectivo o valorizado). Con el bono mujer, solo 15%.",
  },
  {
    question: "¿Cuánto dura el proyecto?",
    answer: "10 meses de ejecución, prorrogables hasta 2 meses adicionales en casos excepcionales.",
  },
  {
    question: "¿Puedo postular solo o necesito equipo?",
    answer:
      "Puedes postular solo, pero se evalúa positivamente tener hasta 3 cofundadores con participación mínima de 5% cada uno.",
  },
  {
    question: "¿Mi idea tiene que estar en alguna de las 8 áreas temáticas?",
    answer:
      "Sí, tu proyecto debe estar alineado con alguno de los 8 clústeres de focalización para tener prioridad de financiamiento.",
  },
  {
    question: "¿Cuándo puedo postular?",
    answer: "Las convocatorias se abren según calendario CORFO. Contáctanos para conocer las fechas actualizadas.",
  },
  {
    question: "¿Qué pasa si no cumplo los resultados?",
    answer: "Debes justificar ante CORFO. Con WiTI, te ayudamos a cumplir los hitos para evitar problemas.",
  },
  {
    question: "¿Cuánto cobran por el servicio de postulación?",
    answer:
      "Nuestros honorarios son competitivos y se incluyen en el presupuesto del proyecto. Agenda una reunión para conocer las condiciones.",
  },
]

export default function SemillaIniciaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/witi-logo.svg" alt="WiTI Logo" width={130} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#programa" className="text-sm font-medium hover:text-primary transition-colors">
              El Programa
            </Link>
            <Link href="#requisitos" className="text-sm font-medium hover:text-primary transition-colors">
              Requisitos
            </Link>
            <Link href="#focalizacion" className="text-sm font-medium hover:text-primary transition-colors">
              Áreas Prioritarias
            </Link>
            <Link href="#witi" className="text-sm font-medium hover:text-primary transition-colors">
              Por Qué WiTI
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="#contacto">Agenda tu Asesoría</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
          <div className="container relative">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Obtén hasta $17 Millones para tu Startup con Semilla Inicia 2025
              </h1>
              <h2 className="text-xl md:text-2xl text-primary text-balance font-semibold">
                El fondo CORFO que impulsa emprendimientos innovadores en Chile - Postula con WiTI y asegura tu
                financiamiento
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Semilla Inicia 2025 financia hasta el <strong className="text-foreground">85% de tu proyecto</strong>{" "}
                (75% base + 10% extra para empresas lideradas por mujeres).
                <strong className="text-foreground"> 10 meses de ejecución</strong> para validar tu idea y lograr tus
                primeras ventas. WiTI es tu aliado estratégico con{" "}
                <strong className="text-foreground">+90% de tasa de éxito</strong> en postulaciones CORFO.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="#contacto">Agenda tu Asesoría Gratuita</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descarga las Bases Completas
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Entidad Patrocinadora Oficial CORFO
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  +150 Proyectos Aprobados
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  90% Tasa de Éxito
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Qué es Semilla Inicia */}
        <section id="programa" className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                El Financiamiento que Transforma Ideas en Negocios Reales
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Monto */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Hasta $17 Millones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • Financiamiento base: <strong className="text-foreground">$15.000.000</strong> (75% del proyecto)
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • Empresas lideradas por mujeres: <strong className="text-foreground">+$2.000.000</strong>{" "}
                    adicionales (85% total)
                  </p>
                  <p className="text-sm text-primary font-semibold">No reembolsable</p>
                </CardContent>
              </Card>

              {/* Plazo */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">10 Meses para Validar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • 10 meses de ejecución (prorrogable 2 meses más)
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • Objetivo: <strong className="text-foreground">Lograr primera venta</strong>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">• Validación técnica y comercial</p>
                </CardContent>
              </Card>

              {/* Cofinanciamiento */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Solo 25% de Aporte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • CORFO financia <strong className="text-foreground">75%</strong> (o 85% con bono mujer)
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    • Tu aporte: <strong className="text-foreground">25%</strong> (15% con bono mujer)
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">• Aceptamos aportes valorizados</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section id="requisitos" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Requisitos para Postular - ¿Tu Proyecto Califica?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Requisitos del Beneficiario */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Requisitos del Beneficiario
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Persona natural mayor de 18 años con residencia en Chile, O
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Persona jurídica constituida en Chile (máx 18 meses de antigüedad)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Sin ingresos por ventas hasta el mes anterior a la postulación
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Proyecto innovador con potencial regional/internacional
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Características del Proyecto */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Características del Proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Idea de producto o servicio innovador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Solución a una problemática relevante (mínimo nivel regional)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Potencial de expansión a otras regiones o mercados internacionales
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Objetivo de lograr primera venta durante el proyecto
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Equipo Emprendedor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Equipo Emprendedor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Hasta 3 cofundadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Cada uno con mínimo 5% participación (si es empresa)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Dedicación horaria comprometida al proyecto</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="#contacto">
                  ¿Tienes dudas si calificas? Consulta con nuestros expertos
                  <ChevronRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Focalización Temática */}
        <section id="focalizacion" className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                8 Áreas Estratégicas con Prioridad de Financiamiento
              </h2>
              <p className="text-lg text-muted-foreground">
                Semilla Inicia 2025 prioriza proyectos en estos sectores de alto impacto para Chile
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {clusters.map((cluster, index) => {
                  const Icon = cluster.icon
                  return (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{cluster.title}</h3>
                            <p className="text-sm text-muted-foreground">{cluster.description}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2">
                        <div className="space-y-3 pl-16">
                          <div>
                            <p className="text-sm font-semibold mb-1">Ejemplos de proyectos:</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{cluster.examples}</p>
                          </div>
                          {cluster.highlighted && (
                            <Badge className="bg-accent text-accent-foreground">{cluster.highlighted}</Badge>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Qué Financia */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Actividades y Gastos Financiables con Semilla Inicia
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Actividades Obligatorias */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Actividades Obligatorias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Servicios de mentoría profesional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Constitución de empresa e inicio de actividades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Definición de modelo de negocios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Desarrollo y validación técnica del producto/servicio
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        Prospección y validación comercial (ferias, rondas de negocios)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Estrategia de sostenibilidad (social y ambiental)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Actividades Opcionales */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Actividades Opcionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Equipo de trabajo (remuneraciones y honorarios)</li>
                    <li>• Adquisición de conocimientos certificables</li>
                    <li>• Desarrollo de pilotos (Producto Mínimo Viable)</li>
                    <li>• Empaquetamiento comercial (diseño, muestras)</li>
                    <li>• Marketing y difusión</li>
                    <li>• Certificaciones de producto</li>
                    <li>• Protección de propiedad intelectual</li>
                    <li>• Arriendo de espacios (coworks)</li>
                    <li>• Adquisición de activos críticos</li>
                    <li>• Materiales e insumos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Badge variant="secondary" className="px-4 py-2">
                Hasta un 3% del subsidio puede destinarse a garantías
              </Badge>
            </div>
          </div>
        </section>

        {/* Proceso de Postulación */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tu Camino al Financiamiento en 5 Pasos</h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {/* Paso 1 */}
                <Card className="text-center relative">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      1
                    </div>
                    <CardTitle className="text-base">Evaluación Inicial con WiTI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Revisamos tu idea y confirmamos elegibilidad
                    </p>
                    <Badge variant="outline" className="text-xs">
                      1-2 días
                    </Badge>
                  </CardContent>
                </Card>

                {/* Paso 2 */}
                <Card className="text-center relative">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      2
                    </div>
                    <CardTitle className="text-base">Desarrollo del Proyecto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Co-creamos tu propuesta con máximas probabilidades de éxito
                    </p>
                    <Badge variant="outline" className="text-xs">
                      1-2 semanas
                    </Badge>
                  </CardContent>
                </Card>

                {/* Paso 3 */}
                <Card className="text-center relative">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      3
                    </div>
                    <CardTitle className="text-base">Postulación a CORFO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Enviamos tu proyecto en los plazos oficiales
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Según convocatoria
                    </Badge>
                  </CardContent>
                </Card>

                {/* Paso 4 */}
                <Card className="text-center relative">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      4
                    </div>
                    <CardTitle className="text-base">Evaluación CORFO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      CORFO evalúa tu proyecto (admisibilidad + evaluación)
                    </p>
                    <Badge variant="outline" className="text-xs">
                      25 días aprox.
                    </Badge>
                  </CardContent>
                </Card>

                {/* Paso 5 */}
                <Card className="text-center relative">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mb-4">
                      5
                    </div>
                    <CardTitle className="text-base">Adjudicación y Ejecución</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Formalización del convenio y entrega de recursos
                    </p>
                    <Badge variant="outline" className="text-xs">
                      15 días
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Con WiTI, te acompañamos en cada etapa - desde la idea hasta la entrega del subsidio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por Qué WiTI */}
        <section id="witi" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                WiTI: Tu Socio Estratégico para el Éxito en CORFO
              </h2>
              <p className="text-lg text-muted-foreground">
                No solo postulamos - Te garantizamos la mejor propuesta posible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {/* Experiencia */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">+150</div>
                  <CardTitle className="text-lg">Proyectos Aprobados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Más de 5 años especializados en fondos CORFO. Conocemos al detalle cada instrumento
                  </p>
                </CardContent>
              </Card>

              {/* Tasa de Éxito */}
              <Card className="text-center border-2 border-primary">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <CardTitle className="text-lg">de Aprobación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    9 de cada 10 proyectos que postulamos son financiados. Muy por sobre la media del mercado
                  </p>
                </CardContent>
              </Card>

              {/* Acompañamiento */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-primary mb-2">De Principio a Fin</div>
                  <CardTitle className="text-lg">Acompañamiento Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Desde la elegibilidad hasta la entrega de recursos. Seguimiento post-adjudicación incluido
                  </p>
                </CardContent>
              </Card>

              {/* Equipo */}
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-primary mb-2">Especialistas</div>
                  <CardTitle className="text-lg">Equipo Experto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ingenieros, consultores y ex-evaluadores CORFO. Entidad Patrocinadora oficial
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Preguntas Frecuentes sobre Semilla Inicia 2025
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Calendario */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Plazos Clave - No Te Pierdas la Convocatoria 2025
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  { date: "Diciembre 2024", event: "Apertura de postulaciones (fecha estimada)" },
                  { date: "Enero 2025", event: "Cierre de postulaciones" },
                  { date: "Febrero 2025", event: "Evaluación de proyectos" },
                  { date: "Marzo 2025", event: "Publicación de resultados" },
                  { date: "Abril 2025", event: "Formalización y entrega de recursos" },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-primary">{item.date}</div>
                        <div className="text-muted-foreground">{item.event}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="#contacto">
                    <Clock className="h-4 w-4 mr-2" />
                    ¡El tiempo corre! Agenda tu asesoría hoy para llegar a tiempo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final y Formulario */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Convierte tu Idea en Realidad con $17 Millones
              </h2>
              <p className="text-lg text-muted-foreground">
                No dejes pasar esta oportunidad única de financiamiento. Con WiTI, tu postulación está en las mejores
                manos.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Solicita tu Asesoría Gratuita</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input id="nombre" placeholder="Juan Pérez" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="juan@ejemplo.cl" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" type="tel" placeholder="+56 9 1234 5678" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Región *</Label>
                        <Select>
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Selecciona tu región" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rm">Región Metropolitana</SelectItem>
                            <SelectItem value="valparaiso">Valparaíso</SelectItem>
                            <SelectItem value="biobio">Biobío</SelectItem>
                            <SelectItem value="otra">Otra región</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cluster">Clúster temático de tu proyecto *</Label>
                      <Select>
                        <SelectTrigger id="cluster">
                          <SelectValue placeholder="Selecciona el área de tu proyecto" />
                        </SelectTrigger>
                        <SelectContent>
                          {clusters.map((cluster, index) => (
                            <SelectItem key={index} value={cluster.title}>
                              {cluster.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="proyecto">Breve descripción de tu proyecto *</Label>
                      <Textarea
                        id="proyecto"
                        placeholder="Describe en pocas palabras tu idea de negocio, problema que resuelve y mercado objetivo..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto los términos y condiciones y la política de privacidad
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      Solicitar Asesoría Gratuita
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Información de Contacto */}
              <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">contacto@witi.cl</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">+56 9 7537 9882</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Chile</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Columna 1 */}
            <div className="space-y-4">
              <Image src="/witi-logo.svg" alt="WiTI Logo" width={130} height={40} className="h-10 w-auto" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consultora especializada en fondos CORFO con +5 años de experiencia
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h3 className="font-semibold mb-4">Enlaces Útiles</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Sobre WiTI
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="hover:text-primary transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#metodologia" className="hover:text-primary transition-colors">
                    Nuestra Metodología
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-primary transition-colors">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Descargar Bases Semilla Inicia 2025 (PDF)
                  </a>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 WiTI - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/56975379882?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20Semilla%20Inicia%202025"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
