"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Diagnóstico",
    description: "Identificación precisa del problema",
    price: "800",
    time: "30 min"
  },
  {
    title: "Aceite y Filtros",
    description: "Cambio completo con repuestos de calidad",
    price: "1,200",
    time: "45 min"
  },
  {
    title: "Sistema de Frenos",
    description: "Inspección y reparación completa",
    price: "2,500",
    time: "60 min"
  },
  {
    title: "Batería y Eléctrico",
    description: "Diagnóstico y reparación del sistema",
    price: "1,800",
    time: "45 min"
  },
  {
    title: "Mantenimiento",
    description: "Servicio preventivo completo",
    price: "2,000",
    time: "90 min"
  },
  {
    title: "Emergencias",
    description: "Servicio 24/7 donde estés",
    price: "Consultar",
    time: "Inmediato"
  }
];

export default function Services() {
  const handleBookService = (serviceTitle?: string) => {
    const message = serviceTitle 
      ? `Hola Alex Motors, me interesa el servicio de ${serviceTitle}. ¿Podrías darme más información y agendar una cita?`
      : `Hola Alex Motors, me gustaría obtener una cotización personalizada para mis servicios automotrices.`;
    
    const whatsappUrl = `https://wa.me/525582378158?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Servicios
          </h2>
          <div className="w-24 h-px bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Soluciones automotrices profesionales con la comodidad 
            de nuestro servicio a domicilio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 h-full flex flex-col">
                {/* Service Info */}
                <div className="flex-grow mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Desde </span>
                      <span className="font-medium text-gray-900">${service.price}</span>
                    </div>
                    <div className="text-gray-500">
                      {service.time}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleBookService(service.title)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group-hover:bg-green-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-sm font-medium text-gray-900 group-hover:text-green-700">
                    WhatsApp
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              ¿Necesitas un servicio específico o tienes dudas sobre los precios?
            </p>
            <motion.button
              onClick={() => handleBookService()}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cotización por WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}