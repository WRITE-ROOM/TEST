import React, { useCallback, useEffect, useState } from 'react'
import * as S from './SignupCheck.style'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { RiCheckboxFill } from "react-icons/ri";


export default function SignupCheck({ onAllCheckChange }) {
  
  const dataLists = [
    {id: 1, data: '전체 동의합니다.'},
    {id: 2, data: '(필수) 만 14세 이상입니다'},
    {id: 3, data: '(필수) 라이트룸 서비스 이용 약관에 동의합니다.'},
    {id: 4, data: '(필수) 개인정보 수집 및 이용에 동의합니다.'},
  ]
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [privateCheck, setPrivateCheck] = useState(false);

  const allBtnEvent =()=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setPrivateCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setPrivateCheck(false);
    } 
  };
  
  const ageBtnEvent = () => {
    setAgeCheck((prev) => !prev);
  };

  const useBtnEvent = () => {
    setUseCheck((prev) => !prev);
  };

  const privateBtnEvent = () => {
    setPrivateCheck((prev) => !prev);
  };

  useEffect(()=>{
    setAllCheck(ageCheck && useCheck && privateCheck);
  }, [ageCheck,useCheck, privateCheck])

  useEffect(() => {
    onAllCheckChange(allCheck);
  }, [allCheck, onAllCheckChange]);

  return (
    <div>
      <S.Container>
        {dataLists.map((dataItem, index) => (
          <div key={dataItem.id}>
            <S.CheckList>
              <CheckCm
                isChecked={
                  dataItem.id === 1 ? allCheck : dataItem.id === 2
                    ? ageCheck : dataItem.id === 3 ? useCheck : privateCheck}
                onClick={() => {
                  if (dataItem.id === 1) 
                    allBtnEvent();
                  else if (dataItem.id === 2)
                    setAgeCheck((prev) => !prev); // 수정된 부분
                  else if (dataItem.id === 3)
                    setUseCheck((prev) => !prev); // 수정된 부분
                  else 
                    setPrivateCheck((prev) => !prev); // 수정된 부분
                }}
              />
              <S.ContentWrapper>
                <p>{dataItem.data}</p>
              </S.ContentWrapper>
              {dataItem.id === 3 || dataItem.id === 4 ? (
                <S.ViewButton>보기</S.ViewButton>
              ) : null}
            </S.CheckList>
            {index === 0 ? <S.Line /> : null}
          </div>
        ))}
      </S.Container>
    </div>
  )
}

const CheckCm = ({ isChecked, onClick }) => {
  return (
    <div onClick={onClick}>
      {isChecked ? (
        <RiCheckboxFill size="25px" color="rgba(181, 169, 148, 1)" />
      ) : (
        <RiCheckboxBlankFill size="25px" color="rgba(229, 229, 229, 1)" />
      )}
    </div>
  );
};