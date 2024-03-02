export type TOptionType = "single-select" | "multiple-select" | "bubble";

export type TInput = { [key: string]: string | string[] };

export interface IOption {
  text: string;
  emoji?: string;
  key: string;
}

export interface IOptions {
  type: TOptionType;
  handleClick: (key: string) => void;
  header: string;
  styleHeader?: { word: string; style: React.CSSProperties };
  limit?: number;
  label?: string;
  style?: "row" | "col" | "grid";
  options: IOption[];
}

export interface IOptionsTemplate extends Omit<IOptions, "handleClick"> {}
