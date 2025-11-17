"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PatientsSection } from "@/components/PatientsSection";
import { MediaContent } from "@/components/MediaContent";
import { ContactCTA } from "@/components/ContactCTA";
import { AboutPage } from "@/components/AboutPage";
import { ServicesPage } from "@/components/ServicesPage";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const navigateToContact = () => {
    setActiveTab("contact");
  };

  const navigateToServices = () => {
    setActiveTab("services");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Hero onNavigateToContact={navigateToContact} />
            <Services />
            <WhyChooseUs />
            <ContactCTA onNavigateToContact={navigateToContact} />
          </>
        );
      case "services":
        return <ServicesPage onNavigateToContact={navigateToContact} />;
      case "patients":
        return <PatientsSection />;
      case "media":
        return <MediaContent />;
      case "about":
        return <AboutPage onNavigateToContact={navigateToContact} onNavigateToServices={navigateToServices} />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <>
            <Hero onNavigateToContact={navigateToContact} />
            <Services />
            <WhyChooseUs />
            <ContactCTA onNavigateToContact={navigateToContact} />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
      <Footer onNavigate={setActiveTab} />
    </main>
  );
}
