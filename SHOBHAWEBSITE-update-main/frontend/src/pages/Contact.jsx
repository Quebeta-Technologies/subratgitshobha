import React, { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import ContactHero from "../components/site/contact/ContactHero";
import ContactInfo from "../components/site/contact/ContactInfo";
import ContactForm from "../components/site/contact/ContactForm";
import ContactPartnerCTA from "../components/site/contact/ContactPartnerCTA";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Contact Us — Shobha Healthcare";
  }, []);

  return (
    <div data-testid="contact-page" className="bg-white">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactPartnerCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
