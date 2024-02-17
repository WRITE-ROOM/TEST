import React from 'react'
import * as S from "./AccountNone.style";
import { useNavigate } from 'react-router-dom';

export default function AccountNone() {
  let navigate = useNavigate();
  return (
    <S.ModalBackground>
        <S.Modal>
          <S.Title>
            <h1>아직 준비중인 화면이예요</h1>
            <h1>조금만 기다려주세요!</h1>
          </S.Title>
            <button onClick={() => {navigate(-1)}}>닫기</button>
        </S.Modal>
    </S.ModalBackground>
  )
}
