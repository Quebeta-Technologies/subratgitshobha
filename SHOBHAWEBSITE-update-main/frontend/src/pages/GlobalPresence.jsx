import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import {
  ChevronRight, Globe2, MapPin, Factory, Truck, Heart,
  Building2, ArrowUpRight, Download, Users, TrendingUp,
  Activity, Pill, Beaker, Stethoscope, Sparkles,
} from "lucide-react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";

/* ── DATA ─────────────────────────────────────────── */
const COUNTRIES = [
  { code:"GH", flag:"🇬🇭", name:"Ghana",        region:"West Africa",    status:"Active", lat:7.9,   lng:-1.0  },
  { code:"NG", flag:"🇳🇬", name:"Nigeria",      region:"West Africa",    status:"Active", lat:9.1,   lng:8.7   },
  { code:"BF", flag:"🇧🇫", name:"Burkina Faso", region:"West Africa",    status:"Active", lat:12.2,  lng:-1.6  },
  { code:"TG", flag:"🇹🇬", name:"Togo",         region:"West Africa",    status:"Active", lat:8.6,   lng:0.8   },
  { code:"BJ", flag:"🇧🇯", name:"Benin",        region:"West Africa",    status:"Active", lat:9.3,   lng:2.3   },
  { code:"SN", flag:"🇸🇳", name:"Senegal",      region:"West Africa",    status:"Active", lat:14.5,  lng:-14.5 },
  { code:"CI", flag:"🇨🇮", name:"Ivory Coast",  region:"West Africa",    status:"Active", lat:7.5,   lng:-5.5  },
  { code:"NE", flag:"🇳🇪", name:"Niger",        region:"West Africa",    status:"Active", lat:17.6,  lng:8.1   },
  { code:"MR", flag:"🇲🇷", name:"Mauritania",   region:"West Africa",    status:"Active", lat:20.0,  lng:-10.9 },
  { code:"CM", flag:"🇨🇲", name:"Cameroon",     region:"Central Africa", status:"Active", lat:7.4,   lng:12.4  },
  { code:"TD", flag:"🇹🇩", name:"Chad",         region:"Central Africa", status:"Active", lat:15.5,  lng:18.7  },
  { code:"GA", flag:"🇬🇦", name:"Gabon",        region:"Central Africa", status:"Active", lat:-0.8,  lng:11.6  },
  { code:"GQ", flag:"🇬🇶", name:"Equatorial Guinea", region:"Central Africa", status:"Active", lat:1.6, lng:10.3 },
  { code:"AO", flag:"🇦🇴", name:"Angola",       region:"Central Africa", status:"Active", lat:-11.2, lng:17.9  },
  { code:"KE", flag:"🇰🇪", name:"Kenya",        region:"East Africa",    status:"Active", lat:-0.2,  lng:37.9  },
  { code:"UG", flag:"🇺🇬", name:"Uganda",       region:"East Africa",    status:"Active", lat:1.4,   lng:32.3  },
  { code:"TZ", flag:"🇹🇿", name:"Tanzania",     region:"East Africa",    status:"Active", lat:-6.4,  lng:34.9  },
  { code:"KH", flag:"🇰🇭", name:"Cambodia",     region:"Southeast Asia",status:"Expanding", lat:12.6,  lng:104.9 },
  { code:"VN", flag:"🇻🇳", name:"Vietnam",      region:"Southeast Asia",status:"Active",    lat:14.1,  lng:108.3 },
  { code:"PH", flag:"🇵🇭", name:"Philippines",  region:"Southeast Asia",status:"Target",    lat:12.9,  lng:121.8 },
  { code:"MM", flag:"🇲🇲", name:"Myanmar",      region:"Southeast Asia",status:"Target",    lat:17.1,  lng:96.7  },
];

const ISO_STATUS = {
  "784":"HQ", "368":"Target",
  "288":"Active", "566":"Expanding", "404":"Expanding", "710":"Target",
  "116":"Expanding", "704":"Active", "608":"Target", "104":"Target",
};

const STATUS_COLORS = {
  HQ:        { dot:"#F2C14E", fill:"rgba(242,193,78,0.55)",  ring:"rgba(242,193,78,0.25)",  text:"#F2C14E" },
  Active:    { dot:"#9DCD4A", fill:"rgba(157,205,74,0.55)",  ring:"rgba(157,205,74,0.25)",  text:"#9DCD4A" },
  Expanding: { dot:"#62C7F5", fill:"rgba(98,199,245,0.55)",  ring:"rgba(98,199,245,0.25)",  text:"#62C7F5" },
  Target:    { dot:"#E84D6C", fill:"rgba(232,77,108,0.55)",  ring:"rgba(232,77,108,0.25)",  text:"#E84D6C" },
};

/* ── HERO ─────────────────────────────────────────── */
function GlobalHero() {
  return (
    <section className="relative overflow-hidden text-white"
      style={{ background:"linear-gradient(120deg,#12233D 0%,#0738A6 55%,#0A4A3E 100%)" }}>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#62C7F5]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F2C14E]/10 blur-3xl pointer-events-none" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 py-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.1 }} className="flex-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
              <Globe2 className="w-3.5 h-3.5 text-[#F2C14E]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">Global Presence &amp; Partners</span>
            </div>
            <h1 className="font-display font-semibold text-white text-[30px] sm:text-[38px] lg:text-[52px] xl:text-[56px] leading-[1.08] tracking-tight">
              One Network.{" "}
              <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
                Four Continents. Fifteen Markets.
              </span>
            </h1>
            <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
              From a state-of-the-art EU-GMP facility in Gujarat, through a Dubai export hub, into pharmacies
              and hospitals across West & East Africa, Asia, and the Middle East.
            </p>
          </motion.div>
          <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:0.25 }}
            className="mt-10 lg:mt-0 lg:flex-shrink-0 flex flex-col lg:self-stretch justify-center">
            <nav aria-label="Breadcrumb"
              className="flex items-center justify-end gap-1.5 text-[12px] text-white/65 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-medium">Global Presence</span>
            </nav>
            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {[
                { v:"15+",    l:"Countries Active"   },
                { v:"4",      l:"Continents"          },
                { v:"1,850+", l:"Pharmacies · Ghana"  },
                { v:"50+",    l:"Products"            },
              ].map(s => (
                <div key={s.l} className="flex flex-col">
                  <span className="font-display font-semibold text-white text-[16px] md:text-[19px] leading-none">{s.v}</span>
                  <span className="mt-2 text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/60">{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}

/* ── WORLD MAP ─────────────────────────────────────── */
function GlobalWorldMap() {
  const [tooltip, setTooltip] = useState(null);

  const PALETTE = [
    "#F5D778","#A8D898","#F5A87E","#90C4E0",
    "#C8A8D8","#88D0B4","#F0C898","#A0D4A8",
    "#E8B890","#98C8D8","#D0A8C8","#B0D8A0",
    "#F5C878","#A8C8D8","#F0B8A8","#90D4B8",
  ];

  const getCountryColor = (isoId) =>
    PALETTE[Math.abs(parseInt(isoId || "0")) % PALETTE.length];

  const STATUS_MAP = {
    Active:    { dot:"#5AA000", fill:"#8FD14F", ring:"rgba(157,205,74,0.25)"  },
    Expanding: { dot:"#0080C0", fill:"#62C7F5", ring:"rgba(98,199,245,0.25)"  },
    Target:    { dot:"#C8003C", fill:"#FF6680", ring:"rgba(232,77,108,0.25)"  },
  };

  const ISO_STATUS_LOCAL = {
    "288":"Active","566":"Active","404":"Active","710":"Target",
    "116":"Expanding","704":"Active","608":"Target","104":"Target",
    "854":"Active","768":"Active","204":"Active","686":"Active",
    "384":"Active","562":"Active","478":"Active",
    "120":"Active","148":"Active","266":"Active","226":"Active","24":"Active",
    "800":"Active","834":"Active",
  };

  const regions = [
    { name:"West Africa",   color:"#5AA000", icon:"🌍", subtitle:"9 Countries"  },
    { name:"Central Africa",color:"#0080C0", icon:"🌐", subtitle:"5 Countries"  },
    { name:"East Africa",   color:"#E6A800", icon:"🌍", subtitle:"3 Countries"  },
    { name:"Southeast Asia",color:"#7A1F7A", icon:"🌏", subtitle:"4 Countries"  },
  ];

  return (
    <section data-testid="global-world-map" className="relative overflow-hidden bg-white">
      <div className="container-x pt-14 pb-8 text-center mx-auto">
        <span className="eyebrow">Where in the World We Operate</span>
        <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-[1.1]">
          A Map of <span className="text-[#0738A6]">Our Reach</span>
        </h2>
        <p className="mt-4 text-[#4B5563] text-[14.5px] max-w-xl mx-auto leading-relaxed">
          Highlighted countries show our market presence. Hover any marker for details.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mx-auto" style={{ background:"#A8D0E8" }}>
        <ComposableMap
          width={960}
          height={480}
          projection="geoMercator"
          projectionConfig={{ scale: 145, center: [10, 10] }}
          style={{ width:"100%", height:"auto", display:"block" }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map(geo => {
                const status = ISO_STATUS_LOCAL[String(geo.id)];
                const sc = status ? STATUS_MAP[status] : null;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={status ? sc.fill : getCountryColor(geo.id)}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline:"none", transition:"all 0.15s" },
                      hover: {
                        fill:    status ? sc.dot : getCountryColor(geo.id),
                        outline: "none",
                        filter:  status ? `drop-shadow(0 0 8px ${sc.dot}aa)` : "brightness(0.9)",
                      },
                      pressed: { outline:"none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {COUNTRIES.map(c => {
            const sc   = STATUS_MAP[c.status];
            const isHQ = c.status === "HQ";
            const r    = isHQ ? 8 : 5.5;
            return (
              <Marker
                key={c.code}
                coordinates={[c.lng, c.lat]}
                onMouseEnter={() => setTooltip(c)}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle r={r} fill={sc.dot} opacity="0">
                  <animate attributeName="r"       from={r}     to={r * 5}   dur="2.5s" begin="0s"   repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.55"  to="0"       dur="2.5s" begin="0s"   repeatCount="indefinite" />
                </circle>
                <circle r={r} fill={sc.dot} opacity="0">
                  <animate attributeName="r"       from={r}     to={r * 3}   dur="2.5s" begin="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.40"  to="0"       dur="2.5s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle
                  r={r}
                  fill={sc.dot}
                  stroke="#FFFFFF"
                  strokeWidth={isHQ ? 2.5 : 2}
                  style={{ cursor:"pointer", filter:`drop-shadow(0 2px 5px ${sc.dot}bb)` }}
                />
                {isHQ && (
                  <text y={-r - 5} textAnchor="middle"
                    fill="#12233D" fontSize="6.5" fontWeight="800"
                    fontFamily="Inter, sans-serif" letterSpacing="0.5">
                    HQ
                  </text>
                )}
              </Marker>
            );
          })}
        </ComposableMap>

        {tooltip && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none z-20
            bg-white/95 backdrop-blur border border-[#E9EEF5] rounded-2xl
            px-5 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <span className="text-2xl">{tooltip.flag}</span>
            <div>
              <div className="text-[#12233D] font-display font-semibold text-[15px]">{tooltip.name}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold mt-0.5"
                style={{ color: STATUS_MAP[tooltip.status].dot }}>
                {tooltip.region} · {tooltip.status}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border-y border-[#E9EEF5]">
        <div className="container-x mx-auto py-4 flex flex-wrap items-center justify-center gap-6 sm:justify-between">
          <div className="flex flex-wrap justify-center gap-5">
            {Object.entries(STATUS_MAP).map(([label, c]) => (
              <div key={label} className="flex items-center gap-2 text-[12px] font-semibold text-[#4B5563]">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-white shadow"
                  style={{ background: c.dot }} />
                {label}
              </div>
            ))}
          </div>
          <span className="text-[#9CA3AF] text-[11px] hidden sm:block">Hover a marker for country details</span>
        </div>
      </div>

      <div className="bg-[#F7FAFD] py-12">
        <div className="container-x mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((r, i) => {
              const list = COUNTRIES.filter(c => c.region === r.name);
              return (
                <motion.div key={r.name}
                  initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ duration:0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#E9EEF5] rounded-2xl p-5 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: r.color + "18", border:`1px solid ${r.color}44` }}>
                      {r.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color:r.color }}>Region</div>
                      <div className="font-display font-semibold text-[#12233D] text-[15px]">{r.name}</div>
                      <div className="text-[11px] text-[#4B5563]">{r.subtitle}</div>
                    </div>
                    <span className="ml-auto text-[11px] font-bold text-[#9CA3AF] self-start">{list.length} markets</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {list.map(c => {
                      const sc = STATUS_MAP[c.status];
                      return (
                        <div key={c.code}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#12233D] border"
                          style={{ borderColor: sc.dot + "55", background: sc.ring }}>
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                          <span className="text-[9px] font-bold tracking-wider uppercase ml-0.5"
                            style={{ color: sc.dot }}>{c.status}</span>
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

/* ── PARTNER NETWORK ──────────────────────────────── */
function PartnerNetwork() {
  const partners = [
    { logo:"/brand/gob1.png",           name:"Shobha Global",          role:"International Partner",    color:"#0738A6", bg:"rgba(7,56,166,0.10)",   desc:"Supports Shobha Healthcare's global expansion strategy, market access planning, and international business development across Africa, Asia, and the Middle East." },
    { logo:"/brand/m01.png",   name:"Medisol Lifescience Pvt. Ltd.", role:"Distribution Collaborator",color:"#9DCD4A", bg:"rgba(157,205,74,0.15)", desc:"Our primary manufacturing partner for MDI inhalers and pharmaceutical products. Medisol Lifescience operates a state-of-the-art production facility in Gujarat — certified to both EU-GMP and WHO-GMP standards. Their precision-controlled manufacturing environments and rigorous quality systems ensure every product bearing the Shobha name meets the highest international benchmarks." },
    { logo:"/brand/t01.png", name:"TIL Healthcare",         role:"Healthcare Collaborator",  color:"#7A1F7A", bg:"rgba(122,31,122,0.10)", desc:"Established collaborator with a strong track record in institutional pharmaceutical supply. TIL Healthcare's experience across hospital channels adds depth to Shobha's distribution capabilities." },
  ];
  return (
    <section data-testid="global-partner-network" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Collaborations</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Our <span className="text-[#0738A6]">Global Partner Network</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Shobha Healthcare's strength comes from its network. We work with manufacturing partners, distribution companies, and business collaborators who share our mission — to make quality pharmaceutical and nutraceutical products accessible to the people who need them most. Each relationship is built for the long term.</p>
        </div>

        {/* Featured — Dossmegt */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-40px" }} transition={{ duration:0.6 }}
          className="relative bg-gradient-to-br from-[#F7FAFD] to-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0738A6]/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0738A6] via-[#62C7F5] to-[#9DCD4A]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0738A6]/10 text-[#0738A6] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                <Sparkles className="w-3 h-3" /> Featured · Manufacturing Partner
              </div>
              {/* ── LOGO replaces icon ── */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-36 h-16 rounded-2xl overflow-hidden shrink-0 bg-white flex items-center justify-center p-2 shadow-sm">
                  <img
                    src="/brand/dossmegt.png"
                    alt="Dossmegt Pharmaceuticals logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[#12233D] text-xl md:text-2xl">Dossmegt Pharmaceuticals</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[12.5px] text-[#4B5563]">
                    <MapPin className="w-3.5 h-3.5 text-[#0738A6]" /> Distribution Collaborator
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[#4B5563] text-[14.5px] leading-relaxed">
                Strengthens supply chain capabilities and broadens our product portfolio. Dossmegt's expertise and
                industry relationships complement Shobha manufacturing and export operations.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { v:"EU-GMP",  l:"Certified", c:"#0738A6", bg:"rgba(7,56,166,0.10)"   },
                { v:"WHO-GMP", l:"Compliant", c:"#9DCD4A", bg:"rgba(157,205,74,0.15)" },
                { v:"Mumbai",  l:"India",     c:"#F2C14E", bg:"rgba(242,193,78,0.18)" },
                { v:"MDI",     l:"Collaborator",c:"#7A1F7A", bg:"rgba(122,31,122,0.10)" },
              ].map(s => (
                <div key={s.l} className="bg-white border border-[#E9EEF5] rounded-2xl p-4 text-center">
                  <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ background:s.bg, color:s.c }}>{s.l}</div>
                  <div className="font-display font-semibold text-lg" style={{ color:s.c }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-40px" }} transition={{ duration:0.5, delay: i * 0.1 }}
              className="card-hover relative bg-white rounded-2xl p-7 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30" style={{ background:p.color }} />
              <div className="relative">
                <div className="w-28 h-20 rounded-2xl flex items-center justify-center mb-5 bg-white p-2 overflow-hidden">
                  <img src={p.logo} alt={`${p.name} logo`} className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color:p.color }}>{p.role}</div>
                <h3 className="font-display font-semibold text-[#12233D] text-lg">{p.name}</h3>
                <p className="mt-3 text-[#4B5563] text-[13.5px] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── GHANA DEEP DIVE ──────────────────────────────── */
function GhanaDeepDive() {
  return (
    <section data-testid="global-ghana-deepdive" className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden">
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.08] blur-3xl pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Deep Dive · 🇬🇭 Ghana</span>
          <h2 className="mt-2 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            <span className="text-[#1F6E3D]">United Pharma</span> &amp; Greenwich Therapeutics 
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Partner company in Ghana ( West Africa )
Greenwich Therapeutics & United Pharma
Greenwich Therapeutics and United Pharma are Ghana-based pharmaceutical distribution and import companies operating at the forefront of healthcare access in Ghana. With a strong foundation built on industry expertise and strategic leadership, both organizations are jointly driven by four equal partners .
Headquartered in Accra, the companies have established a growing national footprint with operational branches and depots in Kumasi and Tamale. Their integrated distribution network is supported by a robust infrastructure, including six supply vans dedicated to servicing pharmacies and healthcare institutions, as well as 20 company-provided vehicles for field teams.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { v:"1,850+", l:"Retail Pharmacies", c:"#0738A6" },
            { v:"450+",   l:"Hospitals Served",  c:"#9DCD4A" },
            { v:"100+",   l:"Wholesalers",        c:"#F2C14E" },
            { v:"10+",    l:"Regional Stores",    c:"#62C7F5" },
            { v:"70+",    l:"Active Products",    c:"#7A1F7A" },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.4, delay: i * 0.08 }}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-4 text-center">
              <div className="font-display font-semibold text-2xl md:text-[28px] leading-none" style={{ color:s.c }}>{s.v}</div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.18em] uppercase text-[#4B5563]">{s.l}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {[
            { title:"United Pharma",          tag:"Public Sector",  color:"#9DCD4A", bg:"rgba(157,205,74,0.15)", desc:"Government institutions, public hospitals, and tender business. GMP-compliant warehouse storage and GDP-compliant shipment across all branches." },
            { title:"Greenwich Therapeutics", tag:"Private Market", color:"#0738A6", bg:"rgba(7,56,166,0.10)",   desc:"Brand building, pharmacy distribution, and prescription channel. Direct relationships with retail pharmacies and prescribers across Ghana." },  
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay: i * 0.1 }}
              className="relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background:c.color }} />
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase inline-block mb-4"
                style={{ background:c.bg, color:c.color }}>{c.tag}</span>
              <h3 className="font-display font-semibold text-[#12233D] text-xl">{c.title}</h3>
              <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-[75%] lg:mx-auto">
          {[
            { icon:Users,      t:"Team Strength",       d:"12 Sales Professionals · 15 Medical Reps · 15 Supply Chain · 10 Indian Expat Specialists", c:"#0738A6" },
            { icon:Truck,      t:"Infrastructure",       d:"6 Supply Vans · 15 Company Vehicles · GMP Warehouses in Accra, Kumasi & Tamale",           c:"#9DCD4A" },
            { icon:Activity,   t:"Therapeutic Coverage", d:"MDI Inhalers · Oncology · Cardiology · Antibiotics · Nutraceuticals",                       c:"#F2C14E" },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.t} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.45, delay: i * 0.08 }}
                className="bg-white border border-[#E9EEF5] rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background:`${b.c}1A` }}>
                  <Icon className="w-5 h-5" style={{ color:b.c }} />
                </div>
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color:b.c }}>{b.t}</div>
                <div className="text-[#4B5563] text-[13px] leading-relaxed">{b.d}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── PARTNERSHIP OPPS + CTA ───────────────────────── */
function PartnershipOpps() {
  const opps = [
    { icon:Beaker,   title:"Diabetic Insulin Portfolios", color:"#0738A6", bg:"rgba(7,56,166,0.10)",   desc:"Partners supplying insulin and diabetes management products to expand our biologicals and critical care range." },
    { icon:Pill,     title:"Anesthetic Products",        color:"#9DCD4A", bg:"rgba(157,205,74,0.15)", desc:"Surgical and critical care anaesthetics to broaden our hospital-facing portfolio." },
    { icon:Sparkles, title:"Innovative Molecules",        color:"#F2C14E", bg:"rgba(242,193,78,0.18)", desc:"Novel and specialty pharmaceutical molecules across therapeutic areas where we are building our clinical presence." },
    { icon:Heart,    title:"Critical Care Therapies",     color:"#E84D6C", bg:"rgba(232,77,108,0.10)", desc:"Additional critical care and hospital pharmacy products to deepen our institutional healthcare presence." },
  ];
  return (
    <>
      <section data-testid="global-partnership-opps" className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="eyebrow">Join Our Network</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Interested in <span className="text-[#0738A6]">Partnering With Shobha?</span>
            </h2>
            <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
              We are actively seeking partnerships with pharmaceutical companies, distributors, and healthcare
              institutions across our target markets.
            </p>
          </div>
          <div className="mb-3 text-[10px] font-bold tracking-[0.18em] uppercase text-[#4B5563]">What we are actively looking for</div>
          <div className="grid md:grid-cols-2 gap-5">
            {opps.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div key={o.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:"-40px" }} transition={{ duration:0.5, delay: i * 0.08 }}
                  className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-7 overflow-hidden flex gap-5 items-start">
                  <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background:o.color }} />
                  <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background:o.bg }}>
                    <Icon className="w-7 h-7" style={{ color:o.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[#12233D] text-[17px] leading-snug">{o.title}</h3>
                    <p className="mt-2 text-[#4B5563] text-[13.5px] leading-relaxed">{o.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden"
        style={{ background:"linear-gradient(120deg,#0738A6 0%,#7A1F7A 55%,#9DCD4A 110%)" }}>
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#62C7F5]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F2C14E]/20 blur-3xl pointer-events-none" />
        <div className="container-x relative py-16 md:py-20">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.6 }}
            className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <Building2 className="w-3.5 h-3.5 text-[#F2C14E]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">Ready to Explore a Partnership?</span>
              </div>
              <h2 className="font-display font-semibold text-white text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
                Long-term relationships,{" "}
                <span className="bg-gradient-to-r from-[#F2C14E] to-[#62C7F5] bg-clip-text text-transparent">
                  built on shared success.
                </span>
              </h2>
              <p className="mt-6 text-white/80 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
                Tell us about your business, your market, and what you are looking for.
                Our team responds within one working day.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0738A6] font-semibold rounded-full px-6 py-4 hover:bg-[#F7FAFD] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-[14px]">
                Send a Partnership Enquiry <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href="#"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/70 text-white font-semibold rounded-full px-6 py-4 hover:bg-white/10 transition-all text-[14px]">
                <Download className="w-4 h-4" /> Download Product Catalogue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ── PAGE ─────────────────────────────────────────── */
export default function GlobalPresence() {
  useEffect(() => {
    window.scrollTo({ top:0, behavior:"instant" });
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