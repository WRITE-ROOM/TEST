import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  width: 100%;

  border-radius: 10px;
  height: 200px;
  display: flex;
`;

export const TopWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: gainsboro 3px solid;
`;

export const UserIconWrapper = styled.div`
  /* position: absolute;
  margin-bottom: 120px; */
`;

export const ContentsBox = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // position: relative;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 16px;
  }
`;

export const Writer = styled.div`
  font-size: 14px;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #939393;
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 10px;

    font-size: 22px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 300;

    whitespace: nowrap;
    overflow: hidden;
    textoverflow: ellipsis;
    maxwidth: 1ch;

    span {
      font-weight: 500;
      margin-right: 6px;
      padding-right: 6px;
      border-right: 2px solid black;
    }
  }
`;

export const SubTitle = styled.span`
  font-weight: bolder;
  font-size: 16px;
`;

export const NoteImg = styled.img`
  width: ${({ openSNB, openRoomSNB }) =>
    openSNB && openRoomSNB ? "35%" : openSNB ? "75%" : "500px"};
  border-radius: 0 10px 10px 0;
`;

// export const NameBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 10px;
//   margin-left: ${({ openRoomSNB }) => (openRoomSNB ? "50px" : "50px")};
// `;

// export const CategoryWrapper = styled.div`
//   color: #b5a995;
//   display: flex;
//   position: absolute;
//   margin-bottom: 100px;
//   margin-left: 50px;
//   align-items: center;
//   gap: 10px;
//   button {
//     padding: 3px 9px;
//     color: #b5a995;
//     border-radius: 15px;
//     background: none;
//     border: gainsboro 2px solid;
//   }
// `;

// export const TextBox = styled.div`
//   border-top: gainsboro 3px solid;
//   gap: 10px;
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: ${({ openRoomSNB }) => (openRoomSNB ? "500px" : "700px")};

//   h1 {
//     margin-top: 10px;
//   }
//   span {
//     font-weight: bolder;
//     font-size: 16px;
//   }
//   p {
//     text-overflow: ellipsis;
//     overflow: hidden;
//     word-break: break-word;
//     display: -webkit-box;
//     -webkit-line-clamp: 2; // 원하는 라인수
//     -webkit-box-orient: vertical;
//   }
// `;

// export const IconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// export const IconButton = styled.button`
//   border: none;
//   background-color: white;
//   cursor: pointer;
// `;

// export const ToggleBox = styled.div`
//   position: absolute;
//   margin-top: 120px;
//   padding: 10px;
//   width: 100px;
//   background-color: white;
//   border: 1px solid;
//   cursor: pointer;
//   margin-right: 90px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: start;
//   gap: 10px;
//   box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), -5px 0 10px rgba(0, 0, 0, 0.1);
//   hr {
//     width: 100%;
//     height: 1px;
//     background-color: gray;
//     border: 0;
//   }
// `;
