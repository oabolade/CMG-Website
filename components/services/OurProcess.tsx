"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Home, RefreshCw, BookOpen } from "lucide-react";

const processSteps = [
  {
    icon: Calendar,
    step: "01",
    title: "Schedule & Assess",
    description: "Contact us to schedule your initial consultation. Our team will conduct a thorough assessment of your wound care needs, medical history, and treatment goals to create a personalized care plan."
  },
  {
    icon: Home,
    step: "02",
    title: "Visit at Home",
    description: "Our licensed professionals arrive at your preferred location—home, assisted living, or care facility. We bring all necessary medical equipment and supplies to deliver expert wound care in your comfortable environment."
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Ongoing Visits",
    description: "We schedule regular follow-up visits based on your wound's healing progress. Each visit includes wound assessment, dressing changes, treatment adjustments, and documentation of improvements."
  },
  {
    icon: BookOpen,
    step: "04",
    title: "Continuous Monitoring and Education",
    description: "Throughout your healing journey, we provide continuous monitoring, update your care plan as needed, and educate you and your caregivers on proper wound care techniques and prevention strategies."
  }
];

export function OurProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Process: Simplified For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A straightforward approach to delivering exceptional wound care from start to finish
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border bg-white group relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none pr-4 pt-2 select-none">
                    {step.step}
                  </div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <step.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-base text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Ready to get started?</span> Our team is available Monday through Friday, 8AM–6PM.
              </p>
              <p className="text-sm text-primary font-semibold">
                Call us now at +1 (234) 567-890 or schedule your first visit online
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
