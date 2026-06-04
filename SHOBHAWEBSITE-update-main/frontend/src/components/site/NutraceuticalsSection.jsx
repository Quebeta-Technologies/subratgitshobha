import React from "react";
import { motion } from "framer-motion";
import { Check, Leaf, Heart, Brain, ShieldCheck, ArrowUpRight } from "lucide-react";

const bullets = [
  { icon: Leaf, text: "GMP-manufactured supplements with pure, validated ingredients" },
  { icon: Heart, text: "Dedicated women's health & men's health formulations" },
  { icon: Brain, text: "Cognitive, immunity, energy & daily wellness essentials" },
  { icon: ShieldCheck, text: "Honest labelling — exactly what's claimed, nothing hidden" },
];

export default function NutraceuticalsSection() {
  return (
    <section
      id="nutraceuticals"
      data-testid="nutraceuticals"
      className="py-14 md:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(157,205,74,0.08) 50%, #F7FAFD 100%)",
      }}
    >
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-[#62C7F5]/12 blur-3xl pointer-events-none" />
      {/* Decorative leaf pattern */}
      <div className="absolute top-12 right-10 w-32 h-32 rounded-full bg-[#9DCD4A]/8 hidden lg:block" />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LHS - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <span
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#5e8722" }}
          >
            Nutraceuticals · Daily Wellness
          </span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Supplements You Can{" "}
            <span className="text-[#5e8722] relative inline-block">
              Actually Trust
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q50,8 100,4 T200,4"
                  fill="none"
                  stroke="#9DCD4A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Every Essential product is made to GMP manufacturing standards with
            pure, validated ingredients. From women's intimate flora to men's
            cognitive support, our range is built for real, everyday wellness —
            not for marketing claims.
          </p>

          <div className="mt-7 space-y-3">
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#9DCD4A]/15 flex items-center justify-center group-hover:bg-[#9DCD4A] transition-colors duration-300">
                  <b.icon className="w-4 h-4 text-[#5e8722] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="pt-1.5 text-[#12233D] text-[14.5px] leading-relaxed">
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-wellness">
              Explore Wellness Range
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Become a Distributor
            </a>
          </div>
        </motion.div>

        {/* RHS - Overlapping Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative h-[500px] md:h-[580px]"
        >
          {/* Background image — wellness/nature */}
          <div className="absolute top-0 left-4 md:left-12 w-[78%] h-[80%] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(7,56,166,0.18)]">
            <img
              src="/brand/2running.png"
              alt="Nutraceutical wellness supplements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5e8722]/35 via-transparent to-transparent" />
            {/* corner badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
              <div className="w-7 h-7 rounded-lg bg-[#9DCD4A] flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#12233D]">
                Daily Wellness
              </span>
            </div>
          </div>

          {/* Foreground overlapping image — yoga/wellness woman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[58%] aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(157,205,74,0.30)] border-[6px] border-white animate-float-slow"
          >
            <img
              src="/brand/wellness-yoga.jpeg"
              alt="Mindfulness & wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12233D]/60 via-transparent to-transparent p-4">
              <div className="text-white text-[10px] font-bold uppercase tracking-[0.22em] mb-1">
                For You
              </div>
              <div className="text-white font-display font-semibold text-base leading-tight">
                Wellness Made Personal
              </div>
            </div>
          </motion.div>

          {/* Floating stat chip — top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-12 right-0 md:right-6 bg-white border border-[#E9EEF5] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 z-10"
          >
            <div className="w-10 h-10 rounded-xl bg-[#9DCD4A] flex items-center justify-center">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <div>
              <div className="font-display font-bold text-[#12233D] text-lg leading-none">
                100%
              </div>
              <div className="text-[10px] text-[#4B5563] font-semibold uppercase tracking-widest mt-0.5">
                Pure Ingredients
              </div>
            </div>
          </motion.div>

          {/* Floating stat chip — bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-16 left-0 bg-[#12233D] text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 z-10"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F2C14E] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#12233D]" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base leading-none">
                GMP
              </div>
              <div className="text-[10px] text-white/70 font-semibold uppercase tracking-widest mt-0.5">
                Certified
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
