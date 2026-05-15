import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
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
  Rocket,
  ShieldCheck,
  Sparkles,
  Ticket,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PromptCTA } from "@/components/prompt-cta";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

type ProductStatus = "Activo" | "Producto" | "Open source" | "Comunidad";

interface Offer {
  title: string;
  outcome: string;
  signal: string;
  tags: string[];
  icon: LucideIcon;
}

interface Product {
  name: string;
  category: string;
  description: string;
  status: ProductStatus;
  url: string;
  repo?: string;
  icon: LucideIcon;
}

const proofItems = ["AWS Startups", "NVIDIA Inception", "Open source", "Cloud", "SaaS"];

const proofGrid = [
  "OpenAgno",
  "Veredix",
  "EXPOSOUR",
  "FacturIA",
  "StockPOS",
  "DentalSaaS",
  "CronologIA",
  "Rifathon",
  "AWS",
  "NVIDIA",
];

const outcomeMetrics = [
  ["30 dias", "Ruta de kickoff a primer producto operable"],
  ["3 lineas", "Agentes, SaaS verticales y sistemas internos"],
  ["Cloud", "Despliegue con dominios, HTTPS y health checks"],
  ["IA segura", "Roles, auditoria, trazabilidad y control humano"],
  ["Productos reales", "OpenAgno, Veredix, EXPOSOUR y mas"],
];

const offers: Offer[] = [
  {
    title: "Agentes IA para empresas",
    outcome: "Respuestas, documentos y decisiones asistidas.",
    signal: "Atencion, conocimiento interno, WhatsApp, web.",
    tags: ["RAG", "Canales", "Handoff"],
    icon: Bot,
  },
  {
    title: "SaaS verticales con IA",
    outcome: "Productos multi-tenant listos para vender.",
    signal: "Roles, pagos, dashboards, reportes y agentes.",
    tags: ["Multi-tenant", "Pagos", "Dashboards"],
    icon: Layers3,
  },
  {
    title: "Sistemas operativos internos",
    outcome: "Trazabilidad y control para operaciones repetitivas.",
    signal: "Workflows, auditoria, analytics e integraciones.",
    tags: ["Workflows", "Auditoria", "Analytics"],
    icon: Workflow,
  },
];

const featuredProducts: Product[] = [
  {
    name: "OpenAgno",
    category: "Agentes IA",
    description: "Workspace open source para agentes autonomos y multimodales con arquitectura extensible.",
    status: "Open source",
    url: "https://openagno.com/",
    repo: "https://github.com/OpenAgno/OpenAgno.git",
    icon: Bot,
  },
  {
    name: "Veredix",
    category: "LegalTech",
    description: "Asistente juridico de IA para Ecuador con busqueda, criterio y flujos por dominio legal.",
    status: "Activo",
    url: "https://veredix.app/",
    icon: ShieldCheck,
  },
  {
    name: "EXPOSOUR",
    category: "Agroexportacion",
    description: "Sistema operativo para recepcion, empaque, liquidacion, despachos y analitica.",
    status: "Activo",
    url: "https://system.exposour.com/",
    icon: Database,
  },
];

const secondaryProducts: Product[] = [
  {
    name: "FacturIA",
    category: "Fintech tributario",
    description: "Facturacion electronica ecuatoriana con asistencia de IA.",
    status: "Activo",
    url: "https://3fsu97bh6u.us-east-1.awsapprunner.com/",
    icon: FileText,
  },
  {
    name: "StockPOS",
    category: "Retail",
    description: "POS e inventario mobile-first con Kardex y alertas.",
    status: "Producto",
    url: "https://if53jkakj7.us-east-1.awsapprunner.com/iniciar-sesion",
    icon: MonitorSmartphone,
  },
  {
    name: "DentalSaaS",
    category: "Salud",
    description: "Gestion odontologica multi-tenant con PWA e IA clinica.",
    status: "Producto",
    url: "https://3fbjb8kxa3.us-east-1.awsapprunner.com/login",
    icon: BrainCircuit,
  },
  {
    name: "CronologIA",
    category: "IA generativa",
    description: "Transformacion visual con IA para retratos y estilos.",
    status: "Producto",
    url: "https://cronologia-563781635313.us-central1.run.app/",
    icon: Sparkles,
  },
  {
    name: "Rifathon",
    category: "Rifas digitales",
    description: "Boletos con QR, vendedores, recibos y verificacion publica.",
    status: "Producto",
    url: "https://pq9m3mqutv.us-east-1.awsapprunner.com/",
    icon: Ticket,
  },
];

const openSourceProducts: Product[] = [
  {
    name: "OpenAgno",
    category: "Agentes IA",
    description: "Base abierta para construir agentes, herramientas y workspaces IA.",
    status: "Open source",
    url: "https://openagno.com/",
    repo: "https://github.com/OpenAgno/OpenAgno.git",
    icon: Bot,
  },
  {
    name: "EstructuraDatos.org",
    category: "Educacion",
    description: "Visualizadores 3D y experiencias para aprender estructuras de datos.",
    status: "Open source",
    url: "https://estructuradatos.org/",
    repo: "https://github.com/israelgo93/estructuradatos.org.git",
    icon: Code2,
  },
  {
    name: "Club IA ULEAM",
    category: "Comunidad",
    description: "Sitio PWA, eventos y asistente IA para comunidad universitaria.",
    status: "Comunidad",
    url: "https://iauleam.club/",
    repo: "https://github.com/israelgo93/clubiauleam.git",
    icon: Network,
  },
];

function StatusPill({ status }: { status: ProductStatus }) {
  return <span className="border border-black/15 bg-white px-2.5 py-1 text-xs font-bold text-muted">{status}</span>;
}

function BrandWordmark() {
  return (
    <Reveal className="mx-auto mt-16 max-w-[1440px] overflow-hidden px-4 sm:px-6 lg:px-8" delay={0.06}>
      <div className="relative h-[180px] max-w-full overflow-hidden sm:h-[270px] lg:h-[340px]">
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] whitespace-nowrap text-[6rem] font-black leading-none text-[#101010] sm:text-[11rem] lg:text-[17rem]">
          DataTensei
        </p>
        <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#f2a900] sm:h-6" />
        <div className="absolute inset-x-0 top-[calc(50%+1rem)] h-4 bg-[#d7081d] sm:top-[calc(50%+1.5rem)] sm:h-6" />
        <div className="absolute inset-x-0 top-[calc(50%+2rem)] h-4 bg-[#0f766e] sm:top-[calc(50%+3rem)] sm:h-6" />
        <div className="absolute inset-x-0 top-[calc(50%+3rem)] h-4 bg-[#0b0b0d] sm:top-[calc(50%+4.5rem)] sm:h-6" />
      </div>
    </Reveal>
  );
}

function ProofGrid() {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-4xl font-black text-foreground sm:text-5xl">Donde cada operacion cuenta</h2>
      </Reveal>
      <div className="mt-10 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-5">
        {proofGrid.map((item) => (
          <div className="flex min-h-28 items-center justify-center border-b border-r border-black/15 px-4 text-center text-lg font-black" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <Reveal>
        <h2 className="max-w-[12ch] text-4xl font-black leading-[0.95] text-foreground sm:text-6xl">
          Automatiza sin sacrificar control.
        </h2>
        <div className="mt-8 space-y-6">
          {outcomeMetrics.map(([value, description]) => (
            <div key={value}>
              <p className="text-base font-black text-foreground">{value}</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="inline-flex min-h-12 items-center gap-2 bg-foreground px-5 text-sm font-bold text-white transition hover:bg-[#d7081d]" href="#contacto">
            Solicitar propuesta
            <ArrowRight className="size-4" />
          </Link>
          <Link className="inline-flex min-h-12 items-center gap-2 border border-black/20 bg-transparent px-5 text-sm font-bold text-foreground transition hover:border-[#d7081d] hover:text-[#d7081d]" href="#servicios">
            Ver servicios
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Reveal>

      <Reveal className="min-h-[440px] bg-[#004b28] p-5 text-white" delay={0.05}>
        <div className="flex h-full flex-col justify-between border border-white/20 p-5">
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-sm font-black">Sistema de operacion IA</span>
            <Cloud className="size-5" />
          </div>
          <div className="grid gap-3">
            {[
              ["Entrada", "Documentos, mensajes, formularios, APIs"],
              ["Decision", "RAG, agentes, reglas, permisos"],
              ["Accion", "Reportes, tareas, dashboards, notificaciones"],
            ].map(([title, description]) => (
              <div className="border border-white/20 bg-white/8 p-4" key={title}>
                <p className="text-2xl font-black">{title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/65">{description}</p>
              </div>
            ))}
          </div>
          <p className="max-w-[34ch] text-sm font-semibold leading-6 text-white/65">
            Un flujo comercial, tecnico y operativo en un solo producto listo para usuarios reales.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function BlackEditorialSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-8 h-[28rem] w-[28rem] rounded-full border border-white/16" />
        <div className="absolute right-[-6rem] top-20 h-[22rem] w-[22rem] rounded-full border border-[#dff8f2]/22" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute bottom-20 left-0 h-px w-full bg-white/10" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <Reveal>
          <h2 className="max-w-[10ch] text-[clamp(4rem,11vw,9.6rem)] font-black leading-[0.86] text-white">
            De procesos manuales a productos IA.
          </h2>
        </Reveal>
        <Reveal className="space-y-4" delay={0.08}>
          {["Automatizacion", "Agentes", "SaaS"].map((item) => (
            <div className="flex items-center justify-between border-t border-white/16 py-5" key={item}>
              <span className="text-2xl font-black">{item}</span>
              <ArrowUpRight className="size-5 text-[#dff8f2]" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CommercialOffer() {
  return (
    <section className="mx-auto w-full max-w-[1220px] scroll-mt-36 px-4 py-20 sm:px-6 lg:px-8" id="servicios">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative overflow-hidden bg-[#0b0b0d] p-6 text-white sm:p-8 lg:min-h-[680px]">
          <div className="absolute -right-20 -top-20 size-64 rounded-full border border-white/15" />
          <div className="absolute bottom-0 left-0 h-2 w-full bg-[#d7081d]" />
          <div className="absolute bottom-2 left-0 h-2 w-full bg-[#f2a900]" />
          <h2 className="relative max-w-[9ch] text-5xl font-black leading-[0.88] text-white sm:text-7xl">
            Tres formas de convertir IA en operacion.
          </h2>
          <p className="relative mt-8 max-w-[34ch] text-base font-bold leading-7 text-white/62">
            Un sistema comercial claro: entender el proceso, construir el producto y desplegarlo con control.
          </p>
          <div className="relative mt-12 grid gap-3">
            {["Proceso", "Datos", "Agente", "Producto"].map((item, index) => (
              <div className="grid grid-cols-[56px_1fr] items-center border border-white/16 bg-white/[0.06]" key={item}>
                <span className="flex h-14 items-center justify-center border-r border-white/16 text-sm font-black text-white/45">0{index + 1}</span>
                <span className="px-4 text-xl font-black">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-8 border border-white/16 bg-[#004b28] p-5">
            <p className="text-sm font-black uppercase text-white/45">Salida</p>
            <p className="mt-3 text-3xl font-black leading-none">Software IA operando.</p>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Reveal
                className="group grid min-h-[210px] gap-5 border border-black/15 bg-transparent p-5 transition hover:-translate-y-1 hover:bg-white/55 sm:grid-cols-[84px_1fr]"
                delay={index * 0.05}
                key={offer.title}
              >
                <span className="flex size-16 items-center justify-center bg-foreground text-white">
                  <Icon className="size-7" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="max-w-[15ch] text-3xl font-black leading-none text-foreground sm:text-4xl">{offer.title}</h3>
                    <span className="w-fit border border-black/15 px-2.5 py-1 text-xs font-black text-muted">0{index + 1}</span>
                  </div>
                  <p className="mt-5 text-lg font-black leading-6 text-foreground">{offer.outcome}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-muted">{offer.signal}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {offer.tags.map((tag) => (
                      <span className="border border-black/15 px-3 py-1.5 text-xs font-bold text-muted" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1320px] scroll-mt-36 px-4 py-20 sm:px-6 lg:px-8" id="productos">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="max-w-[13ch] text-4xl font-black text-foreground sm:text-6xl">
            Productos reales respaldan la oferta.
          </h2>
        </Reveal>
        <Reveal className="max-w-[46ch] text-sm font-semibold leading-7 text-muted" delay={0.05}>
          Open source, LegalTech, agroexportacion, retail, salud y facturacion. El portafolio aparece como prueba de ejecucion, no como inventario.
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {featuredProducts.map((product, index) => {
          const Icon = product.icon;
          return (
            <Reveal className="group flex min-h-[390px] flex-col border border-black/15 bg-transparent p-6 transition hover:-translate-y-1 hover:bg-white/50" delay={index * 0.05} key={product.name}>
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center bg-[#dff8f2] text-[#0f766e]">
                  <Icon className="size-5" />
                </span>
                <StatusPill status={product.status} />
              </div>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-muted">{product.category}</p>
              <h3 className="mt-3 text-4xl font-black">{product.name}</h3>
              <p className="mt-5 flex-1 text-sm font-semibold leading-7 text-muted">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-2 pb-1">
                <Link className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#d7081d]" href={product.url} rel="noreferrer" target="_blank">
                  Ver producto
                  <Globe2 className="size-3.5" />
                </Link>
                {product.repo ? (
                  <Link className="inline-flex items-center gap-2 border border-black/15 bg-transparent px-4 py-2.5 text-xs font-bold text-foreground transition hover:border-[#d7081d] hover:text-[#d7081d]" href={product.repo} rel="noreferrer" target="_blank">
                    Repo
                    <Github className="size-3.5" />
                  </Link>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-5 bg-[#0b0b0d] p-3 text-white" delay={0.08}>
        <div className="grid gap-2 md:grid-cols-5">
          {secondaryProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Link className="flex items-center gap-3 border border-white/12 bg-white/[0.06] p-3 transition hover:bg-white/[0.10]" href={product.url} key={product.name} rel="noreferrer" target="_blank">
                <span className="flex size-10 shrink-0 items-center justify-center bg-white text-black">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-black">{product.name}</span>
                  <span className="block truncate text-xs font-semibold text-white/45">{product.category}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="mx-auto w-full max-w-[1180px] scroll-mt-36 px-4 py-24 sm:px-6 lg:px-8" id="plataforma">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="max-w-[15ch] text-4xl font-black text-foreground sm:text-6xl">
            Una plataforma de construccion robusta.
          </h2>
        </Reveal>
        <Link className="inline-flex min-h-12 w-fit items-center gap-2 bg-foreground px-5 text-sm font-bold text-white transition hover:bg-[#d7081d]" href="#contacto">
          Solicitar propuesta
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-20">
        {[
          ["01", "Build", "Modelamos usuarios, datos, permisos, agentes y experiencia para validar con escenarios reales.", ["Personas", "Workflows", "Roles"]],
          ["02", "Deploy", "Conectamos APIs, canales, bases de datos, pagos, dominios y despliegue cloud.", ["Supabase", "AWS ECS", "CI/CD"]],
          ["03", "Monitor", "Medimos comportamiento, registros, errores, costos, trazabilidad y resultados de negocio.", ["Analytics", "Auditoria", "Guardrails"]],
          ["04", "Refine", "Iteramos prompts, flujos, producto y automatizaciones con evidencia de uso.", ["Backtesting", "KB gaps", "Mejoras"]],
        ].map(([number, title, description, details]) => (
          <Reveal className="grid gap-8 border-t border-black/15 pt-8 md:grid-cols-[0.8fr_1.2fr]" key={number as string}>
            <div>
              <p className="text-sm font-black text-black/30">- {number as string}</p>
              <h3 className="mt-8 text-3xl font-black">{title as string}</h3>
              <p className="mt-4 max-w-[34ch] text-sm font-semibold leading-7 text-muted">{description as string}</p>
            </div>
            <div className="grid gap-0">
              {(details as string[]).map((detail) => (
                <div className="flex items-center justify-between border-b border-black/15 py-5" key={detail}>
                  <span className="text-xl font-semibold">{detail}</span>
                  <ArrowUpRight className="size-4 text-black/50" />
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OpenSourceSection() {
  return (
    <section className="mx-auto w-full max-w-[1180px] scroll-mt-36 px-4 py-16 sm:px-6 lg:px-8" id="opensource">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <h2 className="text-4xl font-black sm:text-6xl">Credibilidad tecnica abierta.</h2>
          <p className="mt-5 max-w-[42ch] text-sm font-semibold leading-7 text-muted">
            Proyectos publicos y comunidad refuerzan la capacidad tecnica sin competir con la oferta comercial.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {openSourceProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal className="border border-black/15 bg-transparent p-5 transition hover:bg-white/50" delay={index * 0.05} key={product.name}>
                <span className="flex size-11 items-center justify-center border border-black/15 bg-white text-foreground">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted">{product.category}</p>
                <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-muted">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link className="inline-flex items-center gap-2 bg-foreground px-3 py-2 text-xs font-bold text-white" href={product.url} rel="noreferrer" target="_blank">
                    Sitio
                    <Globe2 className="size-3.5" />
                  </Link>
                  {product.repo ? (
                    <Link className="inline-flex items-center gap-2 border border-black/15 bg-transparent px-3 py-2 text-xs font-bold text-foreground" href={product.repo} rel="noreferrer" target="_blank">
                      Repo
                      <Github className="size-3.5" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FounderAndContact() {
  return (
    <section className="mx-auto w-full max-w-[1180px] scroll-mt-36 px-4 py-20 sm:px-6 lg:px-8" id="contacto">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="border border-black/15 bg-transparent p-6 sm:p-8">
          <Building2 className="size-7 text-[#0f766e]" />
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Fundado desde Manta, Ecuador.</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-muted">
            Israel J. Gomez construye productos IA, SaaS y plataformas cloud con foco en operaciones reales, despliegue y aprendizaje con usuarios.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Founder", "AI Software Engineer", "Product Builder", "Manta, Ecuador"].map((item) => (
              <span className="border border-black/15 bg-white px-3 py-1.5 text-xs font-bold text-muted" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="bg-[#d7081d] p-6 text-white sm:p-8" delay={0.05}>
          <Rocket className="size-8 text-white" />
          <h2 className="mt-5 max-w-[13ch] text-4xl font-black leading-[0.95] sm:text-6xl">
            Convierte una operacion en producto IA.
          </h2>
          <p className="mt-5 max-w-[54ch] text-sm font-bold leading-7 text-white/72">
            Comparte el proceso, sistema o producto que quieres construir. DataTensei responde con una ruta de propuesta clara.
          </p>
          <div className="mt-8">
            <PromptCTA tone="red" />
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <a className="min-w-0 break-all border border-white/35 p-4 text-sm font-bold text-white/80 transition hover:bg-white/10" href="mailto:israelgomez@datatensei.com">
              <Mail className="mb-3 size-4 text-white" />
              israelgomez@datatensei.com
            </a>
            <a className="min-w-0 border border-white/35 p-4 text-sm font-bold text-white/80 transition hover:bg-white/10" href="tel:+593978625312">
              <Phone className="mb-3 size-4 text-white" />
              +593 978 625 312
            </a>
            <div className="min-w-0 border border-white/35 p-4 text-sm font-bold text-white/80">
              <MapPin className="mb-3 size-4 text-white" />
              Manta, Manabi, Ecuador
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-[1280px] gap-12 px-4 pb-10 pt-40 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-44">
        <Reveal>
          <h1 className="max-w-[12ch] text-[3rem] font-black leading-[0.96] text-foreground sm:text-7xl sm:leading-[0.9] lg:text-[6.6rem]">
            <span className="block">IA aplicada a</span>
            <span className="block">operaciones</span>
            <span className="block">reales.</span>
          </h1>
          <p className="mt-8 max-w-[54ch] text-lg font-semibold leading-8 text-muted">
            DataTensei disena, construye y despliega agentes, SaaS verticales y sistemas de automatizacion para empresas que quieren pasar de idea a producto en produccion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="inline-flex min-h-12 items-center gap-2 bg-foreground px-6 text-sm font-bold text-white transition hover:bg-[#d7081d]" href="#contacto">
              Solicitar propuesta
              <ArrowRight className="size-4" />
            </Link>
            <Link className="inline-flex min-h-12 items-center gap-2 border border-black/20 bg-transparent px-6 text-sm font-bold text-foreground transition hover:border-[#d7081d] hover:text-[#d7081d]" href="#productos">
              Ver productos
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="lg:pt-20" delay={0.05}>
          <PromptCTA />
          <p className="mt-5 max-w-[32ch] text-sm font-black leading-5 text-foreground">
            Describe una operacion. La convertimos en una propuesta de producto, agente o automatizacion.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {proofItems.map((item) => (
              <span className="inline-flex items-center gap-2 border border-black/15 bg-transparent px-3 py-2 text-xs font-bold text-muted" key={item}>
                <Check className="size-3.5 text-[#0f766e]" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <BrandWordmark />
      <ProofGrid />
      <OutcomesSection />
      <section className="bg-[#d7081d] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1180px] min-w-0 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <h2 className="max-w-[11ch] break-words text-4xl font-black leading-[0.92] sm:text-6xl">
            Prueba una idea de automatizacion.
          </h2>
          <PromptCTA tone="red" />
        </div>
      </section>
      <BlackEditorialSection />
      <CommercialOffer />
      <ProductShowcase />
      <PlatformSection />
      <OpenSourceSection />
      <FounderAndContact />

      <footer className="bg-[#101010] py-20 text-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 text-sm font-bold text-white/56 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="text-2xl font-black text-white">DataTensei AI</p>
            <p className="mt-5 max-w-[32ch] leading-6">Agentes, SaaS y automatizacion para operaciones reales.</p>
          </div>
          <div className="grid gap-4">
            <p className="text-xs font-black uppercase text-white">Producto</p>
            <Link href="#servicios">Servicios</Link>
            <Link href="#productos">Productos</Link>
            <Link href="#plataforma">Plataforma</Link>
          </div>
          <div className="grid gap-4">
            <p className="text-xs font-black uppercase text-white">Recursos</p>
            <Link href="#opensource">Open source</Link>
            <Link href="https://github.com/israelgo93" rel="noreferrer" target="_blank">
              GitHub
            </Link>
            <Link href="/legal/privacy">Privacidad</Link>
          </div>
          <div className="grid gap-4">
            <p className="text-xs font-black uppercase text-white">Contacto</p>
            <a href="mailto:israelgomez@datatensei.com">Email</a>
            <a href="tel:+593978625312">Telefono</a>
            <Link href="/legal/terms">Terminos</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
