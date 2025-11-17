"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "The care I received at Crown's Medical Group was exceptional. The staff was attentive, professional, and truly cared about my recovery. My wound healed faster than expected thanks to their expertise.",
    initials: "S.M.",
    rating: 5
  },
  {
    quote: "After struggling with a chronic wound for months, I finally found relief at Crown's. Their comprehensive approach and personalized treatment plan made all the difference in my healing journey.",
    initials: "R.P.",
    rating: 5
  },
  {
    quote: "I can't thank the team enough for their compassionate care during my post-surgery recovery. They made me feel comfortable and confident throughout the entire process. Highly recommend!",
    initials: "J.L.",
    rating: 5
  },
  {
    quote: "Professional, caring, and knowledgeable. The home visit service was incredibly convenient during my recovery. Crown's Medical Group exceeded all my expectations for wound care.",
    initials: "M.K.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#eef6f8' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who've experienced our exceptional care
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full bg-white border-border hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-8 relative">
                        <Quote
                          className="absolute top-6 right-6 w-10 h-10 text-primary/20"
                          aria-hidden="true"
                        />
                        <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} stars`}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="text-foreground leading-relaxed mb-6 relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-primary font-semibold">
                                {testimonial.initials}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                              Verified Patient
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
