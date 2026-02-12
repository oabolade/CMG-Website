"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const locations = [
  "Private homes",
  "Nursing home",
  "Assisted living facilities",
  "Long-term acute care hospitals (LTACH)"
];

export function WhoWeServe() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Who we serve
          </h2>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
