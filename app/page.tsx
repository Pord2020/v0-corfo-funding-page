import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { TypeformButton } from "@/components/typeform-button"

export const metadata = {
  title: "Fondo Inicia 2025: Hasta $17M para tu Startup | WiTI - Consultora CORFO",
  description:
    "Postula al Fondo Inicia 2025 con WiTI y obtén hasta $17 millones para tu emprendimiento. 75% de tasa de éxito y acompañamiento experto CORFO.",
  keywords:
    "fondo inicia 2025, fondo corfo, subsidio emprendimiento chile, financiamiento startup, postular corfo, witi consultora",
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://witi.cl"
const TYPEFORM_URL = "https://m20y7fw1hlw.typeform.com/to/k8nsgPrj"

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

]

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WiTI",
  url: siteUrl,
  logo: `${siteUrl}/witi-logo.svg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+56 9 7537 9882",
      contactType: "sales",
      areaServed: "CL",
      availableLanguage: ["Spanish"],
    },
  ],
  sameAs: ["https://www.linkedin.com/company/witi"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Huérfanos 1160, Of. 1101",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Paraguay 2141, Of. 405",
      addressLocality: "Montevideo",
      addressCountry: "UY",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Carrera 16 93 A 16 Of. 203 204",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WiTI",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(websiteSchema)}
      </Script>
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
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
              Focalización
            </Link>
            <Link href="#witi" className="text-sm font-medium hover:text-primary transition-colors">
              Por Qué WiTI
            </Link>
            <TypeformButton className="bg-accent text-accent-foreground hover:bg-accent/90">Agenda tu Asesoría</TypeformButton>
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
                <strong className="text-foreground">75% de tasa de éxito</strong> en postulaciones CORFO.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <TypeformButton size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Agenda tu Asesoría Gratuita
                </TypeformButton>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  75% Tasa de Éxito con CORFO
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Equipo senior en fondos CORFO
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Acompañamiento integral
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
                        Persona natural mayor de 18 años con residencia en Chile
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
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href="https://wa.me/56975379882"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  ¿Tienes dudas si calificas? Escríbenos por WhatsApp
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
                Focalización: Fondo Inicia 2025 solo financiará proyectos en estos focos
              </h2>
              <p className="text-lg text-muted-foreground">
                Conoce las áreas estratégicas donde el Fondo Inicia 2025 concentrará su financiamiento.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {clusters.map((cluster, index) => {
                  const Icon = cluster.icon
                  return (
                    <AccordionItem key={index} value={`cluster-${index}`} className="border rounded-lg px-6 bg-card">
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-lg">{cluster.title}</div>
                            <div className="text-sm text-muted-foreground font-normal">{cluster.description}</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2">
                        <div className="space-y-4 ml-16">
                          <div>
                            <span className="font-semibold text-foreground">Ejemplos: </span>
                            <span className="text-muted-foreground">{cluster.examples}</span>
                          </div>
                          {cluster.highlighted && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {cluster.highlighted}
                            </Badge>
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
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué Financia el Fondo?</h2>
              <p className="text-lg text-muted-foreground">
                Actividades y gastos financiables del Fondo Inicia 2025
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Cobertura hasta 85% (con bono mujer)
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                  Aporte mínimo 15% - 25%
                </Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Actividades Obligatorias */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit">Incluidas siempre</Badge>
                  <CardTitle className="text-xl">Actividades Obligatorias</CardTitle>
                  <CardDescription>
                    Línea base requerida por CORFO para validar tu solución y modelo de negocio.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Servicios de mentoría profesional",
                      "Constitución de empresa e inicio de actividades",
                      "Definición de modelo de negocios",
                      "Desarrollo y validación técnica del producto/servicio",
                      "Prospección y validación comercial (ferias, rondas de negocios)",
                      "Estrategia de sostenibilidad (social y ambiental)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Actividades Opcionales */}
              <Card className="border-border/50">
                <CardHeader className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Armar presupuesto
                  </Badge>
                  <CardTitle className="text-xl">Actividades Opcionales</CardTitle>
                  <CardDescription>
                    Elige según la estrategia de ejecución y los hitos que necesitas financiar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Equipo de trabajo (remuneraciones y honorarios)",
                      "Adquisición de conocimientos certificables",
                      "Desarrollo de pilotos (Producto Mínimo Viable)",
                      "Empaquetamiento comercial (diseño, muestras)",
                      "Marketing y difusión",
                      "Certificaciones de producto",
                      "Protección de propiedad intelectual",
                      "Arriendo de espacios (coworks)",
                      "Adquisición de activos críticos",
                      "Materiales e insumos",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Hasta un 3% del subsidio puede destinarse a garantías
              </Badge>
            </div>
          </div>
        </section>

        {/* Proceso de Postulación */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tu Camino al Financiamiento</h2>
              <p className="text-lg text-muted-foreground">Acompañamiento experto en 3 fases clave</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit">Fase 1</Badge>
                  <CardTitle>Diagnóstico & Admisibilidad</CardTitle>
                  <CardDescription>
                    Identificamos el fondo CORFO más adecuado según tus objetivos y capacidades.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Qué hacemos</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Evaluación de admisibilidad técnica y financiera</li>
                      <li>- Análisis de capacidad de contrapartida</li>
                      <li>- Identificación de brechas y fortalezas del proyecto</li>
                      <li>- Recomendación de línea CORFO óptima</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Entregables</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Informe de diagnóstico empresarial</li>
                      <li>- Matriz de elegibilidad CORFO</li>
                      <li>- Plan de acción preliminar</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit">Fase 2</Badge>
                  <CardTitle>Formulación del Proyecto</CardTitle>
                  <CardDescription>
                    Construimos una propuesta competitiva alineada a los criterios de evaluación CORFO.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Qué hacemos</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Diseño de la solución técnica del proyecto</li>
                      <li>- Estructuración del modelo de negocio y financiero</li>
                      <li>- Definición de indicadores y metas</li>
                      <li>- Preparación de documentación de respaldo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Entregables</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Propuesta técnica completa</li>
                      <li>- Modelo financiero y presupuesto detallado</li>
                      <li>- Carta Gantt del proyecto</li>
                      <li>- Documentos de respaldo técnico</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit">Fase 3</Badge>
                  <CardTitle>Postulación</CardTitle>
                  <CardDescription>
                    Gestionamos el envío y seguimiento para que tu propuesta destaque.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Qué hacemos</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Redacción y ajuste de formularios CORFO</li>
                      <li>- Coordinación de documentación legal y financiera</li>
                      <li>- Revisión de admisibilidad pre-envío</li>
                      <li>- Gestión de envío y seguimiento</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Entregables</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Formulario CORFO completo</li>
                      <li>- Set de documentos anexos</li>
                      <li>- Checklist de requisitos cumplidos</li>
                      <li>- Comprobante de postulación</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
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
              {[
                {
                  icon: Award,
                  title: "Experiencia CORFO",
                  copy:
                    "Consultores senior con trayectoria en fondos CORFO y conocimiento profundo de los instrumentos.",
                },
                {
                  icon: TrendingUp,
                  title: "75% de Aprobación",
                  copy: "Metodología probada que maximiza la elegibilidad y la evaluación técnica de tu proyecto.",
                },
                {
                  icon: Handshake,
                  title: "Acompañamiento Integral",
                  copy: "Desde el diagnóstico hasta la postulación, con seguimiento cercano y entregables claros.",
                },
                {
                  icon: Users,
                  title: "Equipo Multidisciplinario",
                  copy: "Ingenieros, consultores y ex-evaluadores trabajando en conjunto para fortalecer tu propuesta.",
                },
              ].map(({ icon: Icon, title, copy }, index) => (
                <Card
                  key={index}
                  className="text-center border border-transparent hover:border-primary/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition duration-200"
                >
                  <CardHeader>
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{copy}</p>
                  </CardContent>
                </Card>
              ))}
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
                Plazo Máximo de Postulación
              </h2>
              <p className="text-lg text-muted-foreground">
                Prepárate con tiempo para llegar a la convocatoria Semilla Inicia 2025.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="p-8 space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Clock className="h-7 w-7" />
                    </div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Fecha límite</p>
                    <h3 className="text-2xl font-bold">18 de diciembre</h3>
                    <p className="text-muted-foreground max-w-xl">
                      Agenda tu asesoría para asegurar un envío sólido antes del cierre. Nos encargamos de los
                      entregables y del seguimiento de tu postulación.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <TypeformButton size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Agenda tu asesoría ahora
                    </TypeformButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final y Formulario */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Convierte tu Idea en Realidad con hasta $17 Millones
              </h2>
              <p className="text-lg text-muted-foreground">
                No dejes pasar esta oportunidad única de financiamiento. Con WiTI, tu postulación está en las mejores
                manos.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="space-y-3">
                <p className="text-xs uppercase font-semibold tracking-[0.2em] text-primary">
                  Tecnología pensada para innovar
                </p>
                <Image src="/witi-logo.svg" alt="WiTI Logo" width={130} height={40} className="h-10 w-auto" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">Oficinas</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>🇨🇱 Huérfanos 1160, Of. 1101, Santiago, Chile</p>
                    <p>🇺🇾 Paraguay 2141, Of. 405, Montevideo, Uruguay</p>
                    <p>🇨🇴 Carrera 16 93 A 16 Of. 203 204 Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Contacto</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>+56 9 7537 9882</p>
                    <p>startups@witi.cl</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 WiTI. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
