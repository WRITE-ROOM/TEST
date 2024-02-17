import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import * as C from "./CreateCategory.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/category";
import {
  setCurrentModal,
  setSelectedCategoryName,
} from "../../../redux/selectModal";

const CreateCategory = ({ setCategoryModal }) => {
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.selectModal.selectedRoom.roomId);

  const [newCategory, setNewCategory] = useState("");
  const categoryList = useSelector((state) => state.category.categoryList);

  const accessToken = localStorage.getItem("token");

  const postCategory = async () => {
    try {
      const res = await axios.post(
        `/categorys/create/${roomId}`,
        { categoryName: newCategory },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(
        setCategory([
          ...categoryList,
          { categoryName: newCategory, categoryId: null, countNote: 0 },
        ])
      );
      dispatch(setCurrentModal(null));
      dispatch(setSelectedCategoryName(newCategory));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateCategory = () => {
    postCategory();
    setCategoryModal(false);
  };

  return (
    <C.Background>
      <C.Container>
        <C.Header>
          <h1>카테고리 추가하기</h1>
          <IoClose
            size={20}
            onClick={() => setCategoryModal(false)}
            style={{ cursor: "pointer" }}
          />
        </C.Header>

        <C.CategoryName>
          <p>카테고리 이름</p>
          <input
            type="text"
            placeholder="카테고리 이름을 작성해주세요"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </C.CategoryName>

        <C.CreateButton onClick={() => handleCreateCategory()}>
          카테고리 만들기
        </C.CreateButton>
      </C.Container>
    </C.Background>
  );
};

export default CreateCategory;
