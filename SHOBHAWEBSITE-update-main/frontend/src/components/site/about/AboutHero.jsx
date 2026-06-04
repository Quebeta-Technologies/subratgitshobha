import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      data-testid="about-hero"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg, #12233D 0%, #0738A6 55%, #7A1F7A 100%)",
      }}
    >
      {/* Decorative layers */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#62C7F5]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F2C14E]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Main content row: text left, stats right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 py-10">
          {/* Left: headline + subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 max-w-3xl"
          >
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
              <Sparkles className="w-3.5 h-3.5 text-[#F2C14E]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                About Shobha Healthcare
              </span>
            </div>

            {/* H1 */}
            <h1
              data-testid="about-hero-headline"
              className="font-display font-semibold text-white text-[30px] sm:text-[38px] lg:text-[52px] xl:text-[56px] leading-[1.08] tracking-tight"
            >
              We Started With a Simple Question:{" "}
              <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
                Why Is Good Medicine So Hard to Get?
              </span>
            </h1>

            <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
              Company Overview · Vision &amp; Mission · Core Values · Founder
              Profile · Our Team
            </p>
          </motion.div>

          {/* Right: breadcrumb + stat strip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 lg:mt-0 lg:flex-shrink-0 flex flex-col lg:h-full"
          >
            {/* Breadcrumb sits above the stats, right-aligned, vertically matched to eyebrow chip */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-end gap-1.5 text-[12px] text-white/65 mb-6 h-[30px]"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-medium">About Us</span>
            </nav>

            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {[
                { v: "4", l: "Continents" },
                { v: "15+", l: "Markets Served" },
                { v: "50+", l: "Products" },
                { v: "20+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span className="font-display font-semibold text-white text-[36px] md:text-[44px] leading-none">
                    {s.v}
                  </span>
                  <span className="mt-2 text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/60">
                    {s.l}
                  </span>
                </div>
              ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* soft bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}