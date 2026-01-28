// lib/validation/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required")
    .max(100, "First name is too long"),
  lastName: z
    .string()
    .min(2, "Last name is required")
    .max(100, "Last name is too long"),
  companyName: z
    .string()
    .min(2, "Company name is required")
    .max(150, "Company name is too long"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(20, "Phone number is too long"),
  email: z
    .string()
    .email("Valid email is required")
    .max(200, "Email is too long"),

  // fleetType is a string in the DB but we keep a controlled enum on the API
  fleetType: z.enum(["individual", "small", "medium", "large", "other"]),

  // fleetSize is Number in Mongo, so we validate as a number (optional, >= 0)
  fleetSize: z
    .number()
    .int("Fleet size must be an integer")
    .min(0, "Fleet size must be a positive number")
    .optional(),

  message: z
    .string()
    .min(10, "Please describe the nature of your request.")
    .max(2000, "Message is too long"),
});

export type ContactInputRequest = z.infer<typeof contactSchema>;
