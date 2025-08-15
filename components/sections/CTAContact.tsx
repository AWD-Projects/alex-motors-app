"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookingSchema, type BookingFormData } from "@/lib/schema";

const services = [
  "Diagnóstico Express",
  "Cambio de Aceite",
  "Frenos", 
  "Batería y Eléctrico",
  "Mantenimiento Preventivo",
  "Otro (Especificar en comentarios)"
];

export default function CTAContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedService = watch("service");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `Hola Alex Motors, me gustaría agendar un servicio:

` +
      `👤 Nombre: ${data.name}
` +
      `📱 Teléfono: ${data.phone}
` +
      `📧 Email: ${data.email}
` +
      `🚗 Auto: ${data.carModel}
` +
      `🔧 Servicio: ${data.service}
` +
      `📅 Fecha preferida: ${data.preferredDate}
` +
      `📍 Dirección: ${data.address}
` +
      `💬 Comentarios: ${data.comments || 'Sin comentarios adicionales'}`;
    
    const whatsappUrl = `https://wa.me/5255823781558?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert("Hubo un error al abrir WhatsApp. Por favor intenta de nuevo o llámanos directamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">¡Solicitud Recibida!</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¡Perfecto! Tu solicitud se ha enviado por WhatsApp. Te responderé en menos de 2 horas para confirmar tu cita.
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Otro Servicio
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 pb-32 sm:pb-24 bg-gray-50">
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
            Contacto
          </h2>
          <div className="w-24 h-px bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Agenda tu cita o solicita información. Te responderé 
            en menos de 2 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Tu nombre completo"
                      className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.name ? "border-red-300" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      {...register("phone")}
                      placeholder="55 1234 5678"
                      className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.phone ? "border-red-300" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.email ? "border-red-300" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Car Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modelo del Auto
                  </label>
                  <Input
                    {...register("carModel")}
                    placeholder="ej. 2020 Honda Civic"
                    className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.carModel ? "border-red-300" : ""}`}
                  />
                  {errors.carModel && (
                    <p className="text-red-500 text-xs mt-1">{errors.carModel.message}</p>
                  )}
                </div>

                {/* Service & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio
                    </label>
                    <Select
                      onValueChange={(value) => setValue("service", value)}
                      value={selectedService}
                    >
                      <SelectTrigger className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.service ? "border-red-300" : ""}`}>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Preferida
                    </label>
                    <Input
                      {...register("preferredDate")}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.preferredDate ? "border-red-300" : ""}`}
                    />
                    {errors.preferredDate && (
                      <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <Input
                    {...register("address")}
                    placeholder="Dirección donde necesitas el servicio"
                    className={`border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg ${errors.address ? "border-red-300" : ""}`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                  )}
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios
                  </label>
                  <Textarea
                    {...register("comments")}
                    placeholder="Detalles adicionales sobre el problema..."
                    rows={4}
                    className="border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-lg"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Teléfono", value: "+52 55 8237 8158" },
                  { icon: Mail, title: "WhatsApp", value: "+52 55 8237 8158" },
                  { icon: Clock, title: "Horario", value: "Lun-Sáb: 7AM-7PM" },
                  { icon: MapPin, title: "Área", value: "CDMX y zona metropolitana" }
                ].map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{info.title}</div>
                      <div className="text-sm text-gray-600">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3">Tiempo de Respuesta</h4>
              <p className="text-sm text-gray-600 mb-4">
                Te responderé por WhatsApp en menos de 2 horas para confirmar los detalles 
                y programar tu cita.
              </p>
              <div className="text-xs text-gray-500">
                * Para emergencias, llama directamente
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h4 className="font-medium mb-3">¿Emergencia?</h4>
              <p className="text-sm text-gray-300 mb-4">
                Servicio de emergencia disponible 24/7
              </p>
              <motion.button
                onClick={() => window.open("https://wa.me/525582378158", "_blank")}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}