import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Step = () => {
  const navigate = useNavigate();
  const { page } = useParams() as { page: string };
  const [currentPage, setCurrentPage] = React.useState(page);

  const pageStyle = React.useMemo(() => {
    if (page === currentPage) return "";
    return page < currentPage ? "text-step-to-bottom" : "text-step-to-top";
  }, [page, currentPage]);

  const currentPageStyle = React.useMemo(() => {
    if (page === currentPage) return "";
    return page > currentPage ? "text-step-from-bottom" : "text-step-from-top";
  }, [page, currentPage]);

  React.useEffect(() => {
    const timeout = setTimeout(() => setCurrentPage(page), 500);
    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <div className="relative flex flex-col w-full m-4 items-center text-[18px] font-bold">
      {+page > 2 && <div onClick={() => navigate(`/quiz/${+page - 1}`)} className="chevron" />}
      <div className="w-fit flex flex-row items-center mb-2 overflow-hidden">
        <div className="flex flex-col relative">
          <div className={`text-step ${pageStyle} absolute`}>{currentPage}</div>
          <div className={`text-step ${currentPageStyle}`}>{page}</div>
        </div>
        <div>/5</div>
      </div>
      <div className="relative w-full h-[4px]">
        <div className="absolute bg-white w-full h-full"></div>
        <div
          className="absolute bg-step h-full"
          style={{ width: `${(+page / 5) * 100 - 10}%`, transition: "all 0.25s linear" }}
        ></div>
      </div>
    </div>
  );
};

export default Step;
