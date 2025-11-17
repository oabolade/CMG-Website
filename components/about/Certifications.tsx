"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ShieldCheck, Stethoscope, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    name: "Joint Commission Accredited",
    description: "Nationally recognized symbol of quality"
  },
  {
    icon: Award,
    name: "ABWM Board Certified",
    description: "American Board of Wound Management"
  },
  {
    icon: Stethoscope,
    name: "Wound Care Association",
    description: "Member of National WCA"
  },
  {
    icon: CheckCircle,
    name: "CMS Certified",
    description: "Centers for Medicare & Medicaid Services"
  },
  {
    icon: Award,
    name: "WOCN Certified",
    description: "Wound, Ostomy and Continence Nursing"
  },
  {
    icon: ShieldCheck,
    name: "HIPAA Compliant",
    description: "Full compliance with privacy standards"
  }
];

export function Certifications() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Certifications & Affiliations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence through prestigious industry certifications and memberships
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Our certifications and affiliations reflect our dedication to maintaining the
              highest standards of care. We continuously invest in professional development,
              ensuring our team stays at the forefront of wound care innovation and best practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
