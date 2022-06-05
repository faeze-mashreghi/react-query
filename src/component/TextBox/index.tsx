import React, { FC } from "react";
import "./style.css";
interface TextBoxProps {
  value?: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  className?: string;
  name: string;
  id: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  invalidFeedack?: string;
}

const TextBox: FC<TextBoxProps> = ({
  value,
  onChange,
  label,
  className,
  name,
  onBlur,
  id,
  invalidFeedack,
}) => {
  return (
    <div className={`text-box-box ${className}`}>
      <label htmlFor={id}>{label}:</label>
      <div className="div-input-valid">
        <input
          id={id}
          name={name}
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <span className="box-invalid-feedack fs16 ">{invalidFeedack}</span>
      </div>
    </div>
  );
};

export default TextBox;
