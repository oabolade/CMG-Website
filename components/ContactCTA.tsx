"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ContactCTAProps {
  onNavigateToContact?: () => void;
}

export function ContactCTA({ onNavigateToContact }: ContactCTAProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Begin Your Care Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards better health. Our expert team is ready to provide compassionate, personalized care through mobile home visits or convenient telehealth consultations.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={onNavigateToContact}
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-base sm:text-lg px-10 py-7 h-auto group"
              aria-label="Schedule a consultation with Crowns Medical Group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Schedule a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
