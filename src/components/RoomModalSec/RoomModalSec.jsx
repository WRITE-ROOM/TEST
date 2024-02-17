import * as S from "./RoomModalSec.style";

const RoomModalSec = ({
  title1,
  title2,
  description,
  description2,
  button1,
  button2,
  onClick1,
  onClick2,
  isOpen,
  closeModal,
}) => {
  return (
    <>
      {isOpen && (
        <S.Background>
          <S.Container>
            <S.DeleteWrapper>
              <S.CloseBtn size={30} onClick={() => closeModal()} />
            </S.DeleteWrapper>
            <h1>{title1}</h1>
            <h1>{title2}</h1>
            <p>{description}</p>
            <p>{description2}</p>
            <S.ButtonWrapper>
              <S.FirstButton onClick={() => onClick1()}>
                {button1}
              </S.FirstButton>
              <S.SecondButton onClick={onClick2}>{button2}</S.SecondButton>
            </S.ButtonWrapper>
          </S.Container>
        </S.Background>
      )}
    </>
  );
};

export default RoomModalSec;
