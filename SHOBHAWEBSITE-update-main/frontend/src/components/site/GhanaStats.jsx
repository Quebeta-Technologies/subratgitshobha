import React from "react";
import { motion } from "framer-motion";

export default function GhanaStats({ items }) {
  if (!items?.length) return null;
  return (
    <section
      data-testid="ghana-stats"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Ghana · West Africa</span>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-[#12233D] tracking-tight leading-[1.08]">
              Operational Strength Where It Matters
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
              Our business model is backed by real market presence. In Ghana,
              our partner ecosystem supports a broad distribution network
              serving pharmacies, wholesalers, hospitals, and regional medical
              stores. This operational depth demonstrates practical market
              access — not just export claims.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s, i) => (
            <motion.div
              key={i}
              data-testid={`ghana-stat-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative rounded-3xl bg-[#F7FAFD] border border-[#E9EEF5] p-7 md:p-9 overflow-hidden card-hover"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#0738A6]/5" />
              <div className="relative">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#0738A6] tracking-tight">
                  {s.value}
                </div>
                <div className="mt-3 text-[#12233D] font-medium text-[15px] leading-snug">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
