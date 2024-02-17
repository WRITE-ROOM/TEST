import { createSlice } from "@reduxjs/toolkit";

export const roomInfo = createSlice({
  name: "roomInfo",
  initialState: {
    roomId: "",
    roomTitle: "",
    roomIntroduction: "",
    updatedAt: "",
    roomImg: "",
    userRoomList: "",
    totalElements: "",
    listSize: "",
    noteList: [],
    memberInfo: [],
    routineAchieveRate: "",
    goalsAchieveRate: "",
    goalsTargetCount: "",
    routineTargetCount: "",
    challengePercent: "",
    roomExplain: "",
    isBookmarked: false,
    openSearchBox: false,
  },
  reducers: {
    setRoomInfo(state, action) {
      const {
        roomId,
        roomTitle,
        roomIntroduction,
        updatedAt,
        roomImg,
        userRoomList,
        totalElements,
        listSize,
        noteList,
        isBookmarked
      } = action.payload;

      state.roomId = roomId;
      state.roomTitle = roomTitle;
      state.roomIntroduction = roomIntroduction;
      state.updatedAt = updatedAt;
      state.roomImg = roomImg;
      state.userRoomList = userRoomList;
      state.totalElements = totalElements;
      state.listSize = listSize;
      state.noteList = noteList;
      state.isBookmarked = isBookmarked;

    },
    setRoomMember(state, action) {
      state.memberInfo = action.payload;
    },

    setChallengePercent(state, action) {
      state.challengePercent = action.payload;
    },
    setRoomTitle(state, action) {
      state.roomTitle = action.payload;
    },
    setRoomExplain(state, action) {
      state.setRoomExplain = action.payload;
    },
    setOpenSearchBox(state, acton) {
      state.openSearchBox = acton.payload;
    },

    resetRoomInfo(state) {
      state.roomId = "";
      state.roomTitle = "";
      state.roomIntroduction = "";
      state.updatedAt = "";
      state.roomImg = "";
      state.userRoomList = "";
      state.totalElements = "";
      state.listSize = "";
      state.noteList = [];
      state.memberInfo = [];
      state.routineAchieveRate = "";
      state.goalsAchieveRate = "";
      state.goalsTargetCount = "";
      state.routineTargetCount = "";
      state.challengePercent = "";
      state.roomExplain = "";
      state.isBookmarked = false;
    },
  },
});

export const selectRoomInfoState = (state) => state.roomInfo;

export const {
  setRoomInfo,
  resetRoomInfo,
  setRoomMember,
  setChallengePercent,
  setRoomTitle,
  setRoomExplain,
  setOpenSearchBox,
} = roomInfo.actions;

export default roomInfo.reducer;
