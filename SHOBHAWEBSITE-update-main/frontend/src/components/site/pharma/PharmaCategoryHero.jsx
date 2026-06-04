import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PharmaCategoryHero({ category }) {
  if (!category) return null;
  const Icon = category.icon;

  return (
    <section
      data-testid="pharma-category-hero"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg, #12233D 0%, #0738A6 55%, #0A4A3E 100%)",
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `${category.color}33` }}
      />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F2C14E]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 py-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
              <Icon
                className="w-3.5 h-3.5"
                style={{ color: category.color }}
              />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                {category.eyebrow} · {category.short}
              </span>
            </div>

            <h1
              data-testid="pharma-category-headline"
              className="font-display font-semibold text-white text-[28px] sm:text-[36px] lg:text-[46px] xl:text-[50px] leading-[1.1] tracking-tight"
            >
              {category.headline.split(" — ").length > 1 ? (
                <>
                  {category.headline.split(" — ")[0]} —{" "}
                  <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
                    {category.headline.split(" — ")[1]}
                  </span>
                </>
              ) : (
                category.headline
              )}
            </h1>

            <p className="mt-6 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
              {category.description}
            </p>
          </motion.div>

          {/* Right: breadcrumb + stat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-0 lg:flex-shrink-0 flex flex-col lg:h-full"
          >
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-end gap-1.5 text-[12px] text-white/65 mb-6 h-[30px]"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <Link
                to="/pharmaceuticals"
                className="hover:text-white transition-colors"
              >
                Pharmaceuticals
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-medium">{category.short}</span>
            </nav>

            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                {[
                  { v: `${category.products.length}`, l: "Products" },
                  { v: category.tagline, l: "Focus" },
                  { v: "EU-GMP", l: "Standard" },
                  { v: "Tested", l: "Every Batch" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <span className="font-display font-semibold text-white text-[22px] md:text-[28px] leading-none">
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

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}
