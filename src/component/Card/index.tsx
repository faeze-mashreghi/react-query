import { FC } from "react";
import "./style.scss";
interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
