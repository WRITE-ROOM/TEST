import React, { useState, useEffect } from "react";
import { PiCodepenLogo } from "react-icons/pi";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserList } from "../../redux/userList";
import user, { setUser } from "../../redux/user";
import { GoPlusCircle } from "react-icons/go";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as A from "./AddChallengeMember.style";
import { setSelectedMember } from "../../redux/selectedMember";
import MyprofileImg from "../../assets/myProfile.png"


const AddChallengeMember = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  const accessToken = localStorage.getItem("token");

  const userList = useSelector((state) => state.userList);


  const user = useSelector((state) => state.user);


  const [me, setMe] = useState(null);

  const roomId = useParams().roomId;

  const [showUser, setShowUser] = useState(false);
  const selectedMember = useSelector((state) => state.selectedMember);

  const fetchUserList = async () => {
    try {
      const res = await axios.get(`/rooms/${roomId}/userRoom`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      dispatch(setUserList(res.data.result.userRoomLists));
      setMe(
        res.data.result.userRoomLists.find(
          (user) => user.userId === parseInt(userId)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedList, setSelectedList] = useState([]);

  const selectMember = (userId, user) => {
    dispatch(setSelectedMember(userId));
    setSelectedList([...selectedList, user]);
  };

  useEffect(() => {
    dispatch(setSelectedMember(parseInt(userId)));
  }, []);

  useEffect(() => {
    fetchUserList();
  }, [roomId]);

  return (
    <A.Container>
      <A.MemberList>
        {me && (
          <A.User>
            <img className="profileImg" src={me.profileImg === null ? MyprofileImg : me.profileImg} alt="" />
            <p>{me.name}</p>
          </A.User>
        )}

        {selectedList &&
          selectedList.map((member, index) => (
            <A.User key={index}>
              <img
                className="profileImg"
                src={member.profileImg}
                alt="profileImg"
              />
              <p>{member.name}</p>
            </A.User>
          ))}
      </A.MemberList>

      <A.AddButton>
        <GoPlusCircle
          color="gainsboro"
          size={40}
          onClick={() => setShowUser(!showUser)}
        />
        {showUser && (
          <DropdownContainer $right="-70px">
            <ul>
              {userList &&
                userList.map((user, index) => (
                  <li
                    key={index}
                    onClick={() => selectMember(user.userId, user)}
                  >
                    <p>{user.name}</p>
                  </li>
                ))}
            </ul>
          </DropdownContainer>
        )}
      </A.AddButton>
    </A.Container>
  );
};

export default AddChallengeMember;
