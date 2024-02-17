import { createSlice } from "@reduxjs/toolkit";

export const room = createSlice({
  name: "room",
  initialState: {
    room: [], // 각 방의 정보를 배열로 관리
  },
  reducers: {
    setRoom(state, action) {
      const { roomId, roomTitle, updatedAt, roomImg, userRoomList } =
        action.payload;
      state.room.push({ roomId, roomTitle, updatedAt, roomImg, userRoomList }); // 새로운 방 정보를 배열에 추가
    },
    resetRoom(state) {
      state.room = [];
    },
  },
});


const selectRoomState = (state) => state.room;
export const selectRoomIds = (state) =>
  selectRoomState(state).room.map((room) => room.roomId);

export const { setRoom, resetRoom } = room.actions;
export default room.reducer;

//임시 redux
