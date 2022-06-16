import React, { FC } from "react";
import { SelectOption } from "../../model/interfaces";
import Select, { ActionMeta, SingleValue } from "react-select";
import "./style.scss";
import { errorMessage } from "../../model/validation";
interface SelectBoxProps {
  options?: SelectOption[];
  onChange?: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  value?: string | number;
  label?: string;
  className?: string;
  name?: string;
  id?: string;
  invalidFeedack?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const SelectBox: FC<SelectBoxProps> = ({
  options,
  onChange,
  value,
  label,
  name,
  id,
  invalidFeedack,
  onBlur,
}) => {
  return (
    <div className="select-box-box">
      <label>
        {label}:{invalidFeedack === errorMessage.require && "*"}
      </label>
      <Select
        classNamePrefix="select-box"
        options={options}
        id={id}
        name={name}
        value={options?.find((op) => op.value === value)}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default SelectBox;
