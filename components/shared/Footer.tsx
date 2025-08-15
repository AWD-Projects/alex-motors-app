"use client";

import { motion } from "framer-motion";
import { Car, Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (section: string) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-light text-gray-900">Alex</span>
                <span className="text-2xl font-normal text-green-500 ml-1">Motors</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md mb-6">
              Servicio automotriz móvil profesional con más de 15 años de experiencia. 
              Contáctanos por WhatsApp para agendar tu cita.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">100% Garantizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Respuesta &lt; 2h</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">+52 55 8237 8158</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">WhatsApp: +52 55 8237 8158</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">CDMX y zona metropolitana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Lun-Sáb: 7AM-7PM</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">Enlaces</h3>
            <div className="space-y-3">
              {[
                { name: "Inicio", href: "#home" },
                { name: "Servicios", href: "#services" },
                { name: "Sobre Mí", href: "#about" },
                { name: "Contacto", href: "#contact" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(link.href)}
                  className="block text-gray-600 hover:text-green-500 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-8 border-t border-gray-100 border-b border-gray-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h4 className="text-xl font-light text-gray-900 mb-4">
            ¿Necesitas servicio automotriz?
          </h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Agenda tu cita hoy y experimenta la comodidad de nuestro servicio móvil profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.open("https://wa.me/525582378158?text=Hola%20Alex%20Motors,%20me%20gustaría%20agendar%20una%20cita%20para%20servicio%20automotriz.", "_blank")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar por WhatsApp
            </motion.button>
            <motion.button
              onClick={() => window.open("tel:+525582378158")}
              className="border border-gray-300 hover:border-gray-900 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Llamar Ahora
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} Alex Motors. Todos los derechos reservados.
          </div>
          <div className="text-gray-500">
            Servicio automotriz móvil profesional • CDMX
          </div>
        </motion.div>
      </div>
    </footer>
  );
}