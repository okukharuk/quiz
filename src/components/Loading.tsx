import { t } from "i18next";
import React, { FC } from "react";

interface LoadingProps {
  handleLoaded: () => void;
}

const Loading: FC<LoadingProps> = ({ handleLoaded }) => {
  const [percent, setPercent] = React.useState(0);

  const easeInCubic = (elapsed: number, initialValue: number, amountOfChange: number, duration: number): number => {
    return amountOfChange * (elapsed /= duration) * elapsed * elapsed + initialValue;
  };
  React.useEffect(() => {
    let frame = 0;

    const duration = 5000;
    const disappearDuration = 1000;

    const fps = 25;
    const step = 1000 / fps;

    const interval = setInterval(() => {
      frame++;
      setPercent(Math.round(easeInCubic(frame, 0, 1, duration / step) * 100));
    }, step);

    const timeoutDisappear = setTimeout(() => {
      handleLoaded();
    }, duration + disappearDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, duration);

    return () => (clearInterval(interval), clearTimeout(timeout), clearTimeout(timeoutDisappear));
  }, []);
  return (
    <div className="flex flex-col p-16 h-full loaded">
      <div className="flex mt-auto bg-white w-full aspect-square rounded-full loading">
        <div className="flex w-[92%] aspect-square rounded-full bg-main m-auto">
          <div className="m-auto text-[52px]">{percent}%</div>
        </div>
      </div>
      <div className="mb-auto text-[17px] w-[70%] mt-12 mx-auto text-center">{t("finding_collections")}</div>
    </div>
  );
};

export default Loading;
