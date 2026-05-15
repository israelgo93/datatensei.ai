"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#servicios", label: "Servicios", hasMenu: true },
  { href: "#productos", label: "Productos", hasMenu: false },
  { href: "#plataforma", label: "Plataforma", hasMenu: true },
  { href: "#opensource", label: "Open source", hasMenu: false },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#d7081d] px-4 py-2 text-center text-xs font-bold text-white sm:text-sm">
        DataTensei AI: agentes, SaaS y automatizacion para operaciones reales.
      </div>
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "mx-auto bg-[#f6f1e7]/92 backdrop-blur transition-all duration-300",
          scrolled
            ? "max-w-[1180px] border-x border-b border-black/10 px-4 py-3 shadow-[0_12px_40px_rgba(20,20,20,0.08)]"
            : "max-w-[1280px] px-4 py-5 sm:px-6",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3">
          <Link className="flex min-w-0 items-center gap-3" href="#top" aria-label="DataTensei AI">
            <span className="flex h-8 w-16 shrink-0 items-center justify-center bg-foreground text-sm font-black text-white">
              DT
            </span>
            <span
              className={[
                "hidden text-sm font-black text-foreground transition-all sm:inline",
                scrolled ? "max-w-0 overflow-hidden opacity-0" : "max-w-40 opacity-100",
              ].join(" ")}
            >
              DataTensei AI
            </span>
          </Link>

          <nav className="hidden items-center gap-7 transition-all lg:flex">
            {navItems.map((item) => (
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-[#d7081d]"
                href={item.href}
                key={item.href}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown className="size-3.5" /> : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link className="hidden text-sm font-bold text-foreground transition hover:text-[#d7081d] sm:inline-flex" href="https://github.com/israelgo93" target="_blank">
              GitHub
            </Link>
            <Link
              className={[
                "inline-flex min-h-11 items-center justify-center gap-2 bg-foreground px-4 text-sm font-bold text-white transition hover:bg-[#d7081d]",
                scrolled ? "hidden sm:inline-flex" : "",
              ].join(" ")}
              href="#contacto"
            >
              Solicitar propuesta
              <ArrowRight className="size-4" />
            </Link>
            <button
              className={[
                "inline-flex size-11 items-center justify-center border border-black/20 bg-transparent text-foreground transition",
                scrolled ? "flex" : "lg:hidden",
              ].join(" ")}
              type="button"
              aria-label="Menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
