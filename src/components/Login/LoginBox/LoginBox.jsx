
import React, { useState } from 'react'
import * as S from './LoginBox.style'
import LoginSocial from '../LoginSocial/LoginSocial'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/user'


export default function LoginBox() {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const user = useSelector((state => state.user))

  function saveLocalStorage(token, id) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }

  const postUser = async() => {
    try {
      const res = await axios.post(`/auth/signIn`, {email: email, password: pw}, {
        headers: {
          'Content-Type': 'application/json', 
        }
      })
      let receivedToken = res.data.result.accessToken;
      let receivedId = res.data.result.userId;
      dispatch(setLogin({
        userId: receivedId,
        accessToken: receivedToken
      }
      ))
      saveLocalStorage(receivedToken, receivedId);
      navigate('/main');
      
    } catch(error) {
      if (error.response) {
        if (error.response.data.code === "USER4002" || error.response.data.code === "USER4003")
        window.alert('존재하지 않는 아이디거나 비밀번호가 일치하지 않습니다.')
      }
      console.log(error);
    }
  }


  return (
    <S.App>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.InputInfo>
          <input placeholder='이메일'
          onChange={(e) => {setEmail(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              postUser();
            }
          }}></input>
        </S.InputInfo>
        <S.InputInfo>
          <input placeholder='비밀번호'
          type='password'
          onChange={(e) => {setPw(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              postUser();
            }
          }}></input>
        </S.InputInfo>
        <S.LoginButton>
          <button
          onClick={() => {postUser()}}>로그인</button>
        </S.LoginButton>
        <h5 onClick={() => {navigate("/forgetPwd")}}>비밀번호를 잊으셨나요?</h5>
        <LoginSocial/>
        <S.IsSignup>
          <p>계정이 없으신가요?</p>
          <button
            onClick={() => {
              navigate("/signup");
            }}>회원가입</button>
        </S.IsSignup>
      </S.Container>
    </S.App>
  );
}
