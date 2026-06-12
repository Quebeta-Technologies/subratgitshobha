import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

// Three horizontal photo cards. Replace `src` paths once your team adds the
// actual product / lifestyle shots — the page is wired and the layout is final.
const photos = [
  {
    src: "/brand/wellness-yoga.jpeg",
    title: "Built for Daily Life",
    caption: "Wellness that fits into how you already live",
    icon: Leaf,
    color: "#9DCD4A",
    accent: "rgba(157,205,74,0.15)",
  },
  {
    src: "/brand/2running.png",
    title: "Active & Energised",
    caption: "Energy, recovery and joint support for every age",
    icon: Heart,
    color: "#E84D6C",
    accent: "rgba(232,77,108,0.12)",
  },
  {
    src: "/brand/ga12.jpg",
    title: "Pure Active Ingredients",
    caption: "GMP-manufactured · honestly labelled · clinically validated",
    icon: Sparkles,
    color: "#F2C14E",
    accent: "rgba(242,193,78,0.18)",
  },
];

export default function NutraGallery() {
  return (
    <section
      data-testid="nutra-gallery"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#62C7F5]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Wellness in Action</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Real Health, {" "}
              <span className="text-[#5e8722]">Real People</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Three snapshots of what our nutraceutical range is built for —
              everyday energy, active lifestyles, and honest, pure formulations.
            </p>
          </div>
        </div>

        {/* Horizontal 3-photo strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {photos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(7,56,166,0.10)] aspect-[3/4] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/brand/wellness-yoga.jpeg";
                  }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/85 via-[#12233D]/20 to-transparent" />

                {/* Top floating icon chip */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: p.color }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#12233D]">
                    Essentiale
                  </span>
                </div>

                {/* Bottom text content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display font-semibold text-white text-[20px] md:text-[22px] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-white/85 text-[13.5px] leading-relaxed">
                    {p.caption}
                  </p>

                  {/* underline accent */}
                  <div
                    className="mt-4 h-[3px] w-12 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ background: p.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
