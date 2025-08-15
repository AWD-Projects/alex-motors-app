"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 300,
    suffix: "+",
    label: "Servicios Completados",
    description: "Reparaciones y mantenimientos realizados exitosamente"
  },
  {
    number: 4.9,
    suffix: "/5",
    label: "Calificación Promedio",
    description: "Puntuación promedio de clientes satisfechos"
  },
  {
    number: 2,
    suffix: "h",
    label: "Tiempo de Respuesta",
    description: "Respuesta rápida a solicitudes de servicio"
  },
  {
    number: 100,
    suffix: "%",
    label: "Satisfacción",
    description: "Clientes satisfechos con la calidad del servicio"
  }
];

function Counter({ number, suffix, inView }: { number: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const step = number / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, number]);

  return (
    <span className="text-3xl font-light text-gray-900">
      {count === number && number % 1 !== 0 ? number.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 bg-gray-50" ref={ref}>
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Nuestros Números
          </h2>
          <div className="w-24 h-px bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Cifras que reflejan nuestro compromiso con la excelencia y satisfacción del cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <Counter
                  number={stat.number}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Confianza de Conductores en CDMX
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Estos números representan personas reales que confiaron en Alex Motors con sus vehículos.
              Desde diagnósticos rápidos hasta reparaciones integrales, hemos construido nuestra reputación
              un cliente satisfecho a la vez.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}