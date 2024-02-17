import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const SNB = styled.div`
    width: 114px;
    height: 744px;
    // display: flex;
    // flex-direction: column;    
    box-shadow: 3px 0px 4px 0px rgba(0, 0, 0, 0.07);
    background-color: ${(props) => props.theme.SNBBgColor};
    z-index: 99;
`

export const Box = styled.div`
    width: 114px;
    height: 63px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(229, 229, 229, 1);
    cursor: pointer;
    p{
        margin-left: 20px;
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
    }
    &:hover {
        background: lightgray;
      }
    
`
