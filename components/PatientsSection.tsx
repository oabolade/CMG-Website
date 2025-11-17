"use client";

import { motion } from "framer-motion";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";

export function PatientsSection() {
  return (
    <section id="patients">
      <Testimonials />
      <FAQ />
    </section>
  );
}
