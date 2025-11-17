"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "./contact/ContactInfo";
import { GoogleMap } from "./contact/GoogleMap";
import { ContactForm } from "./contact/ContactForm";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Get In Touch
              </span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full mx-auto" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out to us
              and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="space-y-6">
              <ContactInfo />
              <GoogleMap />
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
