import { createSlice } from "@reduxjs/toolkit";

const writeModeSlice = createSlice({
  name: "writeMode",
  initialState: {
    mode: "write",
  },
  reducers: {
    writeMode(state) {
      state.mode = "write";
    },
    updateMode(state) {
      state.mode = "update";
    },
  },
});

export const { writeMode, updateMode } = writeModeSlice.actions;
export default writeModeSlice.reducer;
