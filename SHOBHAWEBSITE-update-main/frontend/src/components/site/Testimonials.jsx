import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

const items = [
  {
    quote:
      "Shobha has been a reliable partner for us in Ghana. Their MDI inhalers are consistently good quality and we can actually afford to stock them in volume. That matters a lot in our market.",
    name: "Distribution Partner",
    role: "Pharmaceutical Wholesale",
    location: "Accra, Ghana",
    accent: "#9DCD4A",
  },
  {
    quote:
      "What we appreciate most is that they follow through. Products arrive on time, quality is consistent, and their team is easy to work with. That's rare to find in pharmaceutical supply.",
    name: "Hospital Procurement",
    role: "Institutional Buyer",
    location: "Nairobi, Kenya",
    accent: "#7A1F7A",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials"
      className="py-14 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-[#9DCD4A]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">What People Say</span>
          <h2 className="mt-3 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.15]">
            Trusted Across Our Markets
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              data-testid={`testimonial-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-[#E9EEF5] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,56,166,0.12)]">
                {/* Colored accent rail */}
                <div
                  className="absolute top-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-1.5"
                  style={{ background: t.accent }}
                />
                {/* Giant ghost quote */}
                <div
                  className="absolute -top-2 right-6 font-display text-[140px] leading-none opacity-[0.05] select-none"
                  style={{ color: t.accent }}
                >
                  "
                </div>

                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                    style={{ background: `${t.accent}1A` }}
                  >
                    <Quote className="w-5 h-5" style={{ color: t.accent }} />
                  </div>

                  <p className="text-[#12233D] text-[16px] md:text-[17px] leading-relaxed font-display font-medium">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-1 mt-6 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-current"
                        style={{ color: "#F2C14E" }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-[#E9EEF5]">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-base shrink-0"
                      style={{ background: t.accent }}
                    >
                      {t.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-[#12233D] text-[15px] leading-tight">
                        {t.name}
                      </div>
                      <div className="text-[#4B5563] text-[12.5px] mt-0.5">
                        {t.role}
                      </div>
                      <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                        <MapPin className="w-3 h-3" />
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
