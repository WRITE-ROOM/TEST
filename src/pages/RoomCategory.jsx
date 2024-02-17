import * as S from "./RoomCategory.style";
import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import RoomModal from "../components/RoomModal/RoomModal";
import { FiCopy } from "react-icons/fi";
import { useEffect, useState } from "react";
import CreateCategory from "../components/Write/CreateCategory/CreateCategory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoomId } from "../redux/selectModal";
import axios from "axios";
import { setCategory } from "../redux/category";
import { StyledButton } from "./Write.style";

const RoomCategory = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("제목 없음");
  const [categoryModal, setCategoryModal] = useState(false);
  const [isDeleteCategory, setIsDeleteCategory] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const maxLength = 50;
  const inputCount = inputValue.length;
  const roomId = useParams().roomId;

  const modalHandler = () => {
    dispatch(setSelectedRoomId(roomId));
    setCategoryModal(true);
  };

  const deleteCategoryHandler = () => {
    setIsDeleteCategory(true);
  };

  const accessToken = localStorage.getItem("token");

  const fetchCategoryList = async () => {
    try {
      const res = await axios.get(
        `https://dev.writeroom.shop/categorys/category/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("get", res.data);
      // 해당 룸의 카테고리 리스트로 category redux 설정
      // const categoryList = res.data.result.categoryList;
      dispatch(setCategory(res.data.result.categoryList));
      // console.log("categoryList", categoryList);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async () => {
    try {
      const res = await axios.patch(
        `https://dev.writeroom.shop/categorys/updated/${categoryId}`,
        { categoryName: categoryName },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("patch", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryList = useSelector((state) => state.category.categoryList);
  console.log(categoryList);

  // 수정 페이지 열기
  const handleEditPage = (category) => {
    if (category) {
      setEditPage(true);
      setCategoryId(category.categoryId);
      setCategoryName(category.categoryName);
    }
  };

  // 수정 저장
  const handleSave = () => {
    updateCategory();
    setEditPage(false);
    window.location.reload();
  };

  const deleteCategory = async () => {
    try {
      const res = await axios.delete(
        `https://dev.writeroom.shop/categorys/${roomId}/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("del", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    deleteCategory();
    setIsDeleteCategory(false);
    setEditPage(false);
    window.location.reload();
  };

  useEffect(() => {
    fetchCategoryList();
    setEditPage(false);
  }, [categoryList.length]);

  return (
    <S.Wrapper>
      <RoomSettingSNB />

      <S.Contents>
        <RoomSettingNavbar title="카테고리 관리" hideSaveButton={true} />

        {editPage === false && (
          <S.Page>
            <S.CategoryList>
              {/* 빠른 노트는 수정 불가 */}
              {categoryList.length > 0 &&
                categoryList.map((category, index) => (
                  <S.CategoryBar
                    key={index}
                    onClick={() =>
                      index !== 0 ? handleEditPage(category) : null
                    }
                  >
                    {category.categoryName}
                    <p>({category.countNote}개의 노트)</p>
                  </S.CategoryBar>
                ))}
              <S.CategoryButton onClick={modalHandler}>
                카테고리 추가하기
              </S.CategoryButton>
            </S.CategoryList>
            {categoryModal && (
              <CreateCategory setCategoryModal={setCategoryModal} />
            )}
          </S.Page>
        )}

        {editPage && (
          <S.Page>
            <S.EditCategoryInput
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <S.ButtonWrapper>
              <S.DeleteButton onClick={deleteCategoryHandler}>
                삭제하기
              </S.DeleteButton>
              <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
            </S.ButtonWrapper>

            {isDeleteCategory && (
              <S.Background>
                <S.Modal>
                  <S.Text>
                    <h3>카테고리를 정말 삭제하시겠어요?</h3>
                    <p>
                      카테고리에 있는<strong> 모든 노트</strong>들도 함께
                      삭제돼요. 정말 삭제하시겠어요?
                    </p>
                  </S.Text>

                  <S.Buttons>
                    <S.StyledButton
                      $backgroundColor={"#e5e5e5"}
                      onClick={() => setIsDeleteCategory(false)}
                    >
                      취소
                    </S.StyledButton>

                    <S.StyledButton onClick={() => handleDelete()}>
                      삭제하기
                    </S.StyledButton>
                  </S.Buttons>
                </S.Modal>
              </S.Background>

              // <RoomModal
              //   title1="카테고리를 정말 삭제하시겠어요?"
              //   description="카테고리에 있는 모든 노트들도 함께 삭제돼요."
              //   description2="정말 삭제하시겠어요?"
              //   button2="삭제하기"
              // />
            )}
          </S.Page>
        )}
      </S.Contents>

      {/* {isModalOpen && (
        <S.ModalBackGround>
          <S.CategoryModal>
            <S.ModalTitleWrapper>
              <h1>카테고리 추가하기</h1>
              <S.CloseIcon size={30} onClick={modalHandler} />
            </S.ModalTitleWrapper>
            <p>룸 이름</p>
            <S.InputWrapper>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxLength}
              />
              <span>
                {inputCount}/{maxLength}
              </span>
            </S.InputWrapper>
            <S.ModalButton>
              <FiCopy size={20} />
              링크 복사
            </S.ModalButton>
          </S.CategoryModal>
        </S.ModalBackGround>
      )} */}
    </S.Wrapper>
  );
};
export default RoomCategory;
