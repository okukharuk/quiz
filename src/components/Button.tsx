import React from "react";
import { useTranslation } from "react-i18next";

interface ButtonProps {
  text: string;
  handleClick: () => void;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isActive, handleClick, text }) => {
  const { t } = useTranslation("translation");

  return (
    <div
      onClick={handleClick}
      style={!isActive ? { opacity: "40%" } : {}}
      className="h-[56px] font-bold w-full bg-hover rounded-full font-bold text-[17px] flex items-center justify-center bottom-0 mt-auto mb-4 cursor-pointer"
    >
      {t(text)}
    </div>
  );
};

export default Button;
