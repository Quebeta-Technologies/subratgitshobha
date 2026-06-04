import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FlaskConical,
  PackageCheck,
  FolderArchive,
  ShieldCheck,
} from "lucide-react";

const checks = [
  {
    icon: ClipboardList,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "Incoming Material Testing",
    desc: "Every raw material is tested against its Certificate of Analysis before it is accepted. Evaluated against strict specification criteria at every incoming delivery.",
  },
  {
    icon: FlaskConical,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "In-Process Quality Checks",
    desc: "Multiple quality checkpoints run throughout production — covering weight, content uniformity, sterility, and formulation consistency at each critical stage.",
  },
  {
    icon: PackageCheck,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Final Release Testing",
    desc: "Every product passes final tests covering potency, stability, sterility, and packaging integrity. Each batch is signed off by our QA team with full written documentation.",
  },
  {
    icon: FolderArchive,
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.10)",
    title: "Full Batch Documentation",
    desc: "Every batch comes with complete records — manufacturing records, test reports, and release certificates. Available to partners on request at any time.",
  },
];

export default function WhySobhaQuality() {
  return (
    <section
      data-testid="whysobha-quality"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.08] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Quality Control</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Quality Is{" "}
            <span className="text-[#0738A6]">
              Built In from the Very Beginning
            </span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            At Shobha Healthcare, quality control is a continuous process — it
            begins before a single ingredient is ordered and continues all the
            way until the product is in your hands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {checks.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                data-testid={`quality-check-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden"
              >
                {/* corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"
                  style={{ background: c.color }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: c.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: c.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ color: c.color }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[#12233D] text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom assurance strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center gap-3 justify-center"
        >
          <div className="hidden sm:block h-px w-16 bg-[#E9EEF5]" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9EEF5] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#9DCD4A]" />
            <span className="text-[12px] font-semibold text-[#12233D] tracking-wide">
              EU-GMP &amp; WHO-GMP standards · Every batch, every time
            </span>
          </div>
          <div className="hidden sm:block h-px w-16 bg-[#E9EEF5]" />
        </motion.div>
      </div>
    </section>
  );
}
