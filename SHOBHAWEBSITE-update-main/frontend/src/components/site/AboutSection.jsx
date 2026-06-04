import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Globe2 } from "lucide-react";

const points = [
  "End-to-end capability — from manufacturing to global distribution",
  "EU-GMP and WHO-GMP certified manufacturing standards",
  "Accessible pricing — quality medicines within reach for all",
  "Long-term partner model — co-invested in key markets like Ghana",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="pt-4 md:pt-8 pb-12 md:pb-16 bg-white"
    >
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(7,56,166,0.18)]">
            <img
              src="/brand/Shobha about img.png"
              alt="Shobha Healthcare — manufacturing, products & global reach"
              className="w-full h-auto block"
            />
          </div>

          {/* Floating accent chips — using all brand palette colors */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="absolute -top-4 -left-3 md:-left-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 animate-float-slow"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F2C14E]/20 flex items-center justify-center">
              <Award className="w-4 h-4 text-[#9c7611]" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                Founded
              </div>
              <div className="text-[#12233D] font-display font-semibold text-[13px]">
                2025 · Dubai
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="absolute top-1/3 -right-3 md:-right-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#9DCD4A]/20 flex items-center justify-center">
              <Globe2 className="w-4 h-4 text-[#5e8722]" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-[#4B5563] font-bold">
                Markets
              </div>
              <div className="text-[#12233D] font-display font-semibold text-[13px]">
                20+ Countries
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <span className="eyebrow">About Us</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Good Medicine Should Be <br className="hidden md:block" />
            <span className="text-[#0738A6]">Within Everyone's Reach</span>
          </h2>
          <p className="mt-6 text-[#4B5563] text-[15.5px] leading-relaxed">
            Founded in 2025 and based in Dubai, Shobha Healthcare is a
            pharmaceutical manufacturer and exporter with one clear purpose —
            to make high-quality, affordable medicines available to the people
            and healthcare systems that need them most, across Africa, Asia,
            and the Middle East.
          </p>
          <p className="mt-4 text-[#4B5563] text-[15.5px] leading-relaxed">
            Our focus is on the therapeutic areas where impact matters most —
            cancer medicines, respiratory inhalers, critical care drugs,
            biological therapies, and everyday wellness supplements. A focused,
            high-quality range that genuinely changes patient outcomes.
          </p>

          <div className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#9DCD4A]/15 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#5e8722]" />
                </div>
                <p className="text-[#12233D] text-[15px] leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
