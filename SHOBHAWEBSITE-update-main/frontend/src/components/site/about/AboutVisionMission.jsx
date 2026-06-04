import React from "react";
import { motion } from "framer-motion";
import { Eye, Compass, Sparkles } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <section
      data-testid="about-vision-mission"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.08] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Our Purpose</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Vision &amp; Mission
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            The direction we're heading — and the daily commitment that gets us
            there.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0738A6]/[0.06] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0738A6] via-[#62C7F5] to-[#7A1F7A]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0738A6] flex items-center justify-center shadow-[0_10px_24px_rgba(7,56,166,0.30)]">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0738A6]">
                    Our Vision
                  </div>
                  <div className="font-display font-semibold text-[#12233D] text-xl">
                    Where We're Going
                  </div>
                </div>
              </div>

              <p className="text-[#12233D] text-[16px] md:text-[17px] leading-relaxed font-display italic">
                "To revolutionise global healthcare by delivering superior,
                innovative pharmaceutical products that enhance quality of life
                worldwide — recognised as a trusted leader in quality, safety,
                and patient well-being."
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Innovation", "Quality", "Trust", "Global Leadership"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-[#0738A6]/[0.08] text-[#0738A6] text-[11.5px] font-semibold"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#9DCD4A]/[0.10] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DCD4A] via-[#F2C14E] to-[#E84D6C]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#9DCD4A] flex items-center justify-center shadow-[0_10px_24px_rgba(157,205,74,0.35)]">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#5e8722]">
                    Our Mission
                  </div>
                  <div className="font-display font-semibold text-[#12233D] text-xl">
                    How We Get There
                  </div>
                </div>
              </div>

              <p className="text-[#12233D] text-[16px] md:text-[17px] leading-relaxed font-display italic">
                "To pioneer innovative pharmaceutical solutions through
                cutting-edge technology — delivering high-quality, safe, and
                effective medications to emerging markets worldwide. Guided by
                integrity, excellence, and collaboration, we are a trusted
                partner dedicated to advancing medical progress."
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Integrity",
                  "Excellence",
                  "Collaboration",
                  "Medical Progress",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-[#9DCD4A]/[0.15] text-[#5e8722] text-[11.5px] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom inspirational strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 flex items-center gap-3 justify-center"
        >
          <div className="hidden sm:block h-px w-16 bg-[#E9EEF5]" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9EEF5] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F2C14E]" />
            <span className="text-[12px] font-semibold text-[#12233D] tracking-wide">
              Driven by impact, measured by patients reached
            </span>
          </div>
          <div className="hidden sm:block h-px w-16 bg-[#E9EEF5]" />
        </motion.div>
      </div>
    </section>
  );
}
