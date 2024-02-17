import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteTitle: "",
    noteSubtitle: "",
    noteId: null,
    noteCoverImg: "",
    noteContent: "",
    writer: "",
    tagList: [],
    createdAt: "",
    updatedAt: "",
    categoryName: "",
    emojiList: { emojiCounts: [] },
  },
  reducers: {
    addNote(state, action) {
      const {
        noteTitle,
        noteSubtitle,
        noteId,
        noteCoverImg,
        noteContent,
        writer,
        tagList,
        createdAt,
        updatedAt,
        categoryName,
        emojiList,
      } = action.payload;

      state.noteTitle = noteTitle;
      state.noteSubtitle = noteSubtitle;
      state.noteId = noteId;
      state.noteCoverImg = noteCoverImg;
      state.noteContent = noteContent;
      state.writer = writer;
      state.tagList = tagList;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
      state.categoryName = categoryName;
      state.emojiList = emojiList;
    },
    resetNote(state) {
      state.noteTitle = "";
      state.noteSubtitle = "";
      state.noteId = null;
      state.noteCoverImg = "";
      state.noteContent = "";
      state.writer = "";
      state.tagList = [];
      state.createdAt = "";
      state.updatedAt = "";
      state.categoryName = "";
      state.emojiList = {};
    },
    setNoteCoverImg(state, action) {
      state.noteCoverImg = action.payload;
    },

    setNoteTitle(state, action) {
      state.noteTitle = action.payload;
    },
  },
});

export const {
  addNote,
  resetNote,
  setNoteCoverImg,
  setEmojiList,
  setNoteTitle,
} = noteSlice.actions;
export default noteSlice.reducer;
