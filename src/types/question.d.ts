export interface IELTSQuestion {
  id: number;
  type: "text" | "number" | "static";
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  text?: string;
}

export interface IELTSItem {
  label: string;
  questions: IELTSQuestion[];
}

export interface IELTSCategory {
  label: string;
  text?: string;
  items?: IELTSItem[];
  questions?: IELTSQuestion[];
}

export interface IELTSSection {
  part: number;
  title: string;
  description: string;
  content: {
    title: string;
    categories: IELTSCategory[];
  }[];
}

export type IELTSQuestionData = IELTSSection[];
