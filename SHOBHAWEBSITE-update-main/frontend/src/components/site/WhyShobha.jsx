import React from "react";
import { motion } from "framer-motion";
import { Target, Globe, BadgeCheck, Handshake } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Specialist Focus",
    desc:
      "We concentrate on oncology, respiratory care, critical care, biologicals, and nutraceuticals — categories where quality and reliability matter most.",
  },
  {
    icon: Globe,
    title: "Global Supply Orientation",
    desc:
      "Our Dubai base supports efficient access to Africa, Asia, the Middle East, and other emerging markets through a growing international network.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Commitment",
    desc:
      "Our products are associated with EU-GMP and WHO-GMP aligned manufacturing standards, with strong emphasis on safety, consistency, and documentation.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    desc:
      "We are building more than transactions. We work with distributors, hospitals, and healthcare partners who value continuity, trust, and regional growth.",
  },
];

export default function WhyShobha() {
  return (
    <section
      id="why"
      data-testid="why-shobha"
      className="py-24 md:py-32 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#0738A6]/[0.025] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">Why Shobha</span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-[#12233D] tracking-tight leading-[1.08]">
            Why Global Partners Choose Shobha Healthcare
          </h2>
          <p className="mt-6 text-[#4B5563] text-base md:text-lg leading-relaxed">
            Our purpose is simple: make high-quality medicines and healthcare
            products more accessible across underserved and high-growth markets.
            We bring together specialist therapeutic expertise, export
            readiness, regulatory awareness, and dependable partner
            relationships.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              data-testid={`why-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 flex gap-6 items-start"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0738A6] text-white flex items-center justify-center">
                <it.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl md:text-[22px] text-[#12233D] mb-3">
                  {it.title}
                </h3>
                <p className="text-[#4B5563] text-[15px] leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
