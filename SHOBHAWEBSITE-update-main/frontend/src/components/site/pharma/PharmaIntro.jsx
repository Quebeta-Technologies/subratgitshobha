import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FlaskConical,
  ClipboardCheck,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    value: "EU-GMP",
    label: "Certified Manufacturing",
  },
  {
    icon: FlaskConical,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    value: "44+",
    label: "Products in Portfolio",
  },
  {
    icon: ClipboardCheck,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    value: "5",
    label: "Therapeutic Categories",
  },
  {
    icon: BadgeCheck,
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.12)",
    value: "100%",
    label: "Batch Tested & Documented",
  },
];

export default function PharmaIntro() {
  return (
    <section
      data-testid="pharma-intro"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#9DCD4A]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — image */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(7,56,166,0.18)] aspect-[4/3]">
              <img
                src="/brand/hero-pharma.png"
                alt="Shobha Healthcare Pharmaceuticals"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/brand/Whowe.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/55 via-transparent to-transparent" />
            </div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="absolute -top-4 -left-3 md:-left-5 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 animate-float-slow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0738A6]/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#0738A6]" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                  Standard
                </div>
                <div className="text-[#12233D] font-display font-semibold text-[13px]">
                  EU-GMP · WHO-GMP
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="absolute bottom-10 -right-3 md:-right-5 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#62C7F5]/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#0738A6]" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                  Export Hub
                </div>
                <div className="text-[#12233D] font-display font-semibold text-[13px]">
                  Africa · Asia · ME
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">Our Pharmaceutical Range</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Medicines Built for the{" "}
              <span className="text-[#0738A6]">
                Moments That Matter Most
              </span>
            </h2>

            <div className="mt-7 space-y-4">
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Our pharmaceutical range covers the areas where reliable,
                quality medicine makes the biggest difference —{" "}
                <span className="text-[#12233D] font-semibold">
                  cancer care, respiratory health, emergency medicine,
                </span>{" "}
                and advanced biological therapies. We focus on the areas where
                the need is greatest and where quality matters most.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                All of our pharmaceutical products are manufactured to{" "}
                <span className="text-[#12233D] font-semibold">
                  EU-GMP and WHO-GMP standards
                </span>{" "}
                at certified partner facilities. Every batch is tested before it
                leaves. Every product comes with full documentation — COA,
                MSDS, regulatory dossiers, and stability data as standard.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                From metered dose inhalers and targeted oncology therapies to
                broad-spectrum antibiotics and hospital-grade injectables —
                five focused categories, each built around genuine patient need.
              </p>
            </div>

          </motion.div>
        </div>

        {/* 4 stat cards — full width below both columns */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-hover bg-[#F7FAFD] border border-[#E9EEF5] rounded-2xl p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: s.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div
                  className="font-display font-semibold text-2xl leading-none"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-bold tracking-[0.13em] uppercase text-[#4B5563] leading-snug">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}