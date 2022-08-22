import {
  NewsResultType,
  SearchOrImageOrVideoResultInterface,
} from "./GoogleResultType";

export type Results =
  | SearchOrImageOrVideoResultInterface
  | NewsResultType
  | null;

export type ResultContextType =
  | {
      isLoading: boolean;
      results: Results;
      searchTerm: string;
      setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
      setResults: React.Dispatch<React.SetStateAction<Results>>;
      getResults: (type: string) => Promise<void>;
    }
  | Record<string, never>;

export type ResultContextProviderProps = {
  children: React.ReactNode;
};
