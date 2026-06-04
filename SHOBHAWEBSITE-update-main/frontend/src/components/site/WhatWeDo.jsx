import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Wind,
  HeartPulse,
  Dna,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    icon: Microscope,
    name: "Oncology",
    color: "#0738A6",
    bg: "rgba(7,56,166,0.08)",
    desc:
      "Accessible anti-cancer therapies designed to support hospitals, distributors, and healthcare institutions with trusted treatment options across key oncology segments.",
  },
  {
    icon: Wind,
    name: "MDI Inhalers",
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.14)",
    desc:
      "Reliable respiratory solutions for asthma and COPD, including essential inhaler formulations manufactured through quality-focused partner facilities.",
  },
  {
    icon: HeartPulse,
    name: "Critical Care",
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.10)",
    desc:
      "Hospital-grade formulations created for urgent care, emergency medicine, and high-dependency healthcare environments.",
  },
  {
    icon: Dna,
    name: "Biologicals & Biosimilars",
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    desc:
      "Advanced therapy solutions supporting modern treatment needs with a focus on accessibility and quality consistency.",
  },
  {
    icon: Leaf,
    name: "Nutraceuticals",
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.16)",
    desc:
      "Daily wellness and condition-support supplements for women's health, men's health, and general wellbeing — manufactured with the same quality-led mindset behind our pharmaceutical range.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      data-testid="what-we-do"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow" data-testid="what-we-do-eyebrow">
              What We Do
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-[#12233D] tracking-tight leading-[1.08]">
              Specialised Healthcare Solutions for{" "}
              <span className="text-[#0738A6]">High-Impact</span> Therapeutic
              Needs
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
              We focus on the product categories that matter most to healthcare
              systems and patients in growing markets — therapies that improve
              outcomes, strengthen supply reliability, and make quality
              treatment more accessible where it is needed most.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              data-testid={`category-card-${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`card-hover relative bg-white border border-[#E9EEF5] rounded-3xl p-8 group ${
                i === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: c.bg }}
              >
                <c.icon className="w-7 h-7" style={{ color: c.color }} />
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-xl md:text-[22px] mb-3">
                {c.name}
              </h3>
              <p className="text-[#4B5563] text-[15px] leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-6 flex items-center text-[13px] font-semibold text-[#0738A6] tracking-wide gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </div>
              <span
                className="absolute top-6 right-6 text-[11px] font-semibold tracking-widest text-[#E9EEF5]"
                aria-hidden
              >
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
