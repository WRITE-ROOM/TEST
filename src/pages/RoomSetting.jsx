import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import { useEffect, useState } from "react";
import RoomInputField from "../components/RoomInputField/RoomInputField";
import * as S from "./RoomSetting.style";
import RoomModal from "../components/RoomModal/RoomModal";
import RoomModalSec from "../components/RoomModalSec/RoomModalSec";
import { IoClose } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRoomSettingInfoState,
  setRoomSettingInfo,
  setRoomSettingMember,
  setRoomSettingTitle,
} from "../redux/roomSettingInfo";
import { CiImageOn } from "react-icons/ci";
import { createBrowserHistory } from "history";
import WriteRoomImg from "../assets/writeRoomImg.png";

import axios from "axios";
export const RoomSetting = () => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomSettingInfoSelector = useSelector(selectRoomSettingInfoState);

  const [changedRoomIntroduction, setRoomIntroduction] = useState("");
  const myAuth = roomSettingInfoSelector?.memberInfo?.authority;
  
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const receivedToken = localStorage.getItem("token");
  const params = useParams();
  const roomId = params.roomId;
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  const roomImg = roomSettingInfoSelector.roomImg;
  const modalHandler = () => {
    setOpenModal(true);
  };
  const saveInput = async () => {
    await patchRoomInfo();
    await getRoomInfo();
    setIsSave(true);
    navigate(`/rooms/${roomId}`);
    // window.location.reload();
  };

  const saveModalButton = () => {
    saveInput();
    navigate(`/rooms/${roomId}`);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      setImage(reader.result);
      await encodeFileToBase64(file);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const isImageBlob = (blob) => {
    return blob instanceof Blob && blob.type.startsWith("image/");
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  const getRoomInfo = async () => {
    try {
      const response = await axios.get(`/rooms/${roomId}/list?page=0`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      const data = response.data.result;
      setImage(data.roomImg);
      dispatch(setRoomSettingInfo(data));
    } catch (error) {
      console.error("getRoomTitle 에러:", error);
    }
  };

  const getRoomMemberList = async () => {
    try {
      const response = await axios.get(`/rooms/${roomId}/userRoom`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setRoomSettingMember(response.data.result));
    } catch (error) {
      console.error("이건 getRoomMember 에러:", error);
    }
  };

  const deleteRoom = async () => {
    try {
      await axios.delete(`/rooms/delete/${roomId}`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      navigate("/main");
    } catch (error) {
      console.error("roomDelete 에러:", error);
      console.log(error);
    }
  };

  const makeImgNull = () => {
    setImage(null);
  };
  const patchRoomInfo = async () => {
    const formData = new FormData();
    if (image === null) {
      // null인 경우에 기본 이미지 넣음
      // 근데 텍스트만 수정한 경우에 이미지가 안들어감
      const defaultImage = await fetch(WriteRoomImg).then((res) => res.blob());
      formData.append("roomImg", defaultImage, "WriteRoomImg.png");
    } else if (image === roomImg) {
    } else {
      if (!isImageBlob(image)) {
        const decodedImage = await decodeImage(image);
        const imageExtension = imageName.split(".").pop();
        const blobImage = new Blob([decodedImage], {
          type: `image/${imageExtension}`,
        });
        formData.append("roomImg", blobImage, imageName);
      }
    }
    formData.append(
      "request",
      JSON.stringify({
        roomTitle: roomSettingInfoSelector.roomTitle,
        roomIntroduction: changedRoomIntroduction,
      })
    );
    try {
      const response = await axios.patch(
        `/rooms/updatedRoomInfo/${roomId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!isSave) {
      history.push(null, null, "");

      window.onpopstate = () => {
        setOpenModal2(true);
      };
    } else {
      window.onpopstate = () => {
        // 초기화
      };
    }
  }, [isSave, history]);

  useEffect(() => {
    getRoomInfo();
    getRoomMemberList();
  }, []);
  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="룸 관리" onSave={saveInput} />

        {image ? (
          <>
            {imageSrc ? (
              <S.ImgBox src={imageSrc} alt="preview-img" />
            ) : (
              <>
                <S.ImgBox src={`${roomSettingInfoSelector.roomImg}`} />
                <S.DeleteImgButton>
                  <IoClose size={30} onClick={makeImgNull} />
                </S.DeleteImgButton>
              </>
            )}
          </>
        ) : (
          <S.StyledFileInput>
            <label htmlFor="file">
              <CiImageOn size={40} />
            </label>
            <input
              name="file"
              id="file"
              type="file"
              onChange={handleImageChange}
            />
          </S.StyledFileInput>
        )}
        {
          <RoomInputField
            label="룸 이름"
            value={roomSettingInfoSelector.roomTitle}
            onChange={(title) => dispatch(setRoomSettingTitle(title))}
            maxLength={50}
          />
        }
        <RoomInputField
          label="룸 소개"
          value={changedRoomIntroduction}
          onChange={setRoomIntroduction}
          maxLength={160}
          placeholder="룸 설명을 입력해주세요"
        />
        {myAuth === "MANAGER" && (
          <S.DeleteButton onClick={modalHandler}>룸 삭제</S.DeleteButton>
        )}
        {openModal && (
          <RoomModal
            title1="내가 관리하고 있는 룸이에요."
            title2="정말 룸을 삭제하시겠어요?"
            button2="삭제"
            isOpen={true}
            closeModal={() => setOpenModal(false)}
            deletefunction={deleteRoom}
          />
        )}
        {openModal2 && (
          <RoomModalSec
            title1="수정 내용을 삭제하시겠어요?"
            description="지금 나가면 수정사항이 모두 삭제됩니다."
            button1="삭제하기"
            button2="저장하고 나가기"
            isOpen={true}
            onClick1={() => navigate(`/rooms/${roomId}`)}
            onClick2={() => saveModalButton()}
          />
        )}
      </S.Contents>
    </S.Wrapper>
  );
};
export default RoomSetting;
