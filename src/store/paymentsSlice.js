import { createSlice } from "@reduxjs/toolkit";

export const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    value: 575,
  },
  reducers: {
    changeTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTo } = paymentsSlice.actions;

export default paymentsSlice.reducer;
