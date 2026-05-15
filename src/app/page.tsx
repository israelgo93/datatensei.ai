import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Ticket,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

type ProductStatus = "Activo" | "Producto" | "Open source" | "Comunidad";

interface Product {
  name: string;
  category: string;
  description: string;
  status: ProductStatus;
  url: string;
  repo?: string;
  icon: LucideIcon;
}

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Step {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "SaaS verticales con IA",
    description: "Productos multi-tenant para industrias concretas: legal, salud, retail, facturacion y operaciones.",
    icon: Layers3,
  },
  {
    title: "Agentes IA para empresas",
    description: "Agentes con memoria, RAG, canales como WhatsApp y flujos conectados a datos reales.",
    icon: Bot,
  },
  {
    title: "Automatizacion operativa",
    description: "Sistemas que reemplazan hojas de calculo, reportes manuales y procesos repetitivos.",
    icon: Workflow,
  },
  {
    title: "Cloud product engineering",
    description: "Diseño, desarrollo, despliegue y operacion en AWS, Google Cloud, Supabase y contenedores.",
    icon: Cloud,
  },
];

const steps: Step[] = [
  {
    title: "Diagnostico",
    description: "Aterrizamos el problema, datos disponibles, usuarios, riesgo operativo y oportunidad de IA.",
  },
  {
    title: "Blueprint",
    description: "Diseñamos arquitectura, experiencia, modelo de datos, agentes y ruta de producto.",
  },
  {
    title: "Construccion",
    description: "Creamos una primera version funcional con frontend, backend, seguridad y flujos centrales.",
  },
  {
    title: "Integracion",
    description: "Conectamos canales, documentos, APIs, bases de datos, pagos, analitica o herramientas existentes.",
  },
  {
    title: "Despliegue",
    description: "Publicamos en cloud con health checks, CI/CD, observabilidad, dominios y HTTPS.",
  },
  {
    title: "Escalamiento",
    description: "Iteramos con usuarios reales, medimos uso, mejoramos IA y convertimos el piloto en producto.",
  },
];

const commercialProducts: Product[] = [
  {
    name: "Veredix",
    category: "LegalTech",
    description: "Asistente juridico de IA para Ecuador con equipos especializados por dominio legal.",
    status: "Activo",
    url: "https://veredix.app/",
    icon: ShieldCheck,
  },
  {
    name: "EXPOSOUR",
    category: "Agroexportacion",
    description: "Sistema operativo para recepcion, empaque, liquidacion, despachos, packing lists y analitica.",
    status: "Activo",
    url: "https://system.exposour.com/",
    icon: Database,
  },
  {
    name: "FacturIA",
    category: "Fintech tributario",
    description: "Facturacion electronica ecuatoriana con asistencia de IA para reportes y configuracion.",
    status: "Activo",
    url: "https://3fsu97bh6u.us-east-1.awsapprunner.com/",
    icon: FileText,
  },
  {
    name: "StockPOS",
    category: "Retail",
    description: "POS e inventario mobile-first con alertas inteligentes, Kardex y analisis de negocio.",
    status: "Producto",
    url: "https://if53jkakj7.us-east-1.awsapprunner.com/iniciar-sesion",
    icon: MonitorSmartphone,
  },
  {
    name: "DentalSaaS",
    category: "Salud",
    description: "Gestion odontologica multi-tenant con Formulario 033, odontograma, PWA offline e IA clinica.",
    status: "Producto",
    url: "https://3fbjb8kxa3.us-east-1.awsapprunner.com/login",
    icon: BrainCircuit,
  },
  {
    name: "CronologIA",
    category: "IA generativa",
    description: "Transformacion de fotos con IA para decadas, retratos profesionales y estilos visuales.",
    status: "Producto",
    url: "https://cronologia-563781635313.us-central1.run.app/",
    icon: Sparkles,
  },
  {
    name: "Rifathon",
    category: "Rifas digitales",
    description: "Plataforma para ventas, boletos con QR, vendedores, recibos y verificacion publica.",
    status: "Producto",
    url: "https://pq9m3mqutv.us-east-1.awsapprunner.com/",
    icon: Ticket,
  },
];

const openSourceProducts: Product[] = [
  {
    name: "OpenAgno",
    category: "Agentes IA",
    description: "Plataforma open source para agentes autonomos y multimodales con workspace declarativo.",
    status: "Open source",
    url: "https://openagno.com/",
    repo: "https://github.com/OpenAgno/OpenAgno.git",
    icon: Bot,
  },
  {
    name: "EstructuraDatos.org",
    category: "Educacion open source",
    description: "Visualizadores 3D y experiencias interactivas para aprender estructuras de datos.",
    status: "Open source",
    url: "https://estructuradatos.org/",
    repo: "https://github.com/israelgo93/estructuradatos.org.git",
    icon: Code2,
  },
  {
    name: "Club IA ULEAM",
    category: "Comunidad",
    description: "Sitio PWA, galeria de eventos y asistente IA para comunidad universitaria de inteligencia artificial.",
    status: "Comunidad",
    url: "https://iauleam.club/",
    repo: "https://github.com/israelgo93/clubiauleam.git",
    icon: Network,
  },
];

function ProductMockup() {
  const portfolioRows = [
    { label: "OpenAgno Cloud", value: "Agentes multicanal", icon: Network },
    { label: "Veredix", value: "Busqueda juridica + RAG", icon: ShieldCheck },
    { label: "EXPOSOUR", value: "Packing list + analitica", icon: Database },
  ];

  return (
    <section className="relative overflow-hidden bg-foreground px-4 py-24 text-white sm:px-6 lg:px-8" id="plataforma">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full border border-emerald-100/35" />
        <div className="absolute left-[22%] top-24 h-[30rem] w-[30rem] rounded-full border border-white/18" />
        <div className="absolute right-[-8rem] top-8 h-[36rem] w-[36rem] rounded-full border border-emerald-100/28" />
        <div className="absolute bottom-8 left-1/2 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
        <p className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9rem] font-semibold tracking-[-0.08em] text-white/[0.035] sm:text-[13rem]">
          PRODUCTOS IA
        </p>
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">Portafolio operativo</h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-base leading-7 text-white/60">
            Agentes, SaaS y sistemas operativos de negocio construidos bajo una misma practica de producto, IA y cloud.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.45fr_0.85fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-neutral-950 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.34)]" delay={0.05}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,118,110,0.24),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(20,184,166,0.14),transparent_30%)]" />
            <div className="relative flex h-[430px] flex-col rounded-[1.4rem] border border-white/15 bg-white/8 p-4 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-white/40" />
                  <span className="size-3 rounded-full bg-white/25" />
                  <span className="size-3 rounded-full bg-white/15" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/58">datatensei.ai/workspace</span>
              </div>
              <div className="grid min-h-0 flex-1 gap-4 pt-4 lg:grid-cols-[0.9fr_1.4fr]">
                <aside className="rounded-[1.2rem] border border-white/10 bg-black/20 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/35">Portfolio OS</p>
                  <div className="mt-4 space-y-2">
                    {portfolioRows.map((row) => {
                      const Icon = row.icon;
                      return (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3" key={row.label}>
                          <div className="flex items-center gap-2">
                            <span className="flex size-8 items-center justify-center rounded-xl bg-white text-black">
                              <Icon className="size-4" />
                            </span>
                            <div>
                              <p className="text-sm font-medium text-white">{row.label}</p>
                              <p className="text-xs text-white/42">{row.value}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </aside>
                <div className="grid gap-4">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white p-4 text-black">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">AI delivery pipeline</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">De idea a producto desplegado</h3>
                      </div>
                      <span className="rounded-full bg-black px-3 py-1 text-xs text-white">Live</span>
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-4">
                      {["Discovery", "Producto", "Cloud", "Scale"].map((item, index) => (
                        <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-3" key={item}>
                          <span className="text-xs text-black/40">0{index + 1}</span>
                          <p className="mt-3 text-sm font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.08] p-4">
                      <p className="text-sm font-medium text-white">Stack probado</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Next.js", "Supabase", "AWS", "ECS", "RAG", "Agents"].map((item) => (
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/64" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.08] p-4">
                      <p className="text-sm font-medium text-white">Portafolio activo</p>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-white">10+</p>
                      <p className="text-xs leading-6 text-white/46">productos, sistemas y contribuciones construidas en dos años.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="flex flex-col justify-between rounded-[2rem] border border-white/16 bg-white/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl" delay={0.12}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Sistema comercial</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">
                Portafolio real para resolver problemas reales.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">
                DataTensei convierte experiencia de producto en servicios de IA aplicada, automatizacion y SaaS para empresas que necesitan operar mejor.
              </p>
            </div>
            <Link className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90" href="#portafolio">
              Explorar productos <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: ProductStatus }) {
  return (
    <span className="rounded-full border border-foreground/10 bg-white px-2.5 py-1 text-xs font-medium text-muted">
      {status}
    </span>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[1260px] px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <h1 className="mx-auto max-w-[14ch] text-5xl font-semibold leading-[0.96] tracking-[-0.075em] text-foreground sm:text-7xl lg:text-[6.8rem]">
          Software con IA, de la idea a produccion.
        </h1>
        <p className="mx-auto mt-7 max-w-[58ch] text-lg leading-8 text-muted">
          Las empresas quieren adoptar inteligencia artificial, pero convertir una idea en un producto real, seguro y desplegado sigue siendo lento. DataTensei AI construye agentes, SaaS y sistemas operativos listos para operar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link className="inline-flex min-h-12 items-center gap-2 rounded-button bg-foreground px-6 text-sm font-medium text-white transition hover:bg-black/80" href="#contacto">
            Construir con DataTensei <ArrowRight className="size-4" />
          </Link>
          <Link className="inline-flex min-h-12 items-center gap-2 rounded-button border border-border bg-white px-6 text-sm font-medium text-foreground transition hover:border-foreground/30" href="#portafolio">
            Ver portafolio <Play className="size-4" />
          </Link>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-[1.6rem] border border-emerald-900/10 bg-white/82 p-3 shadow-[0_18px_60px_rgba(15,118,110,0.11)] backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex min-h-16 flex-1 items-center rounded-[1.2rem] border border-border bg-white px-4 text-left text-sm text-muted">
              Automatizar atencion, documentos, operaciones o un SaaS completo con IA
            </div>
            <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[1.2rem] bg-foreground px-5 text-sm font-semibold text-white transition hover:bg-black/80" href="#contacto">
              Solicitar propuesta <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-scroll-x items-center gap-4">
            {[0, 1].map((copyIndex) =>
              ["NVIDIA Inception", "AWS Startups", "Open source", "Supabase", "Google Cloud", "ECS Fargate", "RAG", "Multi-tenant SaaS"].map((item) => (
                <span
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-muted backdrop-blur"
                  key={`${copyIndex}-${item}`}
                >
                  <Check className="size-3.5 text-foreground" />
                  {item}
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <ProductMockup />

      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8" id="servicios">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Que hace DataTensei</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Construimos productos IA con criterio de produccion.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="glass-panel rounded-card p-5" key={service.title}>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-foreground text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8" id="como-funciona">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">Como funciona</h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-base leading-7 text-muted">
            Un proceso corto, verificable y orientado a publicar software real, no presentaciones.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article className="rounded-card border border-border bg-white/78 p-5 shadow-sm backdrop-blur" key={step.title}>
              <span className="text-sm font-semibold text-muted">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8" id="portafolio">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Productos comerciales</p>
            <h2 className="mt-4 max-w-[13ch] text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Productos creados por DataTensei.
            </h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-7 text-muted">
            SaaS, aplicaciones y sistemas verticales desplegados en infraestructura cloud.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commercialProducts.map((product) => {
            const Icon = product.icon;
            return (
              <article className="group flex min-h-[300px] flex-col rounded-card border border-border bg-white/82 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft" key={product.name}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-sm">
                    <Icon className="size-5" />
                  </span>
                  <StatusPill status={product.status} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted">{product.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em]">{product.name}</h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-muted">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-2 text-xs font-medium text-white" href={product.url} target="_blank">
                    Ver producto <Globe2 className="size-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8" id="opensource">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Open source y comunidad</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Credibilidad tecnica abierta.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Proyectos publicos y contribuciones educativas que demuestran capacidad de producto, documentacion y comunidad.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {openSourceProducts.map((product) => {
              const Icon = product.icon;
              return (
              <article className="rounded-card border border-border bg-white/82 p-5 shadow-sm backdrop-blur" key={product.name}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-sm">
                    <Icon className="size-5" />
                  </span>
                  <StatusPill status={product.status} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em]">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-2 text-xs font-medium text-white" href={product.url} target="_blank">
                    Ver proyecto <Globe2 className="size-3.5" />
                  </Link>
                  {product.repo ? (
                    <Link className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-medium text-foreground" href={product.repo} target="_blank">
                      Repo .git <Github className="size-3.5" />
                    </Link>
                  ) : null}
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-white" id="roadmap">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Direccion de producto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              De portafolio tecnico a compañia de productos IA.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/58">
              DataTensei opera una base de productos que permite ofrecer servicios de IA aplicada, desarrollo SaaS y automatizacion con evidencia tecnica real.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Estado actual", "Productos comerciales, plataformas open source, despliegues cloud y casos comunitarios."],
              ["Oferta comercial", "Agentes IA, SaaS verticales, automatizacion documental, analitica operativa y despliegue cloud."],
              ["Roadmap", "OpenAgno Cloud como plataforma central, paquetes de agentes IA, servicios SaaS y despliegue AWS ECS Fargate."],
            ].map(([title, description]) => (
              <article className="rounded-card border border-white/10 bg-white/[0.06] p-5" key={title}>
                <h3 className="text-xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Equipo fundador</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Israel J. Gomez</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Founder de DataTensei, constructor de productos de IA, SaaS y plataformas cloud desde Manta, Ecuador. El portafolio combina desarrollo full-stack, agentes IA, automatizacion, open source y despliegues productivos.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Founder", "AI Software Engineer", "Product Builder", "Manta, Ecuador"].map((item) => (
                <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-muted" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Early adopters</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Implementaciones tempranas</h2>
            <div className="mt-6 grid gap-3">
              {[
                "Club IA ULEAM: comunidad, eventos y sitio PWA con asistente IA.",
                "EstructuraDatos.org: herramientas abiertas para educacion en programacion.",
                "Productos verticales: pilotos y sistemas desplegados para legal, salud, retail, agroexportacion y facturacion.",
              ].map((item) => (
                <div className="flex gap-3 rounded-2xl border border-border bg-white/65 p-3" key={item}>
                  <Check className="mt-0.5 size-4 shrink-0" />
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-4 py-20 text-center sm:px-6 lg:px-8" id="contacto">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-12">
          <Rocket className="mx-auto size-8" />
          <h2 className="mx-auto mt-5 max-w-[14ch] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
            Construyamos el siguiente producto IA.
          </h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-base leading-7 text-muted">
            Agenda una conversacion para convertir procesos, datos o una idea de producto en software con IA listo para operar.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            <a className="rounded-2xl border border-border bg-white p-4 text-sm text-muted" href="mailto:israelgomez@datatensei.com">
              <Mail className="mb-3 size-4 text-foreground" /> israelgomez@datatensei.com
            </a>
            <a className="rounded-2xl border border-border bg-white p-4 text-sm text-muted" href="tel:+593978625312">
              <Phone className="mb-3 size-4 text-foreground" /> +593 978 625 312
            </a>
            <div className="rounded-2xl border border-border bg-white p-4 text-sm text-muted">
              <MapPin className="mb-3 size-4 text-foreground" /> Manta, Manabi, Ecuador
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white/62 py-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 DataTensei AI. datatensei.ai</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/privacy">Privacidad</Link>
            <Link href="/legal/terms">Terminos</Link>
            <Link href="https://github.com/israelgo93" target="_blank">GitHub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
