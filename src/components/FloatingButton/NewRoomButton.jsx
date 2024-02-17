import React, { useState } from "react";
import { FloatingButton } from "./FloatingButton.style";
import NewRoomLogo from "../../assets/NewRoomLogo.png";
import ToolTip from "../ToolTip/ToolTip";
import NewRoomModal from "../Main/NewRoomModal/NewRoomModal";

const NewRoomButton = () => {
  // 호버 시 ToolTip 열기/닫기
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButton = () => {
    openModal();
  };

  return (
    <div>
      <FloatingButton
        $right="130px"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onClick={() => handleButton()}
      >
        <img src={NewRoomLogo} alt="NewRoomLogo" />

        {isTooltipVisible && <ToolTip message="룸 생성하기" />}
      </FloatingButton>
      {isModalOpen && <NewRoomModal onClose={closeModal} />}
    </div>
  );
};

export default NewRoomButton;
