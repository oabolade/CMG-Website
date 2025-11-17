"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const workingHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-border shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Address
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      9587 Arrow Route Suite A<br />
                      Rancho Cucamonga, CA 91730
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+12138003607"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      (213) 800-3607
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:crownmedicalgroup@gmail.com"
                      className="text-sm text-primary hover:underline font-medium break-all"
                    >
                      crownmedicalgroup@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-border shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Working Hours
              </h3>
            </div>

            <div className="space-y-3">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-foreground">
                    {schedule.day}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
