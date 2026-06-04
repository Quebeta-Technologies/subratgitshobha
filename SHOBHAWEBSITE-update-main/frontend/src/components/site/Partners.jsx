import React from "react";

const partners = [
  "Shobha Global",
  "Trident Pharmaceuticals",
  "TIL Healthcare",
  "Manufacturing Partners",
  "Distribution Partners",
  "Regulatory Affiliates",
];

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="py-20 md:py-24 bg-white border-y border-[#E9EEF5]"
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Partner Ecosystem</span>
          <h2 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-[#12233D] tracking-tight">
            Built Through Strategic Collaborations
          </h2>
          <p className="mt-4 text-[#4B5563] text-[15px] leading-relaxed">
            Shobha Healthcare works through a growing ecosystem of
            manufacturing, export, and market-access partners — ensuring
            reliable product availability and long-term commercial value.
          </p>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="text-[#12233D]/70 font-display font-semibold text-2xl md:text-3xl tracking-tight whitespace-nowrap flex items-center gap-6"
              >
                {p}
                <span className="w-2 h-2 rounded-full bg-[#62C7F5]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
