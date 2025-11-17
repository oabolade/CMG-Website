"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface AboutCTAProps {
  onNavigateToContact?: () => void;
  onNavigateToServices?: () => void;
}

export function AboutCTA({ onNavigateToContact, onNavigateToServices }: AboutCTAProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
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
            Experience Royal Care for Yourself
          </h2>
          <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of patients who have experienced the Crowns Medical Group difference.
            Let our expert team guide your journey to complete healing.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={onNavigateToContact}
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-base sm:text-lg px-10 py-7 h-auto font-semibold group"
              aria-label="Schedule your visit with Crowns Medical Group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Schedule Your Visit
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onNavigateToServices}
              className="border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base sm:text-lg px-10 py-7 h-auto font-semibold group"
              aria-label="Learn more about our services"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-white/80"
          >
            Available Monday - Friday, 8AM - 6PM | Same-day appointments available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
