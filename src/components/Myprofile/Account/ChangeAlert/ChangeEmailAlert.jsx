import React, { useEffect } from 'react'
import * as S from "./ChangeAlert.style"
import { useNavigate } from 'react-router-dom';

export default function SecessionAlert() {
	let navigate = useNavigate();
	return (
		<S.ModalBackground>
			<S.Modal>
				<p>이메일 변경을 완료했어요!</p>
			</S.Modal>
		</S.ModalBackground>
	)
}
