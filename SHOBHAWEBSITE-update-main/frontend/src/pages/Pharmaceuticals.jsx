import React, { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import PharmaHero from "../components/site/pharma/PharmaHero";
import PharmaIntro from "../components/site/pharma/PharmaIntro";
import PharmaCategoriesGrid from "../components/site/pharma/PharmaCategoriesGrid";
import ContactSection from "../components/site/ContactSection";

export default function Pharmaceuticals() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Pharmaceuticals — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="pharmaceuticals-page" className="bg-white">
      <Header />
      <PharmaHero />
      <PharmaIntro />
      <PharmaCategoriesGrid />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
