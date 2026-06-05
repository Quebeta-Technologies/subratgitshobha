import React, { useEffect, useRef } from "react";
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F2C14E]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 py-10">

          {/* Left: eyebrow + headline + subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 max-w-3xl"
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
          </motion.div>

          {/* Right: breadcrumb + stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 lg:mt-0 lg:flex-shrink-0 flex flex-col lg:self-stretch justify-center"
          >
            {/* Breadcrumb — top of right column */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-end gap-1.5 text-[12px] text-white/65 mb-6 h-[30px]"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-medium">Global Presence</span>
            </nav>

            {/* Stats 2x2 grid */}
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                {[
                  { v: "20+", l: "Countries Active" },
                  { v: "3", l: "Continents" },
                  { v: "1,850+", l: "Pharmacies · Ghana" },
                  { v: "50+", l: "Products" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <span className="font-display font-semibold text-white text-[16px] md:text-[19px] leading-none">
                      {s.v}
                    </span>
                    <span className="mt-2 text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/60">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}

/* ======================================================
   2. WORLD PRESENCE MAP  — the new section
   ====================================================== */
function GlobalWorldMap() {
  const canvasRef = useRef(null);
  const rotRef = useRef(35);
  const animRef = useRef(null);

  const GLOBE_DATA = {
    AE: { lat: 25.2, lng: 55.3 }, SA: { lat: 23.9, lng: 45.1 },
    IQ: { lat: 33.2, lng: 43.7 }, GH: { lat: 7.9,  lng: -1.0  },
    NG: { lat: 9.1,  lng: 8.7  }, KE: { lat: -0.2,  lng: 37.9 },
    ZA: { lat: -30.6,lng: 22.9 }, KH: { lat: 12.6,  lng: 104.9},
    VN: { lat: 14.1, lng: 108.3}, PH: { lat: 12.9,  lng: 121.8},
    MM: { lat: 17.1, lng: 96.7 },
  };
  const globeCountries = COUNTRIES.map(c => ({ ...c, ...(GLOBE_DATA[c.code] || {}) }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const SIZE = 460;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width  = SIZE + "px";
    canvas.style.height = SIZE + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const R = SIZE * 0.40;
    const cx = SIZE / 2;
    const cy = SIZE / 2;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      const rotRad = rotRef.current * Math.PI / 180;

      // Atmosphere glow
      const atm = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.2);
      atm.addColorStop(0,   "rgba(7,56,166,0)");
      atm.addColorStop(0.5, "rgba(98,199,245,0.07)");
      atm.addColorStop(1,   "rgba(7,56,166,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = atm; ctx.fill();

      // Sphere body
      const sph = ctx.createRadialGradient(cx - R*.3, cy - R*.3, R*.05, cx, cy, R);
      sph.addColorStop(0,   "rgba(7,56,166,0.22)");
      sph.addColorStop(0.5, "rgba(7,56,166,0.09)");
      sph.addColorStop(1,   "rgba(7,56,166,0.02)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sph; ctx.fill();

      // Sphere border
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(7,56,166,0.28)";
      ctx.lineWidth = 1.5; ctx.stroke();

      // Latitude lines
      [-60,-30,0,30,60].forEach(lat => {
        const phi = lat * Math.PI / 180;
        const rL = R * Math.cos(phi);
        const yL = cy - R * Math.sin(phi);
        ctx.beginPath();
        ctx.ellipse(cx, yL, rL, rL * 0.1, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(98,199,245,0.13)";
        ctx.lineWidth = 0.5; ctx.stroke();
      });

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        const theta = lng * Math.PI / 180 + rotRad;
        const cosT = Math.cos(theta);
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(R * cosT), R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = cosT > 0
          ? "rgba(98,199,245,0.20)"
          : "rgba(98,199,245,0.06)";
        ctx.lineWidth = 0.5; ctx.stroke();
      }

      // Project countries
      const proj = globeCountries
        .filter(c => c.lat !== undefined)
        .map(c => {
          const phi   = c.lat * Math.PI / 180;
          const theta = c.lng * Math.PI / 180 + rotRad;
          const x3 = R * Math.cos(phi) * Math.sin(theta);
          const y3 = R * Math.sin(phi);
          const z3 = R * Math.cos(phi) * Math.cos(theta);
          return { ...c, sx: cx + x3, sy: cy - y3, z3, visible: z3 > -R * 0.05, depth: z3 / R };
        })
        .sort((a, b) => a.z3 - b.z3);

      // Connection lines from HQ
      const hq = proj.find(c => c.status === "HQ" && c.visible && c.depth > 0);
      if (hq) {
        proj.forEach(c => {
          if (!c.visible || c.status === "HQ" || c.depth < 0.05) return;
          ctx.beginPath();
          ctx.moveTo(hq.sx, hq.sy);
          ctx.lineTo(c.sx, c.sy);
          ctx.strokeStyle = STATUS_COLORS[c.status].dot + "55";
          ctx.lineWidth = 0.9;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      // Markers
      proj.forEach(c => {
        if (!c.visible || c.depth < -0.15) return;
        const col   = STATUS_COLORS[c.status];
        const isHQ  = c.status === "HQ";
        const dotR  = isHQ ? 8 : 5;
        const alpha = Math.max(0.25, 0.4 + c.depth * 0.6);
        ctx.globalAlpha = alpha;

        // Glow
        const glow = ctx.createRadialGradient(c.sx, c.sy, 0, c.sx, c.sy, dotR * 3.5);
        glow.addColorStop(0, col.dot + "88");
        glow.addColorStop(1, col.dot + "00");
        ctx.beginPath(); ctx.arc(c.sx, c.sy, dotR * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow; ctx.fill();

        // Dot
        ctx.beginPath(); ctx.arc(c.sx, c.sy, dotR, 0, Math.PI * 2);
        ctx.fillStyle   = col.dot; ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.lineWidth   = 1.5; ctx.stroke();

        ctx.globalAlpha = 1;
      });

      // Specular highlight
      const spec = ctx.createRadialGradient(cx - R*.35, cy - R*.35, 0, cx - R*.35, cy - R*.35, R * .55);
      spec.addColorStop(0, "rgba(255,255,255,0.13)");
      spec.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec; ctx.fill();

      rotRef.current += 0.12;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const regions = [
    { name: "Africa",      color: "#9DCD4A", icon: "🌍" },
    { name: "Middle East", color: "#F2C14E", icon: "🕌" },
    { name: "Asia",        color: "#62C7F5", icon: "🌏" },
  ];

  return (
    <section
      data-testid="global-world-map"
      className="py-16 md:py-24 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="eyebrow">Where in the World We Operate</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-[1.1]">
            A Map of <span className="text-[#0738A6]">Our Reach</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Our Dubai headquarters connects active markets, expanding regions, and target countries across three continents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <canvas
              ref={canvasRef}
              className="drop-shadow-[0_20px_60px_rgba(7,56,166,0.18)]"
            />
            <div className="mt-6 flex flex-wrap justify-center gap-5">
              {Object.entries(STATUS_COLORS).map(([label, c]) => (
                <div key={label} className="flex items-center gap-2 text-[12px] font-semibold text-[#4B5563]">
                  <span className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ background: c.dot }} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Region cards stacked on right */}
          <div className="space-y-4">
            {regions.map((r, i) => {
              const list = COUNTRIES.filter(c => c.region === r.name);
              return (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#E9EEF5] rounded-2xl p-5 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: r.color + "18", border: `1px solid ${r.color}44` }}>
                      {r.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: r.color }}>Region</div>
                      <div className="font-display font-semibold text-[#12233D] text-[17px]">{r.name}</div>
                    </div>
                    <span className="ml-auto text-[11px] font-bold text-[#9CA3AF]">{list.length} markets</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {list.map(c => {
                      const col = STATUS_COLORS[c.status];
                      return (
                        <div key={c.code}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#12233D] border"
                          style={{ borderColor: col.dot + "44", background: col.ring }}
                        >
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                          <span className="text-[9px] font-bold tracking-wider uppercase ml-0.5" style={{ color: col.dot }}>
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
