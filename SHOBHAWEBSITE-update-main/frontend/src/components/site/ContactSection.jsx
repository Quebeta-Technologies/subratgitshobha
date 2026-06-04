import React, { useState } from "react";
import { motion } from "framer-motion";
import { api, formatApiError } from "../../lib/api";
import { Loader2, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const INQUIRY_TYPES = [
  "Partner With Us",
  "Business Enquiries",
  "Regulatory Support",
  "Distribution",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    inquiry_type: "Partner With Us",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/inquiries", form);
      setSubmitted(true);
      toast.success("Thank you. Our team will be in touch shortly.");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Final CTA band */}
      <section
        data-testid="final-cta-band"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #0738A6 0%, #7A1F7A 55%, #9DCD4A 100%)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#62C7F5]/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F2C14E]/20 blur-3xl" />
        <div className="container-x relative py-12 md:py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display font-semibold text-white text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
              Looking for a Trusted Pharmaceutical Partner?
            </h2>
            <p className="mt-5 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              Whether you are seeking distribution support, institutional
              supply, export collaboration, or a specialist therapeutic
              portfolio for your market, Shobha Healthcare is ready to work
              with you.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <a
              data-testid="band-cta-partner"
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0738A6] font-semibold rounded-full px-6 py-3.5 hover:bg-[#F7FAFD] transition-all"
            >
              Partner With Us <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              data-testid="band-cta-contact"
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/70 text-white font-semibold rounded-full px-6 py-3.5 hover:bg-white/10 transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact"
        data-testid="contact-section"
        className="py-12 md:py-16 bg-[#F7FAFD]"
      >
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-[#12233D] tracking-tight leading-[1.1]">
              Let's Build a Healthcare Partnership Together
            </h2>
            <p className="mt-5 text-[#4B5563] leading-relaxed">
              Share your distribution, institutional supply, or export
              collaboration needs. Our team responds within one business day.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow
                label="Headquarters"
                value="Dubai, United Arab Emirates"
              />
              <ContactRow
                label="Phone"
                value="+971 58 593 7521"
                href="tel:+971585937521"
              />
              <ContactRow
                label="Email"
                value="admin@shobha-healthcare.com"
                href="mailto:admin@shobha-healthcare.com"
              />
              <ContactRow
                label="Hours"
                value="Monday to Friday · 9:00 AM – 6:00 PM"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 shadow-[0_24px_60px_rgba(7,56,166,0.08)]">
              {submitted ? (
                <div
                  data-testid="contact-success"
                  className="py-12 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#9DCD4A] mx-auto mb-5" />
                  <h3 className="font-display font-semibold text-2xl text-[#12233D]">
                    Inquiry received
                  </h3>
                  <p className="mt-3 text-[#4B5563] max-w-md mx-auto">
                    Thank you for reaching out. A member of our partnership
                    team will respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        company: "",
                        country: "",
                        email: "",
                        phone: "",
                        inquiry_type: "Partner With Us",
                        message: "",
                      });
                    }}
                    className="mt-8 btn-secondary"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  data-testid="contact-form"
                >
                  <Field
                    label="Full Name"
                    name="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    testid="input-name"
                  />
                  <Field
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={update("company")}
                    testid="input-company"
                  />
                  <Field
                    label="Country"
                    name="country"
                    value={form.country}
                    onChange={update("country")}
                    testid="input-country"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    testid="input-email"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={update("phone")}
                    testid="input-phone"
                  />
                  <div>
                    <label className="block text-[12px] font-semibold tracking-wide uppercase text-[#12233D]/70 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiry_type"
                      data-testid="input-inquiry-type"
                      value={form.inquiry_type}
                      onChange={update("inquiry_type")}
                      className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all"
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[12px] font-semibold tracking-wide uppercase text-[#12233D]/70 mb-2">
                      Message <span className="text-[#E84D6C]">*</span>
                    </label>
                    <textarea
                      name="message"
                      data-testid="input-message"
                      required
                      minLength={10}
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all resize-y"
                      placeholder="Tell us about your market, your distribution needs, and the therapeutic categories you're interested in."
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-3">
                    <p className="text-[12px] text-[#4B5563] max-w-md">
                      By submitting, you agree to be contacted by Shobha
                      Healthcare regarding your inquiry. Product availability
                      may vary by country.
                    </p>
                    <button
                      data-testid="contact-submit"
                      type="submit"
                      disabled={submitting}
                      className="btn-primary disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value, href }) {
  const inner = (
    <div>
      <div className="text-[11px] font-semibold tracking-widest uppercase text-[#4B5563]">
        {label}
      </div>
      <div className="mt-1 text-[#12233D] font-display font-medium text-lg">
        {value}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({ label, name, type = "text", required, value, onChange, testid }) {
  const id = `field-${name || testid || label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[12px] font-semibold tracking-wide uppercase text-[#12233D]/70 mb-2"
      >
        {label} {required && <span className="text-[#E84D6C]">*</span>}
      </label>
      <input
        id={id}
        name={name}
        data-testid={testid}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}
