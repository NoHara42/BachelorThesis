
export type ProcessedData = {
  occId: string;
  year: Date;
  count: number;
};

export type Author = {
  id: string;
  value: string;
  label: string;
};

export type PlotObj = {
  label: string;
  authors: Array<Author>;
  range: Array<number>;
  Author: Map<string, DynamicFormEntry>;
  Work: Map<string, DynamicFormEntry>;
  uniqueLabel?: string;
};

export type DynamicFormEntry = {
  label: string;
  type: string;
  value: string | [any] | any;
};
