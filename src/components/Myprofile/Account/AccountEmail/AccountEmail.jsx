import React, { useEffect, useState } from 'react'
import * as S from "../Account.style";
import * as R from "./AccountEmail.style";
import MyprofileSNB from '../../MyprofileSNB/MyprofileSNB';
import { useNavigate } from 'react-router-dom';
import EmailModal from './EmailModal/EmailModal';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AccountEmail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const user = useSelector((state) => state.user);
  const receivedToken = localStorage.getItem('token')

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  let navigate = useNavigate();

  const patchEmail = async() => {
    openModal();
    try {
      const res = await axios.patch(`/users/email`, {email: newEmail}, 
      {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setCurrentEmail(user.userEmail);
  }, [])

  return (
    <S.Container>
			<MyprofileSNB/>
				<S.Info>
					<R.Top>
						<R.BackBtn size='30' onClick={() => {navigate(-1)}}/>
						<p>이메일 주소 변경</p>
					</R.Top>
					<R.CurrentEmail>
						<h2>현재 이메일 주소</h2>
						<p>{user.userEmail}</p>
					</R.CurrentEmail>
					<R.NewEmail>
						<h2>새 이메일 주소</h2>
						<input placeholder='새 이메일을 입력하세요.'
            onChange={(e) => setNewEmail(e.target.value)}></input>
            <button onClick={patchEmail}>이메일 변경하기</button>
          </R.NewEmail>
				</S.Info>
        <EmailModal isOpen={isModalOpen} onClose={closeModal}/>
    </S.Container>
  )
}
