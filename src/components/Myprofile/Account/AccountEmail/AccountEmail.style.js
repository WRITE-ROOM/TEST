import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const BackBtn = styled(IoIosArrowBack)`
	cursor: pointer;
`
export const Top = styled.div`
    width: 1300px;
    height: 67px;
    display: flex;
    align-items: center;
    margin-left: 20px;

    p {
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 700;
        margin-left: 20px;
    }
`

export const CurrentEmail = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-top: 30px;

    h2 {
        margin-bottom: 30px;
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    p {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
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
    h6 {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        color: red;
        margin: 5px 0 20px 0;
    }

`

export const NewEmail = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-top: 30px;

    h2 {
        margin: 20px 0;
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
        font-weight: 300;
        color: rgba(147, 147, 147, 1);
        margin-top: 14px;
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
    h6 {
        width: 1054px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        color: rgba(147, 147, 147, 1);
        margin-top: 14px;
        text-align: center;
    }
`