import { createSlice } from "@reduxjs/toolkit";
const user = createSlice({
  name: 'user',
	initialState: {
		userId : '', userName : '', userEmail: '', userPw : '', accessToken: '',
		joinType: '', profileImg: '', createdAt: '', updatedAt: ''
	},
	reducers : {
		setUser(state, action) { // 로그인
			const { userName, userEmail, userPw} = action.payload;
			state.userName = userName;
			state.userEmail = userEmail;
			state.userPw = userPw;
		},
		setLogin(state, action) {
			const {userId, accessToken} = action.payload;
			state.userId = userId;
			state.accessToken = accessToken;
		},
		setAccount(state, action) { // 계정설정
			const { userId, userName, profileImg, userEmail, joinType} = action.payload;
			state.userId = userId;
			state.userName = userName;
			state.profileImg = profileImg;
			state.userEmail = userEmail;
			state.joinType = joinType;
		},
		setUserEmail(state, action) {
			const {userEmail} = action.payload;
			state.userEmail = userEmail;
		},
	}
})

export const { setUser, setLogin, setAccount, setUserEmail } = user.actions;
export default user.reducer;
