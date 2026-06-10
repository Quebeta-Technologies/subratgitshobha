import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  Shield,
  FlaskConical,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Microscope,
  Heart,
  Brain,
  Bone,
  Eye,
  Droplets,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  ImageIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Women Flora",
    packSize: "60 Caps",
    category: "Women's Health",
    icon: "🌸",
    iconBg: "#fde8ee",
    badgeColor: "#c0234d",
    badgeBg: "#fde8ee",
    description:
      "Probiotic-enriched formula for women's gut and vaginal microbiome health. Supports hormonal balance, digestive wellness, and immunity in one daily capsule.",
    featured: true,
    tag: "Women's Health",
    tagColor: "text-pink-600 bg-pink-50 border-pink-200",
  },
  {
    id: 2,
    name: "A–Z Complete",
    packSize: "3×10's Caps",
    category: "Vitamins & Minerals",
    icon: "💊",
    iconBg: "#eef3fc",
    description:
      "Full-spectrum multivitamin and mineral complex covering all 26 essential micronutrients for daily energy, metabolism, and immune resilience.",
    tag: "Multivitamin",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: 3,
    name: "Iron Plus",
    packSize: "3×10's Caps",
    category: "Vitamins & Minerals",
    icon: "🩸",
    iconBg: "#fff3e0",
    description:
      "Chelated iron with Vitamin C and folic acid for superior absorption. Addresses iron-deficiency anaemia with minimal GI side effects.",
    tag: "Haematology",
    tagColor: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    id: 4,
    name: "Iron with Vitamins",
    packSize: "60 Caps",
    category: "Vitamins & Minerals",
    icon: "⚡",
    iconBg: "#fff8e1",
    description:
      "Iron fortified with B-vitamin complex, Vitamin C and zinc. Ideal for pregnancy support, post-surgery recovery, and adolescent growth phases.",
    tag: "Vitality",
    tagColor: "text-green-700 bg-green-50 border-green-200",
  },
  {
    id: 5,
    name: "Healthy Bones",
    packSize: "60 Tabs",
    category: "Bone & Joint",
    icon: "🦴",
    iconBg: "#f0f8ff",
    description:
      "Calcium carbonate with Vitamin D3 and K2 in an optimised ratio for maximum bone mineralisation. Supports osteoporosis prevention and fracture recovery.",
    tag: "Bone Health",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: 6,
    name: "Triflex",
    packSize: "60 Tabs",
    category: "Bone & Joint",
    icon: "🏃",
    iconBg: "#f4fbea",
    description:
      "Glucosamine, Chondroitin, and MSM combined — the gold-standard triple therapy for joint cartilage repair, flexibility, and osteoarthritis pain relief.",
    tag: "Joint Care",
    tagColor: "text-green-700 bg-green-50 border-green-200",
  },
  {
    id: 7,
    name: "Healthy Prostate",
    packSize: "60 Tabs",
    category: "Men's Health",
    icon: "👨‍⚕️",
    iconBg: "#eef3fc",
    description:
      "Saw palmetto, beta-sitosterol, and zinc selenate formulation. Clinically shown to support prostate health and reduce lower urinary tract symptoms in men 40+.",
    tag: "Men's Health",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: 8,
    name: "Vitamin C, D & Zinc",
    packSize: "2×15's",
    category: "Immunity",
    icon: "🛡️",
    iconBg: "#e8f8ff",
    description:
      "Immunity's power trio — 1000mg Vitamin C, 2000IU Vitamin D3, and elemental Zinc in one fast-absorbing strip for rapid immune defence.",
    tag: "Immunity",
    tagColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
  },
  {
    id: 9,
    name: "Sanjeevani — Liver Protector",
    packSize: "60 Tabs",
    category: "Liver Support",
    icon: "🌿",
    iconBg: "#fdf4e7",
    description:
      "Milk thistle silymarin, artichoke extract, and TUDCA-based hepatoprotective formula. Ideal for medication-induced liver stress and NAFLD management.",
    tag: "Liver Support",
    tagColor: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    id: 10,
    name: "8 in 1",
    packSize: "60 Tabs",
    category: "General Wellness",
    icon: "8️⃣",
    iconBg: "#fde8ee",
    description:
      "Eight essential nutrients in one daily tablet — multivitamins, minerals, antioxidants, and adaptogens for comprehensive health maintenance and stress control.",
    tag: "All-in-One",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: 11,
    name: "Neurogold",
    packSize: "60 Tabs",
    category: "Brain Health",
    icon: "🧠",
    iconBg: "#fff8e1",
    description:
      "Alpha-GPC, Brahmi extract, and B-complex neuro-support formula. Clinically supports cognitive function, memory, and mental clarity in aging adults.",
    tag: "Brain Health",
    tagColor: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    id: 12,
    name: "Omega 3",
    packSize: "60 Tabs",
    category: "Cardio Health",
    icon: "🐟",
    iconBg: "#e8f8ff",
    description:
      "High-concentration EPA/DHA from molecularly distilled fish oil. Cardioprotective, anti-inflammatory, supports joint and eye health. No fishy aftertaste.",
    tag: "Cardio Health",
    tagColor: "text-green-700 bg-green-50 border-green-200",
  },
  {
    id: 13,
    name: "Immune Strong",
    packSize: "60 Tabs",
    category: "Immunity",
    icon: "💪",
    iconBg: "#f4fbea",
    description:
      "Astragalus, elderberry, echinacea, and selenium — a botanical immune powerhouse for seasonal support, post-infection recovery, and long-term immunity building.",
    tag: "Immunity",
    tagColor: "text-green-700 bg-green-50 border-green-200",
  },
  {
    id: 14,
    name: "O.R.S — Electrolyte",
    packSize: "2×15's",
    category: "Hydration",
    icon: "💧",
    iconBg: "#e8f8ff",
    description:
      "WHO-formula ORS with potassium, magnesium, and glucose polymers. Rapid rehydration for diarrhoea, fever, athletic exertion, and post-surgical recovery.",
    tag: "Hydration",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: 15,
    name: "Opti-Vit",
    packSize: "3×10's Caps",
    category: "Eye Health",
    icon: "👁️",
    iconBg: "#fdf4e7",
    description:
      "Lutein, zeaxanthin, and astaxanthin with Vitamin A and zinc — premium eye health formula protecting against macular degeneration and digital eye strain.",
    tag: "Eye Health",
    tagColor: "text-amber-700 bg-amber-50 border-amber-200",
  },
];

const FILTERS = [
  "All",
  "Women's Health",
  "Bone & Joint",
  "Immunity",
  "Liver Support",
  "Vitamins & Minerals",
  "Men's Health",
  "Brain Health",
  "Cardio Health",
  "Hydration",
  "Eye Health",
  "General Wellness",
];

const BENEFITS = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Clinically Formulated",
    desc: "Developed with practising physicians and pharmacologists, with peer-reviewed research backing every ingredient choice.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "WHO-GMP Certified",
    desc: "State-of-the-art facility with full ISO and WHO-GMP certification — every batch third-party tested for purity and potency.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Transparent Labelling",
    desc: "No proprietary blends. Clear label declarations with exact dosages so prescribers and patients can make informed decisions.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Healthcare Partner",
    desc: "Dedicated medical education support, patient compliance programs, and partner portal access for physicians across the country.",
  },
];

const STATS = [
  { num: "15+", label: "Nutraceutical Products" },
  { num: "GMP", label: "WHO Certified Facility" },
  { num: "20+", label: "States Pan-India Reach" },
  { num: "100%", label: "Quality Tested Batches" },
];

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children, green = false }) {
  return (
    <p
      className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${
        green ? "text-[#5ea62a]" : "text-[#0738A6]"
      }`}
    >
      {children}
    </p>
  );
}

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (product.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
        data-testid={`product-card-${product.id}`}
        className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row rounded-2xl border-2 border-[#9DCD4A]/40 bg-gradient-to-br from-[#f4fbea] to-[#eef7fc] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          className="flex flex-col items-center justify-center p-8 sm:w-48 flex-shrink-0"
          style={{ background: "transparent" }}
        >
          <span className="text-5xl mb-3">{product.icon}</span>
          <span className="text-xs font-bold tracking-widest uppercase text-[#0738A6]">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 flex-1 border-t sm:border-t-0 sm:border-l border-[#9DCD4A]/25">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0738A6] mb-1">
            Essentiale · #1
          </span>
          <h3 className="font-poppins text-xl font-bold text-[#12233D] mb-2">
            {product.name}
          </h3>
          <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#9DCD4A]/25">
            <span className="bg-[#12233D] text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {product.packSize}
            </span>
            <a
              href="#contact"
              className="text-sm font-semibold text-[#5ea62a] flex items-center gap-1 hover:gap-2 transition-all"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      data-testid={`product-card-${product.id}`}
      className="flex flex-col rounded-2xl border border-[#E9EEF5] bg-white hover:shadow-[0_12px_40px_rgba(7,56,166,0.11)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Card top */}
      <div
        className="p-6 relative"
        style={{ background: `linear-gradient(145deg, #F7FAFD 0%, ${product.iconBg} 100%)` }}
      >
        <span
          className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase text-white bg-[#12233D] px-2.5 py-1 rounded-full"
        >
          {product.packSize}
        </span>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: product.iconBg }}
        >
          {product.icon}
        </div>
      </div>
      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#0738A6]">
          Essentiale · #{product.id}
        </span>
        <h3 className="font-poppins text-[0.95rem] font-semibold text-[#12233D] leading-snug">
          {product.name}
        </h3>
        <p className="text-[#4B5563] text-xs leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#E9EEF5]">
          <span
            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${product.tagColor}`}
          >
            {product.tag}
          </span>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#9DCD4A] flex items-center gap-1 hover:gap-2 transition-all"
          >
            Enquire <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function NutraceuticalsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <div className="font-inter bg-white text-[#12233D]">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        data-testid="nutra-hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#12233D] via-[#1a3a6e] to-[#0d2a54] py-24 lg:py-32"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/8 blur-3xl" />
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-[#62C7F5]/6 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-[#9DCD4A]/15 text-[#9DCD4A] text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DCD4A]" />
                  Essentiale Series · Nutraceuticals
                </span>
                <h1 className="font-poppins text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-5">
                  Science-Backed{" "}
                  <em className="not-italic text-[#9DCD4A]">Wellness</em>
                  <br />
                  for Every Stage
                  <br />
                  of Life
                </h1>
                <p className="text-white/65 text-base leading-relaxed max-w-md mb-8">
                  SHOBHA Healthcare's Essentiale range combines clinical research
                  with nature's finest ingredients — delivering premium nutritional
                  supplements your patients can trust.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 bg-[#9DCD4A] text-[#12233D] font-poppins font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#8BBA3A] hover:shadow-[0_6px_24px_rgba(157,205,74,0.4)] hover:-translate-y-0.5 transition-all"
                  >
                    View All Products <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#intro"
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-poppins font-medium text-sm px-6 py-3 rounded-full hover:border-white/70 hover:bg-white/5 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌿", num: "15+", label: "Essentiale SKUs" },
                { icon: "🔬", num: "GMP", label: "WHO-Certified Manufacturing" },
                { icon: "💊", num: "100%", label: "Clinically Validated Ingredients" },
                { icon: "🌍", num: "Pan-India", label: "Distribution Across 20+ States" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="bg-white/7 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/11 transition-all"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="font-poppins text-2xl font-bold text-[#9DCD4A] leading-none mb-1.5">
                    {s.num}
                  </div>
                  <div className="text-white/60 text-xs leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <div className="bg-[#F7FAFD] border-y border-[#E9EEF5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeIn
                key={i}
                delay={i * 0.08}
                className={`text-center py-4 px-5 ${
                  i < 3 ? "border-b md:border-b-0 md:border-r border-[#E9EEF5]" : ""
                }`}
              >
                <div className="font-poppins text-3xl font-bold text-[#0738A6] tracking-tight">
                  {s.num}
                </div>
                <div className="text-xs text-[#4B5563] mt-1.5">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRODUCTION ──────────────────────────────────── */}
      <section id="intro" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeIn>
              <SectionEyebrow>About Essentiale</SectionEyebrow>
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-[#12233D] leading-tight tracking-tight mb-5">
                Precision Nutrition
                <br />
                Rooted in Research
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                The Essentiale line represents SHOBHA Healthcare's commitment to
                evidence-based wellness. Each product is formulated by experienced
                nutritionists and pharmacologists, combining advanced bioavailability
                science with the finest raw materials — from omega-3 marine extracts
                to biofortified botanicals.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-7">
                Whether it's supporting women's health, bone density, liver
                protection, immune defence, or everyday vitality — every Essentiale
                product addresses a clear clinical gap with transparent labelling and
                verified dosages.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "WHO-GMP Certified", color: "text-green-700 bg-green-50 border-green-200" },
                  { label: "Clinically Validated", color: "text-blue-700 bg-blue-50 border-blue-200" },
                  { label: "Essentiale Brand", color: "text-purple-700 bg-purple-50 border-purple-200" },
                  { label: "No Artificial Fillers", color: "text-green-700 bg-green-50 border-green-200" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${b.color}`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> {b.label}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(7,56,166,0.12)] aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3850758/pexels-photo-3850758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Nutraceuticals wellness research"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HORIZONTAL PHOTO GALLERY ──────────────────────── */}
      <section className="py-20 bg-[#F7FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <SectionEyebrow green>Gallery</SectionEyebrow>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-[#12233D] tracking-tight">
              Our World of Wellness
            </h2>
            <p className="text-[#4B5563] mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              From state-of-the-art manufacturing to the hands that care — a glimpse
              into the Essentiale story.
            </p>
          </FadeIn>

          {/* ── 3-photo horizontal strip ── */}
          {/* 
            TO ADD YOUR OWN PHOTOS:
            Replace the `src` prop on each <img> below with your image path, e.g.:
              src="/brand/your-photo.jpg"   ← relative to /public folder
          */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                label: "Manufacturing",
                tall: false,
              },
              {
                src: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                label: "Quality Control",
                tall: true,
              },
              {
                src: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                label: "Wellness Care",
                tall: false,
              },
            ].map((photo, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl overflow-hidden bg-[#E9EEF5] ${
                    photo.tall ? "h-72 sm:h-80" : "h-64 sm:h-72"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#12233D]/75 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {photo.label}
                  </span>
                  {/* Placeholder indicator — remove once real photos are added */}
                  <div className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#4B5563]" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-xs text-[#4B5563] mt-4">
            📸 Replace the 3 placeholder images with your own by updating the <code className="bg-gray-100 px-1 rounded">src</code> props in{" "}
            <code className="bg-gray-100 px-1 rounded">NutraceuticalsPage.jsx</code>
          </p>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ──────────────────────────────── */}
      <section id="products" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <SectionEyebrow>Essentiale Range</SectionEyebrow>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-[#12233D] tracking-tight mb-3">
              15 Products. One Promise — Your Health.
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto text-sm leading-relaxed">
              Every product in the Essentiale lineup is designed to fill a specific
              nutritional gap — formulated with precision and packed with care.
            </p>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                    activeFilter === f
                      ? "bg-[#12233D] text-white border-[#12233D]"
                      : "bg-transparent text-[#4B5563] border-[#E9EEF5] hover:border-[#12233D] hover:text-[#12233D]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────── */}
      <section className="py-20 bg-[#F7FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <SectionEyebrow>Why Essentiale</SectionEyebrow>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-[#12233D] tracking-tight">
              The Difference You Can Prescribe
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-[#E9EEF5] rounded-2xl p-7 text-center hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(7,56,166,0.09)] transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${b.iconBg} ${b.iconColor}`}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-poppins text-sm font-semibold text-[#12233D] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[#4B5563] text-xs leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#12233D] to-[#0d3068] rounded-3xl px-10 py-14 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#9DCD4A]/8" />
              <div className="pointer-events-none absolute -left-8 -bottom-12 w-48 h-48 rounded-full bg-[#62C7F5]/7" />

              <div className="relative z-10">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#9DCD4A] mb-2">
                  For Healthcare Professionals
                </p>
                <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-3">
                  Partner with Essentiale.
                  <br />
                  Prescribe Confidence.
                </h2>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Whether you're a physician, distributor, or healthcare institution —
                  SHOBHA Healthcare's Essentiale range is ready for tie-ups, bulk
                  procurement, and co-branded wellness programs.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#9DCD4A] text-[#12233D] font-poppins font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#8BBA3A] hover:shadow-[0_6px_24px_rgba(157,205,74,0.4)] transition-all whitespace-nowrap"
                >
                  Request a Brochure
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-poppins font-medium text-sm px-6 py-3 rounded-full hover:border-white/70 hover:bg-white/5 transition-all whitespace-nowrap"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
