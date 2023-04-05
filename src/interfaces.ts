export interface ErrorResponse {
  success: boolean;
  message: string;
}

export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface MovieListResponse {
  docs: Movie[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface MovieResponse {
  movie: Movie;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}

export interface RequestOptions {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  filter?: Record<string, string>;
}