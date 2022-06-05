import React, { FC } from "react";
import { SelectOption } from "../../model/interfaces";
import "./style.css";
interface SelectBoxProps {
  options?: SelectOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  label?: string;
  className?: string;
  name?: string;
  id?: string;
  invalidFeedack?: string;
}

const SelectBox: FC<SelectBoxProps> = ({
  options,
  onChange,
  value,
  label,
  className,
  name,
  id,
  invalidFeedack,
}) => {
  return (
    <div className={`main-div-select ${className}`}>
      <div className="select-lable-text">{label}:</div>
      <div className="select-box">
        <label>
          <select onChange={onChange} value={value} name={name} id={id}>
            <option value=""></option>
            {options?.map((i) => (
              <option value={i?.value} key={i?.value}>
                {" "}
                {i.label}{" "}
              </option>
            ))}
          </select>
        </label>
        <div className="box-invalid-feedack">{invalidFeedack}</div>
      </div>
    </div>
  );
};

export default SelectBox;
