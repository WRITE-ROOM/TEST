import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tag",
  initialState: [
    // { tagId: 0, tagName: "음악" },
  ],
  reducers: {
    addTag(state, action) {
      state.push(action.payload);
    },
    setTag(state, action){
      return action.payload;
    },
    deleteTag(state, action) {
      state.splice(action.payload, 1);
    },
    resetTag(state) {
      state.length = 0;
    },
  },
});

export const { addTag,setTag, deleteTag, resetTag } = tagSlice.actions;
export default tagSlice.reducer;
