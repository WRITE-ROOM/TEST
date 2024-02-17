import React, { useState } from 'react'
import * as S from './SignupInput.style'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignupCheck from '../SignupCheck/SignupCheck';

export default function SignupInput() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isPwMatch, setIsPwMatch] = useState(true);

	const [isNameErr, setNameErr] = useState(true);
	const [isEmailErr, setEmailErr] = useState(true);
	const [isPwErr, setPwErr] = useState(true);

  const [isAllCheck, setIsAllCheck] = useState();

	const user = useSelector((state) => state.user);
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  const nameRegex = /.+/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


  let navigate = useNavigate();
	let dispatch = useDispatch();

  const postUser = async() => {
    try {
      if (nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password) && isPwMatch) {
         if (isAllCheck) {
           const res = await axios.post(`/auth/signUp`, {nickname: name, email: email, password: password});
           window.alert('라이트룸에 오신 것을 환영합니다! 로그인창으로 이동합니다 :)');
           navigate('/login')
         }
         else {
          window.alert('모든 이용약관에 동의해주세요.');
         }
      }
    } catch(error) {
      if (error.response.data.code === "USER4004")
        window.alert('이미 존재하는 이메일입니다.');
      console.log(error);
    }
  }
	
  const handleSignupClick = async () => {
    setNameErr(nameRegex.test(name));
    setEmailErr(emailRegex.test(email));
    setPwErr(passwordRegex.test(password));
    if (isNameErr && isEmailErr && isPwErr && isPwMatch) {
      try {
        dispatch(setUser({
          userName: name,
          userEmail: email,
          userPw: password
        }));
        await postUser();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAllCheckChange = (allCheck) => {
    setIsAllCheck(allCheck)
  };
  
  return (
	<div>
		<S.Container>
			<S.InputInfo>
				<input placeholder='닉네임' 
				onChange={(e) => {setName(e.target.value)}}></input>
				{!isNameErr ? <p>닉네임을 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input placeholder='이메일(example@gmail.com)' 
				onChange={(e) => {setEmail(e.target.value)}}></input>
				{!isEmailErr ? <p>이메일을 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input type="password"
				placeholder='비밀번호(영문, 숫자, 특문 조합 10자 이상)'
				onChange={(e) => {setPassword(e.target.value)}}/>
				{(!isPwErr) ? <p>영문, 숫자, 특수문자를 조합하여 10자 이상 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input type="password"
				placeholder='비밀번호 확인'
				onChange={(e) => {setIsPwMatch(e.target.value === password)}}/>
				{!isPwMatch && <p>비밀번호가 일치하지 않습니다.</p>}
			</S.InputInfo>
		</S.Container>
		<S.SignupButton>
      <button
      onClick={handleSignupClick}>가입하기</button>
    </S.SignupButton>
    <SignupCheck onAllCheckChange={handleAllCheckChange} />
	</div>
  )
}
