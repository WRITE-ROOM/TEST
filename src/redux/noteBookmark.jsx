import { createSlice } from "@reduxjs/toolkit";

export const noteBookmark = createSlice({
  name: "noteBookmark",
  initialState: [],
  reducers: {
    setNoteBookmark: (state, action) => {
      return action.payload;
    },
    addNoteBookmark: (state, action) => {
      const { noteBookmarkId, noteId } = action.payload;
      state.push({ noteBookmarkId, noteId }); // 새로운 방 정보를 배열에 추가
    },
    deleteNoteBookmark: (state, action) => {
      const { noteId } = action.payload;
      return state.filter(bookmark => bookmark.noteId !== noteId);
    },
    resetNoteBookmark: (state) => {
      return [];
    },
  },
});

export const { setNoteBookmark, addNoteBookmark, deleteNoteBookmark, resetNoteBookmark } = noteBookmark.actions;
export default noteBookmark.reducer;
