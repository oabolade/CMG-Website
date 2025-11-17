"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function MissionVision() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Royal Care For You, Every Step of the Way
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence drives everything we do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To bring high quality and compassionate mobile family practice and advanced wound care services
                    to patients in assisted living communities and your home. Our goal is simple: to keep residents healthy,
                    reduce unnecessary hospital visits, and improve quality of life through consistent on-site healthcare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-7 h-7 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To be the most trusted provider of mobile family practice and advanced wound care, ensuring every patient
                    receives expert treatment, dignity and comfort wherever they are. We combine modern telehealth technology
                    with in-person visits to ensure continuity, convenience and compassionate care for every patient.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Approach
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We deliver personalized medical care focusing on family medicine, chronic disease management,
                    preventive health, medication oversight and expert wound care. Our team combines evidence-based medicine
                    with genuine compassion, ensuring that every patient feels heard, respected, and empowered throughout
                    their healthcare journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern medical clinic providing expert wound care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
