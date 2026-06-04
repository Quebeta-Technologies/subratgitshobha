import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    color: "#0738A6",
    title: "Sourcing",
    short: "Ingredient Sourcing & Supplier Qualification",
    desc:
      "Approved, validated suppliers only. Every raw material tested with a Certificate of Analysis before entering the supply chain.",
  },
  {
    color: "#9DCD4A",
    title: "QA Review",
    short: "Internal QA & Dossier Review",
    desc:
      "Full chemical and microbiological review of every batch dossier. Production begins only after complete QA sign-off.",
  },
  {
    color: "#F2C14E",
    title: "Manufacturing",
    short: "EU-GMP / WHO-GMP Production",
    desc:
      "EU-GMP and WHO-GMP certified facilities. MDI inhalers manufactured by Medisol Lifescience Pvt. Ltd., Valsad, Gujarat.",
  },
  {
    color: "#7A1F7A",
    title: "In-Process",
    short: "Continuous Quality Checks",
    desc:
      "Multiple checkpoints at every critical stage — dose accuracy, sterility, formulation consistency, packaging integrity.",
  },
  {
    color: "#62C7F5",
    title: "Batch Release",
    short: "Final Sign-off & Documentation",
    desc:
      "Every batch receives final QA sign-off. Full documentation, COAs, and batch records available to partners on request.",
  },
  {
    color: "#E84D6C",
    title: "Logistics",
    short: "GDP Compliant Export & Delivery",
    desc:
      "GMP-compliant storage, cold-chain handling where required. Quality maintained all the way to your facility.",
  },
];

// 6 nodes alternating top/bottom — all sit perfectly on the wave path
const NODES = [
  { x: 80, y: 170 },
  { x: 240, y: 70 },
  { x: 400, y: 170 },
  { x: 560, y: 70 },
  { x: 720, y: 170 },
  { x: 880, y: 70 },
];

// Continuous cubic-bezier wave passing through every node
const WAVE_PATH =
  "M 80,170 C 130,170 190,70 240,70 C 290,70 350,170 400,170 C 450,170 510,70 560,70 C 610,70 670,170 720,170 C 770,170 830,70 880,70";

export default function QualityProcess() {
  const [active, setActive] = useState(0);
  const a = steps[active];

  return (
    <section
      data-testid="quality-process"
      className="py-14 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#0738A6]/[0.03] blur-3xl pointer-events-none" />

      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="eyebrow">Quality Process</span>
          <h2 className="mt-3 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.15]">
            From Raw Material to Your Shelf
          </h2>
          <p className="mt-4 text-[#4B5563] text-[14.5px] leading-relaxed max-w-2xl mx-auto">
            Tap any node on the wave to see what happens at that stage of our manufacturing process.
          </p>
        </div>

        <div className="bg-white border border-[#E9EEF5] rounded-3xl shadow-[0_18px_50px_rgba(7,56,166,0.06)] overflow-hidden">
          {/* Wave */}
          <div className="relative w-full overflow-x-auto no-scrollbar bg-gradient-to-b from-[#F7FAFD] to-white">
            <svg
              viewBox="0 0 960 240"
              className="w-full min-w-[800px] h-auto block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0738A6" />
                  <stop offset="20%" stopColor="#9DCD4A" />
                  <stop offset="40%" stopColor="#F2C14E" />
                  <stop offset="60%" stopColor="#7A1F7A" />
                  <stop offset="80%" stopColor="#62C7F5" />
                  <stop offset="100%" stopColor="#E84D6C" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Soft background wave */}
              <path
                d={WAVE_PATH}
                fill="none"
                stroke="#E9EEF5"
                strokeWidth="22"
                strokeLinecap="round"
              />
              {/* Animated colored wave */}
              <motion.path
                d={WAVE_PATH}
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {steps.map((s, i) => {
                const pos = NODES[i];
                const isActive = active === i;
                // label above for upper nodes (y=70), below for lower (y=170)
                const labelY = pos.y < 130 ? 40 : 210;
                return (
                  <g
                    key={i}
                    data-testid={`quality-node-${i}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    style={{ cursor: "pointer" }}
                  >
                    {isActive && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r="30"
                        fill={s.color}
                        opacity="0.18"
                        initial={{ scale: 0.7, opacity: 0.4 }}
                        animate={{ scale: 1.1, opacity: 0.18 }}
                        transition={{
                          duration: 1.3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    )}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 22 : 18}
                      fill="white"
                      stroke={s.color}
                      strokeWidth={isActive ? 4 : 3}
                      filter={isActive ? "url(#glow)" : undefined}
                      style={{ transition: "all .35s" }}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 5}
                      textAnchor="middle"
                      fontFamily="Poppins, sans-serif"
                      fontSize="14"
                      fontWeight="700"
                      fill={s.color}
                    >
                      {i + 1}
                    </text>
                    <text
                      x={pos.x}
                      y={labelY}
                      textAnchor="middle"
                      fontFamily="Poppins, sans-serif"
                      fontSize="13"
                      fontWeight="600"
                      fill={isActive ? s.color : "#12233D"}
                      style={{ transition: "fill .3s" }}
                    >
                      {s.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detail panel — fixed height so no scroll jump */}
          <div
            className="relative px-6 md:px-10 py-7 md:py-8 border-t border-[#E9EEF5] min-h-[180px] md:min-h-[170px]"
            style={{
              background:
                `linear-gradient(90deg, ${a.color}08 0%, transparent 60%)`,
            }}
          >
            <div
              className="absolute top-0 left-0 h-1 w-full transition-colors duration-500"
              style={{ background: a.color }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-12 gap-5 items-center"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-2xl text-white shadow-lg shrink-0"
                    style={{ background: a.color }}
                  >
                    {active + 1}
                  </div>
                  <div>
                    <div
                      className="text-[9px] font-bold uppercase tracking-[0.22em]"
                      style={{ color: a.color }}
                    >
                      Stage {active + 1} / 6
                    </div>
                    <div className="font-display font-semibold text-[#12233D] text-[15px] leading-tight mt-0.5">
                      {a.title}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display font-semibold text-[#12233D] text-base md:text-lg tracking-tight">
                    {a.short}
                  </h3>
                  <p className="mt-1.5 text-[#4B5563] text-[13.5px] md:text-[14.5px] leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
