import React from 'react'
import * as S from "./MyprofileSNB.style";
import { useNavigate } from 'react-router-dom';

export default function MyprofileSNB() {
    let navigate = useNavigate();
  return (
    <S.SNB>
        <S.Box onClick={() => {navigate('/myprofile/account')}}>
            <p>계정 설정</p>
        </S.Box>
        <S.Box onClick={() => {navigate('/myprofile/bookmark')}}>
            <p>북마크</p>
        </S.Box>
        <S.Box onClick={() => {navigate('/myprofile/none')}}>
            <p>공지사항</p>
        </S.Box>
        <S.Box onClick={() => {navigate('/myprofile/none')}}>
            <p>정보</p>
        </S.Box>
        <S.Box onClick={() => {navigate('/myprofile/none')}}>
            <p>고객센터</p>
        </S.Box>
    </S.SNB>
  )
}
 