import { BookListResponse, ChapterListResponse, CharacterListResponse, MovieListResponse, QuoteListResponse, RequestOptions } from "./interfaces";
declare class LOTRSDK {
    private apiKey;
    private baseUrl;
    /**
     * Creates an instance of the LOTRSDK.
     * @param {string} apiKey - Your API key.
     */
    constructor(apiKey: string);
    /**
     * A reusable method to make API requests with error handling and request options.
     * @template T - The expected response type.
     * @param {string} path - The API endpoint path.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<T>} - A promise that resolves with the API response.
     * @throws Will throw an error if the API request fails.
     */
    private request;
    /**
     * Fetches a list of movies.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<MovieListResponse>} - A promise that resolves with the list of movies.
     */
    getMovies(options?: RequestOptions): Promise<MovieListResponse>;
    /**
     * Fetches a movie by its ID.
     * @param {string} id - The movie ID.
     * @returns {Promise<MovieListResponse>} - A promise that resolves with the movie information.
     */
    getMovieById(id: string): Promise<MovieListResponse>;
    /**
     * Fetches the quotes for a movie by its ID.
     * @param {string} id - The movie ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of movie quotes.
     */
    getMovieQuotes(id: string, options?: RequestOptions): Promise<QuoteListResponse>;
    /**
     * Fetches a list of characters.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<CharacterListResponse>} - A promise that resolves with the list of characters.
     */
    getCharacters(options?: RequestOptions): Promise<CharacterListResponse>;
    /**
     * Fetches a character by its ID.
     * @param {string} id - The character ID.
     * @returns {Promise<CharacterListResponse>} - A promise that resolves with the character information.
     */
    getCharacterById(id: string): Promise<CharacterListResponse>;
    /**
     * Fetches the quotes for a character by its ID.
     * @param {string} id - The character ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of character quotes.
     */
    getCharacterQuotes(id: string, options?: RequestOptions): Promise<QuoteListResponse>;
    /**
     * Fetches a list of books.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<BookListResponse>} - A promise that resolves with the list of books.
     */
    getBooks(options?: RequestOptions): Promise<BookListResponse>;
    /**
     * Fetches a book by its ID.
     * @param {string} id - The book ID.
     * @returns {Promise<BookListResponse>} - A promise that resolves with the book information.
     */
    getBookById(id: string): Promise<BookListResponse>;
    /**
     * Fetches the chapters for a book by its ID.
     * @param {string} id - The book ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of book chapters.
     */
    getBookChapters(id: string, options?: RequestOptions): Promise<ChapterListResponse>;
    /**
     * Fetches a list of quotes.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of quotes.
     */
    getQuotes(options?: RequestOptions): Promise<QuoteListResponse>;
    /**
     * Fetches a quote by its ID.
     * @param {string} id - The quote ID.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the quote information.
     */
    getQuoteById(id: string): Promise<QuoteListResponse>;
    /**
     * Fetches a list of chapters.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of chapters.
     */
    getChapters(options?: RequestOptions): Promise<ChapterListResponse>;
    /**
     * Fetches a chapter by its ID.
     * @param {string} id - The chapter ID.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the chapter information.
     */
    getChapterById(id: string): Promise<ChapterListResponse>;
}
export default LOTRSDK;
