import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  text: string;
  styleHeader?: { word: string; style: React.CSSProperties };
}

const Header: FC<HeaderProps> = ({ text, styleHeader }) => {
  const { t } = useTranslation("translation");
  const header = styleHeader
    ? t(text)
        .split(" ")
        .map((word) =>
          word === styleHeader.word ? (
            <div className="mr-[5px]" style={styleHeader.style}>
              {word}
            </div>
          ) : (
            <div className="mr-[5px]">{word}</div>
          )
        )
    : t(text);
  return <div className="text-[28px] text-center font-bold flex flex-row flex-wrap justify-center px-8">{header}</div>;
};

export default Header;
