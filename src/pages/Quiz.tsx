import React, { FC } from "react";
import Step from "../components/Step";
import { useNavigate, useParams } from "react-router-dom";
import i18next from "i18next";
import Options from "../components/Options";
import { getOptions, options as o } from "../consts";
import { getStorage, removeStorage, setStorage } from "../services/storage/storage";

interface QuizProps {}

export type TInput = { [key: string]: string | string[] };

const Quiz: FC<QuizProps> = ({}) => {
  const [storageLoaded, setStorageLoaded] = React.useState(false);
  const { page } = useParams() as { page: string };
  const navigate = useNavigate();

  const [input, setInput] = React.useState<TInput>({});

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    setInput((prev) => ({ ...prev, [page]: lang }));
    navigate(`/quiz/${+page + 1}`);
  };

  const handleInput = (key: string) => {
    setInput((prev) => ({ ...prev, [page]: key }));
    navigate(`/quiz/${+page + 1}`);
  };

  const handleMultiple = (key: string) => {
    const current = (input[page] || []) as string[];
    const keyIndex = current.indexOf(key);
    const value = keyIndex === -1 ? [...current, key] : current.filter((item) => item !== key);
    if (o[+page - 1]?.limit && value.length > o[+page - 1].limit!) value.shift();
    setInput((prev) => ({ ...prev, [page]: value }));
  };

  const pagesCallbacks = [changeLanguage, handleInput, handleInput, handleMultiple, handleMultiple];

  const options = getOptions(pagesCallbacks);

  const inputLength = Object.keys(input).length;
  const supposedPage = inputLength + 1;

  React.useEffect(() => {
    if (+page > options.length || +page <= 0 || Number.isNaN(+page)) {
      navigate("/quiz/1");
    }

    if (supposedPage < options.length && +page > supposedPage) {
      navigate(`/quiz/${supposedPage}`);
    }

    if (inputLength === o.length) {
      removeStorage("email");
      navigate("/email");
    }

    setStorageLoaded(true);
    const storage = getStorage("storage", true);
    setInput(storage);
  }, []);

  React.useEffect(() => {
    if (!storageLoaded) return;
    setStorage("storage", JSON.stringify(input));
  }, [input]);

  return storageLoaded
    ? options[+page - 1] && (
        <div className="flex flex-col h-full w-full max-w-[350px] items-center m-auto">
          <Step />
          <Options input={input[page]} {...options[+page - 1]} />
        </div>
      )
    : null;
};

export default Quiz;
