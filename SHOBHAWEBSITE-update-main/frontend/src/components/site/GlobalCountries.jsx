import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const regions = [
  { icon: "🌍", name: "West Africa", note: "8 Countries", color: "#9DCD4A", bg: "rgba(157,205,74,0.18)" },
  { icon: "🌐", name: "East Africa", note: "Kenya & More", color: "#F2C14E", bg: "rgba(242,193,78,0.22)" },
  { icon: "🌏", name: "Southeast Asia", note: "4 Countries", color: "#62C7F5", bg: "rgba(98,199,245,0.20)" },
  { icon: "🕌", name: "Middle East", note: "UAE & GCC", color: "#7A1F7A", bg: "rgba(122,31,122,0.12)" },
];

const countries = [
  { code: "ae", name: "UAE", region: "Middle East" },
  { code: "gh", name: "Ghana", region: "West Africa" },
  { code: "ng", name: "Nigeria", region: "West Africa" },
  { code: "bj", name: "Benin", region: "West Africa" },
  { code: "tg", name: "Togo", region: "West Africa" },
  { code: "ci", name: "Côte d'Ivoire", region: "West Africa" },
  { code: "cm", name: "Cameroon", region: "West Africa" },
  { code: "ga", name: "Gabon", region: "Central Africa" },
  { code: "ml", name: "Mali", region: "West Africa" },
  { code: "ne", name: "Niger", region: "West Africa" },
  { code: "td", name: "Chad", region: "Central Africa" },
  { code: "cd", name: "DRC Congo", region: "Central Africa" },
  { code: "ke", name: "Kenya", region: "East Africa" },
  { code: "kh", name: "Cambodia", region: "Southeast Asia" },
  { code: "ph", name: "Philippines", region: "Southeast Asia" },
  { code: "la", name: "Laos", region: "Southeast Asia" },
  { code: "mm", name: "Myanmar", region: "Southeast Asia" },
];

function CountryChip({ c }) {
  return (
    <div className="mx-2 group">
      <div className="relative w-[170px] h-[170px] rounded-2xl bg-white/85 backdrop-blur-md border border-[#E9EEF5] flex flex-col items-center justify-center p-4 transition-all duration-500 hover:bg-white hover:border-[#0738A6]/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,56,166,0.15)] overflow-hidden">
        <div className="mb-3 transition-transform duration-500 group-hover:scale-110">
          <img
            src={`https://flagcdn.com/w80/${c.code}.png`}
            alt={c.name}
            className="w-16 h-11 object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="font-display font-semibold text-[#12233D] text-[14px] tracking-tight text-center">
          {c.name}
        </div>
        <div className="mt-0.5 text-[9px] text-[#4B5563] uppercase tracking-widest font-semibold">
          {c.region}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0738A6] via-[#9DCD4A] to-[#F2C14E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
}

export default function GlobalCountries() {
  return (
    <section
      id="global"
      data-testid="global-countries"
      className="py-14 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LHS — heading + text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Global Presence</span>
            <h2 className="mt-3 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Present in 15+ Countries Across 4 Continents
            </h2>
            <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
              From pharmacies in Accra to clinics in Phnom Penh — our medicines
              reach the people who need them every single day. Built on real
              market presence, not export claims.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] uppercase text-[#0738A6]">
              <span className="inline-block w-8 h-px bg-[#0738A6]" />
              17 Active Markets · Always Growing
            </div>
          </motion.div>

          {/* RHS — 4 region cards in 2x2 grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-5 flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: r.bg }}
                >
                  {r.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-[#12233D] text-lg leading-tight">
                    {r.name}
                  </div>
                  <div className="text-[#4B5563] text-sm">{r.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Country flag carousel */}
      <div className="relative mt-12 md:mt-14">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-r from-[#F7FAFD] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-l from-[#F7FAFD] to-transparent pointer-events-none" />

        <Marquee gradient={false} speed={35} pauseOnHover>
          {countries.map((c, i) => (
            <CountryChip key={`row1-${i}`} c={c} />
          ))}
        </Marquee>

        <div className="h-3" />

        <Marquee gradient={false} speed={28} direction="right" pauseOnHover>
          {[...countries].reverse().map((c, i) => (
            <CountryChip key={`row2-${i}`} c={c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}