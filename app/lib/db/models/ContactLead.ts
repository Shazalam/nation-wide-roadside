// lib/db/models/ContactLead.ts
import { Schema, model, models } from "mongoose";

const ContactLeadSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    companyName: String,
    phone: String,
    email: String,
    fleetType: String,
    fleetSize: Number,
    message: String
  },
  { timestamps: true }
);

export const ContactLead =
  models.ContactLead || model("ContactLead", ContactLeadSchema);
