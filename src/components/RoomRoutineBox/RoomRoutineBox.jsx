import { useState, useEffect } from "react";
import * as S from "./RoomRoutineBox.style";
import { SlMinus } from "react-icons/sl";
import { HiMiniUserCircle } from "react-icons/hi2";
import { GoPlusCircle } from "react-icons/go";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { subDays, addDays } from "date-fns";
import { LuCalendar } from "react-icons/lu";
import { useSelector } from "react-redux";
import AddChallengeMember from "./AddChallengeMember";
import { useDispatch } from "react-redux";
import { setChallenge } from "../../redux/challenge";

const RoomRoutineBox = ({ text, description, range, toggle }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 1000) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [useToggle, setUseToggle] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleToggle = () => {
    setUseToggle(!useToggle);
  };

  const selectedMember = useSelector((state) => state.selectedMember);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    dispatch(
      setChallenge({
        userList: selectedMember,
        targetCount: count,
        startDate: getFormattedDate(startDate),
        deadline: getFormattedDate(endDate),
      })
    );
  }, [count, startDate, endDate, selectedMember]);

  return (
    <S.RoutineBox>
      <div>
        <h1>참여자</h1>
        <AddChallengeMember />
        {/* <S.People>
          {userList.map((_, index) => (
            <HiMiniUserCircle key={index} color="gainsboro" size={40} />
          ))}

          <GoPlusCircle
            color="gainsboro"
            size={40}
            onClick={handlePlusCircleClick}
          />
        </S.People> */}
      </div>
      <div>
        <h1>목표 개수</h1>
        <S.ExampleText>{text}</S.ExampleText>
        <S.People>
          <SlMinus color="gainsboro" size={35} onClick={decreaseCount} />
          <S.CountBox>{count}</S.CountBox>
          <GoPlusCircle color="gainsboro" size={40} onClick={increaseCount} />
        </S.People>
      </div>

      <div>
        <S.CalendarBox>
          <h1>목표 기간</h1>
          <LuCalendar size={25} />
        </S.CalendarBox>
        <S.ExampleText>{description}</S.ExampleText>
        <S.People>
          <S.InputBox>
            <DatePicker
              locale={ko}
              dateFormat="yyyy.MM.dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
              selectsStart
            />
            ~
            <DatePicker
              locale={ko}
              dateFormat="yyyy.MM.dd"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              selectsEnd
              includeDateIntervals={[
                {
                  start: subDays(startDate, 0),
                  end: addDays(startDate, 6),
                },
              ]}
            />
          </S.InputBox>
        </S.People>

        {toggle && (
          <S.ToggleWrapper>
            기간 설정하지 않기
            <S.ToggleButton onClick={handleToggle}>
              <span />
              {useToggle && <S.CheckIcon />}
            </S.ToggleButton>
          </S.ToggleWrapper>
        )}
      </div>
    </S.RoutineBox>
  );
};

export default RoomRoutineBox;
