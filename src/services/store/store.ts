import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";


export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;