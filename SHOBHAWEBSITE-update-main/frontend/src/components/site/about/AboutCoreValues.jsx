import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  BadgeCheck,
  Scale,
  Users,
  Heart,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: FlaskConical,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "Innovation",
    desc: "Continually pushing the boundaries of science to develop better pharmaceutical solutions for patients worldwide.",
  },
  {
    icon: BadgeCheck,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "Quality",
    desc: "EU-GMP and WHO-GMP standards are the minimum we hold ourselves to — every batch, every time.",
  },
  {
    icon: Scale,
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    title: "Integrity",
    desc: "Transparent pricing, honest partnerships, and ethical practice across everything we do.",
  },
  {
    icon: Users,
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.18)",
    title: "Collaboration",
    desc: "We grow when our partners grow. Long-term relationships built on genuine shared success.",
  },
  {
    icon: Heart,
    color: "#E84D6C",
    bg: "rgba(232,77,108,0.12)",
    title: "Accessibility",
    desc: "Good healthcare should reach everyone. We price our products so that can actually happen.",
  },
  {
    icon: Leaf,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Sustainability",
    desc: "Building a business that is good for patients, good for partners, and responsible globally.",
  },
];

export default function AboutCoreValues() {
  return (
    <section
      data-testid="about-core-values"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Core Values</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Six Values That{" "}
            <span className="text-[#0738A6]">Guide Every Decision</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            These aren't framed on a wall — they show up in how we
            manufacture, price, partner, and deliver every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                data-testid={`value-card-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden"
              >
                {/* corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"
                  style={{ background: v.color }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: v.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: v.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ color: v.color }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[#12233D] text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
