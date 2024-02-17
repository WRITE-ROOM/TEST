import React, { useState } from "react";
import { TagContainer, Tag } from "../../../pages/Note.style";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import * as F from "./WriteFooter.style";
import { useSelector, useDispatch } from "react-redux";
import { addTag, deleteTag, resetTag } from "../../../redux/tag";

const WriteFooter = () => {
  const dispatch = useDispatch();

  const [showTagInput, setShowTagInput] = useState(false);
  const [newTag, setNewTag] = useState("");

  // tag 데이터
  const tagList = useSelector((state) => state.tag);

  const handleTagInput = (e) => {
    setNewTag(e.target.value);
  };

  const CreateNewTag = (e) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      dispatch(addTag({ tagId: tagList.length, tagName: newTag }));
      setNewTag("");
      e.target.value = "";
    }
  };

  const DeleteTag = (index) => {
    dispatch(deleteTag(index));
  };

  return (
    <F.Container>
      {/* 태그 추가 */}
      <F.AddTag onClick={() => setShowTagInput(true)}>
        <FiPlus size={20} />
      </F.AddTag>

      {/* 태그 리스트 */}
      <TagContainer>
        <ul>
          {tagList.map((tag, index) => (
            <Tag key={index} $X={true}>
              {tag.tagName}
              <F.DeleteTag onClick={() => DeleteTag(index)}>
                <IoClose size={16} />
              </F.DeleteTag>
            </Tag>
          ))}
        </ul>
      </TagContainer>

      {/* 태그 입력칸 */}
      {showTagInput && (
        <label htmlFor="tagInput">
          <input
            type="text"
            id="tagInput"
            placeholder="새 태그를 입력하세요"
            onChange={(e) => handleTagInput(e)}
            onKeyUp={(e) => CreateNewTag(e)}
          />
        </label>
      )}
    </F.Container>
  );
};

export default WriteFooter;
