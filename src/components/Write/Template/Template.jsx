import React, { useState } from "react";
import * as T from "./Template.style";
import * as W from "../../../pages/Write.style";
import * as D from "../../Header/Dropdown.style";
import { FiInfo } from "react-icons/fi";

const Template = ({ content, setContent }) => {
  const [showTemplate, setShowTemplate] = useState(false);

  const handleTemplateMenu = () => {
    setShowTemplate(!showTemplate);
  };

  const TemplateO1 = () => {
    const oreo = `
    <h1>Opinion</h1>
    <p>글에서 주장하고자 하는 의견을 작성하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateR = () => {
    const oreo = `
    <h1>Reason</h1>
    <p>주장한 의견에 대하여 이유와 근거를 작성하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateE = () => {
    const oreo = `
    <h1>Example</h1>
    <p>독자들이 글을 쉽게 이해할 수 있도록 사례를 들어 설명하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateO2 = () => {
    const oreo = `
    <h1>Opinion</h1>
    <p>글 내용에 가장 중요한 내용을 요약하여 주장하고자 한 의견을 강조하고 제안하시오
    </p>
    `.trim();

    setContent(content + oreo);
  };

  return (
    <T.Template>
      <W.StyledButton 
        $borderWidth="1px"
        $borderStyle="solid" onClick={handleTemplateMenu}>
        템플릿
      </W.StyledButton>

      {showTemplate && (
        <D.DropdownContainer
          $width="100%"
          $padding="12px"
          $top="40px"
          listWidth="88px"
        >
          <D.DropdownTitle>
            OREO 템플릿
            <FiInfo color="#939393" />
          </D.DropdownTitle>

          <ul>
            <li onClick={TemplateO1}>
              <p>O</p>
            </li>
            <li onClick={TemplateR}>
              <p>R</p>
            </li>
            <li onClick={TemplateE}>
              <p>E</p>
            </li>
            <li onClick={TemplateO2}>
              <p>O</p>
            </li>
          </ul>
        </D.DropdownContainer>
      )}
    </T.Template>
  );
};

export default Template;
