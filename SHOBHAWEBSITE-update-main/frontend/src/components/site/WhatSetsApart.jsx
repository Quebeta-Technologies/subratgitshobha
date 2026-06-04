import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Sprout,
  DollarSign,
  ClipboardCheck,
  Globe,
  Handshake,
  Plus,
  Minus,
  ShieldCheck,
  Award,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    icon: Factory,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "EU-GMP & WHO-GMP Certified",
    desc: "Our manufacturing partner facilities meet the highest international benchmarks. Every batch tested and documented to the same level as medicines produced for European markets. Verified, certifiable, consistent.",
  },
  {
    icon: Sprout,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "Pure Ingredients. Rigorous Standards.",
    desc: "Every raw material comes from approved, validated suppliers. Every ingredient is tested before production begins. What is on the label is exactly what is inside — transparent, traceable, and trustworthy.",
  },
  {
    icon: DollarSign,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Affordable and Accessible",
    desc: "We structure our supply chain to keep costs lean — working directly with certified manufacturers — so quality medicines remain genuinely accessible to the people and healthcare systems we serve.",
  },
  {
    icon: ClipboardCheck,
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    title: "Regulatory Expertise in Every Market",
    desc: "Our regulatory affairs team manages product dossiers, import approvals, and compliance documentation across all 20+ markets. Your supply chain stays compliant. We take care of the regulatory complexity.",
  },
  {
    icon: Globe,
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.16)",
    title: "Present on the Ground, Every Day",
    desc: "In Ghana alone: 15 medical representatives, 12 sales professionals, 6 supply vans, and reach into 1,850+ pharmacies and 450+ hospitals. Real infrastructure. Real presence. Real people every day.",
  },
  {
    icon: Handshake,
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.12)",
    title: "Long-Term Partnerships, Built for Growth",
    desc: "Our founder personally co-owns distribution companies in Ghana. When our partners succeed, we succeed. We are committed to the long haul — investing in shared growth that lasts.",
  },
];

export default function WhatSetsApart() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="why"
      data-testid="why-shobha"
      className="py-12 md:py-16 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — heading + image with floating points */}
          <div className="lg:col-span-5 relative">

            {/* Heading moved into left column */}
            <div className="mb-8">
              <span className="eyebrow">Why Shobha?</span>
              <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
                What Sets Shobha Apart
              </h2>
              <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
                We invite you to look at exactly what makes us different — in
                practice, in process, and in partnership.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_30px_70px_rgba(7,56,166,0.18)]">
              <img
                src="/brand/whyshobha.png"
                alt="Why Shobha — manufacturing & global reach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/40 via-transparent to-transparent" />

              {/* Floating chip — top right ✅ hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="hidden lg:flex absolute top-6 right-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl items-center gap-2.5 animate-float-slow"
              >
                <div className="w-9 h-9 rounded-xl bg-[#9DCD4A]/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#5e8722]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                    Compliance
                  </div>
                  <div className="text-[#12233D] font-display font-semibold text-[13px]">
                    WHO-GMP Certified
                  </div>
                </div>
              </motion.div>

              {/* Floating chip — middle left ✅ hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F2C14E]/25 flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#9c7611]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                    Recognition
                  </div>
                  <div className="text-[#12233D] font-display font-semibold text-[13px]">
                    Ghana Health Summit
                  </div>
                </div>
              </motion.div>

              {/* Floating chip — bottom right ✅ hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="hidden lg:flex absolute bottom-6 right-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl items-center gap-2.5 animate-float-slow"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E84D6C]/15 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#E84D6C]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                    Reach
                  </div>
                  <div className="text-[#12233D] font-display font-semibold text-[13px]">
                    1,850+ Pharmacies
                  </div>
                </div>
              </motion.div>

              {/* Floating chip — bottom left ✅ hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="hidden lg:flex absolute bottom-20 left-4 md:left-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7A1F7A]/15 flex items-center justify-center">
                  <Factory className="w-4 h-4 text-[#7A1F7A]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                    Manufacturing
                  </div>
                  <div className="text-[#12233D] font-display font-semibold text-[13px]">
                    EU-GMP Standards
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom rotated quote — REMOVED from here */}
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-7 space-y-3">

            {/* Quote moved to top of right column */}
            <div className="mb-5 flex items-start gap-3 bg-white border border-[#E9EEF5] rounded-2xl p-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0738A6] text-white flex items-center justify-center font-display font-bold text-sm">
                JM
              </div>
              <p className="text-[#12233D] text-[13.5px] leading-relaxed italic font-display">
                "We measure success by how many more people got the medicine
                they needed because we were there, reliable, and affordable."
              </p>
            </div>
            {items.map((it, i) => {
              const isOpen = open === i;
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  data-testid={`accordion-item-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`bg-white border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-transparent shadow-[0_18px_50px_rgba(7,56,166,0.10)]"
                      : "border-[#E9EEF5] hover:border-[#0738A6]/30"
                  }`}
                  style={isOpen ? { borderColor: `${it.color}40` } : undefined}
                >
                  <button
                    data-testid={`accordion-toggle-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full text-left p-5 md:p-6 flex items-center gap-4"
                    aria-expanded={isOpen}
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
                      style={{ background: it.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: it.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-1"
                        style={{ color: it.color }}
                      >
                        0{i + 1}
                      </span>
                      <h3 className="font-display font-semibold text-[#12233D] text-[15px] md:text-[17px] leading-snug">
                        {it.title}
                      </h3>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                      style={{
                        background: isOpen ? it.color : "#F7FAFD",
                        color: isOpen ? "#fff" : "#12233D",
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 pl-[72px] md:pl-[76px]">
                          <p className="text-[#4B5563] text-[14.5px] leading-relaxed">
                            {it.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}