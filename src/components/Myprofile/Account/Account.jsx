import React, { useEffect, useState } from 'react'
import * as S from "./Account.style";
import MyprofileSNB from '../MyprofileSNB/MyprofileSNB';
import { HiMiniUserCircle } from "react-icons/hi2";
import {useNavigate} from "react-router-dom"
import CancelModal from './CancelModal/CancelModal';
import SecessionModal from './SecessionModal/SecessionModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../../redux/user';
import myProfile from '../../../assets/myProfile.png'

export default function Account() {
  const user = useSelector((state) => state.user);
  const userName = user.userName;
  const profileImg = user.profileImg;
  const userEmail = user.userEmail;
  const joinType = user.joinType;
  
  const [name, setName] = useState(userName);
  const [image, setImage] = useState(profileImg);
  const [imageName, setImageName] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSecessionModalOpen, setIsSecessionModalOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const userId = localStorage.getItem('id');
	const receivedToken = localStorage.getItem('token');

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const openCancelModal = () => {
      setIsCancelModalOpen(true);
  };
  const closeCancelModal = () => {
      setIsCancelModalOpen(false);
  };
  const openSecessionModal = () => {
      setIsSecessionModalOpen(true);
  };
  const closeSecessionModal = () => {
      setIsSecessionModalOpen(false);
  };

  const getLogout = async() => {
    try {
      const res = await axios.get(`/auth/logout`);
      localStorage.clear();
      navigate(`/`);
      // 추후 온보딩 페이지 만들면 온보딩 페이지로 navigate
    } catch (error) {
      console.log(error);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const isImageBlob = (blob) => {
    return blob instanceof Blob && blob.type.startsWith('image/');
  };

  const patchUserInfo = async () => {
    setIsSave(true)
    const formData = new FormData();
    if (image === null) {
      const defaultImage = await fetch(myProfile).then((res) => res.blob());
      formData.append("userImg", defaultImage, "myProfile.png");
    }
    else if (image === profileImg) {
      console.log('.')
    }
    else {
      if (!isImageBlob(image)) {
        const decodedImage = await decodeImage(image);
        const imageExtension = imageName.split('.').pop();
        const blobImage = new Blob([decodedImage], { type: `image/${imageExtension}` });
        formData.append("userImg", blobImage, imageName);
      }
    }
    formData.append('request', JSON.stringify({nickName: name}));
    try {
      const res = await axios.patch(`/users/update/myProfile`, formData, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
          },
       });
      
    } catch (error) {
      console.error(error);
    } 
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };


return (
  <div>
    <S.Container>
      <MyprofileSNB/>
      <S.Info>
        <S.Top>
          <p>계정 설정</p>
          <S.CloseBtn size='30' onClick={openCancelModal}/>
        </S.Top>
        <S.Title>프로필</S.Title>
        <S.ProfileBox>
          {image ? (
            <label htmlFor="input-file">
              <img src={image} alt="Uploaded" />
            </label>
            ) : (
              <label htmlFor="input-file">
                <HiMiniUserCircle 
                style={{cursor: 'pointer'}} size='200px' color="rgba(229, 229, 229, 1)"/>
              </label>
            )
          }
          <input style={{display:'none'}}type="file" id="input-file" onChange={handleImageChange} />
          <S.ProfileRight>
            <h6>사용자 이름</h6>
            <input 
              placeholder='필수 입력 항목입니다'
              value={name ?? ''}
              onChange={(e) => {setName(e.target.value)}}
              >
              </input>
              <h5>{(name ?? '').length}/50</h5>
            <button onClick={patchUserInfo}>저장하기</button>
            {isSave && <p>저장되었습니다!</p>}
          </S.ProfileRight>
          </S.ProfileBox>
          <S.Title>로그인 정보</S.Title>
          <S.LoginInfo>
            <S.LoginWrapper>
              <p>이메일</p>
              <p>{userEmail}</p>
              {joinType === "BASIC" && (
                <button onClick={() => {navigate('/myprofile/account/email')}}>
                  이메일 주소 변경
                </button>
              )}
            </S.LoginWrapper>
            <S.LoginWrapper>
              <p>비밀번호</p>
              <p/>
              {joinType === "BASIC" && (
                <button onClick={() => {navigate('/myprofile/account/pw')}}>
                  비밀번호 변경
                </button>
              )}
            </S.LoginWrapper>
          </S.LoginInfo>
          <S.Line/>
          <S.Bottom>
            <button onClick={getLogout}>로그아웃</button>
            <p onClick={openSecessionModal}>탈퇴하기</p>
          </S.Bottom>
        </S.Info>
    </S.Container>
    <CancelModal isOpen={isCancelModalOpen} onClose={closeCancelModal}/>
    <SecessionModal isOpen={isSecessionModalOpen} onClose={closeSecessionModal}/>
    </div>
  )
}
