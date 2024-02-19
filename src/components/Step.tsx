import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface StepProps {}

const Step: FC<StepProps> = ({}) => {
  const navigate = useNavigate();
  const { page } = useParams() as { page: string };

  return (
    <div className="relative flex flex-col w-full m-4 items-center text-[18px] font-bold">
      {+page > 2 && <div onClick={() => navigate(`/quiz/${+page - 1}`)} className="chevron" />}
      <div className="w-fit flex flex-row items-center mb-2">
        <div className="text-step">{page}</div>
        <div>/5</div>
      </div>
      <div className="relative w-full h-[4px]">
        <div className="absolute bg-white w-full h-full"></div>
        <div className="absolute bg-step h-full" style={{ width: `${(+page / 5) * 100 - 10}%` }}></div>
      </div>
    </div>
  );
};

export default Step;
