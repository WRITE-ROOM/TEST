import React from 'react'
import * as S from './SignupBox.style'
import { useNavigate } from 'react-router-dom'
import SignupInput from '../SignupInput/SignupInput'
import SignupCheck from '../SignupCheck/SignupCheck'
import SignupSocial from '../SignupSocial/SignupSocial'
import Header from '../../Header/Header'

export default function SignupBox() {
  let navigate = useNavigate();

  return (
    <div>
    <S.App>
			<S.Container>
				<S.Title>회원가입</S.Title>
				<SignupInput></SignupInput>
        <SignupSocial></SignupSocial>
        <S.SNSInfo>
        SNS 로그인 및 회원가입 시 라이트룸 이용약관과 개인정보 수집 및 이용에 동의한 것으로 간주합니다.
        </S.SNSInfo>
        <S.IsLogin>
          <p>계정이 있으신가요?</p>
          <button onClick={() => {navigate('/login')}}>로그인</button>
        </S.IsLogin>
			</S.Container>
    </S.App>
    </div>
  );
}
