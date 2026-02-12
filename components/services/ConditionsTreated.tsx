"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const conditions = [
  {
    name: "Mild-moderate depression",
    description: "Evidence-based treatment and support via telehealth for individuals experiencing depressive symptoms, focusing on improving mood and daily functioning."
  },
  {
    name: "Anxiety Disorders",
    description: "Comprehensive virtual care for various anxiety conditions including generalized anxiety, social anxiety, and panic disorders."
  },
  {
    name: "Insomnia",
    description: "Specialized assessment and treatment via telehealth for sleep difficulties, helping patients achieve restful and restorative sleep."
  },
  {
    name: "Adjustment disorders",
    description: "Virtual support for individuals experiencing difficulty coping with significant life changes or stressful events."
  },
  {
    name: "Dementia-related behaviors",
    description: "Compassionate in-home and virtual management of behavioral and psychological symptoms associated with dementia and cognitive decline."
  },
  {
    name: "Geriatric mood disorders",
    description: "Specialized psychiatric care via telehealth addressing depression, anxiety, and mood disturbances in older adults."
  },
  {
    name: "Psych follow-up via Telemedicine",
    description: "Convenient virtual psychiatric consultations for ongoing mental health monitoring and medication management from home."
  },
  {
    name: "Pressure Ulcers (Stage I–IV)",
    description: "Comprehensive mobile wound care treatment for all stages of pressure injuries with specialized protocols delivered at your location."
  },
  {
    name: "Diabetic Wounds",
    description: "Expert in-home management of diabetic foot ulcers and neuropathic wounds with advanced healing therapies."
  },
  {
    name: "Burns",
    description: "Mobile treatment and rehabilitation for thermal, chemical, and electrical burn injuries in the comfort of your home."
  },
  {
    name: "Traumatic Lacerations",
    description: "Expert mobile care for cuts, tears, and traumatic injuries requiring wound management at your location."
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
            Conditions we treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our expert team provides compassionate care through mobile home visits and telehealth for a wide range of mental health and wound care conditions
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
              Don't see your condition listed? <span className="text-primary font-semibold">Contact us</span> to discuss your specific care needs and how we can help through our mobile or telehealth services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
