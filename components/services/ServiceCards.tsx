"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Stethoscope, Activity, Users, Shield, Home, Pill, Video, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Family Medicine & Primary Care",
    description: "Ongoing medical care for chronic conditions (COPD, HTN, DM etc), annual wellness exams, vaccinations and wellness screenings, and preventative health management delivered on site."
  },
  {
    icon: Home,
    title: "Mobile Primary Care",
    description: "Personalized medical care brought directly to assisted living communities and your home, eliminating transportation needs and ensuring continuity of care."
  },
  {
    icon: Heart,
    title: "Advanced Wound Care",
    description: "Specialized wound evaluation and treatment designed to promote faster healing and complication prevention using evidence-based protocols."
  },
  {
    icon: HeartPulse,
    title: "Mental Health Services",
    description: "Compassionate psychiatric care and mental health support to improve emotional wellbeing and quality of life for all patients."
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Safe and effective medication review, reconciliation and coordination with patient, caregivers, and pharmacies to prevent adverse drug events."
  },
  {
    icon: Video,
    title: "Telehealth Visits",
    description: "Modern telehealth technology combined with in-person visits to ensure continuity, convenience and compassionate care for every patient."
  }
];

export function ServiceCards() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border bg-white group cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
