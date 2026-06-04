import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Microscope, Wind, Dna, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Stethoscope,
    name: "Critical Care",
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.08)",
    desc:
      "Hospital-grade medicines for emergency wards, ICUs, and surgical settings. When stakes are high, our products deliver.",
  },
  {
    icon: Microscope,
    name: "Oncology",
    color: "#0738A6",
    bg: "rgba(7,56,166,0.07)",
    desc:
      "Proven anticancer molecules and targeted therapies — making effective cancer treatment accessible across emerging markets.",
  },
  {
    icon: Wind,
    name: "MDI Inhalers",
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.14)",
    desc:
      "WHO-approved inhalers for asthma and COPD. Quality respiratory care at a price every pharmacy can stock in volume.",
  },
  {
    icon: Dna,
    name: "Biologicals",
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    desc:
      "Advanced biological medicines and biosimilars meeting EU-GMP standards — bringing modern therapies within reach.",
  },
];

export default function WhatWeMake() {
  return (
    <section
      id="what-we-make"
      data-testid="what-we-make"
      className="py-12 md:py-16 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">Our Specialisations</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            What We Make
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed max-w-2xl">
            We focus on the areas where reliable, quality medicine makes the
            biggest difference — the ones where lives are directly at stake.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              data-testid={`make-card-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 group flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: c.bg }}
              >
                <c.icon className="w-6 h-6" style={{ color: c.color }} />
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-[18px] mb-2.5">
                {c.name}
              </h3>
              <p className="text-[#4B5563] text-[14px] leading-relaxed flex-1">
                {c.desc}
              </p>
              <a
                href="#products"
                className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0738A6] tracking-wide uppercase"
              >
                View Products
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
