import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderMessage({ quote, name, title }) {
  return (
    <section
      id="about"
      data-testid="founder-message"
      className="py-24 md:py-32 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_30px_70px_rgba(7,56,166,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
              alt="Founder portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white border border-[#E9EEF5] rounded-2xl p-5 shadow-xl max-w-[240px]">
            <div className="text-[11px] uppercase tracking-widest text-[#4B5563] font-semibold">
              Leadership
            </div>
            <div className="mt-1 text-[#12233D] font-display font-semibold leading-snug">
              Decades of pharma manufacturing & global distribution experience
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Founder Message</span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-[44px] text-[#12233D] tracking-tight leading-[1.1]">
            A Vision Built on Experience, Access, and Purpose
          </h2>

          <div className="mt-8 relative pl-6 border-l-2 border-[#F2C14E]">
            <Quote className="absolute -top-2 -left-3 w-6 h-6 text-[#F2C14E] bg-[#F7FAFD]" />
            <p className="text-[#12233D] text-lg md:text-xl leading-relaxed font-display font-normal italic">
              "{quote}"
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-px bg-[#0738A6]" />
            <div>
              <div className="font-display font-semibold text-[#12233D] text-lg">
                {name}
              </div>
              <div className="text-[#4B5563] text-sm">{title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
