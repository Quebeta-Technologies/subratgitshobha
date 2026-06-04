import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  { name: "West Africa", note: "Ghana hub · Nigeria · Cote d'Ivoire", strong: true },
  { name: "East Africa", note: "Kenya · Tanzania · Uganda" },
  { name: "MENA", note: "UAE base · KSA · Egypt" },
  { name: "South & SE Asia", note: "India · Sri Lanka · Vietnam" },
];

export default function GlobalPresence() {
  return (
    <section
      id="global"
      data-testid="global-presence"
      className="relative py-24 md:py-32 bg-[#12233D] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/b2159a50-3fe2-420f-a83e-1d507fafacc1/images/43031ff12918dedb46c064bf7789a381df6a01bac42f55087c4e2d4f8cc8540b.png"
          alt="Global presence"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#12233D] via-[#12233D]/85 to-[#12233D]/40" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-[#62C7F5] text-[12px] font-semibold tracking-[0.22em] uppercase">
            Global Presence
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
            A Dubai-Based Brand With Growing Reach Across Emerging Markets
          </h2>
          <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
            From the UAE, Shobha Healthcare is building a strong international
            presence across Africa, Asia, and other strategic regions through
            focused partnerships, export capability, and local market
            understanding.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                data-testid={`region-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border p-5 flex items-start gap-3 ${
                  r.strong
                    ? "border-[#9DCD4A]/40 bg-[#9DCD4A]/10"
                    : "border-white/15 bg-white/[0.04]"
                }`}
              >
                <MapPin
                  className={`w-5 h-5 mt-0.5 ${
                    r.strong ? "text-[#9DCD4A]" : "text-[#62C7F5]"
                  }`}
                />
                <div>
                  <div className="font-display font-semibold text-white">
                    {r.name}
                  </div>
                  <div className="text-white/65 text-sm mt-0.5">{r.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/b2159a50-3fe2-420f-a83e-1d507fafacc1/images/43031ff12918dedb46c064bf7789a381df6a01bac42f55087c4e2d4f8cc8540b.png"
              alt="Global network map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#12233D]/70 via-transparent to-[#0738A6]/30" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/60">
                  Headquartered
                </div>
                <div className="font-display font-semibold text-white text-xl">
                  Dubai · United Arab Emirates
                </div>
              </div>
              <span className="w-3 h-3 rounded-full bg-[#9DCD4A] animate-shine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
