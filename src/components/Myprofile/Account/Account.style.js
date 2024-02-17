import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
    display: flex;
    // background: pink;
`
export const Info = styled.div`
    width: 1166px;
    height: 744px;
    // background: blue;
`

export const Top = styled.div`
    width: 1300px;
    height: 67px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 700;
        margin-left: 20px;
    }
`
export const Title = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 60px;
    margin-top: 50px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;   
`

export const CloseBtn = styled(IoClose)`
	cursor: pointer;
`


export const ProfileBox = styled.div`
    width: 1300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
        width: 161px;
        height: 161px;
    }
    img {
        width: 161px;
        height: 161px;
        object-fit: cover;
        cursor: pointer;
    }
`
export const ProfileLeft = styled.div`
    width: 161px;
    height: 250px;

    p {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;
    }
`
export const ProfileRight = styled.div`
    // width: 783px;
    height: 250px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    margin-left: 70px;
    margin-top: 70px;

    h6 {
        margin: 10px 0;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
    }
    h5 {
        position: absolute;
        top: 285px;
        left: 1225px;
        font-family: Pretendard;
        font-size: 13px;
        font-weight: 300;
        color: rgba(147, 147, 147, 1);
        text-decoration: underline;
    }
    input {
        padding-left: 10px;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;  
        margin: 10px 0;
        width: 773px;
        height: 46px;
        border-radius: 10px;
        border: 1px solid rgba(229, 229, 229, 1);
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }
    ::placeholder {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;  
    }
    button {
        margin: 10px 0;
        width: 783px;
        height: 46px;
        border: none;
        border-radius: 10px;
        background: rgba(181, 169, 148, 1);
        color: white;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }
    p {
        width: 783px;
        text-align: center;
        font-family: Pretendard;
        font-size: 12px;
        color: rgba(181, 169, 148, 1);
    }
`

export const LoginInfo = styled.div`
    width: 1300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoginWrapper = styled.div`
    width: 1120px;
    height: 50px;
    display: flex;

    button {
        margin-left: 330px;
        width: 150px;
        height: 40px;
        border-radius: 5px;
        border: 1px;
        cursor: pointer;
        background-color: ${(props) => props.theme.borderColor};
        color: ${(props) => props.theme.textColor};
    }
    p {
        width: 244px;
        margin-right: 50px;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;        
    }
`
export const Line = styled.div`
    width: 1324px;
    border: 1px solid rgba(229, 229, 229, 1);
`

export const Bottom = styled.div`
    width: 1300px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
        width: 783px;
        height: 46px;
        border: none;
        border-radius: 10px;
        background-color: ${(props) => props.theme.borderColor};
        color: ${(props) => props.theme.textColor};
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }

    p {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;

        color: rgba(147, 147, 147, 1);
        text-decoration: underline;
        cursor: pointer;
    }
`