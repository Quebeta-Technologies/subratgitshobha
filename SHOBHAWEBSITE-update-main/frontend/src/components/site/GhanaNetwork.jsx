import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1,850+", label: "Pharmacies" },
  { value: "450+", label: "Hospitals" },
  { value: "50+", label: "Products" },
  { value: "USD 5M", label: "2026 Target" },
];

export default function GhanaNetwork() {
  return (
    <section
      id="ghana"
      data-testid="ghana-network"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      <div className="container-x">
        <div className="rounded-3xl bg-gradient-to-br from-[#7A1F7A] via-[#0738A6] to-[#12233D] text-white p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#9DCD4A]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#F2C14E]/15 blur-3xl" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#9DCD4A] text-[11px] font-bold tracking-[0.22em] uppercase">
                Ghana Distribution Network
              </span>
              <h2 className="mt-4 font-display font-semibold text-white text-2xl md:text-3xl lg:text-[34px] leading-[1.15] tracking-tight">
                Greenwich Therapeutics & United Pharma — Accra, Ghana
              </h2>
              <p className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-xl">
                Co-owned by our founder (25% equity stake), these two
                distribution companies cover private market, government
                hospitals, and all major medical stores across Ghana — Accra,
                Kumasi, and Tamale.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  data-testid={`ghana-stat-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/[0.06] border border-white/15 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-2 text-white/65 text-[13px] leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
