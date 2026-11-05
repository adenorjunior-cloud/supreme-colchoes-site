"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/hero-bonan.jpg", alt: "Quarto sofisticado com cama estofada em tons neutros" },
  { src: "/catalogo/camas/roma-ambiente.jpg", alt: "Ambiente contemporâneo com cama estofada" },
  { src: "/catalogo/cabeceiras/fiore-ambiente.jpg", alt: "Quarto decorado com cabeceira estofada" },
];
export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);
  return (
    <div className="hero-carousel" aria-label="Ambientes Supreme Colchões"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}>
      {slides.map((slide, index) => (
        <div key={slide.src} className={`hero-slide${index === active ? " is-active" : ""}`}
          aria-hidden={index !== active}>
          <Image src={slide.src} alt={index === active ? slide.alt : ""} fill
            priority={index === 0} sizes="(max-width: 760px) 100vw, 52vw"
            style={{ objectFit: "cover" }} />
        </div>
      ))}
      <div className="hero-carousel-controls" aria-label="Navegação das imagens">
        <button type="button" aria-label="Imagem anterior" onClick={() => setActive((active + slides.length - 1) % slides.length)}>‹</button>
        <span className="hero-carousel-count" aria-live="off">{String(active + 1).padStart(2, "0")} / 03</span>
        <button type="button" aria-label="Próxima imagem" onClick={() => setActive((active + 1) % slides.length)}>›</button>
      </div>
    </div>
  );
}
