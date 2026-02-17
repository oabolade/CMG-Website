"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Video, HeartPulse, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Family Medicine & Primary Care",
    description: "Comprehensive primary care and family medicine delivered directly to your home or via virtual consultations, serving individuals and families of all ages while eliminating transportation barriers."
  },
  {
    icon: Heart,
    title: "Wound Care Management",
    description: "Specialized mobile wound evaluation and treatment brought directly to your location, designed to promote faster healing and complication prevention using evidence-based protocols."
  },
  {
    icon: HeartPulse,
    title: "Mental Health Services",
    description: "Compassionate psychiatric care and mental health support delivered via telehealth to improve emotional wellbeing and quality of life for all patients from the comfort of your home."
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Virtual healthcare consultations using modern telehealth technology to ensure continuity, convenience and compassionate care without leaving home."
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
