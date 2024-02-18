import { useState } from "react";
import { GoGear } from "react-icons/go";
import ToolTip from "../ToolTip/ToolTip";
import { useParams, useNavigate } from "react-router-dom";

const UseToolTip = ({ where, message, arrow, children, isHovered }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const params = useParams();
  const roomId = params.roomId;
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const changePage = (page) => {
    navigate(`/rooms/${page}/${roomId}`);
  };
  return (
    <>
      {arrow ? (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {children}
        </div>
      ) : (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <GoGear
            size={30}
            style={{ opacity: isHovered ? 1 : 0 }}
            onClick={() => changePage(where)}
          />
        </div>
      )}
      {isHovering && <ToolTip message={message} />}
    </>
  );
};

export default UseToolTip;
