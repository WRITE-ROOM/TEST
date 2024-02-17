import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 10px;
`;
export const Title = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
`;

export const Contents = styled.div`
  width: 100%;
  height: 150px;
  border: grey solid 1px;
  margin-top: 10px;
  border-radius: 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  border-bottom: grey solid 1px;

  p {
    margin: 0;
  }
`;
export const PathButton = styled.button`
  width: 100px;
  color: white;
  border-radius: 1rem;
  border: none;
  background-color: #b5a995;
  padding: 7px 10px;
  margin-right: 20px;
`;

export const InnerWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 20px;

  button {
    margin-top: 15px;
    border-radius: 1rem;
    padding: 3px 10px;
    border: grey 1px solid;
    background-color: white;
  }
`;

export const TextBox = styled.div`
  width: 100%;

  h1 {
    padding-left: 10px;
    padding-top: 10px;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TextWrapper = styled.div`
  padding: 0px 10px;
  width: 800px;
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
  h2 {
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }

  span {
    width: 600px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 14px;
  }
`;
