import React, { useState } from 'react'
import * as S from "./SecessionModal.style"
import SecessionAlert from '../SecessionAlert/SecessionAlert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SecessionModal({isOpen, onClose}) {
	const [showAlert, setShowAlert] = useState(false);
  const receivedToken = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

	let navigate = useNavigate();
	const openAlert= () => {
		setShowAlert(true);
	};

  const deleteSecession = async() => {
    openAlert();
    try {
      const res = await axios.delete(`/users/delete/${userId}` , { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      localStorage.clear();
      navigate(`/`);
      // 추후 온보딩 페이지 만들면 온보딩 페이지로 navigate
    } catch (error) {
      console.log(error);
    }
  }

	if (!isOpen) return null;
	return (
		<div>
			<S.ModalBackground>
				<S.Modal>
					<S.Info>
            <h2>아직 관리하고 있는 룸이 남아있어요!</h2>
            <h2>정말 탈퇴하시겠어요?</h2>
            <p>※ 탈퇴 시 활동했던 기록이 모두 사라지고 재열람이 불가능합니다. ※</p>
					</S.Info>
					<S.BtnBox>
            <S.CancelBtn onClick={onClose}>취소할래요</S.CancelBtn>
            <S.SecessionBtn onClick={deleteSecession}>탈퇴할래요</S.SecessionBtn>
					</S.BtnBox>
				</S.Modal>
			</S.ModalBackground>
			{showAlert && <SecessionAlert/>}
		</div>
	)
}