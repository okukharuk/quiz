import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { useTranslation } from "react-i18next";

interface CheckboxOptionProps {
  text: string;
  isChecked: boolean;
  handleClick: () => void;
}

const CheckboxOption: FC<CheckboxOptionProps> = ({ text, handleClick, isChecked }) => {
  const { t } = useTranslation("translation");

  const checkedStyle: React.CSSProperties = {
    outline: "2px solid #E4229B",
    backgroundColor: "rgb(228 34 155 / 0.2)",
  };

  return (
    <div
      onClick={handleClick}
      style={isChecked ? checkedStyle : {}}
      className={
        "flex flex-row h-[76px] w-full bg-secondary mb-4 rounded-[16px] px-[20px] py-[12px] text-[17px] cursor-pointer " +
        (!isChecked ? "check-anim" : "")
      }
    >
      <div className="my-auto">{t(text)}</div>
      <Checkbox isChecked={isChecked} handleClick={handleClick} />
    </div>
  );
};

export default CheckboxOption;
