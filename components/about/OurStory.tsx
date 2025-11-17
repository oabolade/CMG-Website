"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface OurStoryProps {
  onNavigateToTeam: () => void;
}

export function OurStory({ onNavigateToTeam }: OurStoryProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full mx-auto" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-center mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 2025, Crowns Medical Group was born from a simple yet powerful vision:
              to bring high quality and compassionate mobile family practice and advanced wound care services
              to patients in assisted living communities and your home. We recognized that patients deserve
              royal care that honors their dignity, addresses their unique needs, and supports their complete
              health and healing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team delivers personalized medical care focusing on family medicine, chronic disease management,
              preventive health, medication oversight and expert wound care. We combine modern telehealth technology
              with in-person visits to ensure continuity, convenience and compassionate care for every patient.
              These values guide every decision we make and every interaction we have with our patients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we stand as a trusted partner in healthcare, bringing together a team of experienced and licensed
              providers who share our commitment to providing royal care. Our goal is simple: to keep residents healthy,
              reduce unnecessary hospital visits, and improve quality of life through consistent on-site healthcare.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={onNavigateToTeam}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 py-6 h-auto font-semibold group"
              aria-label="Meet our team members"
            >
              Meet Our Team
              <ArrowRight
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
