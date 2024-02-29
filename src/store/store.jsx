import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/userDetailsSlice/userDetailsSlice";
export const store = configureStore({
  reducer: { userDetails: userDetailsReducer },
});
