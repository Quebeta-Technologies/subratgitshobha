import React from "react";
import { motion } from "framer-motion";
import { Globe2, Package, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const ICONS = {
  countries: Globe2,
  products: Package,
  eugmp: ShieldCheck,
  who: BadgeCheck,
  uae: MapPin,
};

const ACCENT_COLORS = [
  { color: "#0738A6", bg: "rgba(7,56,166,0.10)" },
  { color: "#9DCD4A", bg: "rgba(157,205,74,0.18)" },
  { color: "#F2C14E", bg: "rgba(242,193,78,0.22)" },
  { color: "#E84D6C", bg: "rgba(232,77,108,0.13)" },
  { color: "#7A1F7A", bg: "rgba(122,31,122,0.12)" },
  { color: "#62C7F5", bg: "rgba(98,199,245,0.20)" },
];

const defaultIcons = ["countries", "products", "eugmp", "who"];

export default function TrustStrip({ items }) {
  if (!items?.length) return null;

  return (
    <section
      data-testid="trust-strip"
      className="relative bg-white border-b border-[#E9EEF5] -mt-px"
    >
      <div className="container-x">
        <div className="relative -mt-10 md:-mt-14 z-10 bg-white border border-[#E9EEF5] rounded-2xl shadow-[0_24px_60px_rgba(7,56,166,0.08)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E9EEF5]">
            {items.map((it, i) => {
              const Icon = ICONS[it.icon] || ICONS[defaultIcons[i]] || Package;
              const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-2 md:gap-4 px-4 md:px-7 py-5 md:py-7 group"
                >
                  <div
                    className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: accent.bg }}
                  >
                    <Icon
                      className="w-5 h-5 md:w-6 md:h-6 transition-colors"
                      style={{ color: accent.color }}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="font-display text-[16px] sm:text-[18px] md:text-[26px] font-bold text-[#12233D] tracking-tight leading-tight">
                      {it.value}
                    </div>

                    <div className="mt-1 text-[#4B5563] text-[11px] sm:text-[12px] md:text-[13px] leading-snug">
                      {it.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-4 md:h-6" />
    </section>
  );
}