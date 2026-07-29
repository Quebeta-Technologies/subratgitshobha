// ─────────────────────────────────────────────────────────────────────────────
// Shobha Healthcare — Pharmaceutical Product Catalogue
// Single source of truth for all 5 categories + product rows.
// Used by /pharmaceuticals and /pharmaceuticals/:slug sub-pages.
// ─────────────────────────────────────────────────────────────────────────────

import {
  Wind,
  Pill,
  Syringe,
  Microscope,
  Shield,
} from "lucide-react";

export const categories = [
  {
    slug: "mdi-inhalers",
    name: "Metered Dose Inhalers",
    short: "MDI Inhalers",
    eyebrow: "Category 01",
    tagline: "Respiratory Care",
    icon: Wind,
    color: "#62C7F5",
    accent: "rgba(98,199,245,0.12)",
    headline: "Breath by Breath — Respiratory Care You Can Rely On",
    description:
      "A complete portfolio of metered dose inhalers covering asthma, COPD and combination therapy. Manufactured under strict respiratory-grade conditions with precise dose delivery, every canister.",
    products: [
      {
        sno: 1,
        composition: "Salbutamol Inhaler (Non Alcoholic)",
        strength: "100 mcg/dose",
        meterDose: "200",
        brand: "SAL-BETA",
      },
      {
        sno: 2,
        composition: "Budesonide Inhaler",
        strength: "200 mcg/dose",
        meterDose: "200",
        brand: "BUDESON-200",
      },
      {
        sno: 3,
        composition: "Beclometasone Dipropionate Inhaler",
        strength: "50 mcg/dose",
        meterDose: "200",
        brand: "BD-ASMA-50 MCG",
      },
      {
        sno: 4,
        composition: "Beclometasone Dipropionate Inhaler",
        strength: "100 mcg/dose",
        meterDose: "200",
        brand: "BD-ASMA-100 MCG",
      },
      {
        sno: 5,
        composition: "Beclometasone Dipropionate Inhaler",
        strength: "250 mcg/dose",
        meterDose: "200",
        brand: "BD-ASMA-250 MCG",
      },
      {
        sno: 6,
        composition: "Salmeterol + Fluticasone Inhaler",
        strength: "25 + 125",
        meterDose: "120",
        brand: "SAL-Met-F 25+125 MCG",
      },
      {
        sno: 7,
        composition: "Salmeterol + Fluticasone Inhaler",
        strength: "25 + 250",
        meterDose: "120",
        brand: "SAL-Met-F 25+250 MCG",
      },
      {
        sno: 8,
        composition: "Formoterol + Budesonide Inhaler",
        strength: "6 + 200",
        meterDose: "120",
        brand: "SYMFORA 6+200 MCG",
      },
      {
        sno: 9,
        composition: "Beclometasone + Salbutamol Inhaler",
        strength: "50 + 100",
        meterDose: "200",
        brand: "SALCORT 50+100 MCG",
      },
      {
        sno: 10,
        composition: "Fluticasone Propionate Inhaler",
        strength: "125 mcg/dose",
        meterDose: "120",
        brand: "SAL-FP-125 MCG",
      },
    ],
  },

  {
    slug: "b-lactum-antibiotics",
    name: "B-Lactum Anti Biotics",
    short: "B-Lactum Antibiotics",
    eyebrow: "Category 02",
    tagline: "Broad-Spectrum Antibacterials",
    icon: Shield,
    color: "#9DCD4A",
    accent: "rgba(157,205,74,0.15)",
    headline: "Tested Antibiotics for the Infections That Won't Wait",
    description:
      "Amoxicillin-Clavulanic Acid in tablets, syrups and sachets — full dosage flexibility for adults, children and severe infections. Bioequivalent formulations manufactured to EU-GMP standards.",
    products: [
      {
        sno: 11,
        composition: "Amoxicillin Clavulanic Acid 625 mg",
        form: "Tablets",
        pack: "2 x 7",
        brand: "KESAR 625",
      },
      {
        sno: 12,
        composition: "Amoxicillin Clavulanic Acid 1000 mg",
        form: "Tablets",
        pack: "2 x 7",
        brand: "KESAR 1000",
      },
      {
        sno: 13,
        composition: "Amoxicillin Clavulanic Acid Syrup 228.5 mg / 70 ml",
        form: "Syrup",
        pack: "70 ml",
        brand: "KESAR SYRUP 228.5",
      },
      {
        sno: 14,
        composition: "Amoxicillin Clavulanic Acid 457 mg / 70 ml",
        form: "Syrup",
        pack: "70 ml",
        brand: "KESAR 457MG/70 ML",
      },
      {
        sno: 15,
        composition: "Amoxicillin Clavulanic Acid 1125 mg Sachets",
        form: "Sachets",
        pack: "16 x 1",
        brand: "KESAR-1125",
      },
      {
        sno: 16,
        composition: "Amoxicillin Clavulanic Acid 562.5 mg Sachets",
        form: "Sachets",
        pack: "16 x 1",
        brand: "KESAR 562.5",
      },
    ],
  },

  {
    slug: "injectables",
    name: "Injectables",
    short: "Injectables",
    eyebrow: "Category 03",
    tagline: "Critical & Hospital Care",
    icon: Syringe,
    color: "#E84D6C",
    accent: "rgba(232,77,108,0.12)",
    headline: "Hospital-Grade Injectables for Critical Moments",
    description:
      "Sterile injectables for emergency, ICU and acute care — from antimalarials and proton pump inhibitors to broad-spectrum carbapenem antibiotics. Filled and finished under cleanroom conditions.",
    products: [
      {
        sno: 17,
        composition: "ARTESUNATE INJ. 60 MG, 120 MG",
        form: "VIAL",
        pack: "Each",
        brand: "SHOBHA-SUNATE",
      },
      {
        sno: 18,
        composition: "PANTOPRAZOLE INJ. 40 MG",
        form: "VIAL",
        pack: "Each",
        brand: "PENTOPAZ",
      },
      {
        sno: 19,
        composition: "ESOMEPRAZOLE INJ. 40 MG",
        form: "VIAL",
        pack: "Each",
        brand: "ESOPAZ 40MG",
      },
      {
        sno: 20,
        composition: "OMEPRAZOLE INJ. 40 MG",
        form: "VIAL",
        pack: "Each",
        brand: "OMPRA-40 MG",
      },
      {
        sno: 21,
        composition: "MEROPENEM INJ. 500 MG, 1 GM",
        form: "VIAL",
        pack: "Each",
        brand: "KERONIM",
      },
    ],
  },

  {
    slug: "oncology",
    name: "Oncology — Anti Cancer",
    short: "Oncology",
    eyebrow: "Category 04",
    tagline: "Anti-Cancer Therapy",
    icon: Microscope,
    color: "#0738A6",
    accent: "rgba(7,56,166,0.10)",
    headline: "Cancer Care Built Around Real Patient Outcomes",
    description:
      "A comprehensive oncology portfolio — from cornerstone cytotoxics like Carboplatin and Cisplatin to next-generation targeted therapies including Osimertinib, Olaparib, Palbociclib and the monoclonal antibody Rituximab.",
    products: [
      {
        sno: 27,
        composition: "Carboplatin Injection 150 mg / 450 mg",
        form: "Injectable",
        pack: "Each",
        brand: "PRABOPLATIN",
      },
      {
        sno: 28,
        composition: "Cisplatin Injection 10 MG / 50 MG",
        form: "Injectable",
        pack: "Each",
        brand: "SHO-PRA",
      },
      {
        sno: 29,
        composition: "Hydroxy Urea 500 mg Tab",
        form: "Capsules",
        pack: "10 x 10's",
        brand: "SIKLESIA",
      },
      {
        sno: 30,
        composition: "Capecitabine 500 mg",
        form: "Tablets",
        pack: "10 x 10's",
        brand: "PRACITABIN",
      },
      {
        sno: 31,
        composition: "Methotrexate Injection 50 / 500 / 1000 / 20 ml",
        form: "Injectable",
        pack: "Each",
        brand: "METHOTRAX",
      },
      {
        sno: 32,
        composition: "Tamoxifen Citrate 10 mg / 20 mg",
        form: "Capsules",
        pack: "10 x 3",
        brand: "TOMAGIFEN",
      },
      {
        sno: 33,
        composition: "Osimertinib Tablets 40 mg / 80 mg",
        form: "Tablets",
        pack: "30's",
        brand: "OTINIB",
      },
      {
        sno: 34,
        composition: "Olaparib Tablets 150 mg",
        form: "Tablets",
        pack: "30's",
        brand: "PRAZOSIB",
      },
      {
        sno: 35,
        composition: "Ixazomib Capsule 4 mg",
        form: "Capsules",
        pack: "3 Capsules",
        brand: "SIMLARO",
      },
      {
        sno: 36,
        composition: "Palbociclib Tablets 125 mg",
        form: "Capsules",
        pack: "21 Capsules",
        brand: "PRABLOCIB",
      },
      {
        sno: 37,
        composition: "Doxorubicin Injection 50 mg Intravenous",
        form: "Injectable",
        pack: "Each",
        brand: "DOXACORT",
      },
      {
        sno: 38,
        composition: "Rituximab Injection 100 mg / 10 ml",
        form: "Injectable",
        pack: "Each",
        brand: "RITUMAB",
      },
    ],
  },

  {
    slug: "cephalosporins",
    name: "Cephalosporins",
    short: "Cephalosporins",
    eyebrow: "Category 05",
    tagline: "2nd & 3rd Generation Cephalosporins",
    icon: Pill,
    color: "#7A1F7A",
    accent: "rgba(122,31,122,0.12)",
    headline: "Cephalosporins for the Toughest Bacterial Infections",
    description:
      "From 2nd-generation Cefuroxime to potent 3rd-generation Ceftriaxone and Ceftazidime — oral and IV forms for community to hospital-acquired infections. Sulbactam combinations available for resistant strains.",
    products: [
      {
        sno: 39,
        composition: "Cefuroxime Cap Tab",
        form: "Tablets",
        pack: "10's",
        brand: "FEEZA-250",
      },
      {
        sno: 40,
        composition: "Cefuroxime Tab 500 mg",
        form: "Tablets",
        pack: "10's",
        brand: "FEEZA-500",
      },
      {
        sno: 41,
        composition: "CEFTRIAXONE INJ 500 MG, 1 GM",
        form: "VIAL",
        pack: "Each",
        brand: "ZORAIGM / 500 MG",
      },
      {
        sno: 42,
        composition: "CEFTRIAXONE + SULBACTAM INJ 1.5 GM",
        form: "VIAL",
        pack: "Each",
        brand: "KEFBACTUM 1.5",
      },
      {
        sno: 43,
        composition: "CEFTAZIDIME INJ 1 GM",
        form: "VIAL",
        pack: "Each",
        brand: "KEZIDIME 1GM",
      },
      {
        sno: 44,
        composition: "CEFUROXIME INJ. 750 MG",
        form: "VIAL",
        pack: "Each",
        brand: "KEFUROX-750",
      },
    ],
  },
];

// Quick lookup helper for sub-page routing
export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);

// Total product count for headline strip
export const totalProducts = categories.reduce(
  (sum, c) => sum + c.products.length,
  0
);
