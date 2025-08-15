"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Alex
              <span className="block font-normal text-green-500">Motors</span>
            </h1>
            <div className="w-24 h-px bg-green-500 mx-auto mb-8"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Servicio automotriz móvil profesional.
              <span className="block mt-2 text-gray-900">Vamos donde estés.</span>
            </p>
          </motion.div>

          {/* Key points */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Respuesta &lt; 2h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>15+ años experiencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>CDMX y área metropolitana</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => window.open("https://wa.me/525582378158?text=Hola%20Alex%20Motors,%20me%20gustaría%20agendar%20una%20cita%20para%20servicio%20automotriz.", "_blank")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar por WhatsApp
            </motion.button>
            
            <motion.button
              onClick={() => handleScroll("#services")}
              className="border border-gray-300 hover:border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Servicios
            </motion.button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-sm text-gray-500 mb-4">Confían en nosotros</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">4.9</div>
                <div className="text-xs">Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">300+</div>
                <div className="text-xs">Servicios</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">100%</div>
                <div className="text-xs">Garantía</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          onClick={() => handleScroll("#services")}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}