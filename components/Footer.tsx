"use client";

import { Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative w-40 h-12">
                <Image
                  src="/CROWNS-MEDICAL-GROUP-ROYAL-CARE-1.png"
                  alt="Crowns Medical Group - Royal Care for Every Client"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Excellence in mobile home visits and telehealth services for family practice and advanced wound care with compassion and expertise.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#1877F2] hover:text-[#0d5dbf] transition-all hover:scale-110 transform"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" fill="currentColor" />
              </a>
              <a
                href="#"
                className="text-[#E4405F] hover:text-[#d62651] transition-all hover:scale-110 transform"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#000000] hover:text-[#333333] transition-all hover:scale-110 transform"
                aria-label="Follow us on X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#0A66C2] hover:text-[#004182] transition-all hover:scale-110 transform"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onNavigate?.("home")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("about")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("patients")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  For Patients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("media")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Media & Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-foreground">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Mobile Primary Care (Home Visits)</li>
              <li className="text-muted-foreground">Family Medicine (Mobile & Virtual)</li>
              <li className="text-muted-foreground">Advanced Wound Care (Mobile)</li>
              <li className="text-muted-foreground">Mental Health Services (Telehealth)</li>
              <li className="text-muted-foreground">Telemedicine Consultations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-foreground">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Location</span>
                Rancho Cucamonga, CA 91730
              </li>
              <li>
                <span className="font-medium text-foreground block mb-1">Phone</span>
                <a href="tel:+12138003607" className="text-muted-foreground hover:text-primary transition-colors">
                  (213) 800-3607
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground block mb-1">Email</span>
                <a href="mailto:crownmedicalgroup@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  crownmedicalgroup@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="font-medium text-foreground block mb-1">Hours</span>
                <span className="text-muted-foreground block">Mon-Fri: 8AM - 6PM</span>
                <span className="text-muted-foreground block">Sat: 9AM - 3PM</span>
                <span className="text-muted-foreground block">Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 Crowns Medical Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-label="love" />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
