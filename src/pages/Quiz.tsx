import React from "react";
import Step from "../components/Step";
import { useNavigate, useParams } from "react-router-dom";
import i18next from "i18next";
import Options from "../components/Options";
import { options as o } from "../consts/quizConfiguration";
import { getStorage, removeStorage, setStorage } from "../services/storage/storage";
import { getOptions } from "../utils/quiz";
import { TInput } from "../models/quiz";

const Quiz = () => {
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

  const options = getOptions(o, pagesCallbacks);

  const [currentPage, setCurrentPage] = React.useState(page);

  const pageStyle = React.useMemo(() => {
    if (page === currentPage) return "";
    return page < currentPage ? "quiz-from-right" : "quiz-from-left";
  }, [page, currentPage]);

  const currentPageStyle = React.useMemo(() => {
    if (page === currentPage) return "";
    return page > currentPage ? "quiz-to-right" : "quiz-to-left";
  }, [page, currentPage]);

  React.useEffect(() => {
    const timeout = setTimeout(() => setCurrentPage(page), 500);
    return () => clearTimeout(timeout);
  }, [page]);

  React.useEffect(() => {
    setStorageLoaded(true);
    const storage = getStorage("storage", true);
    setInput(storage);

    const inputLength = Object.keys(storage).length;
    const supposedPage = inputLength + 1;

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
  }, []);

  React.useEffect(() => {
    if (!storageLoaded) return;
    setStorage("storage", JSON.stringify(input));
  }, [input]);

  return storageLoaded
    ? options[+page - 1] && (
        <div className="flex flex-col h-full w-full max-w-[360px] items-center m-auto overflow-hidden px-[5px]">
          <Step />
          <div className="flex flex-row h-full w-full relative">
            <div className={`flex min-h-full min-w-full ${pageStyle}`}>
              <Options input={input[page]} {...options[+page - 1]} />
            </div>
            {page !== currentPage && (
              <div className={`absolute flex min-h-full min-w-full ${currentPageStyle}`}>
                <Options input={input[currentPage]} {...options[+currentPage - 1]} />
              </div>
            )}
          </div>
        </div>
      )
    : null;
};

export default Quiz;
