import * as S from "./TagSearchBox.style";
import { IoSearchOutline } from "react-icons/io5";

const TagSearchBox = ({ isChange, onClick }) => {
  // 태그 검색 기능 어케 만들지 고민해볼 것
  return isChange ? (
    <S.SearchBox />
  ) : (
    <S.SearchButton onClick={onClick}>
      <IoSearchOutline />
      태그 검색
    </S.SearchButton>
  );
};

export default TagSearchBox;
