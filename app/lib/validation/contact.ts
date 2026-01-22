// lib/validation/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(20, "Phone number is too long"),
  email: z.string().email("Valid email is required"),
  fleetType: z.enum([
    "individual",
    "small",
    "medium",
    "large",
    "other"
  ]),
  fleetSize: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined))
    .refine(
      (v) => v === undefined || (Number.isFinite(v) && v >= 0),
      "Fleet size must be a positive number"
    ),
  message: z
    .string()
    .min(10, "Please describe the nature of your request."),
  // agreeToTerms: z.literal(true, {
  //   errorMap: () => ({
  //     message: "You must agree to the Terms & Privacy Policy."
  //   })
  // }),
  // honeypot to block bots
  companyHidden: z.string().optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
