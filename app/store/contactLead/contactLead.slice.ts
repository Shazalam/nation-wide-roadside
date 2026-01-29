import { ContactLead } from "@/app/types/contactLead";
import { ApiResponse } from "@/lib/utils/apiResponse";
import { createSlice } from "@reduxjs/toolkit";
import { createContactLeadThunk, getAllContactLeadsThunk } from "./contactLeadThunks";


interface ContactLeadState {
  leads: ContactLead[];
  loading: boolean;
  error: ApiResponse | null;
  meta: { 
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  } | null;
}

const initialState: ContactLeadState = {
  leads: [],
  loading: false,
  error: null,
  meta: null,
};

const contactLeadSlice = createSlice({
  name: "contactLead",
  initialState,
  reducers: {
    clearContactLeadError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // CREATE
    builder
      .addCase(createContactLeadThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContactLeadThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.leads.unshift(action.payload);
      })
      .addCase(createContactLeadThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      });

    // GET ALL
    builder
      .addCase(getAllContactLeadsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllContactLeadsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = action.payload.leads;
        state.meta = action.payload.meta;
      })
      .addCase(getAllContactLeadsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      });
  },
});

export const { clearContactLeadError } = contactLeadSlice.actions;
export default contactLeadSlice.reducer;
