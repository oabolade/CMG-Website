"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const conditions = [
  {
    name: "Pressure Ulcers (Stage I–IV)",
    description: "Comprehensive treatment for all stages of pressure injuries with specialized wound care protocols."
  },
  {
    name: "Diabetic Wounds",
    description: "Expert management of diabetic foot ulcers and neuropathic wounds with advanced healing therapies."
  },
  {
    name: "Post-operative Incisions",
    description: "Professional monitoring and care of surgical wounds to ensure proper healing and prevent infection."
  },
  {
    name: "Arterial & Venous Leg Ulcers",
    description: "Specialized treatment for vascular ulcers addressing underlying circulatory issues."
  },
  {
    name: "Traumatic Lacerations",
    description: "Expert care for cuts, tears, and traumatic injuries requiring wound management."
  },
  {
    name: "Burns",
    description: "Treatment and rehabilitation for thermal, chemical, and electrical burn injuries."
  },
  {
    name: "Surgical Dehiscence",
    description: "Management of wound separation following surgery with advanced closure techniques."
  },
  {
    name: "Chronic Non-Healing Wounds",
    description: "Specialized care for wounds that have not responded to conventional treatment approaches."
  }
];

export function ConditionsTreated() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our expert team provides specialized care for a wide range of wound types and complications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {condition.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {condition.description}
                        </p>
                      </div>
                    </div>
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
            className="mt-10 text-center"
          >
            <p className="text-base text-muted-foreground">
              Don't see your condition listed? <span className="text-primary font-semibold">Contact us</span> to discuss your specific wound care needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
