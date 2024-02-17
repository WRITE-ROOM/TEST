import * as S from "./CategoryToggle.style";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoom, setSelectedCategory } from "../../redux/selectModal";
import { useNavigate } from "react-router-dom";
import { writeMode } from "../../redux/writeMode";
import { resetNote } from "../../redux/note";
import { resetTag } from "../../redux/tag";
export const CategoryToggle = ({ name, countNote, room, categoryId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    dispatch(
      setSelectedRoom({ roomTitle: room.roomTitle, roomId: room.roomId })
    );
    dispatch(
      setSelectedCategory({ categoryName: name, categoryId: categoryId })
    );
    dispatch(resetNote());
    dispatch(resetTag());
    dispatch(writeMode());

    navigate("/Write");
  };

  const truncateName = (name) => {
    const maxLength = 10;
    return name.length > maxLength
      ? name.substring(0, maxLength) + "..."
      : name;
  };

  return (
    <S.CategoryToggle>
      <S.InfoWrapper>
        <h2>{truncateName(name)}</h2>
        <p>({countNote})</p>
      </S.InfoWrapper>
      <S.IconWrapper onClick={handleCategoryClick}>
        <FiPlus size={20} />
      </S.IconWrapper>
    </S.CategoryToggle>
  );
};
