import React, { FC } from "react";

interface TextInputProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ handleInput }) => {
  return (
    <input
      type="text"
      onChange={handleInput}
      className="flex flex-col min-h-[76px] py-[20px] w-full bg-secondary my-16 rounded-[16px] px-[16px] py-[12px] text-[17px] focus:bg-hover/[0.2] focus:outline-hover focus:outline-[2px] focus:outline cursor-pointer"
    />
  );
};

export default TextInput;
