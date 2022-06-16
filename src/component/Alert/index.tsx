import { FC } from "react";
import "./style.scss";
interface AlertProps {
  variant: "success" | "error";
}
export const statusMessage = {
  success: "successful ",
  error: "something went wrong",
};

const Alert: FC<AlertProps> = ({ variant }) => {
  return (
    <>
      <div className={`alert alert-${variant}`}>
        <strong>{statusMessage[variant!]}</strong>
      </div>
    </>
  );
};

export default Alert;
