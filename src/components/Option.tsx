import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { useTranslation } from "react-i18next";

interface OptionProps {
  text: string;
  isChosen: boolean;
  emoji?: string;
  handleClick: () => void;
}

const Option: FC<OptionProps> = ({ text, handleClick, emoji, isChosen }) => {
  const { t } = useTranslation("translation");

  const chosenStyle: React.CSSProperties = {
    outline: "2px solid #E4229B",
    backgroundColor: "rgb(228 34 155 / 0.2)",
  };

  return (
    <div
      style={isChosen ? chosenStyle : {}}
      className="flex flex-col min-h-[76px] mr-4 py-[20px] w-full bg-secondary mb-4 rounded-[16px] px-[16px] py-[12px] text-[17px] hover:bg-hover/[0.2] hover:outline-hover hover:outline-[2px] hover:outline cursor-pointer"
      onClick={handleClick}
    >
      {emoji && <div className="w-full aspect-square text-[52px] text-center">{emoji}</div>}
      <div className="my-auto [&:nth-child(2)]:text-center">{t(text)}</div>
    </div>
  );
};

export default Option;
