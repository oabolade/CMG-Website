"use client";

import { motion } from "framer-motion";

export function AcceptingPatients() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We are accepting new patients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We accept all major insurance plans including Aetna, Medicare, United Healthcare, and more. Private payment options are also available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
