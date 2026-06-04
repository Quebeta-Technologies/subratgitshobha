import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, MapPin, Briefcase } from "lucide-react";

export default function AboutFounderProfile() {
  return (
    <section
      id="founder"
      data-testid="about-founder-profile"
      className="py-16 md:py-24 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7A1F7A 0%, #12233D 55%, #0738A6 100%)",
      }}
    >
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#E84D6C]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/12 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="container-x relative">
        {/* Section header */}
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="text-[#F2C14E] text-[11px] font-bold tracking-[0.22em] uppercase">
            Founder &amp; Visionary
          </span>
          <h2 className="mt-4 font-display font-semibold text-white text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-[1.12]">
            A Company Born From{" "}
            <span className="bg-gradient-to-r from-[#F2C14E] to-[#9DCD4A] bg-clip-text text-transparent">
              Watching People Go Without
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — portrait + meta card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
            >
              <img
                src="/brand/jagdish.jpeg"
                alt="Mr. Jagdish Maheshwari — Founder & CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/80 via-[#12233D]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#62C7F5] font-bold mb-2">
                  Founder &amp; CEO
                </div>
                <div className="font-display font-semibold text-white text-2xl leading-tight">
                  Mr. Jagdish Maheshwari
                </div>
                <div className="text-white/70 text-sm mt-1">
                  Shobha Healthcare F.Z.E., Dubai, UAE
                </div>
              </div>
            </motion.div>

            {/* Award chip */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="absolute -top-5 -right-3 md:-right-5 bg-[#F2C14E] text-[#12233D] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                Healthcare Award
                <div className="text-[11px] font-display capitalize tracking-normal mt-0.5">
                  Ghana Health Summit
                </div>
              </div>
            </motion.div>

            {/* Meta card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white/[0.06] border border-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-3"
            >
              <div className="flex items-center gap-3 text-[13px]">
                <div className="w-8 h-8 rounded-lg bg-[#62C7F5]/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-[#62C7F5]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Experience
                  </div>
                  <div className="text-white font-display font-medium">
                    30+ years in pharmaceutical industry
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <div className="w-8 h-8 rounded-lg bg-[#9DCD4A]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#9DCD4A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Co-Founded
                  </div>
                  <div className="text-white font-display font-medium">
                    Greenwich Therapeutics &amp; United Pharma, Ghana
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — long-form story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-white/85 text-[15.5px] md:text-[16px] leading-relaxed">
              Some companies are built chasing opportunity. Shobha Healthcare
              was built chasing a problem. A real one. One that millions of
              people across Africa, Asia, and the Middle East live with every
              day — the reality that the medicine their doctor prescribed is
              either too expensive, too far away, or simply unavailable where
              they live.
            </p>

            <p className="mt-5 text-white/75 text-[15px] leading-relaxed">
              The person who started this company had seen that reality up
              close, many times, over many years. A clinic in West Africa where
              the right inhaler was nowhere to be found. A hospital ward where
              a cancer patient waited weeks for a drug that should have been
              on the shelf. A pharmacist who had to turn someone away
              empty-handed. These are the moments that stayed. These are the
              moments that built Shobha.
            </p>

            <p className="mt-5 text-white/75 text-[15px] leading-relaxed">
              The goal was never to build a big pharma company. The goal was to
              build a useful one. To take decades of experience in
              pharmaceutical manufacturing, distribution, and global supply
              chains — and point all of it squarely at the people who are
              underserved by the current system.
            </p>

            {/* Quote 1 */}
            <div className="mt-9 relative pl-6 border-l-2 border-[#F2C14E]">
              <Quote className="absolute -top-2 -left-4 w-7 h-7 text-[#F2C14E] bg-transparent" />
              <p className="text-white text-[17px] md:text-[20px] leading-relaxed font-display font-medium italic">
                "I didn't want to build another pharmaceutical company. I
                wanted to build the kind that actually shows up — in the right
                markets, with the right products, at the right price."
              </p>
              <div className="mt-3 text-[#F2C14E] text-[11.5px] font-bold uppercase tracking-[0.18em]">
                — Mr. Jagdish Maheshwari, Founder &amp; CEO
              </div>
            </div>

            <p className="mt-9 text-white/75 text-[15px] leading-relaxed">
              That is what Shobha Healthcare is. A company built around
              patients. Around the distributor in Accra who needs a reliable
              supply partner. Around the hospital procurement officer in
              Nairobi who needs medicines that arrive on time. Around the
              mother in Cambodia who needs an affordable inhaler for her
              child. Those are the people this company exists to serve.
            </p>

            <p className="mt-5 text-white/75 text-[15px] leading-relaxed">
              In Ghana, Shobha has co-invested in two distribution companies —{" "}
              <span className="text-white font-semibold">
                Greenwich Therapeutics
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">United Pharma</span> —
              serving over{" "}
              <span className="text-[#9DCD4A] font-semibold">
                1,850 pharmacies
              </span>{" "}
              and{" "}
              <span className="text-[#9DCD4A] font-semibold">
                450+ hospitals
              </span>{" "}
              across the country. Because reaching people takes more than good
              products. It takes presence, infrastructure, and the willingness
              to genuinely show up on the ground.
            </p>

          </motion.div>
        </div>

        {/* Full-width quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 relative w-full rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, #0738A6 0%, #12233D 50%, #7A1F7A 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-[#62C7F5]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#F2C14E]/15 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#9DCD4A]/10 blur-2xl pointer-events-none" />

          {/* Border gradient overlay */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

          <div className="relative px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center gap-8">
            {/* Large decorative quote mark */}
            <div
              className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-2xl items-center justify-center"
              style={{ background: "rgba(98,199,245,0.12)" }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <text x="2" y="34" fontSize="42" fontFamily="Georgia, serif" fill="#62C7F5" opacity="0.9">"</text>
              </svg>
            </div>

            {/* Quote text */}
            <div className="flex-1">
              <p
                className="text-white text-[20px] md:text-[24px] lg:text-[28px] leading-[1.35] font-display font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #62C7F5 60%, #9DCD4A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                "What I care about most is that twenty years from now, there are
                patients in Africa and Asia who got the right medicine because
                Shobha Healthcare was there. That's the legacy I'm building."
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-px w-8 bg-[#F2C14E]" />
                <span className="text-[#F2C14E] text-[12px] font-bold uppercase tracking-[0.22em]">
                  Mr. Jagdish Maheshwari, Founder &amp; CEO
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}