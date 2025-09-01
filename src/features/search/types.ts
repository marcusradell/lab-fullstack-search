export type SearchResult = {
  id: string;
  title: string;
  description: string;
};

export type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; results: SearchResult[] }
  | { status: "error"; error: string };
