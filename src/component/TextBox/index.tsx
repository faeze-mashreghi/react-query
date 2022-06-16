import { FC } from "react";
import { errorMessage } from "../../model/validation";
import { Size } from "../../style/type";
import "./style.scss";
interface TextBoxProps {
  value?: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name: string;
  id: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  invalidFeedack?: string;
  size?: Size;
}

const TextBox: FC<TextBoxProps> = ({
  value,
  onChange,
  label,
  name,
  onBlur,
  id,
  invalidFeedack,
  size = "medium",
}) => {
  return (
    <div className="text-box-box">
      {invalidFeedack && invalidFeedack !== errorMessage.require && (
        <span className="error-box">{invalidFeedack}</span>
      )}
      <label htmlFor={id}>
        <span>
          {label}:{invalidFeedack === errorMessage.require && "*"}
        </span>
      </label>
      <input
        className={`text-input text-input-${size}`}
        id={id}
        name={name}
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <span className={`focus-border `}></span>
    </div>
  );
};

export default TextBox;
