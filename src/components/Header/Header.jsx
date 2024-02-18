import React, { useState } from "react";
import * as H from "./Header.style";
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import MyProfileImg from "../../assets/myProfile.png";
import MyProfileMenu from "./MyProfileMenu";
import { useSelector, useDispatch } from "react-redux";
import { setOpenSearchBox } from "../../redux/roomInfo";
import { useLocation } from "react-router-dom";
const Header = ({ themeMode, toggleDarkMode }) => {
  const [isMypageClicked, setMypageClicked] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const profileImg = user.profileImg;
  const openSearchBox = useSelector((state) => state.roomInfo.openSearchBox);
  const currentPath = location.pathname;

  const handleSearchButtonClick = () => {
    if (
      currentPath !== "/login" &&
      currentPath !== "/signup" &&
      currentPath !== "/forgetPwd" &&
      currentPath !== "/reset/pw/:status"
    ) {
      dispatch(setOpenSearchBox(true));
      console.log(openSearchBox);
    }
  };
  const dispatch = useDispatch();
  return (
    <H.HeaderContainer>
      <a href="/main">
        <H.HeaderLogo src={Logo} alt="logo"></H.HeaderLogo>
      </a>

      <H.HeaderRight>
        <H.SearchButton onClick={() => handleSearchButtonClick()}>
          <BiSearch size={20} style={{ color: "#939393" }} />
          <span>검색</span>
        </H.SearchButton>

        <H.LightDarkToggle themeMode={themeMode} onClick={toggleDarkMode}>
          <button></button>
        </H.LightDarkToggle>

        <H.MyProfile onClick={() => setMypageClicked(!isMypageClicked)}>
          {profileImg === null ? (
            <img src={MyProfileImg} alt="myProfileImg" />
          ) : (
            <img src={profileImg} alt="myProfileImg" />
          )}
        </H.MyProfile>

        {isMypageClicked && <MyProfileMenu />}
      </H.HeaderRight>
    </H.HeaderContainer>
  );
};

export default Header;
