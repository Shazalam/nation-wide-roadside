import { ContactLead, CreateContactLeadPayload, GetAllLeadsData } from "@/app/types/contactLead";
import { ApiResponse } from "@/lib/utils/apiResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/api/contact-leads";

/**
 * CREATE LEAD
 */
export const createContactLeadThunk = createAsyncThunk<
  ContactLead,                         // ✅ return type
  CreateContactLeadPayload,            // ✅ request payload
  { rejectValue: ApiResponse }   // ✅ error type
>(
  "contactLead/create",
  async (payload, { rejectWithValue }) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const response: ApiResponse<{ lead: ContactLead }> = await res.json();

    if (!res.ok || response.status !== "success") {
      return rejectWithValue(response);
    }

    return response.data!.lead;
  }
);

/**
 * GET ALL LEADS
 */
export const getAllContactLeadsThunk = createAsyncThunk<
  GetAllLeadsData,
  { page?: number; limit?: number; status?: string },
  { rejectValue: ApiResponse }
>(
  "contactLead/getAll",
  async (params, { rejectWithValue }) => {
    const query = new URLSearchParams(
      Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, String(v)])
    ).toString();

    const res = await fetch(`${BASE_URL}?${query}`);
    const response: ApiResponse<GetAllLeadsData> = await res.json();

    if (!res.ok || response.status !== "success") {
      return rejectWithValue(response);
    }

    return response.data!;
  }
);
