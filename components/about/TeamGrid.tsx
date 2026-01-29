"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const teamMembers = [
  {
    name: "Victoria Aroworade",
    title: "Advanced Wound Care Specialist",
    credentials: "FNP, AGACNP-BC, WCS-C",
    bio: "Experienced nurse practitioner specializing in advanced wound care and comprehensive acute care management.",
    photo: "/57c7fe09-6917-4495-a706-92ed76166a84.jpeg",
    motto: "Dedicated to healing and compassionate patient-centered care."
  },
  {
    name: "Patience Okpala",
    title: "Psychiatric Mental Health Specialist",
    credentials: "PMHNP-BC",
    bio: "Board-certified psychiatric mental health nurse practitioner dedicated to holistic mental wellness and patient support.",
    photo: "/85f6415c-83a0-444f-a5cd-dd12ed0ee3c4.jpeg",
    motto: "Mental health is health—treating the whole person."
  },
  {
    name: "Ibukun Akinsola",
    title: "Primary Care & Wound Care Specialist",
    credentials: "FNP-C",
    bio: "Family nurse practitioner with dual expertise in primary care and specialized wound care management.",
    photo: "/b69d7970-ac7f-4862-b903-150ca52623a4.jpeg",
    motto: "Providing personalized care that makes a difference."
  }
];

export function TeamGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated professionals bring decades of combined experience in wound care excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border overflow-hidden group">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-primary/90 flex items-center justify-center p-4"
                        >
                          <p className="text-white text-sm font-medium text-center leading-snug italic">
                            "{member.motto}"
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-2">
                        {member.title}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {member.credentials}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
