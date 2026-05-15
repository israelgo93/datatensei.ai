"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#opensource", label: "Open source" },
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "mx-auto border border-white/70 bg-white/46 shadow-[0_10px_36px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl backdrop-saturate-[1.7] transition-all duration-300",
          scrolled
            ? "max-w-[680px] rounded-full px-2.5 py-2"
            : "max-w-[1400px] rounded-[24px] px-3 py-2.5 sm:px-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3">
          <Link className="flex min-w-0 items-center gap-3" href="#top" aria-label="DataTensei AI">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-white">
              DT
            </span>
            <span
              className={[
                "hidden text-sm font-semibold tracking-[-0.03em] text-foreground transition-all sm:inline",
                scrolled ? "max-w-0 overflow-hidden opacity-0" : "max-w-40 opacity-100",
              ].join(" ")}
            >
              DataTensei AI
            </span>
          </Link>

          {!scrolled ? (
            <nav className="hidden items-center gap-1 transition-all md:flex">
              {navItems.map((item) => (
                <Link
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="flex items-center gap-2">
            <Link
              className={[
                "inline-flex min-h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-semibold text-white transition hover:bg-black/80",
                scrolled ? "hidden sm:inline-flex" : "",
              ].join(" ")}
              href="#contacto"
            >
              Construir con nosotros
            </Link>
            <button
              className={[
                "inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition",
                scrolled ? "flex" : "md:hidden",
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
