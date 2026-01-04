import { configureStore } from "@reduxjs/toolkit";
import jsonDataReducer from "../Redux/slices/jsonDB";

export const store = configureStore({
  reducer: {
    jsonDB: jsonDataReducer,
  },
});
