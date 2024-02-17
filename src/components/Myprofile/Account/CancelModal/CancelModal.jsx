import React from 'react'
import * as S from "./CancelModal.style"
import { FiCopy } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

export default function CancelModal({isOpen, onClose}) {
	let navigate = useNavigate();
	
	if (!isOpen) return null;
	return (
		<S.ModalBackground>
			<S.Modal>
				<S.Top>
						<S.closeBtn size='30' onClick={onClose}/>
				</S.Top>
				<S.Info>
						<h2>수정 내용을 삭제하시겠어요?</h2>
						<p>지금 나가시면 수정사항이 모두 삭제됩니다.</p>
				</S.Info>
				<S.BtnBox>
						<S.DeleteBtn onClick={() => {navigate('/main')}}>삭제하기</S.DeleteBtn>
						<S.SaveBtn onClick={() => {navigate('/main')}}>저장하고 나가기</S.SaveBtn>
				</S.BtnBox>
			</S.Modal>
		</S.ModalBackground>
	)
}
