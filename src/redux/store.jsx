import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import { room } from "./room";
import tagSlice from "./tag";
import selectModalSlice from "./selectModal";
import categorySlice from "./category";
import noteSlice from "./note";
import { bookmark } from "./bookmark";
import noteListSlice from "./noteList";
import writeModeSlice from "./writeMode";
import roomInfoSlice from "./roomInfo";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import noteBookmark from "./noteBookmark";
import wordBookmark from "./wordBookmark";

import userListSlice from "./userList";
import selectedMemberSlice from "./selectedMember";
import challengeSlice from "./challenge";
import roomSettingInfoSlice from "./roomSettingInfo";

const reducers = combineReducers({
  user: user,
  room: room.reducer,
  tag: tagSlice,
  selectModal: selectModalSlice,
  category: categorySlice,
  note: noteSlice,
  bookmark: bookmark.reducer,
  noteBookmark: noteBookmark,
  wordBookmark: wordBookmark,
  noteList: noteListSlice,
  writeMode: writeModeSlice,
  roomInfo: roomInfoSlice,
  roomSettingInfo: roomSettingInfoSlice,
  selectedMember: selectedMemberSlice,
  userList: userListSlice,
  challenge: challengeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "noteBookmark", "roomInfo"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
