"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-border shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8869956374367!2d-117.59397492425547!3d34.10621151734988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34f7e0afa72d9%3A0x9e0c8c5d0e6d9a7e!2s9587%20Arrow%20Rte%20Suite%20A%2C%20Rancho%20Cucamonga%2C%20CA%2091730!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crowns Medical Group Location"
              className="absolute inset-0"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
