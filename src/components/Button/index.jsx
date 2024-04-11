import React from "react";
import "./style.css";
const Button = ({
  text,
  onClick,
  className,
  children,
  id,
  style,
  type,
}) => {
  return (
    <button
      id={id}
      className={`${className}`}
      onClick={onClick? onClick:()=>{}}
      style={style}
      type={type}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
