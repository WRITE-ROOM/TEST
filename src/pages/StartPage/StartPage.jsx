import React from "react";
import StartPageImg from "../../assets/startPage.png";
import * as S from "./StartPage.style";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  let navigate = useNavigate();
  return (
    <S.Container>
      <img src={StartPageImg} alt="스타트페이지"></img>
      <h1>글쓰기 연습을 위한 공간</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        시작하기
      </button>
    </S.Container>
  );
}
