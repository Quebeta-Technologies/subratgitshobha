import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  ShieldCheck,
  Wallet,
  HeartHandshake,
  Award,
  Globe2,
  MapPin,
} from "lucide-react";

const points = [
  {
    icon: Workflow,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "End-to-End Capability",
    desc: "From manufacturing through to regulatory affairs, export logistics, and distribution — we handle all of it. Fewer delays, more reliability for our partners.",
  },
  {
    icon: ShieldCheck,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "International Standards",
    desc: "EU-GMP and WHO-GMP certified manufacturing. Every batch tested and documented to the same benchmarks as medicines made for European markets.",
  },
  {
    icon: Wallet,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Accessible Pricing",
    desc: "We've built our supply chain to keep costs lean — so quality medicines remain accessible and affordable for the people and healthcare systems we serve.",
  },
  {
    icon: HeartHandshake,
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.12)",
    title: "Long-Term Partnership",
    desc: "We invest in our distribution partners, support them, and grow alongside them. In Ghana, we co-own the companies we work with.",
  },
];

export default function AboutCompanyOverview() {
  return (
    <section
      data-testid="about-company-overview"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="container-x relative">
        {/* Top: Photo + Text side by side */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — visual */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(7,56,166,0.18)] aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src="/brand/Whowe.png"
                alt="Shobha Healthcare — manufacturing and global reach"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/brand/Whowe.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/55 via-transparent to-transparent" />
            </div>

            {/* Floating accent chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="absolute -top-4 -left-3 md:-left-5 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 animate-float-slow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F2C14E]/20 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#9c7611]" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                  20+ Years
                </div>
                <div className="text-[#12233D] font-display font-semibold text-[13px]">
                  Industry Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="absolute top-1/3 -right-3 md:-right-5 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#9DCD4A]/20 flex items-center justify-center">
                <Globe2 className="w-4 h-4 text-[#5e8722]" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                  Reach
                </div>
                <div className="text-[#12233D] font-display font-semibold text-[13px]">
                  Africa · Asia · ME
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="absolute -bottom-5 left-6 md:left-10 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 animate-float-slow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#62C7F5]/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#0738A6]" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                  HQ
                </div>
                <div className="text-[#12233D] font-display font-semibold text-[13px]">
                  Dubai, UAE
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — content (no cards here) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              A Pharmaceutical Manufacturer{" "}
              <span className="text-[#0738A6]">Built Around Patients</span>
            </h2>

            <div className="mt-7 space-y-4">
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Founded in 2025 and based in Dubai,{" "}
                <span className="text-[#12233D] font-semibold">
                  Shobha Healthcare
                </span>{" "}
                is a pharmaceutical manufacturer and exporter with one clear
                purpose — to make high-quality, affordable medicines available
                to the people and healthcare systems that need them most,
                across Africa, Asia, and the Middle East.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Our focus is on the therapeutic areas where impact matters most
                — cancer medicines, respiratory inhalers, critical care drugs,
                biological therapies, and everyday wellness supplements. A
                focused, high-quality range that genuinely changes patient
                outcomes.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Headquartered in Dubai, one of the world's most strategically
                positioned cities for pharmaceutical export, we have direct
                logistics connections to Africa, Asia, and the Middle East.
                Everything from formulation and manufacturing through to
                regulatory affairs, export logistics, and distribution
                partnerships is handled in-house.{" "}
                <span className="text-[#12233D] font-semibold">
                  One partner. End-to-end.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom: 4 cards full width */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-hover bg-[#F7FAFD] border border-[#E9EEF5] rounded-2xl p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: p.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="font-display font-semibold text-[#12233D] text-[15px] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-[#4B5563] text-[13.5px] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}