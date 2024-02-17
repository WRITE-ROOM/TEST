import { createSlice } from "@reduxjs/toolkit";

export const wordBookmark = createSlice({
  name: "wordBookmark",
  initialState: [],
  reducers: {
    setWordBookmark: (state, action) => {
      return action.payload;
    },
    addWordBookmark: (state, action) => {
      const { id, content } = action.payload;
      state.push({ id, content }); // 새로운 방 정보를 배열에 추가
    },
    deleteWordBookmark: (state, action) => {
        const { id } = action.payload;
        return state.filter(bookmark => bookmark.id !== id);
    },
    resetWordBookmark: (state) => {
      return [];
    },
  }, 
});

export const { setWordBookmark, addWordBookmark, deleteWordBookmark, resetWordBookmark } = wordBookmark.actions;
export default wordBookmark.reducer;
