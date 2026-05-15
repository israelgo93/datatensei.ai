"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "israelgomez@datatensei.com";

interface PromptCTAProps {
  className?: string;
  tone?: "light" | "red";
}

export function PromptCTA({ className = "", tone = "light" }: PromptCTAProps) {
  const [idea, setIdea] = useState("");
  const isRed = tone === "red";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("Propuesta DataTensei AI");
    const body = encodeURIComponent(
      idea.trim()
        ? `Hola DataTensei,\n\nQuiero automatizar este proceso con IA:\n\n${idea.trim()}\n\nPodemos conversar?`
        : "Hola DataTensei,\n\nQuiero conversar sobre una propuesta de software con IA.",
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className={[
        "w-full max-w-full min-w-0 border p-0",
        isRed ? "border-white/35 bg-transparent" : "border-black/55 bg-transparent",
        className,
      ].join(" ")}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <label className="sr-only" htmlFor="automation-idea">
          Describe el proceso que quieres automatizar con IA
        </label>
        <textarea
          className={[
            "min-h-20 w-full resize-none border-0 bg-transparent px-4 py-5 text-sm font-semibold leading-5 outline-none transition placeholder:font-semibold",
            isRed
              ? "text-white placeholder:text-white/72 focus:bg-white/8"
              : "text-foreground placeholder:text-muted focus:bg-white/55",
          ].join(" ")}
          id="automation-idea"
          name="idea"
          onChange={(event) => setIdea(event.target.value)}
          placeholder="Describe el proceso que quieres automatizar con IA"
          value={idea}
        />
        <button
          className={[
            "inline-flex min-h-14 items-center justify-center gap-2 px-5 text-sm font-bold transition focus:outline-none",
            isRed
              ? "bg-[#ec8790] text-[#5d0009] hover:bg-white focus:ring-4 focus:ring-white/25"
              : "bg-[#d7081d] text-white hover:bg-[#b80617] focus:ring-4 focus:ring-[#d7081d]/20",
          ].join(" ")}
          type="submit"
        >
          Enviar idea
          <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}
