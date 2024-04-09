import { ReactNode } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loading = true;
    },
    closeLoader: () => initialState,
  },
});

export const getLoader = (state: RootState) => state.loader.loading;

export const { showLoader, closeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
