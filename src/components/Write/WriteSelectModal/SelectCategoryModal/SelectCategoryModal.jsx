import React, { useState, useEffect } from "react";
import * as M from "./SelectCategoryModal.style";
import { SimpleContainer } from "../../../Header/Dropdown.style";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import CreateCategory from "../../CreateCategory/CreateCategory";

import {
  setSelectedCategory,
  setCurrentModal,
  setSelectedRoom,
} from "../../../../redux/selectModal";
import { useDispatch, useSelector } from "react-redux";

const SelectCategoryModal = () => {
  const dispatch = useDispatch();

  const [categoryModal, setCategoryModal] = useState(false);

  // 선택한 룸의 카테고리 리스트
  const categories = useSelector((state) => state.category.categoryList);

  // 선택된 카테고리
  const selectedCategory = useSelector(
    (state) => state.selectModal.selectedCategory
  );

  // 카테고리 선택하기
  const handleSelectedCategory = (category) => {
    dispatch(
      setSelectedCategory({
        categoryName: category.categoryName,
        categoryId: category.categoryId,
      })
    );
    // dispatch(setCurrentModal(null));
  };

  return (
    <M.Container>
      <SimpleContainer $width="320px" $top="0" $padding="12px">
        <M.Back>
          <IoIosArrowBack
            size={18}
            onClick={() => {
              dispatch(setCurrentModal("Room"));
            }}
          />
        </M.Back>
        <M.CategoryContainer>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleSelectedCategory(category)}
                style={{
                  color:
                    category.categoryId === selectedCategory.categoryId
                      ? "#9D8870"
                      : "#000",
                }}
              >
                {category.categoryName}
              </li>
            ))}
        </M.CategoryContainer>
        <M.NewCategory onClick={() => setCategoryModal(true)}>
          <FiPlus size={18} />
          <p>카테고리 추가하기</p>
        </M.NewCategory>

        {categoryModal && (
          <CreateCategory setCategoryModal={setCategoryModal} />
        )}
      </SimpleContainer>
    </M.Container>
  );
};

export default SelectCategoryModal;
