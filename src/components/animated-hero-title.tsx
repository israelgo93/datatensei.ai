"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phrases = ["aplicada a", "conectada a", "construida para"];
const TYPE_SPEED_MS = 62;
const DELETE_SPEED_MS = 38;
const HOLD_MS = 1300;

export function AnimatedHeroTitle() {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(phrases[0].length);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases[phraseIndex];
  const visiblePhrase = reduceMotion ? phrases[0] : phrase.slice(0, visibleLength);

  useEffect(() => {
    if (reduceMotion) return;

    const atFullPhrase = !deleting && visibleLength === phrase.length;
    const atEmptyPhrase = deleting && visibleLength === 0;
    const delay = atFullPhrase ? HOLD_MS : deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS;

    const timer = window.setTimeout(() => {
      if (atFullPhrase) {
        setDeleting(true);
        return;
      }

      if (atEmptyPhrase) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      setVisibleLength((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phrase.length, reduceMotion, visibleLength]);

  return (
    <h1 className="max-w-[12ch] text-[3rem] font-black leading-[0.96] text-foreground sm:text-7xl sm:leading-[0.9] lg:text-[6.6rem]">
      <span className="block">IA</span>
      <span className="block min-h-[1em]">
        {visiblePhrase}
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
          className="ml-1 inline-block h-[0.72em] w-[0.08em] translate-y-[0.08em] bg-[#d7081d]"
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </span>
      <span className="block">operaciones</span>
      <span className="block">reales.</span>
    </h1>
  );
}

export function WavyWordmark() {
  const reduceMotion = useReducedMotion();
  const letters = useMemo(() => "DataTensei".split(""), []);

  return (
    <motion.p
      aria-label="DataTensei"
      className="mx-auto flex w-full max-w-[1180px] justify-center overflow-visible text-center text-[clamp(3.4rem,13.5vw,12rem)] font-black leading-none text-[#101010]"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      whileHover={reduceMotion ? undefined : "hover"}
      viewport={{ once: true, amount: 0.55 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          key={`${letter}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 46, scaleY: 0.72 },
            show: {
              opacity: 1,
              y: [34, -16, 0],
              scaleY: [0.72, 1.12, 1],
              transition: {
                delay: index * 0.045,
                duration: 0.72,
                ease: [0.16, 1, 0.3, 1],
              },
            },
            hover: {
              y: [0, -18 - (index % 3) * 4, 8, 0],
              scale: [1, 1.14, 1.04, 1],
              rotate: [0, index % 2 === 0 ? -3 : 3, 0],
              transition: {
                delay: index * 0.018,
                duration: 0.58,
                times: [0, 0.38, 0.7, 1],
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

interface ScatterTextProps {
  text: string;
}

export function ScatterText({ text }: ScatterTextProps) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <motion.span
      className="inline-flex flex-wrap gap-x-[0.18em] gap-y-[0.02em]"
      initial="rest"
      animate="rest"
      whileHover={reduceMotion ? undefined : "scatter"}
    >
      {words.map((word, wordIndex) => (
        <span className="inline-flex" key={`${word}-${wordIndex}`}>
          {word.split("").map((letter, letterIndex) => {
            const direction = letterIndex % 2 === 0 ? -1 : 1;
            const distance = 12 + letterIndex * 2;
            const lift = letterIndex % 3 === 0 ? -24 : 18;

            return (
              <motion.span
                className="inline-block origin-center"
                key={`${letter}-${letterIndex}`}
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 620, damping: 15, mass: 0.65 },
                  },
                  scatter: {
                    x: direction * distance,
                    y: lift,
                    rotate: direction * (10 + letterIndex),
                    scale: 1.16,
                    transition: {
                      delay: letterIndex * 0.018,
                      type: "spring",
                      stiffness: 520,
                      damping: 9,
                      mass: 0.75,
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 ? <span aria-hidden="true">&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
}
