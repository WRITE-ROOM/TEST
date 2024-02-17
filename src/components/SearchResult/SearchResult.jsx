import * as S from "./SearchResult.style";

import { HiMiniUserCircle } from "react-icons/hi2";
import { ReactComponent as ProjectImg } from "../../assets/writeRoomLogo.svg";
const SearchResult = ({ text }) => {
  return (
    <S.Container>
      <S.Title>
        <ProjectImg />
        <p>{text}</p>
      </S.Title>
      <S.Contents>
        <S.Wrapper>
          <S.InnerWrapper>
            <HiMiniUserCircle color={"#696969"} size={40} />
            <div>
              <p>제리</p>
              <p>2024.02.01</p>
            </div>
            <button>음악</button>
          </S.InnerWrapper>
          <S.PathButton>이동</S.PathButton>
        </S.Wrapper>
        <S.TextBox>
          <h1>노래 플레이리스트</h1>
          <S.TextWrapper>
            <h2>No Pain</h2>
            <h2>|</h2>
            <span>
              이 노래는 이별의 아픔과 함께 흐르는 감정이 담겨 있어, 때로는
              마음을 추스리고 울릴 때가 있다. 강렬한 목소리가 test test test
              test test test test test
            </span>
          </S.TextWrapper>
        </S.TextBox>
      </S.Contents>
    </S.Container>
  );
};

export default SearchResult;
