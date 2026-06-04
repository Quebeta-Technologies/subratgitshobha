import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Handshake, Globe2 } from "lucide-react";

export default function ContactPartnerCTA() {
  return (
    <section
      data-testid="contact-partner-cta"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #0738A6 0%, #7A1F7A 55%, #9DCD4A 110%)",
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#62C7F5]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F2C14E]/20 blur-3xl pointer-events-none" />

      <div className="container-x relative py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Handshake className="w-3.5 h-3.5 text-[#F2C14E]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                Partner With Us
              </span>
            </div>

            <h2 className="font-display font-semibold text-white text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
              Are You Looking for a{" "}
              <span className="bg-gradient-to-r from-[#F2C14E] to-[#62C7F5] bg-clip-text text-transparent">
                Pharmaceutical Supply Partner?
              </span>
            </h2>

            <p className="mt-6 text-white/80 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
              We are actively expanding our distribution network across{" "}
              <span className="text-white font-semibold">
                Africa, Southeast Asia, and the Middle East
              </span>
              . If you are a pharmaceutical distributor, hospital procurement
              team, or healthcare institution looking for a quality-focused
              supply partner — we want to hear from you. Tell us your market
              and what you need, and we will take it from there.
            </p>

            {/* Quick markets row */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "Ghana",
                "Kenya",
                "Nigeria",
                "Cambodia",
                "Vietnam",
                "UAE",
                "Saudi Arabia",
                "+ More",
              ].map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-[11.5px] font-semibold"
                >
                  <Globe2 className="w-3 h-3 text-[#62C7F5]" />
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              data-testid="cta-partnership-enquiry"
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0738A6] font-semibold rounded-full px-6 py-4 hover:bg-[#F7FAFD] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-[14px]"
            >
              Send a Partnership Enquiry
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              data-testid="cta-download-catalogue"
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/70 text-white font-semibold rounded-full px-6 py-4 hover:bg-white/10 transition-all text-[14px]"
            >
              <Download className="w-4 h-4" />
              Download Product Catalogue
            </a>

            <div className="mt-2 text-center text-white/65 text-[12px] leading-relaxed">
              Catalogue available on request · Confidentiality assured
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
