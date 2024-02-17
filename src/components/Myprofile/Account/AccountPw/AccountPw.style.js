import styled from "styled-components";

export const SaveBtn = styled.button`
    margin-left: 90px;
    width: 1054px;
    height: 46px;
    border: none;
    border-radius: 10px;
    background: rgba(181, 169, 148, 1);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: white;
    cursor: pointer;
`

export const NewPw = styled.div`
    height: 320px;
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-top: 30px;

    h2 {
        margin: 10px 0;
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    input {
        padding-left: 10px;
        width: 1044px;
        height: 46px;
        border-radius: 10px;
        border: 1px solid rgba(229, 229, 229, 1);
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;  
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }
    ::placeholder {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;       
    }
    p {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        color: red;
        margin: 5px 0 20px 0;
        color: ${(props) => props.theme.accentColor};

    }

    button { 
        margin-top: 20px;
        width: 1054px;
        height: 46px;
        border-radius: 10px;
        background: rgba(181, 169, 148, 1);
        border: none;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
        color: white;
        cursor: pointer;
    }
`