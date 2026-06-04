import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Video, Sparkles } from "lucide-react";

/**
 * Replace `VIDEO_EMBED_URL` with a YouTube/Vimeo embed URL when ready.
 * Example YouTube embed: https://www.youtube.com/embed/dQw4w9WgXcQ
 * Example Vimeo embed:   https://player.vimeo.com/video/76979871
 * Leave it null to show the polished placeholder.
 */
const VIDEO_EMBED_URL = null;

export default function WhySobhaVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      data-testid="whysobha-video"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#7A1F7A]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/[0.08] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="eyebrow">See It For Yourself</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Inside Our{" "}
            <span className="text-[#0738A6]">Manufacturing Process</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Words are one thing. Seeing our facilities, our team, and our
            processes in action is another. This short walkthrough shows how
            Shobha Healthcare operates — from the precision of our GMP
            manufacturing floor to the care that goes into every batch we
            release.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video frame */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-video shadow-[0_30px_80px_rgba(7,56,166,0.25)]"
            style={{
              background:
                "linear-gradient(135deg, #12233D 0%, #0738A6 55%, #7A1F7A 100%)",
            }}
          >
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#62C7F5]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />

            {VIDEO_EMBED_URL && playing ? (
              <iframe
                src={`${VIDEO_EMBED_URL}?autoplay=1`}
                title="Shobha Healthcare — Manufacturing Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                {/* Play button */}
                <button
                  onClick={() => VIDEO_EMBED_URL && setPlaying(true)}
                  disabled={!VIDEO_EMBED_URL}
                  aria-label="Play manufacturing video"
                  className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-7 transition-transform hover:scale-105 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 rounded-full bg-white/15 animate-ping opacity-60" />
                  <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/30" />
                  <span className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-[#0738A6] fill-[#0738A6] ml-1" />
                  </span>
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
                  <Video className="w-3.5 h-3.5 text-[#62C7F5]" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                    Manufacturing Walkthrough
                  </span>
                </div>

                <h3 className="font-display font-semibold text-white text-xl md:text-2xl lg:text-[28px] leading-tight max-w-xl">
                  A look inside our EU-GMP &amp; WHO-GMP facilities
                </h3>
                <p className="mt-3 text-white/70 text-[13.5px] md:text-[14.5px] max-w-md leading-relaxed">
                  Featuring a short message from our founder followed by
                  facility footage and quality-control highlights.
                </p>

                {!VIDEO_EMBED_URL && (
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2C14E]/15 border border-[#F2C14E]/30 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#F2C14E]" />
                    <span className="text-[11px] font-semibold text-[#F2C14E]">
                      Video coming soon
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom note */}
          <p className="mt-6 text-center text-[#4B5563] text-[13.5px] italic max-w-2xl mx-auto">
            This is what quality looks like when it is built in from the start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
