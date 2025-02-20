"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import settingsReducer from "./slices/settingsSlice";
import timerReducer from "./slices/timerSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  timer: timerReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
  debug: true,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
