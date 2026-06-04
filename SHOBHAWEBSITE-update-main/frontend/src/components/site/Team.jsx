import React from "react";
import { motion } from "framer-motion";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const team = [
  {
    photo: "/brand/imagephoto.png",
    color: "#0738A6",
    name: "Mr. Jagdish Maheshwari",
    role: "Founder & CEO",
    desc: "30+ years in pharmaceutical manufacturing and global distribution. Co-founder of Greenwich Therapeutics & United Pharma, Ghana.",
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
    desc: "Leads business development, partner onboarding, and day-to-day operations. Primary contact for new partnerships.",
    tags: ["Business Dev", "Operations", "Partnerships"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    photo: "/team/regulatory.jpg",
    color: "#7A1F7A",
    name: "Regulatory Affairs Team",
    role: "Regulatory & Compliance",
    desc: "Manages product registrations, import approvals, and compliance documentation across 20+ markets globally.",
    tags: ["Registrations", "Compliance", "20+ Markets"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
];

export default function Team() {
  return (
    <section data-testid="team-section" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            The People Behind Shobha Healthcare
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Built by people who have spent their careers in pharmaceutical
            manufacturing, distribution, regulatory affairs, and global
            healthcare markets. Decades of hands-on experience in every product
            we make and every partnership we build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              data-testid={`team-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden"
              style={{ borderTop: `4px solid ${m.color}` }}
            >
              {/* Photo */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-[#12233D] text-lg">
                  {m.name}
                </h3>
                <div
                  className="font-semibold text-[11px] uppercase tracking-widest mt-1"
                  style={{ color: m.color }}
                >
                  {m.role}
                </div>
                <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                  {m.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#4B5563] bg-[#F1F5F9] border border-[#E9EEF5] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social icons */}
                {m.social && (
                  <div className="mt-5 pt-4 border-t border-[#E9EEF5] flex items-center gap-3">
                    {m.social.linkedin && (
                      <a
                        href={m.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: `${m.color}15`,
                          color: m.color,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = m.color;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${m.color}15`;
                          e.currentTarget.style.color = m.color;
                        }}
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {m.social.instagram && (
                      <a
                        href={m.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: `${m.color}15`,
                          color: m.color,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = m.color;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${m.color}15`;
                          e.currentTarget.style.color = m.color;
                        }}
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                    )}
                    {m.social.facebook && (
                      <a
                        href={m.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: `${m.color}15`,
                          color: m.color,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = m.color;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${m.color}15`;
                          e.currentTarget.style.color = m.color;
                        }}
                        aria-label="Facebook"
                      >
                        <FacebookIcon />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}