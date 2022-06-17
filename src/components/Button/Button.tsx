import React, { FC } from "react";
import { Size } from "../../style/type";
import "./Button.scss";
interface ButtonProps {
  lable: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  size?: Size;
}

const Button: FC<ButtonProps> = ({
  lable,
  onclick,
  className,
  type,
  size = "medium",
}) => {
  return (
    <>
      <button
        onClick={onclick}
        type={type}
        className={`btn btn-${size}  ${className}`}
      >
        {lable}
      </button>
    </>
  );
};

export default Button;
