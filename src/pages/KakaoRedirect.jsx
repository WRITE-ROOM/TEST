import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Redirect() {
  const code = new URL(window.location.href).searchParams.get("code");

  let navigate = useNavigate();

  function saveLocalStorage(token, id) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }

  const fetchKakaoData = async () => {
    try {
      const res = await axios.post(`/api/auth/kakao?authCode=${code}`, {});
      console.log(res.data);
      const receivedToken = res.data.accessToken;
      const userId = res.data.userId;
      saveLocalStorage(receivedToken, userId);
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKakaoData();
  }, []);
  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h2> 로그인 중입니다...</h2>
    </div>
  );
}
