import React, { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import AboutHero from "../components/site/about/AboutHero";
import AboutCompanyOverview from "../components/site/about/AboutCompanyOverview";
import AboutVisionMission from "../components/site/about/AboutVisionMission";
import AboutCoreValues from "../components/site/about/AboutCoreValues";
import AboutFounderProfile from "../components/site/about/AboutFounderProfile";
import AboutTeam from "../components/site/about/AboutTeam";

export default function About() {
  // Scroll to top when the page mounts (good UX for SPA route navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "About Us — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="about-page" className="bg-white">
      <Header />
      <AboutHero />
      <AboutCompanyOverview />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutFounderProfile />
      <AboutTeam />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
