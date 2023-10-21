// CardInfo.tsx
import React, { ReactNode } from "react";
import "../css/components.css";

interface CardInfoProps {
  children: ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ children }) => {
  return (
    <div className="cardBox">
      {children}
    </div>
  );
};

export default CardInfo;
