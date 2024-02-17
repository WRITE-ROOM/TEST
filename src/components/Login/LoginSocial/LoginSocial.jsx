import React from 'react'
import * as S from './LoginSocial.style'
import Google from '../../../assets/google.png'
import Kakao from '../../../assets/kakao.png'
import Naver from '../../../assets/naver.png'

export default function LoginSocial() {
	const K_REST_API_KEY = process.env.REACT_APP_REST_API
    const K_REDIRECT_URI = "http://localhost:3000/oauth";
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
      window.location.href = kakaoURL;
    }

  return (
		<S.Container>
			<button> 
				<S.SocialImg src={Google} alt="google"/>
			</button>
			<button onClick={handleKakaoLogin}>
				<S.SocialImg src={Kakao} alt="kakao"/>
			</button>
			<button>
				<S.SocialImg src={Naver} alt="naver"/>
			</button>
		</S.Container>
	)
}
