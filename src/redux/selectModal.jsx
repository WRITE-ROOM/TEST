import { createSlice } from "@reduxjs/toolkit";

const selectModalSlice = createSlice({
  name: "selectModal",
  initialState: {
    selectedRoom: {
      roomTitle: "",
      roomId: null,
    },
    selectedCategory: {
      categoryName: "",
      categoryId: null,
    },
    currentModal: null,
  },
  reducers: {
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
    resetSelectedRoom(state) {
      state.selectedRoom.roomTitle = "";
      state.selectedRoom.roomId = null;
    },

    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory(state) {
      state.selectedCategory.categoryName = "";
      state.selectedCategory.categoryId = null;
    },

    setCurrentModal(state, action) {
      state.currentModal = action.payload;
    },

    setSelectedRoomId(state, action) {
      state.selectedRoom.roomTitle = "";
      state.selectedRoom.roomId = action.payload;
    },
    setSelectedCategoryName(state, action) {
      state.selectedCategory.categoryName = action.payload;
      state.selectedCategory.categoryId = null;
    },
  },
});

export const {
  setSelectedRoom,
  resetSelectedRoom,
  setSelectedCategory,
  resetSelectedCategory,
  setCurrentModal,
  setSelectedRoomId,
  setSelectedCategoryName,
} = selectModalSlice.actions;
export default selectModalSlice.reducer;
