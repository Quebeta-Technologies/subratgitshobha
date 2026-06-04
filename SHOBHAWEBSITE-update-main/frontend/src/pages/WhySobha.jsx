import React, { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import WhySobhaHero from "../components/site/whysobha/WhySobhaHero";
import WhySobhaExpertise from "../components/site/whysobha/WhySobhaExpertise";
import WhatSetsApart from "../components/site/WhatSetsApart";
import WhySobhaQuality from "../components/site/whysobha/WhySobhaQuality";
import WhySobhaIngredients from "../components/site/whysobha/WhySobhaIngredients";
import QualityProcess from "../components/site/QualityProcess";
import WhySobhaVideo from "../components/site/whysobha/WhySobhaVideo";
import WhySobhaCertifications from "../components/site/whysobha/WhySobhaCertifications";

export default function WhySobha() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Why Shobha? — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="whysobha-page" className="bg-white">
      <Header />
      <WhySobhaHero />
      <WhySobhaExpertise />
      <WhySobhaVideo />
      {/* Section 2 — 6 Pillars (reused from home) */}
      <WhatSetsApart />
      <WhySobhaQuality />
      <WhySobhaIngredients />
      {/* Section 5 — Manufacturing Flowchart (reused from home) */}
      <QualityProcess />
      <WhySobhaCertifications />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}