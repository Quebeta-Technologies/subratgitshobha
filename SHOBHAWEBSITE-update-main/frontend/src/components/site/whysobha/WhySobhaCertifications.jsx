import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "EU-GMP Certified",
    sub: "European Union Good Manufacturing Practice",
    badge: "EU",
  },
  {
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "WHO-GMP Compliant",
    sub: "World Health Organisation quality standards",
    badge: "WHO",
  },
  {
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Dubai · UAE",
    sub: "Strategically chosen headquarters for global pharma export",
    badge: "HQ",
  },
  {
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    title: "GDP Compliant",
    sub: "Good Distribution Practice — export logistics chain",
    badge: "GDP",
  },
];

export default function WhySobhaCertifications() {
  return (
    <section
      data-testid="whysobha-certifications"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <span className="eyebrow">Certifications &amp; Standards</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Verified by{" "}
            <span className="text-[#0738A6]">International Standards</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Every certification we hold is a commitment we keep — to our
            partners, to our patients, and to the markets we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              data-testid={`cert-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden text-center"
            >
              {/* Top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-10"
                style={{ background: c.color }}
              />

              {/* Photo */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src="/brand/imagephoto.png"
                  alt={c.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.style.background = c.bg;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 relative">
                {/* Corner accent */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ background: c.color }}
                />
                <div className="relative">
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[9.5px] font-bold tracking-[0.18em] uppercase mb-3"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.badge}
                  </div>
                  <h3 className="font-display font-semibold text-[#12233D] text-[15.5px] leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[#4B5563] text-[12.5px] leading-relaxed">
                    {c.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Award strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#F7FAFD] to-white border border-[#E9EEF5] rounded-2xl p-6 md:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F2C14E] flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(242,193,78,0.35)]">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#9c7611] mb-1">
                Industry Recognition
              </div>
              <div className="font-display font-semibold text-[#12233D] text-[15px]">
                Trusted by healthcare leaders across 20+ countries.
              </div>
            </div>
          </div>
          <div className="text-[12px] text-[#4B5563] sm:text-right">
            Documentation &amp; certificates available to partners on request.
          </div>
        </motion.div>
      </div>
    </section>
  );
}