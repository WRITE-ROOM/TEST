import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  name: "",
  authority: "",
  isAmounting: false,
};

export const roomSettingInfo = createSlice({
  name: "roomSettingInfo",
  initialState,
  reducers: {
    setRoomSettingInfo(state, action) {
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
        routineAchieveRate,
        goalsAchieveRate,
        goalsTargetCount,
        routineTargetCount,
        challengePercent,
        roomExplain,
        name,
        authority,
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
      state.routineAchieveRate = routineAchieveRate;
      state.goalsAchieveRate = goalsAchieveRate;
      state.goalsTargetCount = goalsTargetCount;
      state.routineTargetCount = routineTargetCount;
      state.challengePercent = challengePercent;
      state.roomExplain = roomExplain;
      state.name = name;
      state.authority = authority;
    },

    setRoomSettingMember(state, action) {
      state.memberInfo = action.payload;
    },

    setChallengePercent(state, action) {
      state.challengePercent = action.payload;
    },
    setRoomSettingTitle(state, action) {
      state.roomTitle = action.payload;
    },
    setRoomSettingExplain(state, action) {
      state.roomExplain = action.payload;
    },
    setRoomSettingIsAmounting(state, action) {
      state.isAmounting = action.payload;
    },
    resetRoomSettingInfo() {
      return initialState;
    },
  },
});

export const selectRoomSettingInfoState = (state) => state.roomSettingInfo;

export const {
  setRoomSettingInfo,
  resetRoomSettingInfo,
  setRoomSettingMember,
  setSettingChallengePercent,
  setRoomSettingTitle,
  setRoomSettingExplain,
  setRoomSettingIsAmounting,
} = roomSettingInfo.actions;

export default roomSettingInfo.reducer;