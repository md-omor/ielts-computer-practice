"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TextSize = "standard" | "large" | "extra-large";
type ColorScheme = "standard" | "yellow-black" | "blue-white" | "blue-cream";
type ScreenResolution = "800" | "1024" | "1280";

interface SettingsState {
  textSize: TextSize;
  colorScheme: ColorScheme;
  screenResolution: ScreenResolution;
}

const initialState: SettingsState = {
  textSize: "standard",
  colorScheme: "standard",
  screenResolution: "1280",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTextSize: (state, action: PayloadAction<TextSize>) => {
      state.textSize = action.payload;
    },
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
    setScreenResolution: (state, action: PayloadAction<ScreenResolution>) => {
      state.screenResolution = action.payload;
    },
  },
});

export const { setTextSize, setColorScheme, setScreenResolution } =
  settingsSlice.actions;
export default settingsSlice.reducer;
