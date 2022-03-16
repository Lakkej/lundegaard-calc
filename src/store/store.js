import { configureStore } from "@reduxjs/toolkit";
import paymentsReducer from "./paymentsSlice";

export default configureStore({
  reducer: {
      payments: paymentsReducer
  },
});
