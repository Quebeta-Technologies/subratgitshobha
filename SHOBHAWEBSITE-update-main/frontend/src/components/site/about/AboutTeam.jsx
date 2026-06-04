import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Mail, ArrowUpRight } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const team = [
  {
    photo: "/brand/image2.png",
    color: "#0738A6",
    name: "Mr. Jagdish Maheshwari",
    role: "Founder & CEO",
    desc: "30+ years in pharmaceutical manufacturing and global distribution. Co-founder of Greenwich Therapeutics & United Pharma, Ghana. Drives Shobha's global strategy and partnership vision.",
    tags: ["Strategy", "Partnerships", "Global Distribution"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    photo: "/brand/imagephoto.png",
    color: "#E84D6C",
    name: "Prarthana Maheshwari",
    role: "Business Development & Operations",
    desc: "Leads business development, partner onboarding, and day-to-day operations at Shobha Healthcare. Primary contact for new partnerships and institutional enquiries.",
    tags: ["Business Dev", "Operations", "Partnerships"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    photo: null,
    icon: FlaskConical,
    color: "#7A1F7A",
    bg: "rgba(122,31,122,0.12)",
    name: "Regulatory Affairs Team",
    role: "Regulatory & Compliance",
    desc: "Manages product registrations, import approvals, and compliance documentation across 20+ markets — ensuring every product meets the regulatory requirements of every country we supply.",
    tags: ["Registrations", "Compliance", "20+ Markets"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
];

export default function AboutTeam() {
  return (
    <section
      data-testid="about-team"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.05] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            The People Behind Shobha Healthcare
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Built by people who have spent their careers in pharmaceutical
            manufacturing, distribution, regulatory affairs, and global
            healthcare markets. Decades of hands-on experience in every
            product we make and every partnership we build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.name}
                data-testid={`team-card-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden"
              >
                {/* Top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 z-10"
                  style={{ background: m.color }}
                />

                {/* Photo or icon placeholder */}
                {m.photo ? (
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-56 flex items-center justify-center"
                    style={{ background: m.bg }}
                  >
                    <Icon className="w-16 h-16" style={{ color: m.color }} />
                  </div>
                )}

                {/* Content */}
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-[#12233D] text-lg leading-snug">
                      {m.name}
                    </h3>
                    {m.social?.linkedin && (
                      <a
                        href={m.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:opacity-85 shrink-0"
                        style={{ backgroundColor: "#0A66C2", color: "#fff" }}
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                  <div
                    className="font-semibold text-[11.5px] uppercase tracking-[0.18em] mt-1.5"
                    style={{ color: m.color }}
                  >
                    {m.role}
                  </div>

                  <p className="mt-5 text-[#4B5563] text-[14px] leading-relaxed">
                    {m.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold bg-[#F7FAFD] text-[#4B5563]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white border border-[#E9EEF5] rounded-2xl p-6 md:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0738A6] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0738A6] mb-1">
                Get In Touch
              </div>
              <div className="font-display font-semibold text-[#12233D] text-[15px]">
                Want to partner, distribute, or work with us?
              </div>
            </div>
          </div>
          <a
            href="/#contact"
            data-testid="team-contact-cta"
            className="btn-primary text-[13.5px] !py-3 !px-6 shrink-0"
          >
            Contact Our Team
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}