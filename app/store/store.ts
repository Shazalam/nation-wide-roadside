import { configureStore } from "@reduxjs/toolkit";
import contactLeadReducer from "./contactLead/contactLead.slice";

export const store = configureStore({
  reducer: {
    contactLead: contactLeadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
