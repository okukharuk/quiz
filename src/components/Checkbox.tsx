import React, { FC } from "react";

interface CheckboxProps {
  isChecked: boolean;
  handleClick: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, handleClick }) => {
  return (
    <input
      defaultChecked={isChecked}
      className="ml-auto bg-check w-[24px] h-[24px] my-auto rounded-[8px] outline outline-hover outline-[1px] checked:bg-hover check"
      type="checkbox"
      onClick={handleClick}
    />
  );
};

export default Checkbox;
