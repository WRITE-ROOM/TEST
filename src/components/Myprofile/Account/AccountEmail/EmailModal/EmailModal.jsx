import React from 'react'
import * as S from "./EmailModal.style"
import { useNavigate } from 'react-router-dom';

export default function EmailModal({isOpen, onClose, NewEmail}) {
  
  let navigate = useNavigate();
  
  const handleEmail = () => {
    onClose();
    navigate('/myprofile/account');
    window.location.reload();
  }
  if (!isOpen) return null;
  return (
    <div>
			<S.ModalBackground>
				<S.Modal>
          <h1>거의 다 되었어요!</h1>
					<S.Info>
            <h6>이메일이 {NewEmail}으로 전송되었습니다.</h6>
            <h6>주소 업데이트를 위해 이메일을 확인해주세요.</h6>
					</S.Info>
            <S.Button onClick={handleEmail}>확인</S.Button>
				</S.Modal>
			</S.ModalBackground>
		</div>
  )
}
