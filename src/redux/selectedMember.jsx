import { createSlice } from "@reduxjs/toolkit";

const selectedMemberSlice = createSlice({
  name: "selectedMember",
  initialState: [],
  reducers: {
    setSelectedMember(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setSelectedMember } = selectedMemberSlice.actions;
export default selectedMemberSlice.reducer;
