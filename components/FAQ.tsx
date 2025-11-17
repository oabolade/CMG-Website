"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of wounds do you treat?",
    answer: "We treat a comprehensive range of wounds including surgical wounds, diabetic ulcers, pressure sores, traumatic injuries, burns, and chronic non-healing wounds. Our team specializes in both acute and chronic wound management."
  },
  {
    question: "Do I need a referral to schedule an appointment?",
    answer: "While referrals are welcome and we work closely with referring physicians, they are not required. You can contact us directly to schedule an appointment for wound care evaluation and treatment."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your insurance cards, a list of current medications, any relevant medical records or imaging studies, and information about your medical history. If you have documentation of previous wound treatments, that's helpful too."
  },
  {
    question: "How long does wound healing typically take?",
    answer: "Healing time varies depending on the type, size, and severity of the wound, as well as individual health factors. During your consultation, we'll assess your specific situation and provide a realistic timeline based on evidence-based healing protocols."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. We recommend contacting our office to verify that your specific plan is accepted. Our staff can also help with insurance verification and answer any billing questions."
  },
  {
    question: "What makes your wound care approach different?",
    answer: "We combine advanced medical technology with personalized care plans tailored to each patient's unique needs. Our multidisciplinary team uses evidence-based protocols while maintaining a compassionate, patient-centered approach to care."
  }
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our wound care services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
