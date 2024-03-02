import React, { FC } from "react";
import Option from "./Option";
import Header from "./Header";
import Label from "./Label";
import CheckboxOption from "./CheckboxOption";
import BubbleOption from "./BubbleOption";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { options as o } from "../consts/quizConfiguration";
import { IOptions } from "../models/quiz";

interface OptionsProps extends IOptions {
  input: any;
}

const Options: FC<OptionsProps> = ({ options, handleClick, header, label, type, input, style, styleHeader }) => {
  const { page } = useParams() as { page: string };
  const navigate = useNavigate();

  const optionsStyle = React.useMemo((): React.CSSProperties => {
    switch (style) {
      case "row":
        return { flexDirection: "row" };
      case "grid":
        return { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignContent: "center" };
      default:
        return { flexDirection: "column" };
    }
  }, [style]);

  const handleNext = () => {
    o.length === +page ? navigate(`/email`) : navigate(`/quiz/${+page + 1}`);
  };

  return (
    <div className="flex flex-col min-w-full min-h-full">
      <Header text={header} styleHeader={styleHeader} />
      {label && <Label text={label} />}
      <div style={optionsStyle} className={`mt-8 flex font-semibold items-center justify-center ${style}`}>
        {options.map((option) => {
          switch (type) {
            case "single-select":
              return (
                <Option
                  isChosen={input === option.key}
                  text={option.text}
                  emoji={option.emoji}
                  handleClick={() => handleClick(option.key)}
                />
              );
            case "multiple-select":
              return (
                <CheckboxOption
                  isChecked={input && input.indexOf(option.text) !== -1}
                  text={option.text}
                  handleClick={() => handleClick(option.key)}
                />
              );
            case "bubble":
              return (
                <BubbleOption
                  isChecked={input && input.indexOf(option.text) !== -1}
                  text={option.text}
                  emoji={option.emoji}
                  handleClick={() => handleClick(option.key)}
                />
              );
          }
        })}
      </div>
      {type !== "single-select" && <Button text="next" handleClick={handleNext} isActive={!!input} />}
    </div>
  );
};

export default Options;
