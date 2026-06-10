import React, { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import NutraHero from "../components/site/nutra/NutraHero";
import NutraIntro from "../components/site/nutra/NutraIntro";
import NutraGallery from "../components/site/nutra/NutraGallery";
import NutraProductsGrid from "../components/site/nutra/NutraProductsGrid";
import ContactSection from "../components/site/ContactSection";

export default function Nutraceuticals() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Nutraceuticals — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="nutraceuticals-page" className="bg-white">
      <Header />
      <NutraHero />
      <NutraIntro />
      <NutraGallery />
      <NutraProductsGrid />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
