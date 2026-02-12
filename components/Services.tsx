"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bandage, Home, Video, HeartPulse, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Mobile Primary Care",
    description: "Personalized medical care brought directly to your home and place of residence, eliminating transportation needs and ensuring continuity of care."
  },
  {
    icon: Stethoscope,
    title: "Family Medicine",
    description: "Comprehensive primary care services delivered through mobile home visits and virtual consultations for individuals and families of all ages."
  },
  {
    icon: Bandage,
    title: "Wound Care Management",
    description: "Specialized mobile wound evaluation and treatment brought directly to your location to promote faster healing and complication prevention."
  },
  {
    icon: HeartPulse,
    title: "Mental Health Services",
    description: "Compassionate mental health support and psychiatric care delivered via telehealth for improved emotional wellbeing and quality of life."
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Convenient virtual healthcare consultations using modern telehealth technology without leaving home."
  }
];

export function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized mobile and telehealth medical care delivered directly to your home, focusing on family medicine, chronic disease management, preventive health, and expert wound care
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border group hover:border-primary/30 cursor-pointer">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
