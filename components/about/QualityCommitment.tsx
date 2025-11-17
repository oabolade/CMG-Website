"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star, Heart } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "10+",
    label: "Years of Professional Experience",
    color: "text-primary"
  },
  {
    icon: Star,
    value: "98%",
    label: "Patient Satisfaction Rate",
    color: "text-secondary"
  },
  {
    icon: Users,
    value: "6+",
    label: "Certified Healthcare Professionals",
    color: "text-primary"
  },
  {
    icon: Heart,
    value: "2,300+",
    label: "Patients Successfully Treated",
    color: "text-secondary"
  }
];

export function QualityCommitment() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Commitment to Quality
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            At Crowns Medical Group, quality isn't just a goal—it's our foundation. Since our
            inception, we have maintained an unwavering commitment to delivering the highest
            standard of care in the wound care industry. Our track record speaks for itself,
            built on years of clinical excellence, continuous innovation, and an absolute
            dedication to patient outcomes. Every member of our team is certified, experienced,
            and passionate about advancing wound care through evidence-based practices and
            compassionate service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border group hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {metric.label}
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            These numbers represent more than statistics—they represent lives changed, wounds
            healed, and trust earned. Every day, we work to exceed these benchmarks and set
            new standards for excellence in wound care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
