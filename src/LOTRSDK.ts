import fetch from "node-fetch";
import {
  BookListResponse,
  ChapterListResponse,
  CharacterListResponse,
  ErrorResponse,
  MovieListResponse,
  QuoteListResponse,
  RequestOptions,
} from "./interfaces";

class LOTRSDK {
  private apiKey: string;
  private baseUrl: string;

  /**
   * Creates an instance of the LOTRSDK.
   * @param {string} apiKey - Your API key.
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = "https://the-one-api.dev";
  }

  /**
   * A reusable method to make API requests with error handling and request options.
   * @template T - The expected response type.
   * @param {string} path - The API endpoint path.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<T>} - A promise that resolves with the API response.
   * @throws Will throw an error if the API request fails.
   */
  private async request<T>(path: string, options?: RequestOptions): Promise<T> {
    const url = new URL(`/v2${path}`, this.baseUrl);

    if (options) {
      const { limit, page, offset, sort, filter } = options;
      if (limit) url.searchParams.append("limit", limit.toString());
      if (page) url.searchParams.append("page", page.toString());
      if (offset) url.searchParams.append("offset", offset.toString());
      if (sort) url.searchParams.append("sort", sort);
      if (filter) {
        for (const [key, value] of Object.entries(filter)) {
          url.searchParams.append(key, value);
        }
      }
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": `application/json`,
      },
    });

    if (!response.ok) {
      const errorResponse: ErrorResponse =
        (await response.json()) as ErrorResponse;
      throw new Error(errorResponse.message);
    }

    return (await response.json()) as T;
  }

  /**
   * Fetches a list of movies.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<MovieListResponse>} - A promise that resolves with the list of movies.
   */
  async getMovies(options?: RequestOptions): Promise<MovieListResponse> {
    return this.request<MovieListResponse>("/movie", options);
  }

  /**
   * Fetches a movie by its ID.
   * @param {string} id - The movie ID.
   * @returns {Promise<MovieListResponse>} - A promise that resolves with the movie information.
   */
  async getMovieById(id: string): Promise<MovieListResponse> {
    return this.request<MovieListResponse>(`/movie/${id}`);
  }

  /**
   * Fetches the quotes for a movie by its ID.
   * @param {string} id - The movie ID.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of movie quotes.
   */
  async getMovieQuotes(
    id: string,
    options?: RequestOptions
  ): Promise<QuoteListResponse> {
    return this.request<QuoteListResponse>(`/movie/${id}/quote`, options);
  }

  /**
   * Fetches a list of characters.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<CharacterListResponse>} - A promise that resolves with the list of characters.
   */
  async getCharacters(
    options?: RequestOptions
  ): Promise<CharacterListResponse> {
    return this.request<CharacterListResponse>("/character", options);
  }

  /**
   * Fetches a character by its ID.
   * @param {string} id - The character ID.
   * @returns {Promise<CharacterListResponse>} - A promise that resolves with the character information.
   */
  async getCharacterById(id: string): Promise<CharacterListResponse> {
    return this.request<CharacterListResponse>(`/character/${id}`);
  }

  /**
   * Fetches the quotes for a character by its ID.
   * @param {string} id - The character ID.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of character quotes.
   */
  async getCharacterQuotes(
    id: string,
    options?: RequestOptions
  ): Promise<QuoteListResponse> {
    return this.request<QuoteListResponse>(`/character/${id}/quote`, options);
  }

  /**
   * Fetches a list of books.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<BookListResponse>} - A promise that resolves with the list of books.
   */
  async getBooks(options?: RequestOptions): Promise<BookListResponse> {
    return this.request<BookListResponse>("/book", options);
  }

  /**
   * Fetches a book by its ID.
   * @param {string} id - The book ID.
   * @returns {Promise<BookListResponse>} - A promise that resolves with the book information.
   */
  async getBookById(id: string): Promise<BookListResponse> {
    return this.request<BookListResponse>(`/book/${id}`);
  }

  /**
   * Fetches the chapters for a book by its ID.
   * @param {string} id - The book ID.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of book chapters.
   */
  async getBookChapters(
    id: string,
    options?: RequestOptions
  ): Promise<ChapterListResponse> {
    return this.request<ChapterListResponse>(`/book/${id}/chapter`, options);
  }

  /**
   * Fetches a list of quotes.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of quotes.
   */
  async getQuotes(options?: RequestOptions): Promise<QuoteListResponse> {
    return this.request<QuoteListResponse>("/quote", options);
  }

  /**
   * Fetches a quote by its ID.
   * @param {string} id - The quote ID.
   * @returns {Promise<QuoteListResponse>} - A promise that resolves with the quote information.
   */
  async getQuoteById(id: string): Promise<QuoteListResponse> {
    return this.request<QuoteListResponse>(`/quote/${id}`);
  }

  /**
   * Fetches a list of chapters.
   * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
   * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of chapters.
   */
  async getChapters(options?: RequestOptions): Promise<ChapterListResponse> {
    return this.request<ChapterListResponse>("/chapter", options);
  }

  /**
   * Fetches a chapter by its ID.
   * @param {string} id - The chapter ID.
   * @returns {Promise<ChapterListResponse>} - A promise that resolves with the chapter information.
   */
  async getChapterById(id: string): Promise<ChapterListResponse> {
    return this.request<ChapterListResponse>(`/chapter/${id}`);
  }
}

export default LOTRSDK;
