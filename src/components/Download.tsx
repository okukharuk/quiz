import { t } from "i18next";
import React from "react";
import { CSVLink } from "react-csv";
import { options } from "../consts/quizConfiguration";
import { getStorage } from "../services/storage/storage";
import { TInput } from "../models/quiz";

const Download = () => {
  const storage = getStorage("storage", true) as TInput;
  const email = getStorage("email");

  const data = [
    ["order", "title", "type", "answer"],
    ...options.map((option, index) => {
      const answer = storage[index + 1];
      const translated = Array.isArray(answer) ? answer.map((i) => t(i)).toString() : t(answer);
      return [`${index + 1}`, t(option.header), t(option.type), translated];
    }),
    [6, "Email", "email", email],
  ];

  return (
    <CSVLink className="font-semibold mb-8 flex flex-row h-[42px] items-center justify-center" data={data}>
      <img alt="download" className="h-full mr-2" src="/images/download.png" />
      <div>{t("download_answers")}</div>
    </CSVLink>
  );
};

export default Download;
