import React from "react";
import { DropdownContainer } from "./Dropdown.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyProfileMenu = () => {
  let navigate = useNavigate();

  const getLogout = async () => {
    try {
      const res = await axios.get(`/auth/logout`);
      localStorage.clear();
      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownContainer>
      <ul>
        <li>
          <a href="/myprofile/account">계정설정</a>
        </li>
        <li>
          <a href="/myprofile/bookmark">북마크</a>
        </li>
        <li onClick={getLogout}>
          <a>로그아웃</a>
        </li>
      </ul>
    </DropdownContainer>
  );
};

export default MyProfileMenu;
