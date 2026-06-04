import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pill } from "lucide-react";

const tabs = [
  "All Products",
  "MDI Inhalers",
  "Oncology",
  "Injectables",
];

const products = [
  // ── MDI Inhalers ──────────────────────────────────────
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BD-ASMA 50mcg",
    spec: "Beclometasone Dipropionate · 200 Doses",
    desc: "Inhaled corticosteroid for mild asthma maintenance. Three strengths available — clinicians choose the right dose for each patient.",
    color: "#62C7F5",
    image: "/brand/bd-asma.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BD-ASMA 100mcg",
    spec: "Beclometasone Dipropionate · 200 Doses",
    desc: "Mid-strength inhaled corticosteroid for moderate asthma maintenance. Part of the BD-ASMA range.",
    color: "#62C7F5",
    image: "/brand/bd-asma100.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BD-ASMA 250mcg",
    spec: "Beclometasone Dipropionate · 200 Doses",
    desc: "Higher-strength inhaled steroid for moderate-to-severe asthma. Proven, reliable, and accessible for long-term management.",
    color: "#62C7F5",
    image: "/brand/shobha250.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SAL-BETA 100mcg",
    spec: "Salbutamol Inhaler (Non Alcoholic) · 200 Doses",
    desc: "Fast-acting bronchodilator for relief of acute asthma and COPD symptoms. Non-alcoholic formulation for better tolerability.",
    color: "#62C7F5",
    image: "/brand/sal-beta.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BUDESON-200",
    spec: "Budesonide Inhaler · 200 Doses",
    desc: "Inhaled corticosteroid for long-term asthma control. Reduces airway inflammation and prevents symptoms.",
    color: "#62C7F5",
    image: "/brand/budeson.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SAL-Met-F 25+125mcg",
    spec: "Salmeterol + Fluticasone Inhaler · 120 Doses",
    desc: "Combination long-acting bronchodilator and corticosteroid for persistent asthma and COPD management.",
    color: "#62C7F5",
    image: "/brand/salmet-f125.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SAL-Met-F 25+250mcg",
    spec: "Salmeterol + Fluticasone Inhaler · 120 Doses",
    desc: "Higher-strength combination inhaler for severe persistent asthma requiring dual bronchodilator and steroid therapy.",
    color: "#62C7F5",
    image: "/brand/salmet-f250.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SIMBACORT 6+200mcg",
    spec: "Formoterol + Budesonide Inhaler · 120 Doses",
    desc: "Dual-action maintenance inhaler combining a long-acting beta-agonist with an inhaled steroid for asthma and COPD.",
    color: "#62C7F5",
    image: "/brand/simbacort.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SALCORT 50+100mcg",
    spec: "Beclometasone + Salbutamol Inhaler · 200 Doses",
    desc: "Fixed-dose combination of a corticosteroid and short-acting bronchodilator for asthma maintenance and relief.",
    color: "#62C7F5",
    image: "/brand/salcort.png",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "SAL-FP 125mcg",
    spec: "Fluticasone Propionate Inhaler · 120 Doses",
    desc: "Potent inhaled corticosteroid for moderate-to-severe asthma. Delivers precise dose with consistent lung deposition.",
    color: "#62C7F5",
    image: "/brand/sal-fp.png",
  },

  // ── Oncology ──────────────────────────────────────────
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRABOPLATIN 150mg",
    spec: "Carboplatin Injection BP · 150mg/15ml",
    desc: "Cornerstone chemotherapy for lung, ovarian, and head & neck cancers. IV infusion after dilution.",
    color: "#0738A6",
    image: "/brand/Shobhaprabo.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "SHO-PRA 10mg",
    spec: "Cisplatin Injection BP · 10mg/10ml Vial",
    desc: "One of the most widely used chemotherapy drugs globally — effective against testicular, bladder, lung, and ovarian cancers.",
    color: "#0738A6",
    image: "/brand/shobhashop.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "TOMAGIFEN 20mg",
    spec: "Tamoxifen Citrate Tablets USP · 10×10",
    desc: "Hormone therapy for ER-positive breast cancer. One of the most established cancer medicines available globally.",
    color: "#0738A6",
    image: "/brand/shobhatoma.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRACITABIN 500mg",
    spec: "Capecitabine Tablets USP · 10×10",
    desc: "Oral chemotherapy for breast and colorectal cancers. Easier to administer than IV therapy and equally effective.",
    color: "#0738A6",
    image: "/brand/shobhaprac.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "SIKLESIA",
    spec: "Hydroxyurea 500mg Capsules · 10×10",
    desc: "Cytoreductive therapy for chronic myeloid leukaemia, sickle cell disease, and polycythaemia vera.",
    color: "#0738A6",
    image: "/brand/siklesia.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "METHOTRAX",
    spec: "Methotrexate Injection · 50mg / 500mg / 1000mg",
    desc: "Antimetabolite chemotherapy for leukaemia, lymphoma, osteosarcoma, and autoimmune conditions at high doses.",
    color: "#0738A6",
    image: "/brand/methotrax.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "OTINIB",
    spec: "Osimertinib Tablets · 40mg / 80mg · 30's",
    desc: "Third-generation EGFR inhibitor for non-small cell lung cancer with T790M mutation. Once-daily targeted therapy.",
    color: "#0738A6",
    image: "/brand/otinib.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRAZOSIB",
    spec: "Olaparib Tablets · 150mg · 30's",
    desc: "PARP inhibitor for BRCA-mutated ovarian, breast, and prostate cancers. Maintenance therapy after platinum chemotherapy.",
    color: "#0738A6",
    image: "/brand/prazosib.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "SIMLARO 4mg",
    spec: "Ixazomib Capsules · 3 Capsules",
    desc: "Oral proteasome inhibitor for relapsed/refractory multiple myeloma in combination with lenalidomide and dexamethasone.",
    color: "#0738A6",
    image: "/brand/simlaro.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRABLOCIB 125mg",
    spec: "Palbociclib Tablets · 21 Capsules",
    desc: "CDK 4/6 inhibitor for HR-positive, HER2-negative advanced breast cancer in combination with endocrine therapy.",
    color: "#0738A6",
    image: "/brand/prablocib.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "DOXACORT",
    spec: "Doxorubicin Injection · 50mg IV",
    desc: "Anthracycline chemotherapy for breast, ovarian, and haematological cancers. Used in multiple combination regimens.",
    color: "#0738A6",
    image: "/brand/doxacort.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "RITUMAB",
    spec: "Rituximab Injection · 100mg/10ml",
    desc: "Anti-CD20 monoclonal antibody for B-cell lymphomas, CLL, and rheumatoid arthritis. Targeted biological therapy.",
    color: "#0738A6",
    image: "/brand/ritumab.png",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "GRANITERON",
    spec: "Granisetron Injection · 1mg/1ml",
    desc: "5-HT3 receptor antagonist for prevention of chemotherapy and radiotherapy-induced nausea and vomiting.",
    color: "#0738A6",
    image: "/brand/graniteron.png",
  },

  // ── Biosimilars ───────────────────────────────────────
  {
    cat: "Biosimilars",
    tabKey: "Biosimilars",
    name: "ALBUREL 20% 50ml",
    spec: "Human Normal Albumin 20% · 50ml Vial",
    desc: "Plasma volume expander for hypoalbuminaemia, liver disease, and post-operative fluid management.",
    color: "#1565C0",
    image: "/brand/alburel50.png",
  },
  {
    cat: "Biosimilars",
    tabKey: "Biosimilars",
    name: "ALBUREL 20% 100ml",
    spec: "Human Normal Albumin 20% · 100ml Vial",
    desc: "Larger-volume albumin infusion for critical care settings requiring sustained oncotic pressure support.",
    color: "#1565C0",
    image: "/brand/alburel100.png",
  },
  {
    cat: "Biosimilars",
    tabKey: "Biosimilars",
    name: "RELIGRAST",
    spec: "Filgrastim Injection · 300mcg/0.5ml PFS",
    desc: "Recombinant G-CSF to stimulate neutrophil production in chemotherapy-induced neutropenia and bone marrow disorders.",
    color: "#1565C0",
    image: "/brand/religrast.png",
  },
  {
    cat: "Biosimilars",
    tabKey: "Biosimilars",
    name: "RELIPOIETIN",
    spec: "Erythropoietin Injection · 2000IU / 4000IU PFS",
    desc: "Stimulates red blood cell production for anaemia in chronic kidney disease and chemotherapy patients.",
    color: "#1565C0",
    image: "/brand/relipoietin.png",
  },
  {
    cat: "Biosimilars",
    tabKey: "Biosimilars",
    name: "NOXA-PARIN",
    spec: "Enoxaparin Sodium · 40mg/0.4ml Injection",
    desc: "Low molecular weight heparin for DVT prevention and treatment, and acute coronary syndrome management.",
    color: "#1565C0",
    image: "/brand/noxaparin.png",
  },

  // ── B-Lactum Anti Biotics ─────────────────────────────
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR 625",
    spec: "Amoxicillin + Clavulanic Acid · 2×7 Tablets",
    desc: "Broad-spectrum antibiotic combination for respiratory, urinary, and skin infections. Clavulanate prevents beta-lactamase resistance.",
    color: "#2E7D32",
    image: "/brand/kesar625.png",
  },
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR 1000",
    spec: "Amoxicillin + Clavulanic Acid · 2×7 Tablets",
    desc: "Higher-strength combination antibiotic for severe bacterial infections requiring increased amoxicillin dosing.",
    color: "#2E7D32",
    image: "/brand/kesar1000.png",
  },
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR SYRUP 228.5mg",
    spec: "Amoxicillin + Clavulanic Acid · 70ml Syrup",
    desc: "Paediatric oral suspension for bacterial infections. Easy-to-administer syrup form for children requiring amoxicillin-clavulanate therapy.",
    color: "#2E7D32",
    image: "/brand/kesar-syrup.png",
  },
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR 457mg/70ml",
    spec: "Amoxicillin + Clavulanic Acid · 70ml Syrup",
    desc: "Higher-strength paediatric suspension for moderate-to-severe bacterial infections in children.",
    color: "#2E7D32",
    image: "/brand/kesar457.png",
  },
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR-1125mg",
    spec: "Amoxicillin + Clavulanic Acid · 16×1 Sachets",
    desc: "Convenient sachet formulation for patients requiring high-dose amoxicillin-clavulanate therapy with easy compliance.",
    color: "#2E7D32",
    image: "/brand/kesar1125.png",
  },
  {
    cat: "Anti Biotics",
    tabKey: "Anti Biotics",
    name: "KESAR 562.5mg",
    spec: "Amoxicillin + Clavulanic Acid · 16×1 Sachets",
    desc: "Sachet-form antibiotic combination for mid-range dosing. Ideal for patients who cannot swallow tablets.",
    color: "#2E7D32",
    image: "/brand/kesar562.png",
  },

  // ── Injectables ───────────────────────────────────────
  {
    cat: "Injectables",
    tabKey: "Injectables",
    name: "SHOBHA-SUNATE",
    spec: "Artesunate Injection · 60mg / 120mg Vial",
    desc: "Fast-acting antimalarial injection for severe and complicated malaria. Proven efficacy against Plasmodium falciparum.",
    color: "#C62828",
    image: "/brand/shobha-sunate.png",
  },
  {
    cat: "Injectables",
    tabKey: "Injectables",
    name: "PENTOPAZ",
    spec: "Pantoprazole Injection · 40mg Vial",
    desc: "IV proton pump inhibitor for stress ulcer prophylaxis and acute gastrointestinal bleeding in hospitalised patients.",
    color: "#C62828",
    image: "/brand/pentopaz.png",
  },
  {
    cat: "Injectables",
    tabKey: "Injectables",
    name: "ESOPAZ 40mg",
    spec: "Esomeprazole Injection · 40mg Vial",
    desc: "Injectable PPI for patients unable to take oral medication. Controls gastric acid secretion effectively in critical care.",
    color: "#C62828",
    image: "/brand/esopaz.png",
  },
  {
    cat: "Injectables",
    tabKey: "Injectables",
    name: "OMPRA-40 MG",
    spec: "Omeprazole Injection · 40mg Vial",
    desc: "Parenteral omeprazole for acid-peptic disorders in ICU and post-operative settings where oral therapy is not feasible.",
    color: "#C62828",
    image: "/brand/ompra.png",
  },
  {
    cat: "Injectables",
    tabKey: "Injectables",
    name: "KERONIM",
    spec: "Meropenem Injection · 500mg / 1gm Vial",
    desc: "Broad-spectrum carbapenem antibiotic for life-threatening infections including sepsis, pneumonia, and meningitis.",
    color: "#C62828",
    image: "/brand/keronim.png",
  },

  // ── Cephalosporins ────────────────────────────────────
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "FEEZA-250",
    spec: "Cefuroxime 250mg Tablets · 10's",
    desc: "Second-generation cephalosporin for upper respiratory, urinary tract, and skin infections.",
    color: "#00695C",
    image: "/brand/feeza250.png",
  },
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "FEEZA-500",
    spec: "Cefuroxime 500mg Tablets · 10's",
    desc: "Higher-strength cefuroxime for moderate-to-severe bacterial infections requiring increased dosing.",
    color: "#00695C",
    image: "/brand/feeza500.png",
  },
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "ZORA 500mg / 1gm",
    spec: "Ceftriaxora Injection · 500mg / 1gm Vial",
    desc: "Third-generation cephalosporin for serious infections including meningitis, septicaemia, and gonorrhoea.",
    color: "#00695C",
    image: "/brand/zora.png",
  },
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "KEFBACTUM 1.5",
    spec: "Ceftriaxora + Sulbactam Injection · 1.5gm Vial",
    desc: "Beta-lactamase inhibitor combination for resistant infections including hospital-acquired pneumonia and sepsis.",
    color: "#00695C",
    image: "/brand/kefbactum.png",
  },
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "KEZIDIME 1gm",
    spec: "Ceftazidime Injection · 1gm Vial",
    desc: "Third-generation cephalosporin with strong Pseudomonas coverage for severe hospital-acquired infections.",
    color: "#00695C",
    image: "/brand/kezidime.png",
  },
  {
    cat: "Cephalosporins",
    tabKey: "Cephalosporins",
    name: "KEFUROX-750",
    spec: "Cefuroxime Injection · 750mg Vial",
    desc: "Injectable cefuroxime for peri-operative prophylaxis and serious infections requiring parenteral therapy.",
    color: "#00695C",
    image: "/brand/kefurox.png",
  },
];

export default function ProductRange() {
  const [active, setActive] = useState("All Products");
  const [showAll, setShowAll] = useState(false);

  // ── "Injectables" removed from this list so it now shows ──
  const hiddenCategories = [
    "Biologicals",
    "Biosimilars",
    "Anti Biotics",
    "Cephalosporins",
  ];

  const visibleProducts = products.filter(
    (p) => !hiddenCategories.includes(p.tabKey)
  );

  const filtered =
    active === "All Products"
      ? visibleProducts
      : visibleProducts.filter((p) => p.tabKey === active);

  const displayedProducts =
    active === "All Products" && !showAll
      ? filtered.slice(0, 6)
      : filtered;

  return (
    <section
      id="products"
      data-testid="product-range"
      className="py-12 md:py-16 bg-white"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our Products</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Pharmaceutical Range
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              All pharmaceutical products manufactured to EU-GMP and WHO-GMP
              standards at certified partner facilities. Every batch tested.
              Every product documented.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t}
              data-testid={`product-tab-${t.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(t)}
              className={`px-4 md:px-5 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${
                active === t
                  ? "bg-[#0738A6] text-white shadow-[0_8px_24px_rgba(7,56,166,0.25)]"
                  : "bg-[#F7FAFD] text-[#12233D] hover:bg-[#E9EEF5] border border-[#E9EEF5]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProducts.map((p, i) => (
            <motion.div
              key={p.name}
              data-testid={`product-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-7 flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl mb-5 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F7FAFD] to-[#E9EEF5]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${p.color}1A` }}
                  >
                    <Pill className="w-9 h-9" style={{ color: p.color }} />
                  </div>
                )}
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                  style={{ background: p.color }}
                >
                  {p.cat}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-[17px] leading-tight">
                {p.name}
              </h3>
              <div className="mt-1 text-[12px] text-[#0738A6] font-semibold">
                {p.spec}
              </div>
              <p className="mt-3 text-[#4B5563] text-[13.5px] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {active === "All Products" && filtered.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-[#0738A6] text-white font-semibold shadow-[0_8px_24px_rgba(7,56,166,0.25)] hover:opacity-90 transition-all"
            >
              {showAll ? "Show Less" : "View More Products"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}