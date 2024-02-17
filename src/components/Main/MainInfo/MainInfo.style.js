import styled from 'styled-components'
import { MdMoreHoriz } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";


export const Container = styled.div`
    width: 290px;
    height: 39px;
    display: flex;
    justify-content: space-between;
    align-items: center;
	border-radius : 0 0 10px 10px;
    background-color: ${(props) => props.theme.SNBBgColor};
    `

export const Left = styled.div`
    width: 200px;
    height: 32px;
    display: flex;
    flex-direction: column;
    margin-left: 9px;   
`

export const Right = styled.div`
    // width: 70px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;
`

export const RoomName = styled.p`
    width: 209px;
    height: 16px; 
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 700;
`
export const editTime = styled.p`
    width: 200px;
    height: 16px;
    display: flex;
    align-items: center;

    color: rgba(159, 159, 159, 1);
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    text-align: left;
    
`
export const Users = styled(HiMiniUserCircle)`
    margin: 0;
`

export const Menu = styled(MdMoreHoriz)`
    margin-left: 10px;
	cursor: pointer;
`

