"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, HeartHandshake, UserCheck, Hospital } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced & Licensed Providers",
    description: "Our team consists of board-certified specialists with expertise in family medicine and advanced wound care"
  },
  {
    icon: Users,
    title: "On-Site Visits (No Transportation Needed)",
    description: "We bring care directly to you at assisted living facilities or your home, eliminating transportation barriers"
  },
  {
    icon: Hospital,
    title: "Reduced ER & Hospital Visits",
    description: "Consistent on-site healthcare helps prevent unnecessary hospitalizations and emergency room visits"
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Individualized treatment plans tailored to your specific health needs and circumstances"
  },
  {
    icon: UserCheck,
    title: "Team Collaboration",
    description: "We work closely with family members, facility staff, and specialists to ensure comprehensive care coordination"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Choose Crown's Medical Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence in mobile family practice and advanced wound care backed by experience, technology, and genuine compassion
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
