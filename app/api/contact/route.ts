import { ApiResponse } from './../../../lib/utils/apiResponse';
import { createContactLead } from "@/lib/services/contactLead.service";
import { contactSchema } from "@/lib/validation/contact";
import { NextRequest } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = contactSchema.parse(body);

    const lead = await createContactLead(validatedData);

    return ApiResponse.created({ message: "Contact lead created successfully", lead });
  } catch (caughtError: unknown) {
    // 5️⃣ Zod validation error
    if (caughtError instanceof ZodError) {
      return ApiResponse.validationError(caughtError.flatten().fieldErrors);
    }

    // 6️⃣ Known service / business error
    if (typeof caughtError === "object" && caughtError !== null && "code" in caughtError) {
      const err = caughtError as {
        code: string;
        message: string;
        details?: unknown;
      };

      return ApiResponse.error("error", err.message, 400, err.code, err.details);
    }

    // 7️⃣ Unknown / crash error
    return ApiResponse.internalError("Internal server error");
  }
}
