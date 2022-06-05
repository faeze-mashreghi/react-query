import React, { FC } from "react";
import "./style.css";
interface ButtonProps {
  lable: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ lable, onclick, className, type }) => {
  return (
    <>
      <button onClick={onclick} type={type} className={`btn ${className}`}>
        {lable}
      </button>
    </>
  );
};

export default Button;
