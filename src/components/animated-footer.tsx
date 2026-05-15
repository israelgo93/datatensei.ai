"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";
import { DtMark } from "@/components/dt-mark";

const footerGroups = [
  {
    title: "Plataforma",
    links: [
      { label: "Build", href: "#servicios" },
      { label: "Deploy", href: "#plataforma" },
      { label: "Monitor", href: "#plataforma" },
      { label: "Refine", href: "#plataforma" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Agentes IA", href: "#servicios" },
      { label: "SaaS verticales", href: "#servicios" },
      { label: "OpenAgno", href: "https://openagno.com/" },
      { label: "Veredix", href: "https://veredix.app/" },
      { label: "EXPOSOUR", href: "https://system.exposour.com/" },
    ],
  },
  {
    title: "Audiencia",
    links: [
      { label: "Operaciones", href: "#servicios" },
      { label: "Agroexportacion", href: "#productos" },
      { label: "LegalTech", href: "#productos" },
      { label: "Retail", href: "#productos" },
      { label: "Salud", href: "#productos" },
    ],
  },
  {
    title: "Open source",
    links: [
      { label: "OpenAgno", href: "https://github.com/OpenAgno/OpenAgno.git" },
      { label: "EstructuraDatos.org", href: "https://estructuradatos.org/" },
      { label: "Club IA ULEAM", href: "https://iauleam.club/" },
      { label: "GitHub", href: "https://github.com/israelgo93" },
    ],
  },
];

const legalLinks = [
  { label: "Privacidad", href: "/legal/privacy" },
  { label: "Terminos", href: "/legal/terms" },
  { label: "Contacto", href: "#contacto" },
];

function FallingWordmark() {
  const reduceMotion = useReducedMotion();
  const letters = useMemo(() => "DataTensei".split(""), []);

  return (
    <motion.p
      aria-label="DataTensei"
      className="flex min-w-0 flex-wrap items-end justify-start text-[clamp(3.75rem,12.1vw,10rem)] font-black leading-[0.78] tracking-normal text-[#f4f2e7]"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.5 }}
    >
      {letters.map((letter, index) => {
        const direction = index % 2 === 0 ? -1 : 1;

        return (
          <motion.span
            aria-hidden="true"
            className="inline-block origin-bottom"
            key={`${letter}-${index}`}
            variants={{
              hidden: { opacity: 0, y: -240 - index * 18, x: direction * (20 + index * 4), rotate: direction * (18 + index * 2) },
              show: {
                opacity: 1,
                y: [-(210 + index * 14), 24, -10, 0],
                x: [direction * (24 + index * 3), 0, 0, 0],
                rotate: [direction * (18 + index * 2), direction * -5, direction * 3, 0],
                transition: {
                  delay: 0.08 + index * 0.075,
                  duration: 0.9,
                  times: [0, 0.62, 0.82, 1],
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.p>
  );
}

export function AnimatedFooter() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1fr_0.9fr]">
          {footerGroups.map((group) => (
            <div className="border-l border-white/14 pl-4" key={group.title}>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#dff8f2]">{group.title}</p>
              <div className="mt-4 grid gap-3">
                {group.links.map((item) => (
                  <Link
                    className="w-fit text-[clamp(1.25rem,2vw,1.7rem)] font-semibold leading-tight text-[#f4f2e7] transition hover:text-[#ff3b14]"
                    href={item.href}
                    key={item.label}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="border-l border-white/14 pl-4 lg:min-h-[470px]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#dff8f2]">Empresa</p>
            <div className="mt-4 grid gap-3">
              <Link className="w-fit text-2xl font-semibold text-[#f4f2e7] transition hover:text-[#ff3b14]" href="#contacto">
                Contacto
              </Link>
              <Link className="w-fit text-2xl font-semibold text-[#f4f2e7] transition hover:text-[#ff3b14]" href="#productos">
                Portafolio
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f4f2e7] px-5 text-sm font-bold text-[#111111] transition hover:bg-white" href="#contacto">
                Solicitar propuesta
                <ArrowRight className="size-4" />
              </Link>
              <a className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/15" href="mailto:israelgomez@datatensei.com">
                Email
              </a>
            </div>
            <div className="mt-12 flex gap-4 text-[#f4f2e7]">
              <a aria-label="GitHub" className="transition hover:text-[#ff3b14]" href="https://github.com/israelgo93" rel="noreferrer" target="_blank">
                <Github className="size-5" />
              </a>
              <a aria-label="LinkedIn" className="transition hover:text-[#ff3b14]" href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                <Linkedin className="size-5" />
              </a>
              <a aria-label="Email" className="transition hover:text-[#ff3b14]" href="mailto:israelgomez@datatensei.com">
                <Mail className="size-5" />
              </a>
            </div>
            <div className="mt-12 grid gap-3">
              {legalLinks.map((item) => (
                <Link className="w-fit text-xs font-black uppercase tracking-[0.08em] text-white/70 transition hover:text-white" href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
              <p className="pt-5 text-xs font-black uppercase tracking-[0.08em] text-white/75">(c) DataTensei 2026</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid min-w-0 items-end gap-4 border-t border-white/14 pt-12 lg:grid-cols-[minmax(88px,160px)_minmax(0,1fr)]">
          <motion.div
            className="flex aspect-square w-[clamp(6rem,16vw,13rem)] items-center justify-center text-[#f4f2e7]"
            initial={{ opacity: 0, y: 42, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <DtMark className="h-full w-full" />
          </motion.div>
          <FallingWordmark />
        </div>
      </div>
    </footer>
  );
}
