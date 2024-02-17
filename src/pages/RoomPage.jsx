import RoomSNB from "../components/RoomSNB/RoomSNB.jsx";
import RoomMain from "../components/RoomMain/RoomMain.jsx";
import RecTopic from "../components/RecTopic/RecTopic.jsx";
import RecTopicClose from "../components/RecTopicClose/RecTopicClose.jsx";
import { useEffect, useState } from "react";
import NewNoteButton from "../components/FloatingButton/NewNoteButton.jsx";
import NewRoomButton from "../components/FloatingButton/NewRoomButton.jsx";
import * as S from "./RoomPage.style.js";
import SearchBox from "../components/SearchBox/SearchBox.jsx";

const RoomPage = () => {
  const [isRoomSNBOpen, setIsRoomSNBOpen] = useState(true);
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  const handleRoomSNB = () => {
    setIsRoomSNBOpen((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <SearchBox />

        <RoomSNB handleRoomSNB={handleRoomSNB} isOpen={isRoomSNBOpen} />
        <RoomMain openRoomSNB={isRoomSNBOpen} openSNB={isSNBOpen} />
        {isSNBOpen ? (
          <RecTopic onToggle={toggleSNB}></RecTopic>
        ) : (
          <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
        )}
      </S.Wrapper>
      \ <NewNoteButton />
    </>
  );
};

export default RoomPage;
