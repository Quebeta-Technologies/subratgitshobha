import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import PharmaCategoryHero from "../components/site/pharma/PharmaCategoryHero";
import PharmaCategoryBody from "../components/site/pharma/PharmaCategoryBody";
import ContactSection from "../components/site/ContactSection";
import { getCategoryBySlug } from "../data/pharmaProducts";

export default function PharmaCategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (category) {
      document.title = `${category.name} — Shobha Healthcare`;
    }
  }, [category]);

  // If someone hits an unknown slug, bounce back to the landing page
  if (!category) {
    return <Navigate to="/pharmaceuticals" replace />;
  }

  return (
    <div
      data-testid={`pharma-category-${slug}-page`}
      className="bg-white"
    >
      <Header />
      <PharmaCategoryHero category={category} />
      <PharmaCategoryBody category={category} />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
