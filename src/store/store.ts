"use client";

import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
