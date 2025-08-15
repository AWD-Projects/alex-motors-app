"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealOnScroll } from "@/lib/animations";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  animate = true,
}: SectionProps) {
  const Content = animate ? motion.section : "section";

  return (
    <Content
      id={id}
      className={cn("py-16 md:py-24", className)}
      {...(animate && {
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true, margin: "-100px" },
        variants: revealOnScroll,
      })}
    >
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </Content>
  );
}