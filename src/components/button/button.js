import React from "react";

const Button = ({ className, content, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
