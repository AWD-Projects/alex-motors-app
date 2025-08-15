"use client";

import { motion } from "framer-motion";
import { Clock, User, MapPin, Shield } from "lucide-react";
import Section from "@/components/shared/Section";
import { fadeInUp, stagger } from "@/lib/animations";

const benefits = [
  {
    icon: Clock,
    title: "Guaranteed Speed",
    description: "Quick response times and efficient service to minimize your downtime and get you back on the road fast."
  },
  {
    icon: User,
    title: "100% Personalized Attention",
    description: "Direct communication with Alejandro ensures personalized service tailored to your specific needs and preferences."
  },
  {
    icon: MapPin,
    title: "We Come to You",
    description: "Mobile service means we bring the workshop to your location - home, office, or wherever you need us."
  },
  {
    icon: Shield,
    title: "Transparency & Trust",
    description: "Clear pricing, honest assessments, and transparent communication throughout the entire service process."
  }
];

export default function Benefits() {
  return (
    <Section id="benefits" className="bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            Why Choose Alex Motors
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Experience the difference of personalized mobile auto repair service
            that prioritizes your convenience and satisfaction.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center space-y-4"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 bg-card p-8 rounded-lg border shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Alex Motors for their automotive needs.
              Get started with a free consultation and see why we're the preferred choice for mobile auto repair.
            </p>
            <motion.button
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Schedule Your Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}