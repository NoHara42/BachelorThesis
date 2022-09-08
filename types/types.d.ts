export type FlattenedData = {
  occId: string;
  year: number;
  fileId: string;
};

export type YearTaxonWorkFreqMap = Map<string, PreNormalisedData>;

export type YearWorkFreqMap = Map<number, Set<string>>;

export type NormalisedWorkFreqMap = Map<string, ProcessedData>;

export type PreNormalisedData = {
  year: Date;
  occId: string;
  works: Set<string>;
};

export type ProcessedData = {
  occId: string;
  year: Date;
  relativeLiteraryImportance: number;
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
