"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const mainTabs = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "patients", label: "Patients" },
    { id: "media", label: "Media" },
    { id: "about", label: "About" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-50 to-blue-50/30 backdrop-blur-sm border-b border-slate-200 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-48 h-12 sm:w-64 sm:h-16">
              <Image
                src="/Gemini_Generated_Image_n0yd8un0yd8un0yd.png"
                alt="Crowns Medical Group - Royal Care for Every Client"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" role="navigation" aria-label="Main navigation">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  activeTab === tab.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onTabChange("contact")}
                size="lg"
                className={`relative overflow-hidden font-semibold shadow-lg transition-all duration-300 ${
                  activeTab === "contact"
                    ? "bg-gradient-to-r from-primary via-primary to-secondary text-white ring-2 ring-primary/50 ring-offset-2"
                    : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Contact Us
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Button>
            </motion.div>

            <a
              href="tel:+12138003607"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xl:inline">(213) 800-3607</span>
            </a>
          </div>

          <div className="lg:hidden">
            <Button
              onClick={() => onTabChange("contact")}
              size="sm"
              className={`relative overflow-hidden font-semibold shadow-md ${
                activeTab === "contact"
                  ? "bg-gradient-to-r from-primary via-primary to-secondary text-white ring-2 ring-primary/50"
                  : "bg-gradient-to-r from-primary to-secondary text-white"
              }`}
            >
              <Mail className="w-4 h-4 mr-1" aria-hidden="true" />
              Contact
            </Button>
          </div>
        </div>

        <div className="lg:hidden border-t border-border">
          <nav className="flex overflow-x-auto py-2 gap-1" role="navigation" aria-label="Mobile navigation">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
