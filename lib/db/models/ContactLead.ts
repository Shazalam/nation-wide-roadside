// lib/db/models/ContactLead.ts
import { type Model, Schema, model, models } from "mongoose";

export type ContactStatus = "pending" | "accepted" | "rejected";

interface IContactSchema {
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  email: string;
  fleetType: string;
  fleetSize?: number;
  message: string;
  status: ContactStatus;
}

const ContactLeadSchema = new Schema<IContactSchema>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    fleetType: {
      type: String,
      required: true,
      trim: true,
    },
    fleetSize: {
      type: Number,
      min: 0,
      required: false,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ContactLead: Model<IContactSchema> =
  (models.ContactLead as Model<IContactSchema>) ||
  model<IContactSchema>("ContactLead", ContactLeadSchema);
