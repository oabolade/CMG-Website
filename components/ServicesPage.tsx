"use client";

import { ServicesHero } from "./services/ServicesHero";
import { ServiceCards } from "./services/ServiceCards";
import { ConditionsTreated } from "./services/ConditionsTreated";
import { OurProcess } from "./services/OurProcess";
import { ContactCTA } from "./ContactCTA";

interface ServicesPageProps {
  onNavigateToContact?: () => void;
}

export function ServicesPage({ onNavigateToContact }: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServiceCards />
      <div className="h-px bg-border" style={{ backgroundColor: "#e5e7eb" }} />
      <ConditionsTreated />
      <div className="h-px bg-border" style={{ backgroundColor: "#e5e7eb" }} />
      <OurProcess />
      <ContactCTA onNavigateToContact={onNavigateToContact} />
    </div>
  );
}
