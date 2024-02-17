import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from "./UserModal.style"

export default function UserModal({ roomIndex, roomId, userList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  let navigate = useNavigate();

  const openModal = async () => {
    setIsModalOpen(true);
    setIsMenuVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {isMenuVisible && (
        <S.Modal>
          <h5>{userList.length}명의 멤버</h5>
          <div>
            {userList.map((user, index) => (
              <S.User key={index}>
                <S.Users/>
                <p>{user.name}</p>
              </S.User>
            ))}
          </div>
        </S.Modal>
      )
    }
  </div>
  )
}
