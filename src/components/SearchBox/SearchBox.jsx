import { useState, useEffect } from "react";
import * as S from "./SearchBox.style";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";
import SearchToggle from "../SearchToggle/SearchToggle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSearchBox } from "../../redux/roomInfo";

const SearchBox = () => {
  const [isMemberToggleOpen, setIsMemberToggleOpen] = useState(false);
  const [isRangeToggleOpen, setIsRangeToggleOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isResult, setIsResult] = useState("");
  const [isSearchType, setIsSearchType] = useState("title");
  const dispatch = useDispatch();
  const receivedToken = localStorage.getItem("token");

  const openSearchBox = useSelector((state) => state.roomInfo.openSearchBox);

  useEffect(() => {
    const delayDebounceTimer = setTimeout(async () => {
      try {
        await getSearchData(search, isSearchType);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceTimer);
  }, [search, isSearchType]);

  const getSearchData = async (searchWord, searchType) => {
    try {
      const response = await axios.get(
        `/search/?searchWord=${searchWord}&${searchType}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      setIsResult(response);
    } catch (error) {
      console.log(error);
    }
  };

  const searchRange = ["제목", "내용", "태그"];

  const handleMemberToggle = () => {
    setIsMemberToggleOpen(!isMemberToggleOpen);
  };

  const handleRangeToggle = () => {
    setIsRangeToggleOpen(!isRangeToggleOpen);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const openSearchBox1 = false;
  // 일단 검색 미구현 ㅠㅠ
  return (
    openSearchBox1 && (
      <S.Background>
        <S.Container>
          <S.InputWrapper>
            <S.IconWrapper>
              <IoSearchOutline size="30" color="grey" />
            </S.IconWrapper>
            <input
              type="text"
              value={search}
              onChange={onChange}
              placeholder="태그나 노트를 검색해보세요"
            />
            <S.IconWrapper>
              <IoClose
                size="30"
                color="grey"
                onClick={() => dispatch(setOpenSearchBox(false))}
              />
            </S.IconWrapper>
          </S.InputWrapper>
          <S.Line />
          <S.FilterWrapper>
            <p>결과 0건</p>
            <S.ButtonWrapper>
              <SearchToggle
                icon={<BsPersonFill />}
                label="멤버"
                onClick={handleMemberToggle}
                isOpen={isMemberToggleOpen}
                // content={
                //   <S.MemberBox>
                //     {testMemberArray.map((member, index) => (
                //       <div key={index}>{member}</div>
                //     ))}
                //   </S.MemberBox>
                // }
              />
              <SearchToggle
                icon={<HiOutlineAdjustments />}
                label="검색범위"
                onClick={handleRangeToggle}
                isOpen={isRangeToggleOpen}
                content={
                  <S.MemberBox>
                    {searchRange.map((Range, index) => (
                      <div key={index}>{Range}</div>
                    ))}
                  </S.MemberBox>
                }
              />
            </S.ButtonWrapper>
          </S.FilterWrapper>
          <S.ResultBox id="infiniteScrollTarget">
            {/* <InfiniteScroll
              dataLength={isData.length}
              next={fetchMoreData}
              hasMore={true}
              scrollableTarget="infiniteScrollTarget"
            >
              {isData.map((text, index) => (
                <SearchResult text={text} key={index} />
              ))}
            </InfiniteScroll> */}
          </S.ResultBox>
        </S.Container>
      </S.Background>
    )
  );
};

export default SearchBox;
