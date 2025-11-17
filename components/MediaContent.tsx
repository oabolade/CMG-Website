"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Lightbulb, Heart, ArrowRight } from "lucide-react";

const mediaContent = [
  {
    icon: FileText,
    category: "Blog",
    title: "Understanding Chronic Wound Care",
    description: "Learn about the latest advances in chronic wound management and healing techniques.",
    date: "March 15, 2025"
  },
  {
    icon: Lightbulb,
    category: "Healthcare Insights",
    title: "Post-Surgical Care Best Practices",
    description: "Expert tips for optimal recovery and wound healing after surgery.",
    date: "March 10, 2025"
  },
  {
    icon: Heart,
    category: "Patient Education",
    title: "Preventing Diabetic Ulcers",
    description: "Essential information for diabetes patients to prevent foot ulcers and complications.",
    date: "March 5, 2025"
  },
  {
    icon: FileText,
    category: "Blog",
    title: "When to Seek Wound Care",
    description: "Identifying signs that require professional medical attention for wound treatment.",
    date: "February 28, 2025"
  }
];

export function MediaContent() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="media">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Media & Content
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest healthcare insights, tips, and educational resources
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border group hover:border-primary/30 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-primary group-hover:text-primary"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </Button>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2"
            aria-label="View all articles and content"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
