import React, { useEffect, useState } from "react";
import Header from "../components/site/Header";
import HeroCarousel from "../components/site/HeroCarousel";
import TrustStrip from "../components/site/TrustStrip";
import AboutSection from "../components/site/AboutSection";
import WhatWeMake from "../components/site/WhatWeMake";
import ProductRange from "../components/site/ProductRange";
import FounderStory from "../components/site/FounderStory";
import WhatSetsApart from "../components/site/WhatSetsApart";
import QualityProcess from "../components/site/QualityProcess";
import NutraceuticalsSection from "../components/site/NutraceuticalsSection";
import PartnersSection from "../components/site/PartnersSection";
import GhanaNetwork from "../components/site/GhanaNetwork";
import GlobalCountries from "../components/site/GlobalCountries";
import Testimonials from "../components/site/Testimonials";
import ContactSection from "../components/site/ContactSection";
import Footer from "../components/site/Footer";
import { api } from "../lib/api";
import WhatsAppFloat from "../components/site/WhatsAppFloat";

export default function Home() {
  const [content, setContent] = useState(null);

  const defaultSlides = [
    {
      id: 1,
      image_url: "/brand/hero-main.png",
      eyebrow: "WHO-GMP Certified",
      headline: "Good Medicine Should Be Within Everyone's Reach",
      subheadline: "Shobha Healthcare delivers high-quality pharmaceutical products across UAE and global markets.",
      cta_label: "View Products",
      cta_link: "#products"
    },
    {
      id: 2,
      image_url: "/brand/hero-pharma.png",
      eyebrow: "EU-GMP Compliant",
      headline: "Trusted by Clinicians Across the Globe",
      subheadline: "From MDI Inhalers to Oncology — reliable medicines for every patient.",
      cta_label: "Partner With Us",
      cta_link: "#contact"
    },
    {
      id: 3,
      image_url: "/brand/hero-nutra.png",
      eyebrow: "Global Standards",
      headline: "Expanding Access to Quality Healthcare",
      subheadline: "Serving patients across UAE, Ghana, and beyond with trusted pharmaceutical solutions.",
      cta_label: "Our Products",
      cta_link: "#products"
    }
  ];

  const defaultTrustItems = [
    { icon: "countries", label: "Global Presence", value: "4 Continents" },
    { icon: "products", label: "Reach", value: "15+ Countries" },
    { icon: "eugmp", label: "Portfolio", value: "50+ Products" },
    { icon: "who", label: "Legacy", value: "20+ Years" }
  ];

  useEffect(() => {
    api
      .get("/content/homepage")
      .then((r) => setContent(r.data))
      .catch(() => setContent(null));
  }, []);

  return (
    <div data-testid="home-page" className="bg-white">
      <Header />
      <HeroCarousel slides={content?.hero_slides?.length ? content.hero_slides : defaultSlides} />
      <TrustStrip items={content?.trust_strip?.length ? content.trust_strip : defaultTrustItems} />
      <AboutSection />
      <WhatWeMake />
      <ProductRange />
      <FounderStory />
      <WhatSetsApart />
      <QualityProcess />
      <NutraceuticalsSection />
      <PartnersSection />
      <GhanaNetwork />
      <GlobalCountries />
      <Testimonials />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />  {/* ✅ CORRECTLY PLACED HERE */}
    </div>
  );
}