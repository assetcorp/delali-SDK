export interface ErrorResponse {
  success: boolean;
  message: string;
}

interface Movie {
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

interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}

export interface QuoteListResponse {
  docs: Quote[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

interface Character {
  _id: string;
  name: string;
  wikiUrl: string;
  race: string;
  birth: string;
  gender: string;
  death: string;
  hair: string;
  height: string;
  realm: string;
  spouse: string;
}

export interface CharacterListResponse {
  docs: Character[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface CharacterResponse {
  character: Character;
}

interface Book {
  _id: string;
  name: string;
}

export interface BookListResponse {
  docs: Book[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface BookResponse {
  book: Book;
}

interface Chapter {
  _id: string;
  chapterName: string;
  book: string;
}

export interface ChapterListResponse {
  docs: Chapter[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface ChapterResponse {
  chapter: Chapter;
}

export interface RequestOptions {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  filter?: Record<string, string>;
}
