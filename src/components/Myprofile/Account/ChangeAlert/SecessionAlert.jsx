import React, { useEffect } from 'react'
import * as S from "./SecessionAlert.style"
import { useNavigate } from 'react-router-dom';

export default function SecessionAlert() {
	let navigate = useNavigate();
	useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2000);
		
    return () => clearTimeout(timeoutId);
  }, []);

	return (
		<S.ModalBackground>
			<S.Modal>
				<p>정상 탈퇴하였습니다.</p>
			</S.Modal>
		</S.ModalBackground>
	)
}
