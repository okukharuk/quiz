import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface BubbleOptionProps {
  text: string;
  isChecked: boolean;
  emoji?: string;
  handleClick: () => void;
}

const BubbleOption: FC<BubbleOptionProps> = ({ text, handleClick, emoji, isChecked }) => {
  const { t } = useTranslation("translation");

  return (
    <div
      onClick={() => handleClick()}
      style={isChecked ? { border: "2px solid rgb(228 34 155)" } : {}}
      className="m-[4px] rounded-full aspect-square bg-secondary flex flex-col items-center justify-center cursor-pointer"
    >
      {emoji && <div className="text-[24px]">{emoji}</div>}
      <div className="text-center text-[12px]">{t(text)}</div>
    </div>
  );
};

export default BubbleOption;
