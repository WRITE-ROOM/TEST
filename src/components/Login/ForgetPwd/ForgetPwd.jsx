import React, { useEffect, useState } from 'react'
import * as S from './ForgetPwd.style'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail } from '../../../redux/user';
import { useNavigate } from 'react-router-dom';

export default function ForgetPwd() {
  const [email, setEmail] = useState('');
  const [isExisted, setIsExisted] = useState(0);
  const user = useSelector((state) => state.user);
  const userEmail = user.userEmail;
  const receivedToken = localStorage.getItem('token');

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const postResetMail = async() => {
    dispatch(setUserEmail({ email: email }));
    try {
      const res = await axios.post(`/auth/sendResetPwdEmail`, {email: email})
      if (res.data.code === "COMMON200")
        setIsExisted(1);
    } catch(error) {
      if (error.response.data.code === "MEMBER4001")
        setIsExisted(2);
      console.log(error)
    }
  }
  return (
    <S.App>
      <S.Container>
        <h1>비밀번호 재설정</h1>
        <p>가입하신 이메일 주소로 비밀번호 재설정 이메일을 보내드릴게요!</p>
        <input 
          placeholder='이메일'
          onChange={(e) => {setEmail(e.target.value)}}/>
        <button onClick={postResetMail}>이메일 보내기</button>
        <h6 onClick={() => {navigate(-1)}}> {"< 이전으로"}</h6>
        {isExisted === 1 && <h3>인증 메일을 전송했어요!</h3>}
        {isExisted === 2 && <h3>존재하지 않는 이메일이예요.</h3>}
      </S.Container>
    </S.App>
  )
}