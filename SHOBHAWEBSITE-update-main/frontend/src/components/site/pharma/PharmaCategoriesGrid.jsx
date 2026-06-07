import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import {
  Pill, ArrowUpRight, Wind, Shield, Syringe, Microscope, ChevronDown
} from "lucide-react";

const allProducts = [
  // MDI Inhalers
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SAL-BETA", spec: "Salbutamol Inhaler (Non Alcoholic) · 100 mcg/dose · 200 Doses", desc: "Fast-acting bronchodilator for relief of acute asthma and COPD symptoms. Non-alcoholic formulation for better tolerability. Ideal for both adults and children experiencing acute bronchospasm.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi1.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "BUDESON-200", spec: "Budesonide Inhaler · 200 mcg/dose · 200 Doses", desc: "Inhaled corticosteroid for long-term asthma control. Reduces airway inflammation and prevents symptoms. Effective maintenance therapy for persistent asthma across all age groups.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi2.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "BD-ASMA-50 MCG", spec: "Beclometasone Dipropionate · 50 mcg/dose · 200 Doses", desc: "Inhaled corticosteroid for mild asthma maintenance. Three strengths available — clinicians choose the right dose for each patient. CFC-free formulation with consistent lung deposition.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi3.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "BD-ASMA-100 MCG", spec: "Beclometasone Dipropionate · 100 mcg/dose · 200 Doses", desc: "Mid-strength inhaled corticosteroid for moderate asthma maintenance. Part of the BD-ASMA range. Proven reduction in exacerbation frequency with regular use.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi4.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "BD-ASMA-250 MCG", spec: "Beclometasone Dipropionate · 250 mcg/dose · 200 Doses", desc: "Higher-strength inhaled steroid for moderate-to-severe asthma. Proven, reliable, and accessible for long-term management where lower doses are insufficient.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi5.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SAL-Met-F 25+125 MCG", spec: "Salmeterol + Fluticasone · 25+125 mcg · 120 Doses", desc: "Combination long-acting bronchodilator and corticosteroid for persistent asthma and COPD management. Dual action: bronchodilation and anti-inflammatory protection in a single inhaler.", form: "Inhaler", pack: "120 Doses", image: "/brand/mdi6.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SAL-Met-F 25+250 MCG", spec: "Salmeterol + Fluticasone · 25+250 mcg · 120 Doses", desc: "Higher-strength combination inhaler for severe persistent asthma requiring dual bronchodilator and steroid therapy. Suitable for patients uncontrolled on lower-strength combinations.", form: "Inhaler", pack: "120 Doses", image: "/brand/mdi7.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SIMBACORT 6+200 MCG", spec: "Formoterol + Budesonide · 6+200 mcg · 120 Doses", desc: "Dual-action maintenance inhaler combining a long-acting beta-agonist with an inhaled steroid for asthma and COPD. Fast onset of formoterol provides both maintenance and reliever function.", form: "Inhaler", pack: "120 Doses", image: "/brand/mdi8.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SALCORT 50+100 MCG", spec: "Beclometasone + Salbutamol · 50+100 mcg · 200 Doses", desc: "Fixed-dose combination of a corticosteroid and short-acting bronchodilator for asthma maintenance and relief. Convenient single-inhaler approach reduces treatment burden for patients.", form: "Inhaler", pack: "200 Doses", image: "/brand/mdi9.png" },
  { tab: "MDI Inhalers", cat: "MDI Inhaler", color: "#62C7F5", name: "SAL-FP-125 MCG", spec: "Fluticasone Propionate · 125 mcg/dose · 120 Doses", desc: "Potent inhaled corticosteroid for moderate-to-severe asthma. Delivers precise dose with consistent lung deposition. One of the most widely used inhaled steroids globally.", form: "Inhaler", pack: "120 Doses", image: "/brand/mdi10.png" },

  // B-Lactum Antibiotics
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR 625", spec: "Amoxicillin Clavulanic Acid · 625 mg · 2×7 Tablets", desc: "Broad-spectrum antibiotic combination for respiratory, urinary tract, and skin infections. Clavulanate component prevents beta-lactamase resistance, extending coverage to resistant strains.", form: "Tablets", pack: "2×7", image: "/brand/kesar625.png" },
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR 1000", spec: "Amoxicillin Clavulanic Acid · 1000 mg · 2×7 Tablets", desc: "Higher-strength combination antibiotic for severe bacterial infections requiring increased amoxicillin dosing. Recommended for lower respiratory tract infections and complicated UTIs.", form: "Tablets", pack: "2×7", image: "/brand/kesar1000.png" },
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR SYRUP 228.5", spec: "Amoxicillin Clavulanic Acid · 228.5 mg · 70 ml Syrup", desc: "Paediatric oral suspension for bacterial infections. Easy-to-administer syrup form for children requiring amoxicillin-clavulanate therapy. Pleasant taste for improved compliance.", form: "Syrup", pack: "70 ml", image: "/brand/kesar-syrup.png" },
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR 457MG/70 ML", spec: "Amoxicillin Clavulanic Acid · 457 mg · 70 ml Syrup", desc: "Higher-strength paediatric suspension for moderate-to-severe bacterial infections in children. Appropriate for school-age children with community-acquired pneumonia or severe ear infections.", form: "Syrup", pack: "70 ml", image: "/brand/kesar457.png" },
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR-1125", spec: "Amoxicillin Clavulanic Acid · 1125 mg · 16×1 Sachets", desc: "Convenient sachet formulation for patients requiring high-dose amoxicillin-clavulanate therapy with easy compliance. Dissolves quickly in water — suitable for patients who cannot swallow large tablets.", form: "Sachets", pack: "16×1", image: "/brand/kesar1125.png" },
  { tab: "B-Lactum Antibiotics", cat: "Anti Biotics", color: "#9DCD4A", name: "KESAR 562.5", spec: "Amoxicillin Clavulanic Acid · 562.5 mg · 16×1 Sachets", desc: "Sachet-form antibiotic combination for mid-range dosing. Ideal for patients who cannot swallow tablets, with precise dosing and easy preparation in clinic or home settings.", form: "Sachets", pack: "16×1", image: "/brand/kesar562.png" },

  // Injectables
  { tab: "Injectables", cat: "Injectables", color: "#E84D6C", name: "SHOBHA-SUNATE", spec: "Artesunate Injection · 60 MG / 120 MG · Vial", desc: "Fast-acting antimalarial injection for severe and complicated malaria. Proven efficacy against Plasmodium falciparum. WHO-recommended first-line treatment for severe malaria in adults and children.", form: "IV Injection", pack: "Each Vial", image: "/brand/shobha-sunate.png" },
  { tab: "Injectables", cat: "Injectables", color: "#E84D6C", name: "PENTOPAZ", spec: "Pantoprazole Injection · 40 MG · Vial", desc: "IV proton pump inhibitor for stress ulcer prophylaxis and acute gastrointestinal bleeding in hospitalised patients. Rapid onset makes it suitable for emergency and ICU use.", form: "IV Injection", pack: "Each Vial", image: "/brand/pentopaz.png" },
  { tab: "Injectables", cat: "Injectables", color: "#E84D6C", name: "ESOPAZ 40MG", spec: "Esomeprazole Injection · 40 MG · Vial", desc: "Injectable PPI for patients unable to take oral medication. Controls gastric acid secretion effectively in critical care. Proven bioavailability and consistent acid suppression.", form: "IV Injection", pack: "Each Vial", image: "/brand/esopaz.png" },
  { tab: "Injectables", cat: "Injectables", color: "#E84D6C", name: "OMPRA-40 MG", spec: "Omeprazole Injection · 40 MG · Vial", desc: "Parenteral omeprazole for acid-peptic disorders in ICU and post-operative settings where oral therapy is not feasible. Cost-effective IV PPI option with reliable efficacy.", form: "IV Injection", pack: "Each Vial", image: "/brand/ompra.png" },
  { tab: "Injectables", cat: "Injectables", color: "#E84D6C", name: "KERONIM", spec: "Meropenem Injection · 500 MG / 1 GM · Vial", desc: "Broad-spectrum carbapenem antibiotic for life-threatening infections including sepsis, pneumonia, and meningitis. Last-resort antibiotic with activity against multi-drug-resistant organisms.", form: "IV Injection", pack: "Each Vial", image: "/brand/keronim.png" },

  // Oncology
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "PRABOPLATIN", spec: "Carboplatin Injection · 150 mg / 450 mg · Injectable", desc: "Cornerstone chemotherapy for lung, ovarian, and head & neck cancers. IV infusion after dilution. Better tolerated than Cisplatin with comparable efficacy in many tumour types.", form: "IV Infusion", pack: "Each Vial", image: "/brand/Shobhaprabo.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "SHO-PRA", spec: "Cisplatin Injection · 10 MG / 50 MG · Injectable", desc: "One of the most widely used chemotherapy drugs globally — effective against testicular, bladder, lung, and ovarian cancers. The gold standard platinum-based agent in oncology protocols.", form: "IV Infusion", pack: "Each Vial", image: "/brand/shobhashop.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "SIKLESIA", spec: "Hydroxy Urea · 500 mg · 10×10 Capsules", desc: "Cytoreductive therapy for chronic myeloid leukaemia, sickle cell disease, and polycythaemia vera. Oral administration simplifies treatment in resource-limited settings.", form: "Capsules", pack: "10×10", image: "/brand/siklesia.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "PRACITABIN", spec: "Capecitabine Tablets · 500 mg · 10×10", desc: "Oral chemotherapy for breast and colorectal cancers. Easier to administer than IV therapy and equally effective. Prodrug that converts to 5-FU selectively within tumour tissue.", form: "Tablets", pack: "10×10", image: "/brand/shobhaprac.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "METHOTRAX", spec: "Methotrexate Injection · 50 / 500 / 1000 mg", desc: "Antimetabolite chemotherapy for leukaemia, lymphoma, osteosarcoma, and autoimmune conditions at high doses. Decades of clinical evidence and well-established dosing protocols.", form: "IV Injection", pack: "Each Vial", image: "/brand/metalogic.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "TOMAGIFEN", spec: "Tamoxifen Citrate · 10 mg / 20 mg · 10×3 Capsules", desc: "Hormone therapy for ER-positive breast cancer. One of the most established cancer medicines available globally. Used for treatment and prevention in high-risk patients.", form: "Capsules", pack: "10×3", image: "/brand/shobhatoma.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "OTINIB", spec: "Osimertinib Tablets · 40 mg / 80 mg · 30's", desc: "Third-generation EGFR inhibitor for non-small cell lung cancer with T790M mutation. Once-daily targeted therapy with superior CNS penetration compared to earlier EGFR inhibitors.", form: "Tablets", pack: "30's", image: "/brand/otinib.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "PRAZOSIB", spec: "Olaparib Tablets · 150 mg · 30's", desc: "PARP inhibitor for BRCA-mutated ovarian, breast, and prostate cancers. Maintenance therapy after platinum chemotherapy with significant improvement in progression-free survival.", form: "Tablets", pack: "30's", image: "/brand/prazosib.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "SIMLARO", spec: "Ixazomib Capsule · 4 mg · 3 Capsules", desc: "Oral proteasome inhibitor for relapsed/refractory multiple myeloma. Used in combination with lenalidomide and dexamethasone. First oral proteasome inhibitor approved for myeloma.", form: "Capsules", pack: "3 Capsules", image: "/brand/simlaro.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "PRABLOCIB", spec: "Palbociclib Tablets · 125 mg · 21 Capsules", desc: "CDK 4/6 inhibitor for HR-positive, HER2-negative advanced breast cancer. Used in combination with endocrine therapy, showing significantly improved progression-free survival.", form: "Capsules", pack: "21 Capsules", image: "/brand/prablocib.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "DOXACORT", spec: "Doxorubicin Injection · 50 mg IV", desc: "Anthracycline chemotherapy for breast, ovarian, and haematological cancers. Used in multiple combination regimens including AC, CHOP, and ABVD. Proven cornerstone of oncology.", form: "IV Injection", pack: "Each Vial", image: "/brand/doxacort.png" },
  { tab: "Oncology", cat: "Oncology", color: "#0738A6", name: "RITUMAB", spec: "Rituximab Injection · 100 mg/10 ml", desc: "Anti-CD20 monoclonal antibody for B-cell lymphomas, CLL, and rheumatoid arthritis. Targeted biological therapy that depletes CD20-positive B cells with high specificity.", form: "IV Infusion", pack: "Each Vial", image: "/brand/ritumab.png" },

  // Cephalosporins
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "FEEZA-250", spec: "Cefuroxime · 250 mg · 10's Tablets", desc: "Second-generation cephalosporin for upper respiratory, urinary tract, and skin infections. Broad gram-positive and gram-negative coverage with good oral bioavailability.", form: "Tablets", pack: "10's", image: "/brand/feeza250.png" },
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "FEEZA-500", spec: "Cefuroxime · 500 mg · 10's Tablets", desc: "Higher-strength cefuroxime for moderate-to-severe bacterial infections requiring increased dosing. Effective for community-acquired pneumonia and complicated urinary tract infections.", form: "Tablets", pack: "10's", image: "/brand/feeza500.png" },
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "ZORAIGM / 500 MG", spec: "Ceftriaxone INJ · 500 MG / 1 GM · Vial", desc: "Third-generation cephalosporin for serious infections including meningitis, septicaemia, and gonorrhoea. Once-daily dosing due to long half-life improves compliance in hospital settings.", form: "IV/IM Injection", pack: "Each Vial", image: "/brand/zora.png" },
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "KEFBACTUM 1.5", spec: "Ceftriaxone + Sulbactam INJ · 1.5 GM · Vial", desc: "Beta-lactamase inhibitor combination for resistant infections including hospital-acquired pneumonia and sepsis. Sulbactam restores activity against otherwise resistant Acinetobacter and other organisms.", form: "IV Injection", pack: "Each Vial", image: "/brand/kefbactum.png" },
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "KEZIDIME 1GM", spec: "Ceftazidime INJ · 1 GM · Vial", desc: "Third-generation cephalosporin with strong Pseudomonas coverage for severe hospital-acquired infections. Preferred for febrile neutropenia and nosocomial infections in immunocompromised patients.", form: "IV Injection", pack: "Each Vial", image: "/brand/kezidime.png" },
  { tab: "Cephalosporins", cat: "Cephalosporins", color: "#7A1F7A", name: "KEFUROX-750", spec: "Cefuroxime INJ · 750 MG · Vial", desc: "Injectable cefuroxime for peri-operative prophylaxis and serious infections requiring parenteral therapy. Widely used in surgical prophylaxis protocols across orthopaedic and abdominal procedures.", form: "IV/IM Injection", pack: "Each Vial", image: "/brand/kefurox.png" },
];

const tabs = [
  { label: "All Products", key: "All Products", color: "#0738A6", icon: Pill },
  { label: "MDI Inhalers", key: "MDI Inhalers", color: "#62C7F5", icon: Wind },
  { label: "B-Lactum Antibiotics", key: "B-Lactum Antibiotics", color: "#9DCD4A", icon: Shield },
  { label: "Injectables", key: "Injectables", color: "#E84D6C", icon: Syringe },
  { label: "Oncology", key: "Oncology", color: "#0738A6", icon: Microscope },
  { label: "Cephalosporins", key: "Cephalosporins", color: "#7A1F7A", icon: Pill },
];

const PAGE_SIZE = 4;

export default function PharmaCategoriesGrid() {
  const [searchParams] = useSearchParams();
  const sectionRef = useRef(null);

  // Map URL-friendly tab keys to display keys
  const tabKeyMap = {
    "mdi-inhalers": "MDI Inhalers",
    "b-lactum-antibiotics": "B-Lactum Antibiotics",
    "injectables": "Injectables",
    "oncology": "Oncology",
    "cephalosporins": "Cephalosporins",
    "all": "All Products",
  };

  const urlTab = searchParams.get("tab");
  const initialTab = tabKeyMap[urlTab] || "All Products";

  const [active, setActive] = useState(initialTab);
  const [shown, setShown] = useState(PAGE_SIZE);

  // When URL changes (e.g. clicking a category from hero), update tab + scroll
  useEffect(() => {
    const mapped = tabKeyMap[urlTab] || "All Products";
    setActive(mapped);
    setShown(PAGE_SIZE);
    if (urlTab && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlTab]);

  const filtered =
    active === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.tab === active);

  // reset pagination when tab changes
  const handleTab = (key) => {
    setActive(key);
    setShown(PAGE_SIZE);
  };

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <section
      ref={sectionRef}
      data-testid="pharma-categories-grid"
      className="py-16 md:py-20 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#7A1F7A]/[0.05] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Browse the Range</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Explore Each{" "}
              <span className="text-[#0738A6]">Therapeutic Category</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Select a category on the left — each product shows photo,
              composition, strength, form, and brand name.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT: vertical tabs */}
          <div className="lg:w-[230px] xl:w-[250px] flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-1.5">
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.key;
                const count =
                  t.key === "All Products"
                    ? allProducts.length
                    : allProducts.filter((p) => p.tab === t.key).length;
                return (
                  <button
                    key={t.key}
                    onClick={() => handleTab(t.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all ${
                      isActive
                        ? "text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                        : "bg-white border border-[#E9EEF5] text-[#12233D] hover:border-[#0738A6]/30"
                    }`}
                    style={
                      isActive
                        ? { background: `linear-gradient(135deg, ${t.color} 0%, #12233D 160%)` }
                        : {}
                    }
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? "bg-white/20" : ""}`}
                      style={!isActive ? { background: `${t.color}20` } : {}}
                    >
                      <Icon className="w-4 h-4" style={{ color: isActive ? "white" : t.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[13px] font-semibold leading-tight ${isActive ? "text-white" : "text-[#12233D]"}`}>
                        {t.label}
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isActive ? "text-white/70" : "text-[#4B5563]"}`}>
                        {count} products
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: horizontal product cards */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {visible.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="card-hover bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden flex flex-col sm:flex-row"
                  >
                    {/* LEFT: Photo */}
                    <div
                      className="sm:w-[220px] md:w-[260px] flex-shrink-0 relative flex items-center justify-center overflow-hidden"
                      style={{ minHeight: "180px", background: "linear-gradient(135deg, #F7FAFD 0%, #E9EEF5 100%)" }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        style={{ minHeight: "180px" }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback */}
                      <div className="absolute inset-0 items-center justify-center" style={{ display: "none" }}>
                        <Pill className="w-14 h-14 opacity-30" style={{ color: p.color }} />
                      </div>
                      {/* Category badge */}
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                        style={{ background: p.color }}
                      >
                        {p.cat}
                      </span>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-bold text-[#12233D] text-[18px] md:text-[20px] leading-tight">
                          {p.name}
                        </h3>
                        <div className="mt-1.5 text-[12.5px] font-semibold leading-snug" style={{ color: p.color }}>
                          {p.spec}
                        </div>
                        <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                          {p.desc}
                        </p>

                        {/* Extra details row */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] text-[12px] font-semibold text-[#12233D]">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#4B5563]">Form</span>
                            {p.form}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] text-[12px] font-semibold text-[#12233D]">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#4B5563]">Pack</span>
                            {p.pack}
                          </span>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold"
                            style={{ background: `${p.color}18`, color: p.color }}
                          >
                            EU-GMP · WHO-GMP
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                          style={{ color: p.color }}
                        >
                          Enquire Now
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <span className="text-[11px] text-[#4B5563] font-medium">
                          Certified · Tested · Documented
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Show More / Show Less */}
            {filtered.length > PAGE_SIZE && (
              <div className="flex justify-center mt-8 gap-3">
                {hasMore ? (
                  <button
                    onClick={() => setShown((s) => s + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0738A6] text-white font-semibold text-[14px] shadow-[0_8px_24px_rgba(7,56,166,0.25)] hover:opacity-90 transition-all"
                  >
                    Show More Products
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShown(PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0738A6] text-[#0738A6] font-semibold text-[14px] hover:bg-[#0738A6] hover:text-white transition-all"
                  >
                    Show Less
                  </button>
                )}
                <span className="self-center text-[13px] text-[#4B5563]">
                  Showing {Math.min(shown, filtered.length)} of {filtered.length} products
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}