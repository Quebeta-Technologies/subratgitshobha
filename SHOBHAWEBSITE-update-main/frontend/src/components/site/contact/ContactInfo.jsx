import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      data-testid="contact-info"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/[0.06] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Contact Information</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Reach Out{" "}
            <span className="text-[#0738A6]">Directly</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Our team is based in Dubai and aims to get back to all serious
            enquiries within one working day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Head Office Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0738A6]/[0.06] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0738A6] via-[#62C7F5] to-[#7A1F7A]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0738A6] flex items-center justify-center shadow-[0_10px_24px_rgba(7,56,166,0.30)]">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0738A6]">
                    Head Office
                  </div>
                  <div className="font-display font-semibold text-[#12233D] text-xl">
                    Shobha Healthcare F.Z.E.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#62C7F5]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0738A6]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold mb-1">
                      Address
                    </div>
                    <div className="text-[#12233D] font-display font-medium text-[15px] leading-snug">
                      Dubai, United Arab Emirates
                    </div>
                    <div className="text-[#4B5563] text-[12.5px] mt-1 italic">
                      Full office address available on enquiry
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#9DCD4A]/15 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#5e8722]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold mb-1">
                      Hours
                    </div>
                    <div className="text-[#12233D] font-display font-medium text-[15px]">
                      Monday – Friday · 9:00 AM – 6:00 PM GST
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Pharma Export Hub", "GMP Logistics", "Africa · Asia · ME"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-[#0738A6]/[0.08] text-[#0738A6] text-[11.5px] font-semibold"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Get In Touch Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#9DCD4A]/[0.10] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DCD4A] via-[#F2C14E] to-[#E84D6C]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#9DCD4A] flex items-center justify-center shadow-[0_10px_24px_rgba(157,205,74,0.35)]">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#5e8722]">
                    Get In Touch
                  </div>
                  <div className="font-display font-semibold text-[#12233D] text-xl">
                    Direct Contact
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+971585937521"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0738A6]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#0738A6]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold mb-1">
                      Phone
                    </div>
                    <div className="text-[#12233D] font-display font-medium text-[15px] group-hover:text-[#0738A6] transition-colors">
                      +971 58 593 7521
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:prarthana.m@outlook.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E84D6C]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#E84D6C]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold mb-1">
                      Email
                    </div>
                    <div className="text-[#12233D] font-display font-medium text-[15px] group-hover:text-[#E84D6C] transition-colors break-all">
                      prarthana.m@outlook.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://shobhahealthcare.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F2C14E]/15 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-[#9c7611]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold mb-1">
                      Website
                    </div>
                    <div className="text-[#12233D] font-display font-medium text-[15px] group-hover:text-[#9c7611] transition-colors">
                      shobhahealthcare.ae
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Quick Response", "Direct Line", "English · Hindi"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-[#9DCD4A]/[0.15] text-[#5e8722] text-[11.5px] font-semibold"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
