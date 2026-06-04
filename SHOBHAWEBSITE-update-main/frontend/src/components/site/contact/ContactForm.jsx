import React, { useState } from "react";
import { motion } from "framer-motion";
import { api, formatApiError } from "../../../lib/api";
import {
  Loader2,
  Send,
  CheckCircle2,
  Mail,
  User,
  Building2,
  Phone,
  Globe,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";

const I_AM_A_OPTIONS = [
  "Distributor",
  "Hospital / Healthcare Institution",
  "Pharmaceutical Company",
  "Investor / Partner",
  "Other",
];

const PRODUCT_INTERESTS = [
  { id: "mdi", label: "MDI Inhalers" },
  { id: "oncology", label: "Oncology" },
  { id: "critical", label: "Critical Care" },
  { id: "biologicals", label: "Biologicals" },
  { id: "nutraceuticals", label: "Nutraceuticals" },
  { id: "full", label: "Full Product Range" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    inquiry_type: I_AM_A_OPTIONS[0],
    products: [],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const toggleProduct = (id) => {
    setForm((f) => ({
      ...f,
      products: f.products.includes(id)
        ? f.products.filter((p) => p !== id)
        : [...f.products, id],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Combine product interests into the message so backend doesn't need a schema change
      const interestedProducts = form.products
        .map((id) => PRODUCT_INTERESTS.find((p) => p.id === id)?.label)
        .filter(Boolean)
        .join(", ");

      const messageWithProducts = interestedProducts
        ? `Products of interest: ${interestedProducts}\n\n${form.message}`
        : form.message;

      await api.post("/inquiries", {
        name: form.name,
        company: form.company,
        country: form.country,
        email: form.email,
        phone: form.phone,
        inquiry_type: form.inquiry_type,
        message: messageWithProducts,
      });
      setSubmitted(true);
      toast.success("Thank you. Our team will be in touch within 24 hours.");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      data-testid="contact-form-section"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/[0.08] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — heading + assurance */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">Enquiry Form</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Send Us a{" "}
              <span className="text-[#0738A6]">Message</span>
            </h2>
            <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
              Tell us a little about what you are looking for and we will come
              back to you within 24 hours.
            </p>

            {/* Assurance card */}
            <div className="mt-8 bg-white border border-[#E9EEF5] rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#9DCD4A]/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#5e8722]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#12233D] text-[14.5px]">
                    24-hour response
                  </div>
                  <div className="text-[#4B5563] text-[13px] leading-relaxed mt-0.5">
                    All serious enquiries receive a reply within one working
                    day.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0738A6]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0738A6]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#12233D] text-[14.5px]">
                    Direct to our team
                  </div>
                  <div className="text-[#4B5563] text-[13px] leading-relaxed mt-0.5">
                    Your message goes straight to our business development
                    team. No call centres.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E84D6C]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#E84D6C]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#12233D] text-[14.5px]">
                    Confidential
                  </div>
                  <div className="text-[#4B5563] text-[13px] leading-relaxed mt-0.5">
                    We treat partnership and procurement enquiries with full
                    confidentiality.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
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
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#9DCD4A]/15 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-9 h-9 text-[#9DCD4A]" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-[#12233D]">
                    Enquiry received
                  </h3>
                  <p className="mt-3 text-[#4B5563] max-w-md mx-auto">
                    Thank you for reaching out. A member of our partnership
                    team will respond within one working day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        country: "",
                        inquiry_type: I_AM_A_OPTIONS[0],
                        products: [],
                        message: "",
                      });
                    }}
                    className="mt-8 btn-secondary"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="space-y-6"
                  data-testid="contact-form"
                >
                  {/* Row 1 — Name + Company */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      icon={User}
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      testid="input-name"
                    />
                    <Field
                      label="Company Name"
                      name="company"
                      icon={Building2}
                      placeholder="Your company or organisation"
                      value={form.company}
                      onChange={update("company")}
                      testid="input-company"
                    />
                  </div>

                  {/* Row 2 — Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      icon={Mail}
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={update("email")}
                      testid="input-email"
                    />
                    <Field
                      label="Phone Number"
                      name="phone"
                      icon={Phone}
                      placeholder="+971 or your country code"
                      value={form.phone}
                      onChange={update("phone")}
                      testid="input-phone"
                    />
                  </div>

                  {/* Row 3 — Country + I Am A */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field
                      label="Country"
                      name="country"
                      icon={Globe}
                      placeholder="Where are you based?"
                      value={form.country}
                      onChange={update("country")}
                      testid="input-country"
                    />
                    <div>
                      <label className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                        <Briefcase className="w-3.5 h-3.5 text-[#0738A6]" />
                        I Am A <span className="text-[#E84D6C]">*</span>
                      </label>
                      <select
                        name="inquiry_type"
                        data-testid="input-inquiry-type"
                        value={form.inquiry_type}
                        onChange={update("inquiry_type")}
                        className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all text-[14px]"
                      >
                        {I_AM_A_OPTIONS.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product checkboxes */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-3">
                      Products I'm Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {PRODUCT_INTERESTS.map((p) => {
                        const checked = form.products.includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => toggleProduct(p.id)}
                            data-testid={`product-${p.id}`}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-all text-[13px] font-medium ${
                              checked
                                ? "bg-[#0738A6]/[0.08] border-[#0738A6]/40 text-[#0738A6]"
                                : "bg-white border-[#E9EEF5] text-[#4B5563] hover:border-[#0738A6]/30 hover:bg-[#F7FAFD]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                                checked
                                  ? "bg-[#0738A6] border-[#0738A6]"
                                  : "bg-white border-[#E9EEF5]"
                              }`}
                            >
                              {checked && (
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              )}
                            </span>
                            {p.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
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
                      className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all resize-y text-[14px]"
                      placeholder="Tell us about your market and what you are looking for. The more detail, the faster we can help."
                    />
                  </div>

                  {/* Submit row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E9EEF5]">
                    <p className="text-[12px] text-[#4B5563] max-w-md leading-relaxed">
                      By submitting, you agree to be contacted by Shobha
                      Healthcare regarding your enquiry. Product availability
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
                          Send Enquiry
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
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  icon: Icon,
  placeholder,
  required,
  value,
  onChange,
  testid,
}) {
  const id = `field-${name || testid || label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2"
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-[#0738A6]" />}
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
        placeholder={placeholder}
        className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all text-[14px]"
      />
    </div>
  );
}
