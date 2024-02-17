import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 70%;
  object-fit: inherit;
  // RoomSDB 또는 SNB 열렸을 때

  ${({ openRoomSNB }) =>
    openRoomSNB &&
    `
    width: 100%;
    height: 70%; 
    
  `}
  ${({ openSNB }) =>
    openSNB &&
    `
    margin-right: 20%;
    width: 75%;
    height: 70%;    
  `}
  // RoomSDB SNB 둘다 열렸을 때


  ${({ openRoomSNB, openSNB }) =>
    openRoomSNB &&
    openSNB &&
    `
    margin-right: 30%;
    width: 69%;
  `}
`;

export const NoteList = styled.div`
  padding: 20px;

  h2 {
    font-size: 12px;
  }

  h1 {
    font-size: 20px;
  }
`;

export const TopBox = styled.div`
  display: flex;

  align-items: center;
  height: 30px;
  p {
    margin-left: ${({ openRoomSNB, openSNB }) =>
      openRoomSNB || openSNB ? "400px" : "800px"};
  }
`;

export const SearchWrapper = styled.div`
  width: 90px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: solid gainsboro 2px;
  cursor: pointer;
  input {
    height: 20px;
    width: 70px;
    border-radius: 15px;
    border: none;
  }
`;

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: rgba(181, 169, 148, 1);
  }

  ul.pagination li a:hover {
    color: rgba(181, 169, 148, 1);
  }

  ul.pagination li.active {
  }
`;
