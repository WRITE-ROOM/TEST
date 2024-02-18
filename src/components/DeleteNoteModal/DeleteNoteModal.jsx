import React from "react";
import * as R from "../RoomModal/RoomModal.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteNoteModal = ({ noteId, roomId, setOpenModal }) => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const deleteNote = async () => {
    try {
      const res = await axios.delete(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setOpenModal(false);
      navigate(`/rooms/${roomId}`);
      window.location.reload();
      alert("노트가 삭제되었어요");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <R.Background>
      <R.Container $height="240px">
        <h1>노트를 정말 삭제하시겠어요?</h1>
        <h2>노트를 삭제하면 다시 열람할 수 없어요</h2>
        <R.ButtonWrapper>
          <R.CancelButton onClick={() => setOpenModal(false)}>
            취소
          </R.CancelButton>
          <R.DeleteButton onClick={deleteNote}>삭제</R.DeleteButton>
        </R.ButtonWrapper>
      </R.Container>
    </R.Background>
  );
};

export default DeleteNoteModal;
