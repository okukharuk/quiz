import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface LabelProps {
  text: string;
}

const Label: FC<LabelProps> = ({ text }) => {
  const { t } = useTranslation("translation");
  return <div className="text-[17px] mx-auto mt-4 text-center font-regular">{t(text)}</div>;
};

export default Label;
