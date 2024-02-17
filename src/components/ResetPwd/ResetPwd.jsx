import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";

export default function ResetPwd() {
  const [newPwd, setNewPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const user = useSelector((state) => state.user);
  const userPw = user.userPw;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const currentURL = window.location.pathname;

  let userPwd;

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    return regex.test(password);
  };

  const handleResetPwd = () => {
    Swal.fire({
      title: "비밀번호 재설정",
      text: '새 비밀번호를 입력해주세요.',
      input: 'password',
      inputAttributes: {
        placeholder: '새 비밀번호 (영문, 숫자, 특수문자 조합 10자 이상)',
      },
      inputValue: newPwd,
      showCancelButton: false,
      confirmButtonText: "저장",
      confirmButtonColor: "rgba(181, 169, 148, 1)",
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!isPasswordValid(value)) {
          return '영문, 숫자, 특수문자 조합 10자 이상 입력해 주세요.';
        }      
      },
    }).then((result) => {
      if (result.isConfirmed) {
        userPwd = result.value;
        Swal.fire({
          title: "새 비밀번호 확인",
          text: "새 비밀번호를 다시 입력해주세요",
          input: 'password',
          inputValue: checkPwd,
          inputAttributes: {
            placeholder: '새 비밀번호 확인',
          },
          showCancelButton: true,
          reverseButtons: true,
          cancelButtonText: "이전",
          cancelButtonColor: 'rgba(229, 229, 229, 1)',
          confirmButtonText: "확인",
          confirmButtonColor: "rgba(181, 169, 148, 1)",
          allowOutsideClick: false,
          didClose: () => {
            handleResetPwd();
          },
          inputValidator: (value) => {
            if (value !== result.value) {
              return '새 비밀번호와 일치하지 않습니다.';
            }
          },
        }).then((result2) => {
          if (result2.isConfirmed) {
            Swal.fire({
              title: "비밀번호 변경 완료",
              text: "새 비밀번호로 로그인이 가능합니다.",
              inputValue: newPwd,
              showCancelButton: false,
              confirmButtonText: "로그인창으로 가기",
              confirmButtonColor: "rgba(181, 169, 148, 1)",
              allowOutsideClick: false,
            }).then((result4) => {
              if (result4.isConfirmed) {
                postNewPwd();
                navigate('/login');
              }
            })
          }
        })
      }
    })
  }

  const postNewPwd = async() => {
    let type;
    if (currentURL === '/reset/pw/newEmail')
      type = 'email'
    else
      type = 'pwd'
    try {
      const res = await axios.post(`/auth/resetPwd?token=${token}&type=${type}`, {password: userPwd})
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleResetPwd();
  }, [])

  return (
    <div>
    </div>
  )
}
