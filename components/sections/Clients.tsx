"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { fadeInUp, stagger } from "@/lib/animations";

const testimonials = [
  {
    name: "María González",
    role: "Business Owner",
    content: "Alex came to my office when my car wouldn't start. Fixed it in 30 minutes! Professional, honest pricing, and saved me so much time. Highly recommend!",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Family Man",
    content: "Amazing service! Alejandro diagnosed my brake issue at home while I was with my kids. Quality work, fair price, and incredibly convenient. Will definitely use again.",
    rating: 5
  },
  {
    name: "Ana López",
    role: "Marketing Manager",
    content: "Fast, reliable, and transparent. Alex explained everything clearly and completed the oil change quickly. The mobile service is a game-changer for busy professionals.",
    rating: 5
  }
];

export default function Clients() {
  return (
    <Section id="clients">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Don't just take our word for it. Here's what our satisfied customers
            have to say about Alex Motors.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic leading-relaxed pl-6">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Join Our Satisfied Customers
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of professional service and customer satisfaction.
              Book your appointment today and discover why our clients choose Alex Motors again and again.
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
              Book Your Service Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}