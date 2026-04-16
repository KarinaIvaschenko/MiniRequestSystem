import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice.ts";
import requestsSlice from "./requestsSlice.ts";

export const store = configureStore({
  reducer: {
    userSlice,
    requestsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
