import React, { useEffect, useState } from 'react'
import * as S from './ForgetPwd.style'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail } from '../../../redux/user';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function ForgetPwd() {
  const [email, setEmail] = useState('');
  const [isExisted, setIsExisted] = useState(0);
  const user = useSelector((state) => state.user);
  const userEmail = user.userEmail;
  const receivedToken = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const postResetMail = async() => {
    setLoading(true);
    dispatch(setUserEmail({ email: email }));
    try {
      const res = await axios.post(`https://dev.writeroom.shop/auth/sendResetPwdEmail`, {email: email})
      if (res.data.code === "COMMON200") {
        setIsExisted(1);
        setLoading(false);
      }
    } catch(error) {
      if (error.response.data.code === "MEMBER4001")
        setIsExisted(2);
      console.log(error)
      setLoading(false);
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
        {loading && <ClipLoader color="rgba(181, 169, 148, 1)"/>}
        {isExisted === 1 && <div>비밀번호 재설정 이메일이 전송되었어요!</div>}
        {isExisted === 2 && <div>입력한 이메일 주소로 가입한 계정을 찾을 수 없어요.</div>}
      </S.Container>
    </S.App>
  )
}