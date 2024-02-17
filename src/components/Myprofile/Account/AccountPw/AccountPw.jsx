import React, { useState } from 'react'
import * as S from "../Account.style";
import * as R from "../AccountEmail/AccountEmail.style";
import * as Q from "./AccountPw.style";
import { useNavigate } from 'react-router-dom';
import MyprofileSNB from '../../MyprofileSNB/MyprofileSNB';
import axios from 'axios';

export default function AccountPw() {
  const [pwd, setPwd] = useState(''); // 현재 비밀번호
  const [newPwd, setNewPwd] = useState(''); // 새 비밀번호
  const [isPwMatch, setIsPwMatch] = useState(true); // 현재 비밀번호와 일치 여부
  const [isNewPwMatch, setIsNewPwMatch] = useState(true); // 새 비밀번호와 일치 여부
  const [pwErr, setPwErr] = useState(true); // 새 비밀번호 유효성 검사

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
	const receivedToken = localStorage.getItem('token');
  
  const patchPwd = async() => {
    setPwErr(passwordRegex.test(pwd));
    if (isNewPwMatch && pwErr) {
      try {
        const res = await axios.patch(`/users/password`, {password: pwd, updatePwd: newPwd} , {
          headers: {
            'Authorization': `Bearer ${receivedToken}`
          },
        })
        window.alert('비밀번호가 변경되었습니다!');
        navigate('/myprofile/account')
      } catch(error) {
        if (error.response.data.code === "USER4003") 
          setIsPwMatch(false);
        console.log(error)
      }
    }
  }

  let navigate = useNavigate();
  return (
    <S.Container>
      <MyprofileSNB/>
      <S.Info>
        <R.Top>
          <R.BackBtn size='30' onClick={() => {navigate(-1)}}/>
          <p>비밀번호 변경</p>
        </R.Top>
        <R.CurrentEmail>
          <h2>현재 비밀번호</h2>
          <input type='password' 
            placeholder='현재 비밀번호를 입력하세요.'
            onChange={(e) => {setPwd(e.target.value)}}></input>
          {!isPwMatch ? <h6>현재 비밀번호가 일치하지 않습니다.</h6> : null}
        </R.CurrentEmail>
        <Q.NewPw>
          <div style={{height: '160px'}}>
            <h2>새 비밀번호</h2>
            <input type='password'
              placeholder='새 비밀번호(영문, 숫자, 특문 중 2개 조합 10자 이상)'
              onChange={(e) => {setNewPwd(e.target.value)}}></input>
            {!pwErr ? <p>영문, 숫자, 특수문자를 조합하여 10자 이상 입력해주세요.</p> : null}
          </div>
          <div style={{height: '160px'}}>
            <h2>새 비밀번호 확인</h2>
            <input type='password' 
              placeholder='새 비밀번호 확인'
              onChange={(e) => {setIsNewPwMatch(e.target.value === newPwd)}}></input>
            {!isNewPwMatch ? <p>비밀번호가 일치하지 않습니다.</p> : null}
          </div>
        </Q.NewPw>
        <Q.SaveBtn onClick={patchPwd}>변경 내용 저장</Q.SaveBtn>
      </S.Info>
    </S.Container>
  )
}
