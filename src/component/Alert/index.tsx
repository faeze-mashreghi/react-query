import { FC } from "react";
import "./style.css";
interface AlertProps {
  variant: "success" | "error";
}
export const statusMessage = {
  success: "عملیات با موفقیت انجام شد ",
  error: "مشکلی به وجود آمده",
};

const Alert: FC<AlertProps> = ({ variant }) => {
  return (
    <>
      <div className={`alert ${variant}`}>
        <strong>{statusMessage[variant!]}</strong>
      </div>
    </>
  );
};

export default Alert;
