import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FlaskConical, FileCheck2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    icon: Search,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "Supplier Qualification",
    desc: "Every raw material supplier undergoes a thorough qualification process — including capability assessment, quality certifications, regulatory track record, and a detailed audit of their manufacturing processes. We only work with suppliers who meet our exacting standards.",
  },
  {
    icon: FlaskConical,
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.18)",
    title: "Regulatory Pre-Assessment",
    desc: "Before any ingredient is approved, our regulatory team verifies it meets the requirements of every market we supply — including pharmacopoeial standards, excipient safety data, and jurisdictional compliance.",
  },
  {
    icon: FileCheck2,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Certificate of Analysis Verification",
    desc: "Every delivery comes with a Certificate of Analysis from the supplier. Our quality team independently verifies these results against our internal specifications before the material enters production.",
  },
  {
    icon: CheckCircle2,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "Purity & Identity Testing",
    desc: "Where required, we conduct independent testing to confirm every active ingredient is exactly what it is claimed to be — at the correct specification, with full traceability.",
  },
];

export default function WhySobhaIngredients() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const prev = () => { if (active > 0) goTo(active - 1); };
  const next = () => { if (active < items.length - 1) goTo(active + 1); };

  const current = items[active];
  const Icon = current.icon;

  return (
    <section
      data-testid="whysobha-ingredients"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Ingredient Standards &amp; Purity</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            What Goes Into Our Products —{" "}
            <span className="text-[#7A1F7A]">and Why It Matters</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            The quality of a medicine begins with its ingredients. At Shobha
            Healthcare, we apply strict selection and purity standards to
            everything that goes into our pharmaceutical and nutraceutical
            products — because precision at this stage determines everything
            that follows.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-3 mb-8">
          {items.map((it, i) => {
            const StepIcon = it.icon;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-[12px] font-bold uppercase tracking-[0.15em]"
                style={{
                  borderColor: i === active ? it.color : "#E9EEF5",
                  backgroundColor: i === active ? it.color : "transparent",
                  color: i === active ? "#fff" : "#9CA3AF",
                }}
              >
                <StepIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Step 0{i + 1}</span>
                <span className="sm:hidden">0{i + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E9EEF5] bg-white shadow-[0_8px_40px_rgba(7,56,166,0.08)]">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#F1F5F9]">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: current.color }}
              animate={{ width: `${((active + 1) / items.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-8 md:p-12 lg:p-14"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                {/* Left: icon + step */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-4 lg:w-48 shrink-0">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center shadow-lg"
                    style={{ background: current.bg, border: `2px solid ${current.color}30` }}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: current.color }} />
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-bold tracking-[0.25em] uppercase mb-1"
                      style={{ color: current.color }}
                    >
                      Step 0{active + 1} of {items.length}
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      {items.map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: i === active ? "20px" : "6px",
                            height: "6px",
                            backgroundColor: i === active ? current.color : "#E9EEF5",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <h3
                    className="font-display font-semibold text-[#12233D] text-[22px] md:text-[28px] leading-snug mb-5"
                  >
                    {current.title}
                  </h3>
                  <p className="text-[#4B5563] text-[15.5px] md:text-[16px] leading-relaxed">
                    {current.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex items-center justify-between px-8 md:px-12 lg:px-14 pb-8 md:pb-10">
            <button
              onClick={prev}
              disabled={active === 0}
              className="flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ color: current.color }}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <span className="text-[12px] text-[#9CA3AF] font-medium">
              {active + 1} / {items.length}
            </span>

            <button
              onClick={next}
              disabled={active === items.length - 1}
              className="flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ color: current.color }}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}