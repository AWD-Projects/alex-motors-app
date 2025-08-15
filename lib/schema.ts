import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d{10}$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
  carModel: z.string().min(2, "Car model is required"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  address: z.string().min(10, "Please provide a detailed address"),
  comments: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;