"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, PhoneCall, Mail } from "lucide-react";

interface HeroProps {
  onNavigateToContact?: () => void;
}

export function Hero({ onNavigateToContact }: HeroProps) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const contactMethods = [
    {
      icon: PhoneCall,
      title: "Phone Call",
      description: "Speak directly with our team",
      action: "tel:+12138003607",
      label: "(213) 800-3607"
    },
    {
      icon: MessageSquare,
      title: "Text Message",
      description: "Send us a quick text",
      action: "sms:+12138003607",
      label: "(213) 800-3607"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email",
      action: "mailto:crownmedicalgroup@gmail.com",
      label: "crownmedicalgroup@gmail.com"
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional medical care environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-8"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Crowns Medical Group
              </h1>
              <p className="text-lg sm:text-xl text-yellow-400 font-semibold">
                Royal Care for Every Wound
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              Mobile Primary Care & Advanced Wound Care
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-10"
            >
              Bringing comprehensive primary care and specialized wound management to your home and assisted living communities. We deliver compassionate, personalized healthcare through convenient mobile visits and modern telehealth technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={onNavigateToContact}
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-base sm:text-lg px-8 py-6 h-auto font-semibold"
                aria-label="Book an appointment with Crowns Medical Group"
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                onClick={() => setIsContactDialogOpen(true)}
                className="bg-secondary/90 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-secondary shadow-lg text-base sm:text-lg px-8 py-6 h-auto font-semibold transition-all"
                aria-label="Contact Crowns Medical Group now"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Choose Contact Method
            </DialogTitle>
            <DialogDescription className="text-base">
              Select how you'd like to reach Crowns Medical Group
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="block"
                onClick={() => setIsContactDialogOpen(false)}
              >
                <Card className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <method.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {method.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
