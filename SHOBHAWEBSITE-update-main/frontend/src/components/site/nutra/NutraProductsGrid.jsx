import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Heart,
  Sparkles,
  Droplets,
  Bone,
  Activity,
  Shield,
  ShieldCheck,
  Leaf,
  Brain,
  Eye,
} from "lucide-react";

const products = [
  {
    sno: 1,
    brand: "Essentiale",
    name: "WOMEN FLORA",
    pack: "60 Caps",
    category: "Women's Health",
    desc: "Daily intimate flora support formulated for women — promotes balanced vaginal microflora and overall feminine wellness.",
    icon: Heart,
    color: "#E84D6C",
    accent: "rgba(232,77,108,0.12)",
    image: "/brand/salmet-f250.png",
  },
  {
    sno: 2,
    brand: "Essentiale",
    name: "A-Z COMPLETE",
    pack: "3 x 10's Caps",
    category: "Multivitamin",
    desc: "Comprehensive multivitamin and multimineral blend covering essential daily nutrition from A through Z — fills the gaps a regular diet leaves behind.",
    icon: Sparkles,
    color: "#7A1F7A",
    accent: "rgba(122,31,122,0.12)",
    image: "/brand/nutra-az-complete.png",
  },
  {
    sno: 3,
    brand: "Essentiale",
    name: "IRON PLUS",
    pack: "3 x 10's Caps",
    category: "Iron Supplement",
    desc: "Easy-on-the-stomach iron formulation to help correct iron deficiency and support healthy haemoglobin levels — ideal for women, teens, and donors.",
    icon: Droplets,
    color: "#C2410C",
    accent: "rgba(194,65,12,0.12)",
    image: "/brand/nutra-iron-plus.png",
  },
  {
    sno: 4,
    brand: "Essentiale",
    name: "IRON WITH VITAMINS",
    pack: "60 Caps",
    category: "Iron + Vitamins",
    desc: "Iron combined with co-factor vitamins for better absorption and improved energy — supports anaemia management and reduces fatigue.",
    icon: Droplets,
    color: "#B45309",
    accent: "rgba(180,83,9,0.12)",
    image: "/brand/nutra-iron-with-vitamins.png",
  },
  {
    sno: 5,
    brand: "Essentiale",
    name: "HEALTHY BONES",
    pack: "60 Tabs",
    category: "Bone Health",
    desc: "Calcium with vitamin D3 and supporting minerals — promotes strong bones, supports density and helps reduce age-related bone loss.",
    icon: Bone,
    color: "#475569",
    accent: "rgba(71,85,105,0.12)",
    image: "/brand/nutra-healthy-bones.png",
  },
  {
    sno: 6,
    brand: "Essentiale",
    name: "TRIFLEX",
    pack: "60 Tabs",
    category: "Joint Support",
    desc: "Glucosamine-based joint complex for cartilage, flexibility, and pain-free movement — built for active adults and ageing joints.",
    icon: Activity,
    color: "#0E7490",
    accent: "rgba(14,116,144,0.12)",
    image: "/brand/nutra-triflex.png",
  },
  {
    sno: 7,
    brand: "Essentiale",
    name: "HEALTHY PROSTATE",
    pack: "60 Tabs",
    category: "Men's Health",
    desc: "Targeted prostate support formula for men — helps maintain normal urinary function and prostate health as part of preventive men's wellness.",
    icon: Shield,
    color: "#0738A6",
    accent: "rgba(7,56,166,0.12)",
    image: "/brand/nutra-healthy-prostate.png",
  },
  {
    sno: 8,
    brand: "Essentiale",
    name: "VITAMIN C VITAMIN D & ZINC",
    pack: "2 x 15's",
    category: "Immunity",
    desc: "Triple-action immunity stack — Vitamin C, Vitamin D and Zinc work together to support immune defence, antioxidant balance, and recovery.",
    icon: ShieldCheck,
    color: "#D97706",
    accent: "rgba(242,193,78,0.18)",
    image: "/brand/nutra-vit-c-d-zinc.png",
  },
  {
    sno: 9,
    brand: "Essentiale",
    name: "SANJEEVANI – LIVER PROTECTOR",
    pack: "60 Tabs",
    category: "Liver Health",
    desc: "Plant-based hepatoprotective formula — supports healthy liver function, helps detoxify and aids recovery from everyday liver stress.",
    icon: Leaf,
    color: "#5e8722",
    accent: "rgba(94,135,34,0.15)",
    image: "/brand/nutra-sanjeevani.png",
  },
  {
    sno: 10,
    brand: "Essentiale",
    name: "8 IN 1",
    pack: "60 Tabs",
    category: "All-in-One",
    desc: "Eight essential daily-wellness ingredients combined in a single tablet — a simple, complete supplement for those who prefer one tab over many.",
    icon: Sparkles,
    color: "#14B8A6",
    accent: "rgba(20,184,166,0.12)",
    image: "/brand/nutra-8in1.png",
  },
  {
    sno: 11,
    brand: "Essentiale",
    name: "NEUROGOLD",
    pack: "60 Tabs",
    category: "Cognitive Support",
    desc: "Brain and nerve support formula — combines B-complex vitamins and key neuro-nutrients to help maintain mental clarity and reduce nerve-related fatigue.",
    icon: Brain,
    color: "#6D28D9",
    accent: "rgba(109,40,217,0.12)",
    image: "/brand/nutra-neurogold.png",
  },
  {
    sno: 12,
    brand: "Essentiale",
    name: "OMEGA 3",
    pack: "60 Tabs",
    category: "Heart & Brain",
    desc: "High-quality fish oil delivering EPA and DHA omega-3 fatty acids — supports cardiovascular health, brain function and healthy inflammation response.",
    icon: Heart,
    color: "#E11D48",
    accent: "rgba(225,29,72,0.12)",
    image: "/brand/nutra-omega3.png",
  },
  {
    sno: 13,
    brand: "Essentiale",
    name: "IMMUNE STRONG",
    pack: "60 Tabs",
    category: "Immunity",
    desc: "A daily immune-defence formula combining herbal extracts, vitamins and minerals — built to strengthen natural immunity year-round.",
    icon: ShieldCheck,
    color: "#9DCD4A",
    accent: "rgba(157,205,74,0.15)",
    image: "/brand/nutra-immune-strong.png",
  },
  {
    sno: 14,
    brand: "Essentiale",
    name: "O.R.S – Electrolyte",
    pack: "2 x 15's",
    category: "Hydration",
    desc: "Oral rehydration salts with balanced electrolytes — restores hydration after exercise, illness, or hot-climate days. Fast, effective, family-safe.",
    icon: Droplets,
    color: "#62C7F5",
    accent: "rgba(98,199,245,0.15)",
    image: "/brand/nutra-ors-electrolyte.png",
  },
  {
    sno: 15,
    brand: "Essentiale",
    name: "Opti-Vit",
    pack: "3 x 10's Caps",
    category: "Daily Essentials",
    desc: "Optimised daily vitamin capsule — a clean, well-balanced multivitamin designed for steady, all-round nutrition support.",
    icon: Eye,
    color: "#0EA5E9",
    accent: "rgba(14,165,233,0.12)",
    image: "/brand/nutra-opti-vit.png",
  },
];

const PAGE_SIZE = 6;

function ProductImage({ p }) {
  const [failed, setFailed] = useState(false);
  const Icon = p.icon;

  if (!p.image || failed) {
    return (
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
        style={{ background: p.color }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
    );
  }

  return (
    <div
      className="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-[#E9EEF5] flex-shrink-0"
      style={{ background: p.accent }}
    >
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-full object-contain p-1"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function NutraProductsGrid() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const visible = products.slice(0, shown);
  const hasMore = shown < products.length;

  return (
    <section
      data-testid="nutra-products-grid"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.08] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Browse the Range</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              All 15{" "}
              <span className="text-[#5e8722]">Essentiale Products</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              From women's health to immunity, joint care to hydration — every
              product below is GMP-manufactured under the Essentiale brand.
            </p>
          </div>
        </div>

        {/* Product cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key="nutra-products"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-hover bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Top accent strip — image + badge */}
                <div
                  className="relative px-5 pt-5 pb-4 flex items-start justify-between gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent} 0%, rgba(247,250,253,1) 100%)`,
                  }}
                >
                  <ProductImage p={p} />

                  {/* Category badge */}
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                    style={{ background: p.color }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#5e8722]">
                      {p.brand}
                    </span>
                    <span className="text-[#E9EEF5]">·</span>
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#4B5563]">
                      Sno. {p.sno}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[#12233D] text-[17px] md:text-[18px] leading-tight">
                    {p.name}
                  </h3>

                  <p className="mt-2.5 text-[#4B5563] text-[13.5px] leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Bottom info row */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] text-[12px] font-semibold text-[#12233D]">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#4B5563]">
                        Pack
                      </span>
                      {p.pack}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-bold"
                      style={{ background: `${p.color}18`, color: p.color }}
                    >
                      GMP Certified
                    </span>
                  </div>

                  {/* Action row */}
                  <div className="mt-5 pt-4 border-t border-[#E9EEF5] flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                      style={{ color: p.color }}
                    >
                      Enquire Now
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[10.5px] text-[#4B5563] font-medium">
                      Pure · Tested · Honest
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More / Show Less */}
        {products.length > PAGE_SIZE && (
          <div className="flex justify-center mt-10 gap-3 flex-wrap">
            {hasMore ? (
              <button
                onClick={() => setShown((s) => s + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5e8722] text-white font-semibold text-[14px] shadow-[0_8px_24px_rgba(94,135,34,0.30)] hover:opacity-90 transition-all"
              >
                Show More Products
                <ChevronDown className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShown(PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#5e8722] text-[#5e8722] font-semibold text-[14px] hover:bg-[#5e8722] hover:text-white transition-all"
              >
                Show Less
              </button>
            )}
            <span className="self-center text-[13px] text-[#4B5563]">
              Showing {Math.min(shown, products.length)} of {products.length}{" "}
              products
            </span>
          </div>
        )}
      </div>
    </section>
  );
}