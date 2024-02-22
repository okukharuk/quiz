import React, { FC } from "react";
import Button from "../components/Button";
import { t } from "i18next";
import Download from "../components/Download";
import { useNavigate } from "react-router-dom";
import { options } from "../consts";
import { getStorage, removeStorage } from "../services/storage/storage";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleRetake = () => {
    removeStorage("storage");
    removeStorage("email");
    navigate("/quiz/1");
  };

  React.useEffect(() => {
    const storage = getStorage("storage", true);
    const storageLength = Object.keys(storage).length;
    const email = getStorage("email");

    if (storageLength !== options.length) {
      navigate(`/quiz/${storageLength || 1}`);
    }

    if (!email) {
      navigate("/email");
    }
  }, []);

  return (
    <div className="flex flex-col p-4 h-full max-w-[350px] mx-auto">
      <div className="my-auto flex flex-col items-center">
        <div className="mt-auto text-[36px] font-cursive">{t("thank_you")}</div>
        <div className="mb-16 text-[17px]">{t("for_supporting")}</div>
        <div className="checkmark my-auto"></div>
      </div>
      <div className="mt-auto">
        <Download />
        <Button handleClick={handleRetake} text="retake_quiz" isActive />
      </div>
    </div>
  );
};

export default ThankYou;
