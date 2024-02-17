import React from 'react'
import * as S from "./EmailModal.style"

export default function EmailModal({isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div>
			<S.ModalBackground>
				<S.Modal>
          <h1>거의 다 되었어요!</h1>
					<S.Info>
            <h2>이메일이 admin987654321@gmail.com으로 전송되었습니다.</h2>
            <h2>주소 업데이트를 위해 이메일을 확인해주세요.</h2>
					</S.Info>
            <S.Button onClick={onClose}>확인</S.Button>
				</S.Modal>
			</S.ModalBackground>
		</div>
  )
}
