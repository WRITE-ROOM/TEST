import React from "react";
import * as E from "./Emoji.style";

const Emoji = ({ count, index, image }) => {
  return (
    <E.Container>
      <img src={image} alt={`emoji${index}`} />
      <p>{count}</p>
    </E.Container>
  );
};

export default Emoji;
