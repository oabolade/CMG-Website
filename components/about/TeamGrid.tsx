"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Medical Director",
    credentials: "MD, FACS, CWS",
    bio: "Board-certified surgeon with 15+ years specializing in advanced wound care and diabetic foot management.",
    photo: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Healing is not just science—it's an art of compassion."
  },
  {
    name: "Michael Chen",
    title: "Senior Wound Care Specialist",
    credentials: "RN, CWCN, WCC",
    bio: "Certified wound care nurse with expertise in chronic wound management and patient education.",
    photo: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Every patient deserves personalized care and genuine respect."
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Vascular Specialist",
    credentials: "DO, RPVI, FACOI",
    bio: "Specialist in vascular medicine focusing on circulation-related wound complications.",
    photo: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Understanding the root cause leads to lasting healing."
  },
  {
    name: "James Thompson",
    title: "Physical Therapy Lead",
    credentials: "DPT, CWS, CLT",
    bio: "Physical therapist specializing in mobility restoration and wound prevention strategies.",
    photo: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Movement is medicine—let's get you back on your feet."
  },
  {
    name: "Dr. Aisha Patel",
    title: "Infectious Disease Consultant",
    credentials: "MD, FIDSA",
    bio: "Expert in managing complex wound infections and antimicrobial stewardship.",
    photo: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Precision in treatment, compassion in care."
  },
  {
    name: "Robert Williams",
    title: "Patient Care Coordinator",
    credentials: "BSN, RN, CCM",
    bio: "Dedicated to ensuring seamless care coordination and patient advocacy.",
    photo: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400",
    motto: "Your journey to healing is my priority."
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
