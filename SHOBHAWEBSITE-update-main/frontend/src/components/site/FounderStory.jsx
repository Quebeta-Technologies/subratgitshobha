import React from "react";
import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";

export default function FounderStory() {
  return (
    <section
      id="founder"
      data-testid="founder-story"
      className="py-12 md:py-16 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7A1F7A 0%, #12233D 55%, #0738A6 100%)",
      }}
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E84D6C]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/12 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10">
            <img
              src="/brand/jagdish.jpeg"
              alt="Mr. Jagdish Maheshwari — Founder & CEO"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#62C7F5] font-bold mb-2">
                Founder & CEO
              </div>
              <div className="font-display font-semibold text-white text-xl">
                Mr. Jagdish Maheshwari
              </div>
              <div className="text-white/70 text-sm">
                Shobha Healthcare F.Z.E., Dubai, UAE
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 md:-right-5 bg-[#F2C14E] text-[#12233D] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2">
            <Award className="w-4 h-4" />
            <div className="text-[10px] font-bold uppercase tracking-widest">
              Healthcare Award
              <div className="text-[11px] font-display capitalize tracking-normal mt-0.5">
                Ghana Health Summit
              </div>
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
          <span className="text-[#F2C14E] text-[11px] font-bold tracking-[0.22em] uppercase">
            The Story Behind Shobha
          </span>
          <h2 className="mt-4 font-display font-semibold text-white text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            A Company Born From <br className="hidden md:block" />
            Watching People Go Without
          </h2>

          <p className="mt-6 text-white/75 text-[15px] leading-relaxed">
            Some companies are built chasing opportunity. Shobha Healthcare was
            built chasing a problem. A real one — the reality that millions of
            people across Africa, Asia, and the Middle East live with every
            day: the medicine their doctor prescribed is too expensive, too far
            away, or simply unavailable.
          </p>
          <p className="mt-4 text-white/75 text-[15px] leading-relaxed">
            The goal was never to build a big pharma company. The goal was to
            build a useful one. To take decades of pharmaceutical experience and
            point it squarely at the communities that global healthcare too
            often overlooks.
          </p>

          <div className="mt-8 relative pl-6 border-l-2 border-[#F2C14E]">
            <Quote className="absolute -top-2 -left-3 w-6 h-6 text-[#F2C14E] bg-[#12233D]" />
            <p className="text-white text-[17px] md:text-[19px] leading-relaxed font-display font-medium italic">
              "I didn't want to build another pharmaceutical company. I wanted
              to build the kind that actually shows up — in the right markets,
              with the right products, at the right price."
            </p>
          </div>

          <p className="mt-8 text-white/65 text-[14px] leading-relaxed italic">
            "What I care about most is that twenty years from now, there are
            patients in Africa and Asia who got the right medicine because
            Shobha Healthcare was there. That's the legacy I'm building."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
