import React, { useEffect, useState } from "react";
import { SimpleContainer } from "../Header/Dropdown.style";
import * as E from "./EmojiContainer.style";
import AddEmoji from "../../assets/AddEmoji.png";
import Emoji1 from "../../assets/Emoji1.png";
import Emoji2 from "../../assets/Emoji2.png";
import Emoji3 from "../../assets/Emoji3.png";
import Emoji4 from "../../assets/Emoji4.png";
import Emoji5 from "../../assets/Emoji5.png";

import Emoji from "./Emoji";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const EmojiContainer = ({ emojiCounts }) => {
  const emojiImage = [
    { image: Emoji1 },
    { image: Emoji2 },
    { image: Emoji3 },
    { image: Emoji4 },
    { image: Emoji5 },
  ];

  const [emojis, setEmojis] = useState([emojiCounts]);

  const [showEmojiList, setShowEmojiList] = useState(false);

  const [addedEmoji, setAddedEmoji] = useState(null);

  const noteId = useSelector((state) => state.note.noteId);

  const handleEmojiClick = async (index) => {
    if (addedEmoji) {
      if (addedEmoji === index) {
        deleteEmoji();
        setEmojis((prev) =>
          prev.map((count, i) => (i === addedEmoji - 1 ? count - 1 : count))
        );

        setAddedEmoji(null);
      } else {
        updateEmoji(index);

        setEmojis((prev) =>
          prev.map((count, i) => (i === addedEmoji - 1 ? count - 1 : count))
        );
        setEmojis((prev) =>
          prev.map((count, i) => (i === index - 1 ? count + 1 : count))
        );

        setAddedEmoji(index);
      }
    } else {
      postEmoji(index);

      setEmojis((prev) =>
        prev.map((count, i) => (i === index - 1 ? count + 1 : count))
      );

      setAddedEmoji(index);
    }
  };

  const accessToken = localStorage.getItem("token");

  const fetchEmoji = async () => {
    try {
      const res = await axios.get(`/Emoji/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setAddedEmoji(res.data.result.emojiNum);
    } catch (error) {
      console.log(error);
      setAddedEmoji(null);
    }
  };

  // 이모지 남기기
  const postEmoji = async (index) => {
    try {
      const params = { emojiNum: index };
      const res = await axios.post(`/Emoji/${noteId}`, null, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmoji = async (index) => {
    try {
      const params = { emojiNum: index };
      const res = await axios.patch(`/Emoji/${noteId}`, null, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmoji = async () => {
    try {
      const res = await axios.delete(`/Emoji/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmoji();
    if (emojiCounts) {
      setEmojis(emojiCounts);
    }
  }, [emojiCounts]);

  return (
    <E.Container>
      {/* 이모지 추가 버튼 */}

      <E.AddEmojiButton
        onClick={() => {
          setShowEmojiList(!showEmojiList);
        }}
      >
        <img src={AddEmoji} alt="addEmoji" />
      </E.AddEmojiButton>

      {/* 추가된 이모지 */}
      <E.AddedEmoji>
        <ul>
          {emojis &&
            emojis.map((count, index) => {
              return (
                count > 0 && (
                  <Emoji
                    key={index}
                    count={count}
                    index={index}
                    image={emojiImage[index].image}
                  />
                )
              );
            })}
        </ul>
      </E.AddedEmoji>

      {/* 버튼 클릭 시 이모지 리스트 띄우기 */}
      {showEmojiList && (
        <SimpleContainer
          $width="156px"
          $height="60px"
          $top="45px"
          $padding="12px 16px"
        >
          <E.EmojiList>
            {emojiImage &&
              emojiImage.map((emoji, index) => (
                <li key={index} onClick={() => handleEmojiClick(index + 1)}>
                  <img
                    src={emojiImage[index].image}
                    alt={`emoji${index + 1}`}
                  />
                </li>
              ))}
          </E.EmojiList>
        </SimpleContainer>
      )}
    </E.Container>
  );
};

export default EmojiContainer;
