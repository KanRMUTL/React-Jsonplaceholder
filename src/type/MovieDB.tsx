export interface Movie {
  poster_path?: string | null;
  adult?: boolean;
  original_title?: string;
  id?: number;
  title?: string;
  vote_average?: number;
  overview?: string;
}

export interface MovieResponsse {
  page?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
}
