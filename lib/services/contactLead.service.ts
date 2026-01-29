import { connectDB } from "../db/connect";
import { ContactLead } from "../db/models/ContactLead";
import { ErrorCode } from "../utils/apiResponse";
import { ContactInputRequest } from "../validation/contact";
import { MongoServerError } from "mongodb";

export async function createContactLead(body: ContactInputRequest) {
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

interface GetLeadsOptions {
  page?: number;
  limit?: number;
  status?: string;
}

export async function getAllContactLeads(option: GetLeadsOptions) {
  try {
    await connectDB();

    const page = option.page ?? 1;
    const limit = option.limit ?? 10;
    const skip = (page - 1) * limit;
    const filter: Record<string, unknown> = {};

    if (option.status) {
      filter.status = option.status;
    }

    const [leads, total] = await Promise.all([
      ContactLead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
      ContactLead.countDocuments(filter),
    ]);

    return {
      leads,
      meta: {
        total,
        page,
        limit,
        totalPage: Math.ceil(total / limit),
      },
    };
  } catch (error: unknown) {
    // Normal JS Error

    if (error instanceof Error) {
      throw {
        code: ErrorCode.DATABASE_ERROR,
        message: "Failed to fetch contact leads",
        details: error.message,
      };
    }

    throw {
      code: ErrorCode.DATABASE_ERROR,
      message: "Unknown database error",
      details: error,
    };
  }
}


const ALLOWED_STATUSES = [
  "pending",
   "accepted", 
   "rejected"
] as const;

type LeadStatus = typeof ALLOWED_STATUSES[number]

// export async function updateContactLeadStatus(
//   id: string,
//   status: LeadStatus
// ) {
//   try {
//      await connectDB()

     
//   }catch(error: unknown){

//   }
// }