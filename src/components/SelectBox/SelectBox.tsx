import React, { FC } from "react";
import { SelectOption } from "../../models/interfaces";
import Select, { ActionMeta, SingleValue } from "react-select";
import "./SelectBox.scss";
import { errorMessage } from "../../models/validation";
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
        value={value ? options?.find((op) => op.value === value) : null}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default SelectBox;
