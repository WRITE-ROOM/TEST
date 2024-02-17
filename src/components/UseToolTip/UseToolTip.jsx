import { useState } from "react";
import ToolTip from "../ToolTip/ToolTip";

const UseToolTip = ({ children, message }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {children}
      </div>
      {isHovering && <ToolTip message={message} />}
    </>
  );
};

export default UseToolTip;
