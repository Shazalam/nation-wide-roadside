import { connectDB } from "../db/connect";
import { ContactLead } from "../db/models/ContactLead";
import { ErrorCode } from "../utils/apiResponse";
import { ContactInputRequest } from "../validation/contact";
import { MongoServerError } from "mongodb";

export async function createContactLead(
  body: ContactInputRequest
) {
  try {
    await connectDB();

    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      companyName: body.companyName,
      phone: body.phone,
      email: body.email,
      fleetType: body.fleetType,
      fleetSize: body.fleetSize,
      message: body.message,
      status: "pending",
    };

    return await ContactLead.create(payload);

  } catch (error: unknown) {

    // Mongo duplicate key error
    if (error instanceof MongoServerError && error.code === 11000) {
      throw {
        code: ErrorCode.ALREADY_EXISTS,
        message: "Contact lead already exists",
        details: error.keyValue,
      };
    }

    // Normal JS Error
    if (error instanceof Error) {
      throw {
        code: ErrorCode.DATABASE_ERROR,
        message: "Failed to create contact lead",
        details: error.message,
      };
    }

    // Fallback (very rare)
    throw {
      code: ErrorCode.DATABASE_ERROR,
      message: "Unknown database error",
      details: error,
    };
  }
}
