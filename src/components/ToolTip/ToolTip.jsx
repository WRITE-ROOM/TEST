import React from "react";
import * as T from "./ToolTip.style";

// props로 message 전달

const ToolTip = ({ message }) => {
  return (
    <T.Container>
      <p>{message}</p>
    </T.Container>
  );
};

export default ToolTip;
