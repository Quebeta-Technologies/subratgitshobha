import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(t);
  }, [slides]);

  if (!slides?.length) return null;
  const slide = slides[index];
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative bg-[#12233D] overflow-hidden"
    >
      <div className="relative h-[78vh] min-h-[560px] max-h-[760px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.image_url}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            {/* Layered overlays for premium readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#12233D]/85 via-[#12233D]/60 to-[#12233D]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 dot-grid opacity-25 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full container-x flex items-center">
          <div className="max-w-3xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DCD4A] animate-shine" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1
                  data-testid="hero-headline"
                  className="font-display font-semibold text-white text-[28px] sm:text-[34px] lg:text-[44px] xl:text-[48px] leading-[1.1] tracking-tight max-w-2xl"
                >
                  {slide.headline}
                </h1>

                <p
                  data-testid="hero-subheadline"
                  className="mt-5 text-white/80 text-[15px] md:text-[16.5px] max-w-xl leading-relaxed"
                >
                  {slide.subheadline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    data-testid="hero-primary-cta"
                    href={slide.cta_link || "#contact"}
                    className="btn-primary !bg-white !text-[#0738A6] hover:!bg-[#F7FAFD]"
                  >
                    {slide.cta_label}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    data-testid="hero-secondary-cta"
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm"
                  >
                    Partner With Us
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Arrow controls */}
        <div className="absolute bottom-7 right-6 md:right-10 z-10 flex items-center gap-2">
          <button
            data-testid="hero-prev"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 transition-colors backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            data-testid="hero-next"
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 transition-colors backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators bottom-left */}
        <div className="absolute bottom-7 left-6 md:left-10 z-10 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              data-testid={`hero-indicator-${i}`}
              onClick={() => setIndex(i)}
              className="group flex items-center gap-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
          <span className="text-white/70 text-[11px] font-semibold tracking-widest ml-2">
            0{index + 1} / 0{total}
          </span>
        </div>
      </div>
    </section>
  );
}
