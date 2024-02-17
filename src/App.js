import {
  Routes,
  Route,
  unstable_HistoryRouter,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPwdPage from "./pages/ForgetPwdPage.jsx";
import Redirect from "./pages/KakaoRedirect";
import Main from "./pages/Main";
import RoomPage from "./pages/RoomPage.jsx";
import RoomSetting from "./pages/RoomSetting.jsx";
import RoomMember from "./pages/RoomMember.jsx";
import Header from "./components/Header/Header.jsx";
import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";

import RoomChallenge from "./pages/RoomChallenge.jsx";
import RoomCategory from "./pages/RoomCategory.jsx";
import MyprofileAccount from "./pages/MyprofileAccount.jsx";
import MyProfile from "./pages/Myprofile.jsx";
import MyprofilePw from "./pages/MyprofilePw.jsx";
import MyBookmarkPage from "./pages/MyBookmarkPage.jsx";
import ResetPwdPage from "./pages/ResetPwdPage.jsx";
import MyprofileNone from "./pages/MyprofileNone.jsx";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme.jsx";
import StartPage from "./pages/StartPage/StartPage.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

const GlobalStyle = createGlobalStyle`
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    border-color: ${(props) => props.theme.borderColor};
  }  
`;

function App() {
  const location = useLocation(); // useLocation 훅을 사용하여 현재 경로를 동적으로 감지
  const currentPath = location.pathname;

  const localThemeMode = window.localStorage.getItem("theme") || "lightTheme";
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  const toggleDarkMode = () => {
    if (themeMode === "lightTheme") {
      setThemeMode("darkTheme");
      window.localStorage.setItem("theme", "darkTheme");
    } else {
      setThemeMode("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        {currentPath === "/rooms" && <SearchBox />}
        {currentPath !== "/login" &&
          currentPath !== "/signup" &&
          currentPath !== "/forgetPwd" &&
          currentPath !== "/reset/pw/:status" &&
          currentPath !== "/" && (
            <Header themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
          )}
        <Routes>
          <Route path="/" element={<StartPage />} />

          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
          <Route path="/rooms/setting/:roomId" element={<RoomSetting />} />
          <Route path="/rooms/member/:roomId" element={<RoomMember />} />
          <Route path="/rooms/challenge/:roomId" element={<RoomChallenge />} />
          <Route path="/rooms/category/:roomId" element={<RoomCategory />} />

          <Route path="/write" element={<Write />} />
          <Route path="/rooms/:roomId/notes" element={<Note />} />
          <Route path="/rooms/:roomId/notes/:noteId" element={<Note />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPwd" element={<ForgetPwdPage />} />
          {/* reset/pw/currentEmail : 로그인 시 비밀번호 재설정
          reset/pw/newEmail : 본인이 아닌 경우 비밀번호 재설정  */}
          <Route path="/reset/pw/:status" element={<ResetPwdPage />} />
          <Route path="/oauth" element={<Redirect />} />
          <Route path="/main" element={<Main />} />

          <Route path="/myprofile/account" element={<MyProfile />} />
          <Route
            path="/myprofile/account/email"
            element={<MyprofileAccount />}
          />
          <Route path="/myprofile/account/pw" element={<MyprofilePw />} />
          <Route path="/myprofile/bookmark" element={<MyBookmarkPage />} />
          <Route path="/myprofile/none" element={<MyprofileNone />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
