import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FileDown, Phone } from "lucide-react";
import { categories } from "../../../data/pharmaProducts";

// Sub-page body — left sidebar of categories + right product table.
// Matches the hand-drawn wireframe (Image 1): hero on top, then below it
// the screen splits into a left navigation panel (1 highlighted "main"
// card + the other categories as smaller cards) and a wide right area
// showing the full product list for the active category.
export default function PharmaCategoryBody({ category }) {
  if (!category) return null;
  const Icon = category.icon;

  // Determine column headers based on what's available in the products
  // (MDI uses Strength + Meter Dose, others use Form + Pack)
  const isMDI = category.slug === "mdi-inhalers";

  return (
    <section
      data-testid="pharma-category-body"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ── LEFT: Sidebar with category navigation (Image 1 wireframe) ── */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Big highlighted card — the currently active category */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-2xl p-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${category.color} 0%, #12233D 130%)`,
                }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/75 mb-1.5">
                    Currently Viewing
                  </div>
                  <div className="font-display font-semibold text-white text-[18px] leading-tight">
                    {category.name}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2C14E]" />
                    {category.products.length} products in this range
                  </div>
                </div>
              </motion.div>

              {/* Other categories — smaller cards (matches Image 1 wireframe) */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#4B5563] px-1 mb-2">
                  Other Categories
                </div>
                {categories
                  .filter((c) => c.slug !== category.slug)
                  .map((c) => {
                    const ItemIcon = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        to={`/pharmaceuticals/${c.slug}`}
                        data-testid={`pharma-sidebar-${c.slug}`}
                        className="card-hover group flex items-center gap-3 p-3.5 rounded-xl bg-[#F7FAFD] border border-[#E9EEF5] hover:border-[#0738A6]/25"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: c.accent }}
                        >
                          <ItemIcon
                            className="w-5 h-5"
                            style={{ color: c.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-display font-semibold text-[#12233D] text-[13.5px] leading-tight">
                            {c.short}
                          </div>
                          <div className="text-[11px] text-[#4B5563] mt-0.5">
                            {c.products.length} products
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#4B5563] group-hover:text-[#0738A6] transition-colors" />
                      </Link>
                    );
                  })}
              </div>

              {/* Inquire CTA card */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-[#9DCD4A]/10 to-[#62C7F5]/10 border border-[#E9EEF5]">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0738A6] mb-2">
                  Need Documentation?
                </div>
                <p className="text-[13px] text-[#4B5563] leading-relaxed mb-4">
                  COA, MSDS, regulatory dossiers and product brochures
                  available on request.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#0738A6] hover:text-[#052c82]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Request Catalogue
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* ── RIGHT: Main content with the product table ── */}
          <main className="lg:col-span-8 xl:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {/* Heading row */}
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <span className="eyebrow">Full Product List</span>
                  <h2 className="mt-3 font-display font-semibold text-[#12233D] text-xl sm:text-2xl lg:text-[28px] tracking-tight leading-[1.2]">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-[#4B5563] text-[13.5px]">
                    {category.products.length} products · Manufactured to
                    EU-GMP &amp; WHO-GMP standards
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] hover:border-[#0738A6]/25 text-[12.5px] font-semibold text-[#12233D] transition-colors"
                >
                  <FileDown className="w-4 h-4" style={{ color: category.color }} />
                  Request Brochure
                </Link>
              </div>

              {/* Desktop / tablet: full table */}
              <div className="hidden md:block rounded-2xl border border-[#E9EEF5] overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead
                      style={{
                        background: `linear-gradient(90deg, ${category.color} 0%, #12233D 140%)`,
                      }}
                    >
                      <tr className="text-white">
                        <th className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase w-[60px]">
                          S.No
                        </th>
                        <th className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase">
                          Composition
                        </th>
                        <th className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase">
                          {isMDI ? "Strength" : "Form"}
                        </th>
                        <th className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase">
                          {isMDI ? "Meter Dose" : "Pack"}
                        </th>
                        <th className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase">
                          Brand Name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.products.map((p, i) => (
                        <tr
                          key={p.sno}
                          data-testid={`product-row-${p.sno}`}
                          className={`border-t border-[#E9EEF5] transition-colors hover:bg-[#F7FAFD] ${
                            i % 2 === 0 ? "bg-white" : "bg-[#FCFDFE]"
                          }`}
                        >
                          <td className="px-5 py-4 text-[13px] font-semibold text-[#0738A6]">
                            {p.sno}
                          </td>
                          <td className="px-5 py-4 text-[13.5px] text-[#12233D] font-medium leading-snug">
                            {p.composition}
                          </td>
                          <td className="px-5 py-4 text-[13px] text-[#4B5563]">
                            {isMDI ? p.strength : p.form}
                          </td>
                          <td className="px-5 py-4 text-[13px] text-[#4B5563]">
                            {isMDI ? p.meterDose : p.pack}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11.5px] font-bold tracking-wide"
                              style={{
                                background: category.accent,
                                color: category.color,
                              }}
                            >
                              {p.brand}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile: stacked cards (tables don't read well on narrow screens) */}
              <div className="md:hidden space-y-3">
                {category.products.map((p) => (
                  <div
                    key={p.sno}
                    data-testid={`product-card-${p.sno}`}
                    className="rounded-2xl border border-[#E9EEF5] bg-white p-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-bold text-white"
                          style={{ background: category.color }}
                        >
                          {p.sno}
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide"
                          style={{
                            background: category.accent,
                            color: category.color,
                          }}
                        >
                          {p.brand}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-display font-semibold text-[#12233D] text-[14.5px] leading-snug">
                      {p.composition}
                    </h4>
                    <div className="mt-3 pt-3 border-t border-[#E9EEF5] grid grid-cols-2 gap-3 text-[12px]">
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">
                          {isMDI ? "Strength" : "Form"}
                        </div>
                        <div className="text-[#12233D] font-medium">
                          {isMDI ? p.strength : p.form}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">
                          {isMDI ? "Meter Dose" : "Pack"}
                        </div>
                        <div className="text-[#12233D] font-medium">
                          {isMDI ? p.meterDose : p.pack}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom partnership strip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 rounded-2xl p-6 md:p-7 border border-[#E9EEF5] bg-gradient-to-br from-[#F7FAFD] to-white"
              >
                <div className="grid md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-8">
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0738A6] mb-2">
                      Become a Distribution Partner
                    </div>
                    <h3 className="font-display font-semibold text-[#12233D] text-[19px] md:text-[22px] leading-tight">
                      Interested in distributing {category.short.toLowerCase()}{" "}
                      in your market?
                    </h3>
                    <p className="mt-2 text-[#4B5563] text-[13.5px] leading-relaxed">
                      We work with hospitals, distributors and import licence
                      holders across Africa, Asia and the Middle East. Reach
                      out for pricing, registration support and sample
                      requests.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex md:justify-end">
                    <Link to="/contact" className="btn-primary text-[13px]">
                      Partner With Us
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
