import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
  { 
    name: "Shobha Global", 
    color: "#0738A6",
    logo: "/brand/shobha-global.png"
  },
  { 
    name: "Trident Pharmaceuticals", 
    color: "#E84D6C",
    logo: "/brand/trident.png"
  },
  { 
    name: "TIL Healthcare", 
    color: "#9DCD4A",
    logo: "/brand/til-healthcare.png"
  },
  { 
    name: "Medisol Lifescience", 
    color: "#F2C14E",
    logo: "/brand/medisol.png"
  },
  { 
    name: "Greenwich Therapeutics", 
    color: "#7A1F7A",
    logo: "/brand/greenwich.png"
  },
  { 
    name: "United Pharma Ghana", 
    color: "#62C7F5",
    logo: "/brand/united-pharma.png"
  },
];

function PartnerPlaque({ p }) {
  const initials = p.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="mx-4 md:mx-6 group">
      <div
        className="relative flex items-center gap-4 px-7 py-4 rounded-2xl bg-white border border-[#E9EEF5] hover:border-transparent transition-all duration-500 shadow-[0_8px_24px_rgba(7,56,166,0.04)] hover:shadow-[0_18px_50px_rgba(7,56,166,0.14)]"
        style={{ minWidth: 280 }}
      >
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: p.logo ? "#fff" : p.color, border: p.logo ? `1.5px solid #E9EEF5` : "none" }}
        >
          {p.logo ? (
            <img
              src={p.logo}
              alt={p.name}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `<span style="color:white;font-weight:bold;font-size:14px;background:${p.color};width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:10px">${initials}</span>`;
              }}
            />
          ) : (
            <span className="font-display font-bold text-white text-base">
              {initials}
            </span>
          )}
        </div>
        <span className="font-display font-semibold text-[#12233D] text-[17px] whitespace-nowrap tracking-tight">
          {p.name}
        </span>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${p.color}08 0%, transparent 100%)`,
            border: `1px solid ${p.color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="py-14 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#9DCD4A]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Our Partners</span>
          <h2 className="mt-3 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.15]">
            Partners Who Share Our Vision
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#F7FAFD] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#F7FAFD] to-transparent pointer-events-none" />

        <Marquee gradient={false} speed={45} pauseOnHover className="py-3">
          {partners.map((p, i) => (
            <PartnerPlaque key={i} p={p} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}