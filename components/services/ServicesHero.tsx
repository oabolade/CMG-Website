"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Services
            </span>
            <div className="h-1 w-12 bg-primary mt-2 rounded-full mx-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive mobile and telehealth medical care delivered by licensed professionals directly to your home or via virtual consultations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
