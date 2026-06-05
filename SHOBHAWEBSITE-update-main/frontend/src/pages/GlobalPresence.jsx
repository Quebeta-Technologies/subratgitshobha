import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Globe2,
  MapPin,
  Factory,
  Truck,
  Heart,
  Building2,
  ArrowUpRight,
  Download,
  ShieldCheck,
  Users,
  TrendingUp,
  Activity,
  Pill,
  Beaker,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";

/* =====================================================
   PRESENCE DATA — edit countries / status here
   ===================================================== */
const COUNTRIES = [
  // Active = currently shipping / distributing
  // Expanding = active expansion in progress
  // Target = entering soon
  { code: "AE", flag: "🇦🇪", name: "UAE", region: "Middle East", status: "HQ", x: 56, y: 48 },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia", region: "Middle East", status: "Active", x: 52, y: 50 },
  { code: "IQ", flag: "🇮🇶", name: "Iraq", region: "Middle East", status: "Target", x: 49, y: 42 },
  { code: "GH", flag: "🇬🇭", name: "Ghana", region: "Africa", status: "Active", x: 28, y: 60 },
  { code: "NG", flag: "🇳🇬", name: "Nigeria", region: "Africa", status: "Expanding", x: 32, y: 62 },
  { code: "KE", flag: "🇰🇪", name: "Kenya", region: "Africa", status: "Expanding", x: 45, y: 66 },
  { code: "ZA", flag: "🇿🇦", name: "South Africa", region: "Africa", status: "Target", x: 42, y: 80 },
  { code: "KH", flag: "🇰🇭", name: "Cambodia", region: "Asia", status: "Expanding", x: 78, y: 56 },
  { code: "VN", flag: "🇻🇳", name: "Vietnam", region: "Asia", status: "Active", x: 80, y: 54 },
  { code: "PH", flag: "🇵🇭", name: "Philippines", region: "Asia", status: "Target", x: 85, y: 58 },
  { code: "MM", flag: "🇲🇲", name: "Myanmar", region: "Asia", status: "Target", x: 74, y: 52 },
];

const STATUS_COLORS = {
  HQ: { dot: "#F2C14E", ring: "rgba(242,193,78,0.35)", text: "#F2C14E" },
  Active: { dot: "#9DCD4A", ring: "rgba(157,205,74,0.35)", text: "#9DCD4A" },
  Expanding: { dot: "#62C7F5", ring: "rgba(98,199,245,0.35)", text: "#62C7F5" },
  Target: { dot: "#E84D6C", ring: "rgba(232,77,108,0.35)", text: "#E84D6C" },
};

/* ======================================================
   1. HERO
   ====================================================== */
function GlobalHero() {
  return (
    <section
      data-testid="global-hero"
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(120deg, #12233D 0%, #0738A6 55%, #0A4A3E 100%)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#62C7F5]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />

      <div className="container-x relative py-20 md:py-28 lg:py-32">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[12px] text-white/65 mb-8"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white font-medium">Global Presence</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
            <Globe2 className="w-3.5 h-3.5 text-[#F2C14E]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
              Global Presence &amp; Partners
            </span>
          </div>

          <h1 className="font-display font-semibold text-white text-[30px] sm:text-[38px] lg:text-[52px] xl:text-[56px] leading-[1.08] tracking-tight">
            One Network.{" "}
            <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
              Three Continents. Twenty Markets.
            </span>
          </h1>

          <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
            From a state-of-the-art EU-GMP facility in Gujarat, through a Dubai
            export hub, into pharmacies and hospitals across Africa, Asia, and
            the Middle East — every link in our chain is built for the long term.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { v: "20+", l: "Countries" },
              { v: "3", l: "Continents" },
              { v: "50+", l: "Products" },
              { v: "1", l: "Dubai HQ" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display font-semibold text-white text-2xl md:text-[28px] leading-none">{s.v}</span>
                <span className="mt-2 text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/60">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================
   2. WORLD PRESENCE MAP  — the new section
   ====================================================== */
function GlobalWorldMap() {
  const regions = [
    { name: "Africa", color: "#9DCD4A", icon: "🌍" },
    { name: "Middle East", color: "#F2C14E", icon: "🕌" },
    { name: "Asia", color: "#62C7F5", icon: "🌏" },
  ];

  return (
    <section
      data-testid="global-world-map"
      className="py-16 md:py-24 relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #0a1929 0%, #12233D 45%, #0738A6 100%)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F2C14E]/8 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <span className="inline-block text-[10px] tracking-[0.32em] uppercase font-bold text-[#62C7F5] mb-3">
            Where in the World We Operate
          </span>
          <h2 className="font-display font-semibold text-white text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-[1.1]">
            A Map of{" "}
            <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
              Our Reach
            </span>
          </h2>
          <p className="mt-5 text-white/70 text-[15.5px] leading-relaxed">
            Click any country to learn more. Active markets in green. Markets in expansion in blue.
            Target markets in red. Headquarters in gold.
          </p>
        </div>

        {/* THE MAP PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))" }}
        >
          {/* DOT GRID WORLD BACKDROP */}
          <div className="relative aspect-[2/1] w-full overflow-hidden">
            {/* SVG simplified world */}
            <svg
              viewBox="0 0 100 50"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full opacity-40"
            >
              {/* Latitude lines */}
              {[10, 20, 25, 30, 40].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.1" />
              ))}
              {/* Longitude lines */}
              {[20, 40, 60, 80].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.1" />
              ))}
              {/* Continent dot clusters */}
              {/* Africa */}
              {Array.from({ length: 60 }).map((_, i) => {
                const cx = 26 + (Math.random() - 0.5) * 12;
                const cy = 28 + (Math.random() - 0.5) * 18;
                return <circle key={`af-${i}`} cx={cx} cy={cy} r="0.45" fill="rgba(255,255,255,0.32)" />;
              })}
              {/* Europe / Middle East */}
              {Array.from({ length: 45 }).map((_, i) => {
                const cx = 48 + (Math.random() - 0.5) * 14;
                const cy = 20 + (Math.random() - 0.5) * 12;
                return <circle key={`me-${i}`} cx={cx} cy={cy} r="0.45" fill="rgba(255,255,255,0.32)" />;
              })}
              {/* Asia */}
              {Array.from({ length: 80 }).map((_, i) => {
                const cx = 72 + (Math.random() - 0.5) * 22;
                const cy = 22 + (Math.random() - 0.5) * 14;
                return <circle key={`as-${i}`} cx={cx} cy={cy} r="0.45" fill="rgba(255,255,255,0.32)" />;
              })}
              {/* Americas (decorative — no markers) */}
              {Array.from({ length: 35 }).map((_, i) => {
                const cx = 8 + (Math.random() - 0.5) * 8;
                const cy = 25 + (Math.random() - 0.5) * 20;
                return <circle key={`am-${i}`} cx={cx} cy={cy} r="0.35" fill="rgba(255,255,255,0.16)" />;
              })}
              {/* Oceania */}
              {Array.from({ length: 18 }).map((_, i) => {
                const cx = 86 + (Math.random() - 0.5) * 8;
                const cy = 40 + (Math.random() - 0.5) * 5;
                return <circle key={`oc-${i}`} cx={cx} cy={cy} r="0.35" fill="rgba(255,255,255,0.16)" />;
              })}
            </svg>

            {/* Connection lines from Dubai (HQ) to each market */}
            <svg
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {COUNTRIES.filter((c) => c.status !== "HQ").map((c) => {
                const hq = COUNTRIES.find((x) => x.status === "HQ");
                if (!hq) return null;
                return (
                  <line
                    key={`line-${c.code}`}
                    x1={hq.x}
                    y1={(hq.y * 50) / 100}
                    x2={c.x}
                    y2={(c.y * 50) / 100}
                    stroke={STATUS_COLORS[c.status].dot}
                    strokeWidth="0.15"
                    strokeOpacity="0.4"
                    strokeDasharray="0.8 0.6"
                  />
                );
              })}
            </svg>

            {/* COUNTRY MARKERS */}
            {COUNTRIES.map((c, i) => {
              const colors = STATUS_COLORS[c.status];
              const isHQ = c.status === "HQ";
              return (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${c.x}%`,
                    top: `${c.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
                    style={{
                      width: isHQ ? 28 : 18,
                      height: isHQ ? 28 : 18,
                      background: colors.ring,
                      animationDuration: "2.5s",
                    }}
                  />
                  {/* Main dot */}
                  <span
                    className="relative block rounded-full border-2 border-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                    style={{
                      width: isHQ ? 16 : 11,
                      height: isHQ ? 16 : 11,
                      background: colors.dot,
                    }}
                  />
                  {/* Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap pointer-events-none">
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-[10.5px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-[12px]">{c.flag}</span>
                      <span>{c.name}</span>
                      <span
                        className="px-1.5 py-0.5 rounded-full text-[8.5px] font-bold tracking-wider uppercase"
                        style={{ background: colors.ring, color: colors.text }}
                      >
                        {c.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Floating "Dubai HQ" callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-3 right-3 md:top-5 md:right-5 bg-black/50 backdrop-blur-md border border-[#F2C14E]/40 rounded-xl px-3 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#F2C14E] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F2C14E]">
                Dubai HQ · Live
              </span>
            </motion.div>
          </div>

          {/* LEGEND STRIP */}
          <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[11px] font-semibold">
              {Object.entries(STATUS_COLORS).map(([label, c]) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/40"
                    style={{ background: c.dot }}
                  />
                  <span className="text-white/85">{label}</span>
                </div>
              ))}
            </div>
            <div className="text-[11px] text-white/60">
              Hover or tap a marker for country details
            </div>
          </div>
        </motion.div>

        {/* REGION CARDS UNDER MAP */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {regions.map((r, i) => {
            const list = COUNTRIES.filter((c) => c.region === r.name);
            return (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: `${r.color}22`, border: `1px solid ${r.color}55` }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: r.color }}>
                      Region
                    </div>
                    <div className="font-display font-semibold text-white text-lg">{r.name}</div>
                  </div>
                  <span className="ml-auto text-white/40 text-[12px] font-semibold">
                    {list.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {list.map((c) => {
                    const colors = STATUS_COLORS[c.status];
                    return (
                      <div
                        key={c.code}
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[16px]">{c.flag}</span>
                          <span className="text-white/90 text-[13px] font-medium">{c.name}</span>
                        </div>
                        <span
                          className="text-[9.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{ background: colors.ring, color: colors.text }}
                        >
                          {c.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   3. PARTNER NETWORK  (Section 1 from brief)
   ====================================================== */
function PartnerNetwork() {
  const partners = [
    {
      icon: Globe2,
      name: "Shobha Global",
      role: "International Partner",
      desc: "Supports Shobha Healthcare's global expansion strategy, market access planning, and international business development across Africa, Asia, and the Middle East.",
      color: "#0738A6",
      bg: "rgba(7,56,166,0.10)",
    },
    {
      icon: Pill,
      name: "Trident Pharmaceuticals",
      role: "Distribution Collaborator",
      desc: "Strengthens supply chain capabilities and broadens our product portfolio. Trident's expertise and industry relationships complement Shobha's manufacturing and export operations.",
      color: "#9DCD4A",
      bg: "rgba(157,205,74,0.15)",
    },
    {
      icon: Stethoscope,
      name: "TIL Healthcare",
      role: "Healthcare Collaborator",
      desc: "Established collaborator with a strong track record in institutional pharmaceutical supply. TIL Healthcare's experience across hospital channels adds depth to Shobha's distribution capabilities.",
      color: "#7A1F7A",
      bg: "rgba(122,31,122,0.10)",
    },
  ];

  return (
    <section
      data-testid="global-partner-network"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Collaborations</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Our{" "}
            <span className="text-[#0738A6]">Global Partner Network</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Shobha Healthcare's strength comes from its network. We work with
            manufacturing partners, distribution companies, and business
            collaborators who share our mission — to make quality pharmaceutical
            and nutraceutical products accessible to the people who need them
            most. Each relationship is built for the long term.
          </p>
        </div>

        {/* FEATURED — Medisol Lifescience */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#F7FAFD] to-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden mb-8"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0738A6]/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0738A6] via-[#62C7F5] to-[#9DCD4A]" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0738A6]/10 text-[#0738A6] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                Featured · Manufacturing Partner
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0738A6] flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(7,56,166,0.30)]">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[#12233D] text-xl md:text-2xl">
                    Medisol Lifescience Pvt. Ltd.
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[12.5px] text-[#4B5563]">
                    <MapPin className="w-3.5 h-3.5 text-[#0738A6]" />
                    Valsad, Gujarat — 396 105, India
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[#4B5563] text-[14.5px] leading-relaxed">
                Our primary manufacturing partner for{" "}
                <span className="text-[#12233D] font-semibold">MDI inhalers</span>{" "}
                and pharmaceutical products. Medisol Lifescience operates a
                state-of-the-art production facility in Gujarat — certified to
                both EU-GMP and WHO-GMP standards. Their precision-controlled
                manufacturing environments and rigorous quality systems ensure
                that every product bearing the Shobha name meets the highest
                international benchmarks.
              </p>
              <p className="mt-3 text-[#4B5563] text-[14.5px] leading-relaxed">
                Medisol's facility is equipped for the production of pressurised
                metered-dose inhalers (pMDIs) — products requiring specialised
                manufacturing environments, precise formulation control, and
                validated filling and sealing processes.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { v: "EU-GMP", l: "Certified", c: "#0738A6", bg: "rgba(7,56,166,0.10)" },
                { v: "WHO-GMP", l: "Compliant", c: "#9DCD4A", bg: "rgba(157,205,74,0.15)" },
                { v: "Gujarat", l: "India", c: "#F2C14E", bg: "rgba(242,193,78,0.18)" },
                { v: "MDI", l: "Specialist", c: "#7A1F7A", bg: "rgba(122,31,122,0.10)" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white border border-[#E9EEF5] rounded-2xl p-4 text-center"
                >
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ background: s.bg, color: s.c }}
                  >
                    {s.l}
                  </div>
                  <div
                    className="font-display font-semibold text-lg"
                    style={{ color: s.c }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3 PARTNER CARDS */}
        <div className="grid md:grid-cols-3 gap-5">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden"
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30"
                  style={{ background: p.color }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: p.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: p.color }}>
                    {p.role}
                  </div>
                  <h3 className="font-display font-semibold text-[#12233D] text-lg">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[#4B5563] text-[13.5px] leading-relaxed">
                    {p.desc}
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

/* ======================================================
   4. GHANA DEEP DIVE  (Section 2 from brief)
   ====================================================== */
function GhanaDeepDive() {
  return (
    <section
      data-testid="global-ghana-deepdive"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.08] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="eyebrow">Deep Dive · 🇬🇭 Ghana</span>
          </div>
          <h2 className="mt-2 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Greenwich Therapeutics &amp;{" "}
            <span className="text-[#9DCD4A]">United Pharma</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Distribution Partners — Accra (HQ) · Kumasi · Tamale. Two companies
            jointly driven by four equal partners, each holding 25% equity.
            Shobha Healthcare's founder is personally co-invested in Ghana's
            healthcare access.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { v: "1,850+", l: "Retail Pharmacies", c: "#0738A6" },
            { v: "450+", l: "Hospitals Served", c: "#9DCD4A" },
            { v: "100+", l: "Wholesalers", c: "#F2C14E" },
            { v: "10+", l: "Regional Stores", c: "#62C7F5" },
            { v: "70+", l: "Active Products", c: "#7A1F7A" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-4 text-center"
            >
              <div className="font-display font-semibold text-2xl md:text-[28px] leading-none" style={{ color: s.c }}>
                {s.v}
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.18em] uppercase text-[#4B5563]">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-company split */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {[
            {
              title: "Greenwich Therapeutics",
              tag: "Private Market",
              color: "#0738A6",
              bg: "rgba(7,56,166,0.10)",
              desc: "Brand building, pharmacy distribution, and prescription channel. Direct relationships with retail pharmacies and prescribers across Ghana.",
            },
            {
              title: "United Pharma",
              tag: "Public Sector",
              color: "#9DCD4A",
              bg: "rgba(157,205,74,0.15)",
              desc: "Government institutions, public hospitals, and tender business. GMP-compliant warehouse storage and GDP-compliant shipment across all branches.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: c.color }} />
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase"
                  style={{ background: c.bg, color: c.color }}
                >
                  {c.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-xl">
                {c.title}
              </h3>
              <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Operations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, t: "Team Strength", d: "12 Sales Professionals · 15 Medical Reps · 15 Supply Chain · 10 Indian Expat Specialists", c: "#0738A6" },
            { icon: Truck, t: "Infrastructure", d: "6 Supply Vans · 15 Company Vehicles · GMP Warehouses in Accra, Kumasi & Tamale", c: "#9DCD4A" },
            { icon: Activity, t: "Therapeutic Coverage", d: "MDI Inhalers · Oncology · Cardiology · Antibiotics · Nutraceuticals", c: "#F2C14E" },
            { icon: TrendingUp, t: "Growth Trajectory", d: "USD 5 M projected turnover in 2026 — scaling to USD 15 M by 2028", c: "#7A1F7A" },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white border border-[#E9EEF5] rounded-2xl p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${b.c}1A` }}
                >
                  <Icon className="w-5 h-5" style={{ color: b.c }} />
                </div>
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: b.c }}>
                  {b.t}
                </div>
                <div className="text-[#4B5563] text-[13px] leading-relaxed">
                  {b.d}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   5. PARTNERSHIP OPPORTUNITIES + CTA  (Section 3 from brief)
   ====================================================== */
function PartnershipOpps() {
  const opps = [
    {
      icon: Beaker,
      title: "Diabetic Insulin Portfolios",
      desc: "Partners supplying insulin and diabetes management products to expand our biologicals and critical care range.",
      color: "#0738A6",
      bg: "rgba(7,56,166,0.10)",
    },
    {
      icon: Pill,
      title: "Anaesthetic Products",
      desc: "Surgical and critical care anaesthetics to broaden our hospital-facing portfolio.",
      color: "#9DCD4A",
      bg: "rgba(157,205,74,0.15)",
    },
    {
      icon: Sparkles,
      title: "Innovative Molecules",
      desc: "Novel and specialty pharmaceutical molecules across therapeutic areas where we are building our clinical presence.",
      color: "#F2C14E",
      bg: "rgba(242,193,78,0.18)",
    },
    {
      icon: Heart,
      title: "Critical Care Therapies",
      desc: "Additional critical care and hospital pharmacy products to deepen our institutional healthcare presence.",
      color: "#E84D6C",
      bg: "rgba(232,77,108,0.10)",
    },
  ];

  return (
    <>
      <section
        data-testid="global-partnership-opps"
        className="py-16 md:py-20 bg-white relative overflow-hidden"
      >
        <div className="container-x relative">
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="eyebrow">Join Our Network</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Interested in{" "}
              <span className="text-[#0738A6]">Partnering With Shobha?</span>
            </h2>
            <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
              We are actively seeking partnerships with pharmaceutical companies,
              distributors, and healthcare institutions across our target
              markets. Our partnership model is built around flexibility and
              mutual growth — structured B2B arrangements tailored to align with
              your market, your portfolio, and your growth objectives.
            </p>
          </div>

          <div className="mb-3 text-[10px] font-bold tracking-[0.18em] uppercase text-[#4B5563]">
            What we are actively looking for
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {opps.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden flex gap-5 items-start"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: o.color }} />
                  <div
                    className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: o.bg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: o.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[#12233D] text-[17px] leading-snug">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[#4B5563] text-[13.5px] leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(120deg, #0738A6 0%, #7A1F7A 55%, #9DCD4A 110%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#62C7F5]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F2C14E]/20 blur-3xl pointer-events-none" />

        <div className="container-x relative py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <Building2 className="w-3.5 h-3.5 text-[#F2C14E]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                  Ready to Explore a Partnership?
                </span>
              </div>
              <h2 className="font-display font-semibold text-white text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
                Long-term relationships,{" "}
                <span className="bg-gradient-to-r from-[#F2C14E] to-[#62C7F5] bg-clip-text text-transparent">
                  built on shared success.
                </span>
              </h2>
              <p className="mt-6 text-white/80 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
                Tell us about your business, your market, and what you are
                looking for. Our team reviews all partnership enquiries and
                responds within one working day.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0738A6] font-semibold rounded-full px-6 py-4 hover:bg-[#F7FAFD] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-[14px]"
              >
                Send a Partnership Enquiry
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/70 text-white font-semibold rounded-full px-6 py-4 hover:bg-white/10 transition-all text-[14px]"
              >
                <Download className="w-4 h-4" />
                Download Product Catalogue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   PAGE
   ====================================================== */
export default function GlobalPresence() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Global Presence — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="global-presence-page" className="bg-white">
      <Header />
      <GlobalHero />
      <GlobalWorldMap />
      <PartnerNetwork />
      <GhanaDeepDive />
      <PartnershipOpps />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
