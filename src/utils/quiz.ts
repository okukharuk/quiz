import { IOptions, IOptionsTemplate } from "../models/quiz";

export const getOptions = (options: IOptionsTemplate[], callbacks: ((key: string) => void)[]): IOptions[] =>
  options.map((option, index) => ({
    ...option,
    handleClick: callbacks[index],
  }));
