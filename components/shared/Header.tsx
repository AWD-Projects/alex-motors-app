"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Home, Wrench, User, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "#home", icon: Home },
  { label: "Servicios", href: "#services", icon: Wrench },
  { label: "Sobre Mí", href: "#about", icon: User },
  { label: "Contacto", href: "#contact", icon: MessageCircle },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionInView = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionInView);
    handleSectionInView();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionInView);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop/Tablet Header */}
      <motion.header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 sm:block hidden",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Alex</span>
                <span className="text-xl font-light text-green-600 ml-1">Motors</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    activeSection === item.href.slice(1)
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-green-500 rounded-full"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header - Simplified */}
      <motion.header
        className="fixed top-0 w-full z-50 sm:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="px-4">
          <div className="flex items-center justify-center h-16">
            {/* Logo - Centered */}
            <motion.div
              className="flex items-center space-x-3"
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("#home")}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Alex</span>
                <span className="text-xl font-light text-green-600 ml-1">Motors</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation Bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative flex flex-col items-center justify-center p-3 min-w-[70px]"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background for active state */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-green-100 rounded-2xl"
                      layoutId="mobileActiveTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <Icon 
                      className={cn(
                        "h-6 w-6 transition-colors duration-200",
                        isActive ? "text-green-600" : "text-gray-500"
                      )} 
                    />
                  </div>
                  
                  {/* Label */}
                  <span 
                    className={cn(
                      "text-xs font-medium mt-1 transition-colors duration-200 relative z-10",
                      isActive ? "text-green-600" : "text-gray-500"
                    )}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 left-1/2 w-1 h-1 bg-green-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Safe area spacing for devices with home indicator */}
        <div className="h-safe-area-inset-bottom"></div>
      </motion.nav>

      {/* Mobile spacer to prevent content from being hidden behind bottom nav */}
      <div className="h-20 sm:hidden"></div>
    </>
  );
}