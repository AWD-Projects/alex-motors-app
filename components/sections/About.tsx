"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
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
            Sobre Mí
          </h2>
          <div className="w-24 h-px bg-green-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Alejandro Martínez
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Con más de <span className="font-medium text-gray-900">15 años de experiencia</span> en 
                  reparación automotriz, he trabajado en talleres especializados y concesionarias, 
                  adquiriendo conocimientos profundos en múltiples marcas y sistemas.
                </p>
                <p>
                  Decidí crear Alex Motors para ofrecer un servicio más personal y conveniente. 
                  Creo firmemente que el mantenimiento de tu vehículo no debería interrumpir tu día.
                </p>
                <p>
                  Mi compromiso es simple: diagnósticos honestos, reparaciones de calidad 
                  y la tranquilidad de saber que tu vehículo está en las mejores manos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "15+", text: "Años de experiencia" },
                { number: "300+", text: "Servicios completados" },
                { number: "4.9", text: "Rating promedio" },
                { number: "100%", text: "Garantía en trabajos" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-8 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Certificaciones</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Técnico Automotriz Certificado</div>
                <div>• Especialista en Sistemas Electrónicos</div>
                <div>• Diagnóstico por Computadora</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-20 pt-16 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Mis Valores
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada servicio que realizo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparencia",
                description: "Precios claros, diagnósticos honestos, sin sorpresas."
              },
              {
                title: "Calidad",
                description: "Repuestos originales, herramientas profesionales, trabajo garantizado."
              },
              {
                title: "Conveniencia",
                description: "Servicio a domicilio, horarios flexibles, respuesta rápida."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => window.open("https://wa.me/525582378158?text=Hola%20Alex%20Motors,%20me%20gustaría%20conocer%20más%20sobre%20tus%20servicios.", "_blank")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}