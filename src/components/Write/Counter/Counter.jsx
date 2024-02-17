import React, { useEffect, useState } from "react";
import * as D from "../../Header/Dropdown.style";
import * as C from "./Counter.style";

const Counter = ({ content, count, setCount }) => {
  const [showCountDetail, setShowCountDetail] = useState(false);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const textContent = doc.body.textContent || "";

    return textContent;
  };

  const stripHtmlTagsNoSpace = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent.replace(/\s/g, "") || "";
  };

  useEffect(() => {
    setCount(stripHtmlTags(content).length);
  }, [content]);
  const characterCountNoSpace = stripHtmlTagsNoSpace(content).length;

  return (
    <C.Counter>
      <div
        onMouseEnter={() => {
          setShowCountDetail(true);
        }}
        onMouseOut={() => {
          setShowCountDetail(false);
        }}
      >
        {count}자
        {showCountDetail && (
          <D.SimpleContainer $width="150px" $height="80px" $top="30px">
            <C.CounterDetail>
              <p>
                공백 포함 <span>{count}자</span>
              </p>
              <p>
                공백 미포함 <span>{characterCountNoSpace}자</span>
              </p>
            </C.CounterDetail>
          </D.SimpleContainer>
        )}
      </div>
    </C.Counter>
  );
};

export default Counter;
