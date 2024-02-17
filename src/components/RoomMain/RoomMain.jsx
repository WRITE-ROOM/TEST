import * as S from "./RoomMain.style";
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";

import { useState, useEffect } from "react";
import { setRoomInfo } from "../../redux/roomInfo";
import { selectRoomInfoState } from "../../redux/roomInfo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomMain = ({ openRoomSNB, openSNB }) => {
  const dispatch = useDispatch();
  const receivedToken = localStorage.getItem("token");
  const roomInfoSelector = useSelector(selectRoomInfoState);
  const params = useParams();
  const roomId = params.roomId;

  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  const handlePageChange = (page) => {
    setPage(page);
  };

  const [isTagSearchChange, setIsTagSearchChange] = useState(false);
  const handleTagSearch = () => {
    setIsTagSearchChange(!isTagSearchChange);
  };

  useEffect(() => {
    const getNoteList = async () => {
      try {

        const response = await axios.get(
          `/rooms/${roomId}/list?page=${page - 1}`,
          {
            headers: {
              Authorization: `Bearer ${receivedToken}`,
            },
          }
        );

        dispatch(setRoomInfo(response.data.result));
        setCount(response.data.result.totalElements);
      } catch (error) {
        console.error("getNoteList 에러:", error);
      }
    };
 
    getNoteList();
  }, [page]);

  return (
    <S.Container openRoomSNB={openRoomSNB} openSNB={openSNB}>
      <S.ImgContainer
        openRoomSNB={openRoomSNB}
        openSNB={openSNB}
        src={`${roomInfoSelector.roomImg}`}
      />
      {roomInfoSelector && (
        <S.NoteList>
          <h2>{roomInfoSelector.roomIntroduction}</h2>
          <S.TopBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
            <h1>{roomInfoSelector.roomTitle}</h1>
            <TagSearchBox
              onClick={handleTagSearch}
              isChange={isTagSearchChange}
            />
            <p>{roomInfoSelector.totalElements}개의 노트</p>
          </S.TopBox>

          {roomInfoSelector.noteList &&
            roomInfoSelector.noteList.map((note, index) => (
              <ImageRoomNoteBox
                key={index}
                note={note}
                roomId={roomId}
                openRoomSNB={openRoomSNB}
                openSNB={openSNB}
                noteCoverImg={note.noteImg}
              />
            ))}
        </S.NoteList>
      )}
      {roomInfoSelector.totalElements !== 0 ? (
        <S.PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            prevPageText={"<"}
            nextPageText={">"}
          />
        </S.PaginationBox>
      ) : (
        ""
      )}
    </S.Container>
  );
};

export default RoomMain;
