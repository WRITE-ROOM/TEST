import { createSlice } from "@reduxjs/toolkit";

const noteListSlice = createSlice({
  name: "noteList",
  initialState: [],
  reducers: {
    setNoteList(state, action) {
      return action.payload;
    },
  },
});

export const { setNoteList } = noteListSlice.actions;
export default noteListSlice.reducer;
