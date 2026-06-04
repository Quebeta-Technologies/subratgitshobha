import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Globe2, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "30+",
    label: "Years Combined Pharma Expertise",
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    icon: Briefcase,
  },
  {
    value: "20+",
    label: "Countries Active",
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    icon: Globe2,
  },
  {
    value: "50+",
    label: "Products Available",
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    icon: TrendingUp,
  },
];

export default function WhySobhaExpertise() {
  return (
    <section
      data-testid="whysobha-expertise"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — visual */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(7,56,166,0.18)]">
              <img
                src="/brand/Experties.png"
                alt="Shobha Healthcare — expertise & foundation"
                className="w-full h-auto object-contain object-top"
                onError={(e) => {
                  e.currentTarget.src = "/brand/hero-pharma.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/55 via-transparent to-transparent" />
            </div>

            {/* Floating chip */}
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
            <span className="eyebrow">Expertise &amp; Foundation</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Built on Deep Expertise,{" "}
              <span className="text-[#0738A6]">Driven by Real Purpose</span>
            </h2>

            <div className="mt-7 space-y-4">
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Shobha Healthcare was founded in{" "}
                <span className="text-[#12233D] font-semibold">2025</span>, but
                the people behind it have been working in pharmaceutical
                manufacturing, distribution, regulatory affairs, and
                international trade for decades. From day one, we had the
                knowledge, the relationships, and the experience to move with
                confidence in the markets we serve.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Our founding leadership brings firsthand understanding of{" "}
                <span className="text-[#12233D] font-semibold">
                  West Africa, Southeast Asia, and the Middle East
                </span>
                . We have navigated regulatory environments across multiple
                countries. That accumulated expertise is what allows Shobha to
                move quickly, compliantly, and at scale — from the very
                beginning.
              </p>
              <p className="text-[#4B5563] text-[15.5px] leading-relaxed">
                Headquartered in Dubai — a city strategically chosen for its
                position as one of the world's leading pharmaceutical export
                hubs — we have direct logistics connections to Africa, Asia,
                and the Middle East.
              </p>
            </div>

            {/* Stats — 3 cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="card-hover bg-[#F7FAFD] border border-[#E9EEF5] rounded-2xl p-5"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: s.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                    <div
                      className="font-display font-semibold text-3xl leading-none"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#4B5563]">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}