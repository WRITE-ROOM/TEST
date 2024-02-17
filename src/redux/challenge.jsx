import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    userName: "",
    challengeId: null,
    achieveCount: null,
    userList: [],
    targetCount: null,
    startDate: "",
    deadline: "",
  },
  reducers: {
    setChallenge(state, action) {
      const { userList, targetCount, startDate, deadline } = action.payload;
      state.userList = userList;
      state.targetCount = targetCount;
      state.startDate = startDate;
      state.deadline = deadline;
    },
    setChallengeData(state, action) {
      const {
        userName,
        challengeId,
        achieveCount,
        userList,
        targetCount,
        startDate,
        deadline,
      } = action.payload;
      state.userName = userName;
      state.challengeId = challengeId;
      state.achieveCount = achieveCount;
      state.userList = userList;
      state.targetCount = targetCount;
      state.startDate = startDate;
      state.deadline = deadline;
    },
  },
});
export const { setChallenge, setChallengeData } = challengeSlice.actions;
export default challengeSlice.reducer;
