"use client";

import { useRef } from "react";
import { OurStory } from "./about/OurStory";
import { MissionVision } from "./about/MissionVision";
import { TeamGrid } from "./about/TeamGrid";
import { QualityCommitment } from "./about/QualityCommitment";
import { Certifications } from "./about/Certifications";
import { AboutCTA } from "./about/AboutCTA";

interface AboutPageProps {
  onNavigateToContact?: () => void;
  onNavigateToServices?: () => void;
}

export function AboutPage({ onNavigateToContact, onNavigateToServices }: AboutPageProps) {
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <OurStory onNavigateToTeam={scrollToTeam} />
      <MissionVision />
      <div ref={teamRef}>
        <TeamGrid />
      </div>
      <QualityCommitment />
      <Certifications />
      <AboutCTA onNavigateToContact={onNavigateToContact} onNavigateToServices={onNavigateToServices} />
    </div>
  );
}
